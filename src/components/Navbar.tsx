
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-apple ${
        scrolled 
          ? 'bg-white bg-opacity-95 backdrop-blur-sm shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 md:px-10 flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center space-x-2"
          aria-label="Home Made Suites - Home"
        >
          <img 
            src="/images/logo.png" 
            alt="Home Made Suites Logo" 
            className="h-10 md:h-12"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" label="Home" />
          <NavLink to="/listing/mountain-retreat" label="West Point Apt 1" />
          <NavLink to="/listing/urban-loft" label="West Point Apt 2" />
          <NavLink to="/contact" label="Contact & Booking" />
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center text-hms-dark-green p-2"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white bg-opacity-95 backdrop-blur-sm shadow-md transition-all duration-300 ease-apple overflow-hidden ${
          isOpen ? 'max-h-96 border-t border-gray-100' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col px-6 py-4 space-y-4">
          <NavLink to="/" label="Home" mobile />
          <NavLink to="/listing/mountain-retreat" label="West Point Apt #1" mobile />
          <NavLink to="/listing/urban-loft" label="West Point Apt #2" mobile />
          <NavLink to="/contact" label="Contact" mobile />
        </nav>
      </div>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
  mobile?: boolean;
}

const NavLink = ({ to, label, mobile = false }: NavLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === to || 
                  (to !== '/' && location.pathname.startsWith(to));

  return (
    <Link
      to={to}
      className={`
        transition-all duration-300 ease-apple
        ${mobile ? 'text-lg' : 'text-base'}
        ${isActive
          ? 'text-hms-dark-green font-medium'
          : 'text-gray-700 hover:text-hms-medium-green'
        }
      `}
    >
      {label}
      <span 
        className={`block mt-1 h-0.5 bg-hms-medium-green transition-all duration-300 ease-apple ${
          isActive ? 'w-full opacity-100' : 'w-0 opacity-0'
        }`} 
      />
    </Link>
  );
};

export default Navbar;
