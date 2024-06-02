import { render } from '@testing-library/react';

import Aboutus from './aboutus';

describe('Aboutus', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Aboutus />);
    expect(baseElement).toBeTruthy();
  });
});
