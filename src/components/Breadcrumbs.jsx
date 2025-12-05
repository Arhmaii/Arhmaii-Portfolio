import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

const Breadcrumbs = () => {
  const { lang } = useLanguage();
  const location = useLocation();

  const labels = {
    home: lang === 'zh' ? '首页' : 'Home',
    cases: lang === 'zh' ? '客户案例' : 'Case Studies',
  };

  const isCases = location.pathname.startsWith('/cases');

  return (
    <div className="pt-20 pb-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-slate-500 flex items-center gap-2">
        <Link to="/" className="hover:text-blue-600 font-medium">
          {labels.home}
        </Link>
        {isCases && (
          <>
            <span className="text-slate-400">/</span>
            <span className="text-slate-700 font-semibold">{labels.cases}</span>
          </>
        )}
      </div>
    </div>
  );
};

export default Breadcrumbs;
