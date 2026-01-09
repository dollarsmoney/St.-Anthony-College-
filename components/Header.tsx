import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Programs', path: '/programs' },
    { name: 'Book a Tour', path: '/book-tour' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="bg-emerald-800 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center gap-6 text-sm">
          <a href="tel:+27115551234" className="flex items-center gap-2 hover:text-emerald-200">
            <Phone size={16} />
            <span className="hidden sm:inline">+27 11 555 1234</span>
          </a>
          <a href="mailto:info@stanthonycollege.co.za" className="flex items-center gap-2 hover:text-emerald-200">
            <Mail size={16} />
            <span className="hidden sm:inline">info@stanthonycollege.co.za</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-emerald-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
              SAC
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">St. Anthony College</h1>
              <p className="text-xs text-gray-600">Excellence in Education</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-emerald-700 border-b-2 border-emerald-700'
                    : 'text-gray-700 hover:text-emerald-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
  
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-700 hover:text-emerald-700"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-base font-medium py-2 transition-colors ${
                  isActive(link.path)
                    ? 'text-emerald-700 border-l-4 border-emerald-700 pl-4'
                    : 'text-gray-700 hover:text-emerald-700 pl-4'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/book-tour"
              onClick={() => setIsMenuOpen(false)}
              className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-md font-medium text-center transition-colors"
            >
              Apply Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
