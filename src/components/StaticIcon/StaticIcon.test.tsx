import React from 'react';
import { render, cleanup } from '@testing-library/react';
import StaticIcon from './StaticIcon';

const testId = 'icon-id';

const setup = () => render(<StaticIcon name="user" testId={testId} />);

describe('Icon test suite', () => {
  afterEach(cleanup);

  test('Render icon', async () => {
    const { findByTestId } = setup();
    const icon = await findByTestId(testId);
    expect(icon).toBeTruthy();
  });
});
