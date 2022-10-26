import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import SideBar from './SideBar';

const setup = (props: any = null) => render(<SideBar {...props} />);

test('sidebar renders', async () => {
  const testId = 'sidebar-test';
  const component = setup({ testId, isOpen: true });
  const sideBar = await component.findByTestId(testId);
  expect(sideBar).toBeTruthy();
});

test('sidebar node label renders', async () => {
  const testId = 'sidebar-node-test';
  const label = 'label-test';
  const component = setup({ testId, label });
  const sideBarNode = await component.findByTestId(testId);
  expect(sideBarNode.textContent).toContain(label);
});

test('sidebar is hidden', async () => {
  const testId = 'sidebar-test';
  const component = setup({ testId, isOpen: false });
  const sideBar = await component.findByTestId(testId);
  expect(sideBar).toHaveClass('hidden');
});
