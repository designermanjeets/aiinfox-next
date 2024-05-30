import { render } from '@testing-library/react';

import AiMissionvision from './ai-missionvision';

describe('AiMissionvision', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AiMissionvision />);
    expect(baseElement).toBeTruthy();
  });
});
