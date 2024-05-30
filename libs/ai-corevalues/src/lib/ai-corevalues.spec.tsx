import { render } from '@testing-library/react';

import AiCorevalues from './ai-corevalues';

describe('AiCorevalues', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AiCorevalues />);
    expect(baseElement).toBeTruthy();
  });
});
