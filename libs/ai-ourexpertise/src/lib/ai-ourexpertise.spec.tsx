import { render } from '@testing-library/react';

import AiOurexpertise from './ai-ourexpertise';

describe('AiOurexpertise', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AiOurexpertise />);
    expect(baseElement).toBeTruthy();
  });
});
