import { render } from '@testing-library/react';

import Home from '../../pages';

describe('Home page', () => {
  it('renders correctly', () => {
    const { getByText, getByAltText } = render(<Home />);

    expect(getByText('Olá, Dev!')).toBeInTheDocument();
    expect(getByAltText('Home image')).toBeInTheDocument();
  });
});
