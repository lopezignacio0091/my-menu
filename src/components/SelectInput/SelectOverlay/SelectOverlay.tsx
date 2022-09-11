import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Dropdown, DropdownRow, DropdownWrapper } from "./styles";
import {
  InputPositionType,
  OVERLAY_MAX_HEIGHT,
  SelectOverlayProps,
} from "./types";

const SelectOverlay: React.FC<SelectOverlayProps> = (props) => {
  const {
    target,
    isOpen,
    onSelection,
    setIsOpen,
    options,
    keyProperty,
    showProperty,
    inputValue,
    targetHeight = 0,
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
        event.target.getAttribute("about") !== "day" &&
        !["svg", "path"].includes(event.target.tagName)
      ) {
        setIsOpen(false);
      }
    },
    [setIsOpen]
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
    const top =
      bottomSpace > OVERLAY_MAX_HEIGHT || bottomSpace > upperSpace
        ? targetHeight + 4
        : -OVERLAY_MAX_HEIGHT;

    return {
      top,
    };
  }, [parentRect, targetHeight]);

  const handleChange = useCallback(
    (valueChange: string) => () => {
      onSelection(valueChange);
      setIsOpen(false);
    },
    [onSelection, setIsOpen]
  );

  return (
    <Dropdown
      ref={divRef}
      isVisible={isOpen}
      top={position.top}
      width={parentRect.width}
      data-testid="dropdown-overlay"
    >
      <DropdownWrapper>
        {options?.map((option) => (
          <DropdownRow
            width={parentRect.width}
            key={option[keyProperty]}
            id={option[keyProperty]}
            isActive={option[keyProperty] === inputValue}
            onClick={handleChange(option)}
          >
            {option[showProperty]}
          </DropdownRow>
        ))}
      </DropdownWrapper>
    </Dropdown>
  );
};

export default SelectOverlay;
