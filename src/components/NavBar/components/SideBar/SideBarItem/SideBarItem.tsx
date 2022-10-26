import React, { useCallback, useEffect } from 'react';
import { SidebarItemContainer } from './styles';
import { SideBarItemProps } from './types';
import { matchRoutes, useLocation, useNavigate } from 'react-router-dom';

export const SideBarItem: React.FC<SideBarItemProps> = ({
  testId,
  action,
  label,
  onClose,
  selectNode,
  path,
  history,
  opened,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const active = location?.pathname.startsWith(path);
  
  const onClick = useCallback(() => {
    if (selectNode) selectNode();
    if (onClose) onClose();

    if (action) {
      action();
    } else if (path && history) {
      navigate(path);
    }
  }, [selectNode, onClose, action, path, history, navigate]);

  useEffect(() => {
    const { pathname } = location || { pathname: '' };
    if (pathname.startsWith(path) && !opened) {
      selectNode();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history, path]);

  return (
    <SidebarItemContainer active={active} data-testid={testId} onClick={onClick}>
      {label}
    </SidebarItemContainer>
  );
};

export default SideBarItem;
