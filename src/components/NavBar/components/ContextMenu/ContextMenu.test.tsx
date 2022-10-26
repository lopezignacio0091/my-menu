import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContextMenu from './ContextMenu';

const setup = (props: any = null) => render(<ContextMenu {...props} />);

test('ContextMenu renders', async () => {
  const testId = 'context-menu-test';
  const onClose = jest.fn();
  const component = setup({ testId, contextMenu: [], onClose });
  const contextMenu = await component.findByTestId(testId);
  expect(contextMenu).toBeTruthy();
});

test('ContextMenu item action onclick', async () => {
  const testId = 'context-menu-test';
  const onClose = jest.fn();
  const onClick = jest.fn();
  const contextMenuList = [{ label: 'test', action: onClick }];

  const component = setup({ testId, contextMenu: contextMenuList, onClose });
  const contextMenu = await component.findByTestId(testId);
  const button = contextMenu.querySelector('#cm-item-test');

  fireEvent.click(button);
  expect(onClick).toBeCalledTimes(1);
});

test('ContextMenu onclose called', async () => {
  const testId = 'context-menu-test';
  const onClose = jest.fn();
  const onClick = jest.fn();
  const contextMenuList = [{ label: 'test', action: onClick }];

  const component = setup({ testId, contextMenu: contextMenuList, onClose });
  const contextMenu = await component.findByTestId(testId);
  const button = contextMenu.querySelector('#cm-item-test');

  fireEvent.click(button);
  expect(onClose).toBeCalledTimes(1);
});

test('ContextMenu is hidden', async () => {
  const testId = 'context-menu-test';
  const onClose = jest.fn();
  const onClick = jest.fn();
  const contextMenuList = [{ label: 'test', action: onClick }];

  const component = setup({
    testId,
    contextMenu: contextMenuList,
    onClose,
    isOpen: false,
  });
  const contextMenu = await component.findByTestId(testId);

  expect(contextMenu).toHaveClass('hidden', { exact: false });
});
