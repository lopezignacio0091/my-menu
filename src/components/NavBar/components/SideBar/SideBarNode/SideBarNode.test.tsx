import { fireEvent, render } from '@testing-library/react';
import SideBarNode from './SideBarNode';

const setup = (props: any = null) => render(<SideBarNode {...props} />);

test('sidebar node renders', async () => {
  const testId = 'sidebar-node-test';
  const component = setup({ testId });
  const sideBarNode = await component.findByTestId(testId);
  expect(sideBarNode).toBeTruthy();
});

test('sidebar node label renders', async () => {
  const testId = 'sidebar-node-test';
  const label = 'label-test';
  const component = setup({ testId, label });
  const sideBarNode = await component.findByTestId(testId);
  expect(sideBarNode.textContent).toContain(label);
});

test('sidebar node on click', async () => {
  const testId = 'sidebar-node-test';
  const action = jest.fn();
  const component = setup({ testId, action });
  const sideBarNode = await component.findByTestId(testId);
  const node = sideBarNode.querySelector('.node');

  fireEvent.click(node);
  expect(action).toBeCalledTimes(1);
});
