import { fireEvent, render } from '@testing-library/react';
import NavBar from './NavBar';

const setup = (props: any = null) => render(<NavBar {...props} />);

test('navbar renders', async () => {
  const testId = 'navbar-test';
  const t = jest.fn();
  const component = setup({ testId, t });
  const navBar = await component.findByTestId(testId);
  expect(navBar).toBeTruthy();
});

test('logo on click', async () => {
  const testId = 'navbar-test';
  const t = jest.fn();
  const logoOnClick = jest.fn();
  const component = setup({ testId, t, logoOnClick });
  const navBar = await component.findByTestId(testId);

  const logo = navBar.children[1];
  fireEvent.click(logo);

  expect(logoOnClick).toHaveBeenCalledTimes(1);
});

test('menu button click', async () => {
  const testId = 'navbar-test';
  const t = jest.fn();
  const showSideBar = jest.fn();
  const component = setup({ testId, t, showSideBar });
  const navBar = await component.findByTestId(testId);

  const menuButton = navBar.querySelector('.navIcon>div');
  fireEvent.click(menuButton);

  expect(showSideBar).toHaveBeenCalledTimes(1);
});
