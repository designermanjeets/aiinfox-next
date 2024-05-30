import { render } from '@testing-library/react';

import AiOurjournal from './ai-ourjournal';

describe('AiOurjournal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AiOurjournal />);
    expect(baseElement).toBeTruthy();
  });
});
