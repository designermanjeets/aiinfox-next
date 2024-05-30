import { render } from '@testing-library/react';

import AiHero from './ai-hero';

describe('AiHero', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AiHero />);
    expect(baseElement).toBeTruthy();
  });
});
