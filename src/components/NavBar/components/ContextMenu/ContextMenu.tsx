import React, { MouseEvent, MouseEventHandler, useCallback } from "react";
import BasicIcon from "../../../BasicIcon/BasicIcon";
import { ID } from "../../../utils/arrays";
import {
  ContextInfoBox,
  ContextInfoContainer,
  ContextInfoLabel,
  ContextInfoSubLabel,
  ContextItemBox,
  ContextItemLabel,
  ContextMenuBox,
  ContextMenuContainer,
} from "./styles";
import { ContextMenuItem, ContextMenuProps } from "./types";

export const normalizeLabel = (label: string) =>
  label.toLocaleLowerCase().trim().replace(" ", "_");

export const ContextMenu: React.FC<ContextMenuProps> = ({
  contextMenu,
  isOpen,
  testId,
  onClose,
}) => {
  const onClick = useCallback(
    (action: MouseEventHandler<HTMLDivElement>) =>
      (event: MouseEvent<HTMLDivElement>) => {
        onClose();
        action(event);
      },
    [onClose]
  );

  const renderContent = useCallback(
    (
      { label, subLabel, action, iconName, highlighted }: ContextMenuItem,
      index: number
    ) => (
      <>
        {index === 0 ? (
          <ContextInfoBox key={index}>
            {iconName && <BasicIcon name={iconName} />}
            <ContextInfoContainer>
              <ContextInfoLabel>{label}</ContextInfoLabel>
              <ContextInfoSubLabel highlighted={highlighted}>
                {subLabel}
              </ContextInfoSubLabel>
            </ContextInfoContainer>
          </ContextInfoBox>
        ) : (
          <ContextItemBox
            key={ID()}
            onClick={onClick(action)}
            id={`cm-item-${normalizeLabel(label)}`}
          >
            {iconName && <BasicIcon name={iconName} />}
            <ContextItemLabel>{label}</ContextItemLabel>
          </ContextItemBox>
        )}
      </>
    ),
    [onClick]
  );

  return (
    <ContextMenuContainer isOpen={isOpen} data-testid={testId}>
      <ContextMenuBox>
        {contextMenu.map((contextItem: ContextMenuItem, index) => (
          <React.Fragment  key={index}>{!contextItem.hidden && renderContent(contextItem, index)}</React.Fragment>
        ))}
      </ContextMenuBox>
    </ContextMenuContainer>
  );
};

export default ContextMenu;
