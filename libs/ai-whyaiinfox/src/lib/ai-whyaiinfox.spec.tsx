import { render } from '@testing-library/react';

import AiWhyaiinfox from './ai-whyaiinfox';

describe('AiWhyaiinfox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AiWhyaiinfox />);
    expect(baseElement).toBeTruthy();
  });
});
