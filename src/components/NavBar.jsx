import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Languages, Menu, X } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const navItems = [
  { key: 'about', label: { zh: '关于我们', en: 'About' }, to: '/#about' },
  { key: 'services', label: { zh: '核心服务', en: 'Services' }, to: '/#services' },
  { key: 'advantage', label: { zh: '专业优势', en: 'Advantage' }, to: '/#advantage' },
  { key: 'value', label: { zh: '价值承诺', en: 'Value' }, to: '/#value' },
  { key: 'cases', label: { zh: '客户案例', en: 'Case Studies' }, to: '/cases' },
  { key: 'contact', label: { zh: '联系合作', en: 'Contact' }, to: '/#contact' },
];

const NavBar = () => {
  const { lang, toggleLang } = useLanguage();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const activeKey = location.pathname.startsWith('/cases') ? 'cases' : 'about';

  const linkClasses = (isActive) =>
    `text-slate-600 hover:text-blue-600 transition-colors font-medium text-sm ${
      isActive ? 'text-blue-600 font-semibold' : ''
    }`;

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => setIsMenuOpen(false)}>
            <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center text-white font-bold">H</div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-xl tracking-tight text-slate-900">
                HongYuan <span className="text-blue-600">Software</span>
              </span>
              <span className="text-xs text-slate-500">泓远软体</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.to}
                className={linkClasses(item.key === activeKey)}
              >
                {lang === 'zh' ? item.label.zh : item.label.en}
              </Link>
            ))}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
            >
              <Languages size={14} />
              <span>{lang === 'zh' ? 'EN' : '中'}</span>
            </button>
            <Link
              to="/#contact"
              className="text-white bg-slate-900 hover:bg-slate-800 px-4 py-2 rounded-lg font-semibold transition-colors text-sm"
            >
              {lang === 'zh' ? '联系合作' : 'Contact'}
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleLang}
              className="px-2 py-1 bg-slate-100 rounded text-xs font-bold border border-slate-200"
            >
              {lang === 'zh' ? 'EN' : '中'}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 hover:text-slate-900">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-4 pt-2 pb-3 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.to}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  item.key === activeKey ? 'text-blue-600 bg-slate-50' : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                {lang === 'zh' ? item.label.zh : item.label.en}
              </Link>
            ))}
            <Link
              to="/#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center px-3 py-2 rounded-md bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors"
            >
              {lang === 'zh' ? '联系合作' : 'Contact'}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
