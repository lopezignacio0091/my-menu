/* eslint-disable no-nested-ternary */
import React, {
  useState,
  useCallback,
  useMemo,
  useRef,
  useEffect,
} from "react";
import { KEY_CODE, SelectProps } from "./types";
import DropDown from "./components/DropDown/DropDown";
import { ID } from "../utils/arrays";
import Input from "../Input/Input";
import { ArrowContainer } from "./styles";
import BasicIcon from "../BasicIcon/BasicIcon";

const Select: React.FC<SelectProps> = (props) => {
  const {
    meta,
    highlightedIndex,
    options,
    size,
    variant = "underline",
    readOnly,
    disabled,
    isOpen,
    input,
    dropDownOnly,
    inputRef,
    isLoading,
    overlayPosition = "auto",
    expand,
    setHighlightedIndex,
    onSelection,
  } = props;
  const chevronRef = useRef<HTMLDivElement>(null);
  const scrollRef: React.Ref<HTMLInputElement> = useRef(null);
  const hasError = useMemo(() => meta && meta.invalid && meta.touched, [meta]);
  const [generatedId] = useState(ID());
  const [borderIndexes, setBorderIndexes] = useState({ first: 0, last: 3 });

  const onKeyPress = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) =>  {
      switch (event.keyCode) {
        case KEY_CODE.ArrowUp:
          event.preventDefault();
          if (highlightedIndex.index > 0) {
            const newIndex = highlightedIndex.index - 1;
            setHighlightedIndex({
              index: newIndex,
              id: highlightedIndex.id,
            });
            if (newIndex === borderIndexes.first && newIndex > 0) {
              scrollRef.current?.scroll({
                top: scrollRef.current.scrollTop - 32,
                behavior: "auto",
              });
              setBorderIndexes({
                first: borderIndexes.first - 1,
                last: borderIndexes.last - 1,
              });
            }
          }
          break;
        case KEY_CODE.ArrowDown:
          event.preventDefault();
          if (highlightedIndex.index < options.length - 1) {
            const newIndex = highlightedIndex.index + 1;
            setHighlightedIndex({
              index: newIndex,
              id: highlightedIndex.id,
            });
            if (
              newIndex === borderIndexes.last &&
              newIndex < options.length - 1
            ) {
              scrollRef.current?.scroll({
                top: scrollRef.current.scrollTop + 32,
                behavior: "auto",
              });
              setBorderIndexes({
                first: borderIndexes.first + 1,
                last: borderIndexes.last + 1,
              });
            }
          }
          break;
        case KEY_CODE.Enter:
          event.preventDefault();
          onSelection(options[highlightedIndex.index]);
          setTimeout(() => inputRef.current.blur()); // Horrible
          break;

        default:
          break;
      }
    },
    [
      highlightedIndex,
      options,
      onSelection,
      setHighlightedIndex,
      borderIndexes,
      inputRef,
    ]
  );

  const inputSize = useMemo(() => {
    if (!size) return "small";
    return size || "standard";
  }, [size]);

  const inputHeight = useMemo(() => {
    const s = inputSize || "standard";
    const h = 12;
    if (variant === "top-aligned-label") return h + 20;
    return h;
  }, [inputSize, variant]);

  useEffect(() => {
    if (isOpen) {
      scrollRef.current?.scroll({
        top: 0,
        behavior: "auto",
      });
      setHighlightedIndex({ index: 0, id: "" });
      setBorderIndexes({ first: 0, last: 3 });
    }
  }, [isOpen, setHighlightedIndex]);

  const renderChevronIcon = useCallback(
    () => (
      <>
        <ArrowContainer
          about="chevron"
          onClick={!isLoading && expand}
          isOpen={isOpen}
          disabled={readOnly || disabled}
          data-testid="chevron-icon-test"
          ref={chevronRef}
        >
          <BasicIcon
            size="medium"
            name={isLoading ? "spinner" : "chevron-down"}
            color={hasError ? "red" : disabled ? "grey" : "#1E3646"}
          />
        </ArrowContainer>
      </>
    ),
    [expand, isOpen, readOnly, disabled, isLoading, hasError]
  );

  return (
    <>
      <Input
        {...props}
        id={generatedId}
        readOnly={readOnly || dropDownOnly}
        onKeyDown={onKeyPress}
        data-testid="input-test"
        rightAddOn={renderChevronIcon()}
      />
      <DropDown
        {...props}
        target={generatedId}
        inputValue={input?.value}
        targetHeight={inputHeight}
        highlightedIndex={highlightedIndex}
        setHighlightedIndex={setHighlightedIndex}
        scrollRef={scrollRef}
        overlayPosition={overlayPosition}
        chevronRef={chevronRef}
      />
    </>
  );
};

export default Select;
