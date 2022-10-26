import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";
import { CollapsibleProps, CollapsibleStatus } from "./types";
import { CollapsibleTrigger, CollapsibleContent , ArrowContainer} from "./styles";
import BasicIcon from "../BasicIcon/BasicIcon";

const Collapsible: React.FC<CollapsibleProps> = (props) => {
  const {
    children,
    open,
    startsOpen,
    onClick,
    testId,
    externalControl = false,
  } = props;
  const contentRef = useRef<HTMLDivElement | null>(null);
  const firstRenderRef = useRef(false);
  const [status, setStatus] = useState(CollapsibleStatus.Closed);

  if (React.Children.count(children) !== 2) {
    throw new Error(
      "The collapsible element must have only 2 child, the first is the toggler element and the second is the content of the toggle"
    );
  }

  const toggleCollapsible = useCallback(
    (state: CollapsibleStatus) => {
      const futureStatus =
        state === CollapsibleStatus.Opened
          ? CollapsibleStatus.Closed
          : CollapsibleStatus.Opened;

      if (!externalControl && onClick && typeof onClick === "function") {
        onClick(futureStatus === CollapsibleStatus.Opened);
      }
      if (futureStatus === CollapsibleStatus.Closed) {
        setStatus(CollapsibleStatus.Closing);
      }
      if (futureStatus === CollapsibleStatus.Opened) {
        setStatus(CollapsibleStatus.Opening);
      }
      if (contentRef.current) contentRef.current.style.height = "0px";

      setTimeout(() => {
        setStatus(futureStatus);
      }, 350);
    },
    [setStatus, onClick, externalControl]
  );

  const onTriggerClick = useCallback(() => {
    if (externalControl && onClick && typeof onClick === "function") {
      onClick(status === CollapsibleStatus.Closed);
    } else if (!externalControl) {
      toggleCollapsible(status);
    }
  }, [externalControl, onClick, status, toggleCollapsible]);

  useEffect(() => {
    if (status === CollapsibleStatus.Opening && contentRef.current) {
      contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;
    }
  }, [status]);

  useEffect(() => {
    if (startsOpen && contentRef.current) {
      setTimeout(() => {
        if (contentRef.current)
          contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;
      }, 100);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setStatus(startsOpen ? CollapsibleStatus.Opened : CollapsibleStatus.Closed);
  }, [startsOpen]);

  useEffect(() => {
    if (firstRenderRef.current && externalControl) {
      toggleCollapsible(
        open ? CollapsibleStatus.Closed : CollapsibleStatus.Opened
      );
    }
    firstRenderRef.current = true;
  }, [externalControl, open, toggleCollapsible]);

  const childrens = React.Children.map(children, (child) => child);

  return (
    <div id="collapsible-id" data-testid={testId}>
      <CollapsibleTrigger
        role="presentation"
        onClick={onTriggerClick}
        data-testid="toggle-test"
      >
        {childrens[0]}
        <div>
          <ArrowContainer
            about="chevron"
            isOpen={
              status === CollapsibleStatus.Opened ||
              status === CollapsibleStatus.Opening
            }
            data-testid="chevron-icon-test"
          >
            <BasicIcon name="chevron-down" />
          </ArrowContainer>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent
        ref={contentRef}
        data-testid="content-test"
        isClosed={status === CollapsibleStatus.Closed}
        transitioning={
          status === CollapsibleStatus.Opening ||
          status === CollapsibleStatus.Closing
        }
      >
        {childrens[1]}
      </CollapsibleContent>
    </div>
  );
};

export default Collapsible;
