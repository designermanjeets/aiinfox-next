import { render } from '@testing-library/react';

import AiAboutus from './ai-aboutus';

describe('AiAboutus', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AiAboutus />);
    expect(baseElement).toBeTruthy();
  });
});
