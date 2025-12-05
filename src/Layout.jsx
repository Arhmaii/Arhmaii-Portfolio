import React, { useEffect, useMemo, useState } from 'react';
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Languages } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const Layout = () => {
  const { lang, toggleLang } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const [activeSection, setActiveSection] = useState('about');

  const sectionItems = useMemo(() => ([
    { key: 'about', label: lang === 'zh' ? '关于我' : 'About', target: 'about' },
    { key: 'services', label: lang === 'zh' ? '核心服务' : 'Services', target: 'services' },
    { key: 'advantage', label: lang === 'zh' ? '专业优势' : 'Advantage', target: 'advantage' },
    { key: 'value', label: lang === 'zh' ? '价值承诺' : 'Value', target: 'value' },
    { key: 'contact', label: lang === 'zh' ? '联系合作' : 'Contact', target: 'contact' },
  ]), [lang]);

  const navLinkClasses = ({ isActive }) =>
    isActive
      ? 'text-blue-600 font-bold border-b-2 border-blue-600 py-5 text-sm'
      : 'text-slate-600 hover:text-blue-600 transition-colors font-medium text-sm';

  const breadcrumbs = {
    '/': lang === 'zh' ? ['首页'] : ['Home'],
    '/cases': lang === 'zh' ? ['首页', '客户案例'] : ['Home', 'Case Studies'],
  };

  const trail = breadcrumbs[location.pathname] || (lang === 'zh' ? ['首页'] : ['Home']);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Scroll spy for home sections
  useEffect(() => {
    if (!isHome) return;
    const ids = sectionItems.map((item) => item.target);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      { threshold: [0.2, 0.4, 0.6], rootMargin: '-10% 0px -30% 0px' }
    );

    const timeout = setTimeout(() => {
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    }, 0);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [isHome, sectionItems]);

  // Handle cross-route scroll requests
  useEffect(() => {
    if (isHome && location.state?.scrollTo) {
      const target = location.state.scrollTo;
      const timer = setTimeout(() => scrollToSection(target), 50);
      navigate(location.pathname, { replace: true, state: {} });
      return () => clearTimeout(timer);
    }
  }, [isHome, location.pathname, location.state, navigate]);

  const sectionButtonClass = (key) =>
    `${activeSection === key && isHome ? 'text-blue-600 font-bold border-b-2 border-blue-600 py-5' : 'text-slate-600 hover:text-blue-600'} transition-colors font-medium text-sm`;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-600 selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
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
              {sectionItems.map((item) =>
                isHome ? (
                  <button
                    key={item.key}
                    onClick={() => scrollToSection(item.target)}
                    className={sectionButtonClass(item.key)}
                  >
                    {item.label}
                  </button>
                ) : (
                  <button
                    key={item.key}
                    onClick={() => navigate('/', { state: { scrollTo: item.target } })}
                    className="text-slate-600 hover:text-blue-600 transition-colors font-medium text-sm"
                  >
                    {item.label}
                  </button>
                )
              )}
              <NavLink to="/cases" className={navLinkClasses}>
                {lang === 'zh' ? '客户案例' : 'Case Studies'}
              </NavLink>
              <button
                onClick={toggleLang}
                className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
              >
                <Languages size={14} />
                <span>{lang === 'zh' ? 'EN' : '中'}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="pt-20 pb-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-slate-500 flex items-center gap-2">
          {trail.map((item, idx) => (
            <React.Fragment key={idx}>
              {idx > 0 && <span className="text-slate-400">/</span>}
              {idx === 0 ? (
                <Link to="/" className="hover:text-blue-600 font-medium">
                  {item}
                </Link>
              ) : (
                <span className="text-slate-700 font-semibold">{item}</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Layout;
