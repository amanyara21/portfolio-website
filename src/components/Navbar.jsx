import { useState } from "react";
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="w-11/12 px-4 absolute top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 z-50 border-white border-2 rounded-xl">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Aman Kumar</h1>
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} color="#ffffff" /> : <Menu size={24} color="#ffffff" />}
          </button>
        </div>

        <ul className="hidden md:flex gap-6 text-white font-medium">
          {links.map(link => (
            <li key={link.name} className="hover:text-blue-300 cursor-pointer transition">
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>

      </div>

      {isOpen && (
        <ul className="md:hidden px-4 pb-4 shadow-md">
          {links.map(link => (
            <li key={link.name} className="py-2 text-white border-b border-white hover:text-blue-300 cursor-pointer transition">
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      )}

    </nav>
  );
}
export default Navbar