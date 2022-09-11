/* eslint-disable no-nested-ternary */
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { DropdownContainer, DropdownRow, DropdownWrapper } from "./styles";
import { InputPositionType, OVERLAY_MAX_HEIGHT, DropdownProps } from "./types";

const Dropdown: React.FC<DropdownProps> = (props) => {
  const {
    target,
    isOpen,
    onSelection,
    setIsOpen,
    setHighlightedIndex,
    highlightedIndex,
    scrollRef,
    highlightedSubString = "",
    overlayPosition = "auto",
    options,
    keyProperty,
    showProperty,
    inputValue,
    isValueObject,
    targetHeight = 0,
    chevronRef,
  } = props;
  const divRef = useRef<HTMLDivElement>(null);
  const [parentRect, setParentRect] = useState<InputPositionType>({
    width: 0,
    top: 0,
    bottom: 0,
  });

  const handleClose = useCallback(
    (event: any) => {
      if (
        !divRef.current.contains(event.target) &&
        !chevronRef?.current?.contains(event.target)
      ) {
        setIsOpen(false);
      }
    },
    [chevronRef, setIsOpen]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClose);
    } else {
      document.removeEventListener("mousedown", handleClose);
    }
    return () => document.removeEventListener("mousedown", handleClose);
  }, [handleClose, isOpen]);

  useEffect(() => {
    const parent = document.getElementById(target);
    if (parent) {
      const newRect: DOMRect = parent.getBoundingClientRect();
      setParentRect({
        width: newRect?.width,
        top: newRect?.top + window.scrollY,
        bottom: newRect?.bottom + window.scrollY,
      });
    }
  }, [target, isOpen]);

  const position = useMemo(() => {
    const html = document.documentElement;
    const height = Math.max(html.clientHeight, html.scrollHeight);
    const bottomSpace = height - parentRect?.bottom;
    const upperSpace = parentRect?.top;
    const autoPosition =
      bottomSpace > OVERLAY_MAX_HEIGHT || bottomSpace > upperSpace
        ? targetHeight + 4
        : -OVERLAY_MAX_HEIGHT;
    const top =
      overlayPosition === "top"
        ? -OVERLAY_MAX_HEIGHT
        : overlayPosition === "bottom"
        ? targetHeight + 4
        : autoPosition;

    return {
      top,
    };
  }, [parentRect, targetHeight, overlayPosition]);

  const handleChange = useCallback(
    (valueChange: string) => () => {
      onSelection(valueChange);
      setIsOpen(false);
    },
    [onSelection, setIsOpen]
  );

  const handleHover = useCallback(
    (valueChange: string, index: number) => () => {
      setHighlightedIndex({
        index,
        id: valueChange,
      });
    },
    [setHighlightedIndex]
  );

  const renderRow = useCallback(
    (option: any, index: number) => {
      const [first, ...others] = option[showProperty]
        .toLowerCase()
        .split(highlightedSubString.toLowerCase());

      return (
        <DropdownRow
          key={option[keyProperty]}
          id={option[keyProperty]}
          isActive={
            isValueObject
              ? option[keyProperty] === inputValue[keyProperty]
              : option[keyProperty] === inputValue
          }
          isHighlighted={highlightedIndex.index === index}
          onMouseDown={handleChange(option)}
          onMouseEnter={handleHover(option, index)}
        >
          {highlightedSubString ? (
            <>
              {first && <p>{first}</p>}
              <b>{highlightedSubString}</b>
              <p>
                {others[0].charAt(0) === " " && <span>&nbsp;</span>}
                {others.join(highlightedSubString.toLowerCase())}
              </p>
            </>
          ) : (
            <>{option[showProperty]}</>
          )}
        </DropdownRow>
      );
    },
    [
      handleChange,
      handleHover,
      highlightedIndex,
      highlightedSubString,
      inputValue,
      isValueObject,
      keyProperty,
      showProperty,
    ]
  );

  return (
    <DropdownContainer
      ref={divRef}
      isVisible={isOpen}
      top={position.top}
      width={parentRect.width}
      data-testid="dropdown-overlay"
    >
      <DropdownWrapper ref={scrollRef}>
        {options?.map((option, index) => renderRow(option, index))}
      </DropdownWrapper>
    </DropdownContainer>
  );
};

export default Dropdown;
