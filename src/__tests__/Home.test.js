import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';;
import Home from '../Components/Home';


    it('should render the home page', () => {
        render(<Home />)
        expect(screen.getByTitle("title")).toBeInTheDocument();
        expect(screen.getByTitle("title")).toHaveTextContent("Hotel Management System");
    })
    it('should render header page', () => {
        render(<Home />)
        expect(screen.getByTitle("pageTitle")).toBeInTheDocument();
        expect(screen.getByTitle("pageTitle")).toHaveTextContent("Hotel List");
    });
    
