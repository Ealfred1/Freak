
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, Twitter, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-transparent py-4 px-6 flex items-center justify-between border-b border-ben10/20">
      <Link to="/" className="text-ben10 font-extrabold text-4xl tracking-wider">$FREAK</Link>
      
      {/* Mobile menu button */}
      <button 
        className="md:hidden text-ben10 p-2"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      {/* Desktop menu */}
      <div className="hidden md:flex items-center space-x-8">
        <Link to="/" className="text-white tracking-wide text-2xl font-semibold hover:text-ben10 transition-colors">Home</Link>
        <Link to="/about" className="text-white tracking-wide text-2xl font-semibold hover:text-ben10 transition-colors">About</Link>
        <Link to="/tokenomics" className="text-white tracking-wide text-2xl font-semibold hover:text-ben10 transition-colors">Tokenomics</Link>
        <Link to="/roadmap" className="text-white tracking-wide text-2xl font-semibold hover:text-ben10 transition-colors">Roadmap</Link>
      </div>
      
      {/* Desktop social/buy */}
      <div className="hidden md:flex items-center space-x-4">
        <a href="https://t.me/freakcoin" target="_blank" rel="noopener noreferrer" 
          className="hoverable-icon p-3">
          <Send size={20} className="text-white" />
        </a>
        <a href="https://twitter.com/freakcoin" target="_blank" rel="noopener noreferrer"
          className="hoverable-icon p-3">
          <Twitter size={20} className="text-white" />
        </a>
        <Link to="/buy" 
          className="buy-button font2">
          BUY $FREAK
        </Link>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-ben10-background border-b border-ben10/20 py-4 md:hidden">
          <div className="flex flex-col space-y-4 px-6">
            <Link to="/" className="text-white tracking-wide text-2xl font-semibold hover:text-ben10 transition-colors" onClick={toggleMenu}>Home</Link>
            <Link to="/about" className="text-white tracking-wide text-2xl font-semibold hover:text-ben10 transition-colors" onClick={toggleMenu}>About</Link>
            <Link to="/tokenomics" className="text-white tracking-wide text-2xl font-semibold hover:text-ben10 transition-colors" onClick={toggleMenu}>Tokenomics</Link>
            <Link to="/roadmap" className="text-white tracking-wide text-2xl font-semibold hover:text-ben10 transition-colors" onClick={toggleMenu}>Roadmap</Link>
            
            <div className="flex items-center space-x-4 pt-2">
              <a href="https://t.me/freakcoin" target="_blank" rel="noopener noreferrer" 
                className="hoverable-icon p-3">
                <Send size={20} className="text-white" />
              </a>
              <a href="https://twitter.com/freakcoin" target="_blank" rel="noopener noreferrer"
                className="hoverable-icon p-3">
                <Twitter size={20} className="text-white" />
              </a>
              <Link to="/buy" className="buy-button" onClick={toggleMenu}>
                BUY $FREAK
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
