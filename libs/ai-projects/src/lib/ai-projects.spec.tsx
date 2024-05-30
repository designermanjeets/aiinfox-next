import { render } from '@testing-library/react';

import AiProjects from './ai-projects';

describe('AiProjects', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AiProjects />);
    expect(baseElement).toBeTruthy();
  });
});
