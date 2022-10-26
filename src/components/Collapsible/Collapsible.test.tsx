import React from 'react';
import { render } from '@testing-library/react';
import Collapsible from './Collapsible';

const testId = 'collapsible-test';
const setUp = (props: any = null) =>
  render(
    <Collapsible {...props}>
      <div>Toggle</div>
      <div>Content</div>
    </Collapsible>,
  );

describe('Collapsible suite', () => {
  test('Collapsible renders', async () => {
    const component = setUp({ testId });
    const collapsible = await component.findByTestId(testId);
    expect(collapsible).toBeTruthy();
  });
  test('execute onClick', async () => {
    const onClick = jest.fn();
    const component = setUp({ onClick, startsOpen: false });
    const toggle = await component.findByTestId('toggle-test');
    toggle.click();
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
