import { fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SideBarItem from './SideBarItem';

const setup = (props: any = null) =>
  render(
    <MemoryRouter>
      <SideBarItem {...props} />
    </MemoryRouter>,
  );

test('sidebar item renders', async () => {
  const testId = 'sidebar-item-test';
  const component = setup({ testId });
  const sideBarItem = await component.findByTestId(testId);
  expect(sideBarItem).toBeTruthy();
});

test('sidebar item label renders', async () => {
  const testId = 'sidebar-item-test';
  const label = 'label-test';
  const component = setup({ testId, label });
  const sideBarItem = await component.findByTestId(testId);
  expect(sideBarItem.textContent).toContain(label);
});

test('sidebar node on click', async () => {
  const testId = 'sidebar-item-test';
  const action = jest.fn();
  const onClose = jest.fn();
  const selectNode = jest.fn();
  const selectItem = jest.fn();
  const component = setup({ testId, action, onClose, selectNode, selectItem });
  const sideBarItem = await component.findByTestId(testId);

  fireEvent.click(sideBarItem);
  expect(action).toBeCalledTimes(1);
  expect(onClose).toBeCalledTimes(1);
  expect(selectNode).toBeCalledTimes(1);
  expect(selectItem).toBeCalledTimes(1);
});
