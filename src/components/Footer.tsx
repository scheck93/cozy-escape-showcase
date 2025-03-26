
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-hms-dark-green text-white pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo and Intro */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/de01b22f-72e4-4744-97bf-3574aca15c3a.png" 
              alt="Home Made Suites Logo" 
              className="h-16 invert"
            />
            <p className="text-gray-300 max-w-xs">
              Discover our cozy retreats designed with comfort and style in mind, making your stay feel just like home.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-medium mb-5">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/listing/mountain-retreat" 
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Mountain Retreat
                </Link>
              </li>
              <li>
                <Link 
                  to="/listing/urban-loft" 
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Urban Loft
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <a 
                  href="https://www.airbnb.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Book on Airbnb
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-medium mb-5">Contact Information</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={18} className="mt-1 mr-3 flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mt-1 mr-3 flex-shrink-0" />
                <a 
                  href="mailto:info@homemadesuites.com" 
                  className="hover:underline transition-all duration-300"
                >
                  info@homemadesuites.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mt-1 mr-3 flex-shrink-0" />
                <span>Multiple locations - see individual listings</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Home Made Suites. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a 
              href="https://www.airbnb.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
            >
              Find us on Airbnb
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
