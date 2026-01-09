import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-emerald-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
                SAC
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">St. Anthony College</h3>
                <p className="text-xs">Excellence in Education</p>
              </div>
            </div>
            <p className="text-sm">
              Empowering students to become global citizens through quality international education in the heart of Johannesburg.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
              <li><Link to="/admissions" className="hover:text-emerald-400 transition-colors">Admissions</Link></li>
              <li><Link to="/programs" className="hover:text-emerald-400 transition-colors">Programs</Link></li>
              <li><Link to="/book-tour" className="hover:text-emerald-400 transition-colors">Book a Tour</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/programs#preschool" className="hover:text-emerald-400 transition-colors">Preschool (Age 3-5)</Link></li>
              <li><Link to="/programs#primary" className="hover:text-emerald-400 transition-colors">Primary School (Grade 1-7)</Link></li>
              <li><Link to="/programs#secondary" className="hover:text-emerald-400 transition-colors">Secondary School (Grade 8-12)</Link></li>
              <li><Link to="/programs#ib" className="hover:text-emerald-400 transition-colors">IB Diploma Programme</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span>123 Education Avenue<br />Sandton, Johannesburg<br />2196, South Africa</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="flex-shrink-0" />
                <a href="tel:+27115551234" className="hover:text-emerald-400">+27 11 555 1234</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:info@stanthonycollege.co.za" className="hover:text-emerald-400">info@stanthonycollege.co.za</a>
              </li>
            </ul>

            <div className="flex gap-4 mt-6">
              <a href="#" className="hover:text-emerald-400 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-emerald-400 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-emerald-400 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-emerald-400 transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} St. Anthony College. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
