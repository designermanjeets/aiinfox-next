import { render } from '@testing-library/react';

import AiShared from './ai-shared';

describe('AiShared', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AiShared />);
    expect(baseElement).toBeTruthy();
  });
});
