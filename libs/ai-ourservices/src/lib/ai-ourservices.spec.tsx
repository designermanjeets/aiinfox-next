import { render } from '@testing-library/react';

import AiOurservices from './ai-ourservices';

describe('AiOurservices', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AiOurservices />);
    expect(baseElement).toBeTruthy();
  });
});
