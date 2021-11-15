import { render, screen } from '@testing-library/react';
import { Header } from '.';

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/'
      }
    }
  }
});

describe('Header component', () => {
  it('renders correctly', () => {
    const { getByText, getByAltText, getByRole } = render(<Header />);

    screen.logTestingPlaygroundURL()

    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('Posts')).toBeInTheDocument();
    expect(getByAltText('DevNews!')).toBeInTheDocument();
    getByRole('img', { name: /devnews!/i });
    getByRole('link', { name: /home/i });
    getByRole('link', { name: /posts/i });
    getByRole('navigation');
  });
});

