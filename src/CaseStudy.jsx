import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {
  ShoppingBag,
  Leaf,
  ShieldCheck,
  Building2,
  Utensils,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Loader2,
  Send
} from 'lucide-react';
import { useLanguage } from './LanguageContext';

const CaseStudy = () => {
  const { lang } = useLanguage(); // 'zh' or 'en'
  const [activeCategory, setActiveCategory] = useState('retail');
  
  // --- AI Feature States ---
  const [aiQuery, setAiQuery] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState(null);
  
  // ⚠️ API Key Configuration
  const apiKey = ""; // Runtime environment provides key

  // --- Data ---
  const categories = [
    { id: 'retail', name: '数位零售', nameEn: 'Digital Retail', icon: <ShoppingBag size={20} /> },
    { id: 'env', name: '环境保护', nameEn: 'Environment', icon: <Leaf size={20} /> },
    { id: 'food_safety', name: '食品安全', nameEn: 'Food Safety', icon: <ShieldCheck size={20} /> },
    { id: 'mall', name: '商场管理', nameEn: 'Mall Mgmt', icon: <Building2 size={20} /> },
    { id: 'fnb', name: '智慧餐饮', nameEn: 'Smart F&B', icon: <Utensils size={20} /> }
  ];

  const cases = [
    {
      id: 1,
      category: 'retail',
      clientName: 'FamilyMart 全家便利店',
      title: '支撑 3,500+ 门店的全国性扩张',
      description: '自 2003 年起作为核心技术伙伴，支撑了其在华东及华南地区的快速扩张。从第一代 POS 到自助收银升级，确保高并发下的系统稳定性。',
      achievements: ['持续 20+ 年核心系统维护', '支持 50+ 种复杂促销逻辑', '确保总部与门店数据实时交换'],
      imageColor: 'bg-green-600'
    },
    {
      id: 2,
      category: 'retail',
      clientName: 'LAWSON 罗森',
      title: '适应多业态的云端 POS 解决方案',
      description: '针对罗森在中国市场的快速演变，定制了基于云的 POS 收银系统。单一控制程序适配桌面、移动及 Kiosk 等多种终端。',
      achievements: ['服务覆盖 4,500+ 家门店', '统一管理多种收银设备', '完美适配加盟商业务结构'],
      imageColor: 'bg-blue-600'
    },
    {
      id: 3,
      category: 'retail',
      clientName: '上海机场集团 (AVINEX)',
      title: '主要枢纽机场的商业零售管理',
      description: '为上海浦东机场（T1 & T2）提供商业零售管理支持，覆盖庞大的客流与复杂的商业场景，集成业务中间件平台。',
      achievements: ['全机场范围门店销售系统', '集成业务中间件平台', '基于 CRM 的会员管理系统'],
      imageColor: 'bg-indigo-900'
    },
    {
      id: 4,
      category: 'env',
      clientName: 'SECCO 赛科石化',
      title: '危废全生命周期数字化管理',
      description: '利用 IoT、RFID 和视频监控技术，实现从危废产生、存储、运输到处置的全链条数字化监控。',
      achievements: ['实时监控仓库与运输数据', '自动化电子联单替代人工', '石化行业数字化标杆'],
      imageColor: 'bg-teal-700'
    },
    {
      id: 5,
      category: 'env',
      clientName: '歌尔股份 (Goertek)',
      title: '合规高效的固废管理平台',
      description: '通过大数据环境监测与 IoT 传感器，为大型制造企业提供符合固废法的整体解决方案。',
      achievements: ['完全符合法规要求', '全流程可视化追踪', '自动化台账减少人力'],
      imageColor: 'bg-emerald-600'
    },
    {
      id: 6,
      category: 'food_safety',
      clientName: '智慧校园食安平台',
      title: '从农田到餐桌的每一口安心',
      description: '建立覆盖全供应链的数字监管系统。整合 IoT、AI 与大数据，确保校园食堂与食材供应商的合规与透明。',
      achievements: ['连接政府/学校/家长多级体系', 'AI 溯源采购与烹饪数据', '家长端透明查看检测报告'],
      imageColor: 'bg-orange-500'
    },
    {
      id: 7,
      category: 'mall',
      clientName: 'Park Place 越洋广场',
      title: '高端商业综合体的核心系统建设',
      description: '位于上海静安寺核心商圈。提供完整的 SC 核心系统及餐饮区管理方案，包含 100+ 台 POS 终端及后台架构。',
      achievements: ['标准化购物中心核心系统', '统一系统集成(SI)服务', 'Web集中管理降低维护成本'],
      imageColor: 'bg-slate-800'
    },
    {
      id: 8,
      category: 'mall',
      clientName: 'NITORI 宜得利家居',
      title: '大型连锁家居卖场的系统支撑',
      description: '为全球知名家居连锁品牌提供大规模系统部署支持，确保高并发交易下的稳定性与数据准确性。',
      achievements: ['支撑 90,000m² 卖场运营', '多服务器集群架构', '精细化库存与销售管理'],
      imageColor: 'bg-teal-600'
    },
    {
      id: 9,
      category: 'fnb',
      clientName: 'La Kaffa 六角国际',
      title: '全球 52 国连锁品牌的统一中台',
      description: '协助 Chatime 日出茶太母公司构建统一 POS 与中台系统，集成 UberEats 等外卖平台，适应全球化扩张。',
      achievements: ['全品牌统一 POS 系统', '集成多平台外卖订单', '智能扫码点餐提升体验'],
      imageColor: 'bg-purple-700'
    }
  ];

  // --- Logic ---
  const filteredCases = cases.filter(c => c.category === activeCategory);

  // --- Gemini API Call ---
  const handleAiConsultation = async () => {
    if (!aiQuery.trim()) return;
    setIsAiLoading(true);
    setAiResponse(null);

    try {
      // Construct prompt with case context
      const context = JSON.stringify(cases.map(c => ({ client: c.clientName, solution: c.title, details: c.description })));
      const prompt = `
        You are an expert Retail Tech Consultant for HongYuan Software (泓远软体).
        User Query: "${aiQuery}"
        
        Based on the following successful case studies from our portfolio:
        ${context}
        
        Please provide a concise, professional answer (in Chinese) that:
        1. Analyzes the user's potential pain point.
        2. Recommends a solution strategy.
        3. Cites specifically which of our cases (Client Name) is most relevant as proof.
        Keep it under 150 words.
      `;

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
      });

      const data = await response.json();
      if (data.candidates && data.candidates[0].content) {
        setAiResponse(data.candidates[0].content.parts[0].text);
      } else {
        setAiResponse("抱歉，目前服务繁忙，请稍后再试。");
      }
    } catch (error) {
      console.error("AI Error:", error);
      setAiResponse("网络连接异常，请检查您的网络设置。");
    } finally {
      setIsAiLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-600 selection:text-white">

      {/* --- Hero Section (Arhmaii Style) --- */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-slate-900 text-white">
         {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
          <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-72 h-72 bg-teal-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-900/50 border border-blue-700/50 text-blue-300 font-medium text-sm">
            Proven Track Record
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            数字化转型 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">实战案例</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            深受全球 100+ 家大型企业信赖，服务覆盖超过 20,000+ 家门店。
            我们将“混乱”转化为“系统”，助力企业从 1 到 100 的规模化扩张。
          </p>
        </div>
      </section>

      {/* --- AI Consultant Feature (New) --- */}
      <section className="relative -mt-10 z-20 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="p-1 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500"></div>
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Sparkles className="text-blue-600" size={24} />
              </div>
              <h2 className="text-xl font-bold text-slate-900">泓远软体 (HongYuan) 智能业务顾问</h2>
            </div>
            
            <p className="text-slate-600 mb-6 text-sm">
              不确定哪种方案适合您？输入您的业务痛点（例如：“连锁店库存混乱”或“如何管理食品安全”），AI 将基于我们的案例库为您推荐策略。
            </p>

            <div className="relative">
              <input 
                type="text" 
                value={aiQuery}
                onChange={(e) => setAiQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAiConsultation()}
                placeholder="在此输入您遇到的业务挑战..."
                className="w-full pl-5 pr-14 py-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all shadow-sm text-slate-800"
              />
              <button 
                onClick={handleAiConsultation}
                disabled={isAiLoading || !aiQuery.trim()}
                className="absolute right-2 top-2 bottom-2 aspect-square bg-slate-900 hover:bg-blue-600 text-white rounded-lg flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isAiLoading ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
              </button>
            </div>

            {/* AI Response Area */}
            {aiResponse && (
              <div className="mt-6 bg-slate-50 rounded-xl p-6 border border-slate-100 animate-fadeIn">
                <div className="flex gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center text-white font-bold text-xs shadow-md">AI</div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-2">咨询建议：</h4>
                    <p className="text-slate-700 leading-relaxed text-sm whitespace-pre-wrap">
                      {aiResponse}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* --- Case Studies Content --- */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${
                activeCategory === cat.id
                  ? 'bg-slate-900 text-white border-slate-900 shadow-lg transform scale-105'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:text-blue-600'
              }`}
            >
              {cat.icon}
              <span>{lang === 'zh' ? cat.name : cat.nameEn}</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCases.map((item) => (
            <div key={item.id} className="bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
              {/* Card Header */}
              <div className={`h-48 ${item.imageColor} relative p-6 flex flex-col justify-between overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors z-0"></div>
                {/* Decorative Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-0"></div>
                
                <div className="relative z-10 flex justify-between items-start">
                  <span className="bg-white/95 backdrop-blur text-slate-900 font-bold px-3 py-1 rounded text-xs shadow-sm uppercase tracking-wider">
                    {item.clientName}
                  </span>
                </div>
                
                <div className="relative z-10 text-white opacity-90 flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-sm font-medium">查看详情</span>
                  <ArrowRight size={16} />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                  {item.description}
                </p>
                
                <div className="border-t border-slate-100 pt-5 mt-auto">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Key Results</h4>
                  <ul className="space-y-2">
                    {item.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Footer (Arhmaii Style) --- */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8 text-sm">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4 text-white">
              <div className="w-6 h-6 bg-blue-700 rounded flex items-center justify-center font-bold text-xs">H</div>
              <span className="font-bold text-lg">HongYuan Software</span>
            </div>
            <p className="max-w-xs leading-relaxed mb-6">
              Connecting mature retail technology with Southeast Asian market opportunities.
            </p>
            <div className="flex gap-4 text-slate-500">
              <span className="hover:text-white cursor-pointer transition-colors">LinkedIn</span>
              <span className="hover:text-white cursor-pointer transition-colors">WeChat</span>
              <span className="hover:text-white cursor-pointer transition-colors">Email</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Menu</h4>
            <ul className="space-y-3">
              <li className="hover:text-blue-400 cursor-pointer transition-colors"><Link to="/">About Me</Link></li>
              <li className="hover:text-blue-400 cursor-pointer transition-colors"><Link to="/">Core Services</Link></li>
              <li className="hover:text-blue-400 cursor-pointer transition-colors"><Link to="/cases">Case Studies</Link></li>
              <li className="hover:text-blue-400 cursor-pointer transition-colors"><Link to="/">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Locations</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Shanghai, CN</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span> Kuala Lumpur, MY</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-600">
          © {new Date().getFullYear()} HongYuan Software. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default CaseStudy;
