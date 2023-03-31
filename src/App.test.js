import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Header from './components/Header';


//still a lot to learn about testing react apps.

describe('My App', () => {
  test('renders header', () => {
    render(
      <BrowserRouter>
        <Header numberOfItems={0} toggleCart={() => {}} />
      </BrowserRouter>
    );
  
    const homeLink = screen.getByText('Home');
    const shopLink = screen.getByText('Shop');
  
    expect(homeLink).toBeInTheDocument();
    expect(shopLink).toBeInTheDocument();
  });
  
  it('should render the homepage correctly', () => {
    const { getByText } = render(<App />);
    expect(getByText('La vida es como un tronco de madera, talla tu propio camino con nuestros productos artesanales!')).toBeInTheDocument();
  });

  it('should display the correct page when a link is clicked', () => {
    const { getByText } = render(<App />);
    fireEvent.click(getByText('Shop'));
    expect(getByText('¡Encuentra lo que estás buscando entre nuestros artículos hecho a mano!')).toBeInTheDocument();
  });

  test('clicking a link navigates to a new route', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/shop/i);
    fireEvent.click(linkElement);
    expect(window.location.pathname).toBe('/shop');
  });
  
});

