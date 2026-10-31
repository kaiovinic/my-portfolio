import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Nav from '../Components/Nav';

// Mock react-scroll to prevent issues in the test environment
jest.mock('react-scroll', () => ({
  Link: ({ children, to, onClick }: any) => (
    <button onClick={onClick} data-testid={`scroll-link-${to}`}>
      {children}
    </button>
  ),
}));

// Mock Heroicons to simplify test output
jest.mock('@heroicons/react/24/solid', () => ({
  Bars3Icon: () => <div data-testid="bars-icon" />,
}));

describe('Nav Component', () => {
  const mockOpenNav = jest.fn();

  beforeEach(() => {
    // Reset DOM classes
    document.documentElement.className = '';
    // Clear localStorage
    localStorage.clear();
    // Reset mock functions
    mockOpenNav.mockClear();
  });

  test('renders navigation links and logo', () => {
    render(<Nav openNav={mockOpenNav} />);
    
    expect(screen.getByText('KAIO')).toBeInTheDocument();
    expect(screen.getByText('DEV')).toBeInTheDocument();
    expect(screen.getByText('HOME')).toBeInTheDocument();
    expect(screen.getByText('SOBRE')).toBeInTheDocument();
    expect(screen.getByText('SERVIÇOS')).toBeInTheDocument();
    expect(screen.getByText('PROJETOS')).toBeInTheDocument();
    expect(screen.getByText('REDES')).toBeInTheDocument();
    expect(screen.getByText('CONTATO')).toBeInTheDocument();
  });

  test('calls openNav when mobile menu button is clicked', () => {
    render(<Nav openNav={mockOpenNav} />);
    
    const menuButton = screen.getByTestId('bars-icon').parentElement;
    expect(menuButton).toBeInTheDocument();
    if (menuButton) {
      fireEvent.click(menuButton);
    }
    expect(mockOpenNav).toHaveBeenCalledTimes(1);
  });

  test('defaults to light theme if no theme is in document/localStorage', () => {
    render(<Nav openNav={mockOpenNav} />);
    
    const toggleButton = screen.getByRole('button', { name: /Mudar para tema escuro/i });
    expect(toggleButton).toBeInTheDocument();
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  test('respects already configured dark mode on mount', () => {
    document.documentElement.classList.add('dark');
    render(<Nav openNav={mockOpenNav} />);
    
    const toggleButton = screen.getByRole('button', { name: /Mudar para tema claro/i });
    expect(toggleButton).toBeInTheDocument();
  });

  test('toggles theme correctly and stores it in localStorage', () => {
    render(<Nav openNav={mockOpenNav} />);
    
    const toggleButton = screen.getByRole('button', { name: /Mudar para tema escuro/i });
    
    // Toggle to Dark Mode
    fireEvent.click(toggleButton);
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(localStorage.getItem('theme')).toBe('dark');
    
    // The button label should update
    expect(screen.getByRole('button', { name: /Mudar para tema claro/i })).toBeInTheDocument();
    
    // Toggle back to Light Mode
    fireEvent.click(screen.getByRole('button', { name: /Mudar para tema claro/i }));
    expect(document.documentElement.classList.contains('dark')).toBe(false);
    expect(localStorage.getItem('theme')).toBe('light');
  });
});
