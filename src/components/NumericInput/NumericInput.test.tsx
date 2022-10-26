import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NumericInput from './NumericInput';

const setup = (props: any = null) => render(<NumericInput {...props} />);

const testId = 'numeric-input-id';

test('Render text input', async () => {
  const component = setup({ testId });
  const textInput = await component.findByTestId(testId);
  expect(textInput).toBeTruthy();
});

test('input has placeholder', async () => {
  const component = setup({ placeholder: 'test', testId: 'numeric-input-id' });
  const input = await component.findByTestId('numeric-input-id');
  const placeholder = input.querySelector('.label');
  expect(placeholder).toBeTruthy();
});
test('Renders Span tag if has error', async () => {
  const component = setup({
    placeholder: 'test',
    meta: { invalid: true, touched: true, error: 'test' },
    t: (value: string) => `${value}_t`,
  });
  const input = await component.findByTestId('input-test');
  expect(input).toContainHTML('<input');
});
test('Execute OnChange', async () => {
  const onChange = jest.fn();
  const component = setup({
    value: 'not-chaged-value',
    input: { onChange },
  });
  const input = await component.findByTestId('input-test');
  fireEvent.change(input, { target: { value: '123' } });
  expect(input.getAttribute('value')).toBe('123');
});
