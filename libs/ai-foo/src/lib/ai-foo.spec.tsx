import { render } from '@testing-library/react';

import AiFoo from './ai-foo';

describe('AiFoo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AiFoo />);
    expect(baseElement).toBeTruthy();
  });
});
