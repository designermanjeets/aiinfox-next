import { render } from '@testing-library/react';

import AiNavbar from './ai-navbar';

describe('AiNavbar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AiNavbar />);
    expect(baseElement).toBeTruthy();
  });
});
