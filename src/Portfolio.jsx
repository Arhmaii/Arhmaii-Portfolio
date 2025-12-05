import React, { useRef, useState } from 'react';
import {
  Terminal,
  ShoppingBag,
  Globe,
  Cpu,
  ArrowRight,
  Database,
  Layout,
  Users,
  Code2,
  Linkedin,
  Mail,
  MessageSquare
} from 'lucide-react';
import { useLanguage } from './LanguageContext';

const Portfolio = () => {
  const { lang } = useLanguage(); // 'zh' or 'en'
  const [submitted, setSubmitted] = useState(false);
  const successRef = useRef(null);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Content Dictionary
  const content = {
    zh: {
      nav: {
        about: '关于我们',
        services: '核心服务',
        advantage: '专业优势',
        value: '价值承诺',
        cases: '客户案例',
        contact: '联系合作',
      },
      hero: {
        tag: '零售科技顾问团队 & 架构师',
        titlePrefix: '将混乱的运营转化为',
        titleHighlight: '可扩张的系统',
        desc: '我们帮助东南亚企业将业务混乱转化为数据驱动的高效能。从上海到马来西亚，打造真正落地的零售系统。',
        btnPrimary: '开始合作',
        btnSecondary: '了解我们的背景',
        floatingBadge: {
          title: '拒绝低效',
          subtitle: '从 1 家店扩张到 6000 家'
        },
        codeBlock: {
          input: '“混乱的零售流程”',
          output: '“可盈利的扩张系统”'
        }
      },
      about: {
        title: '不仅是顾问，更是实战团队',
        desc: '团队来自 UI/UX、系统咨询与业务开发背景，深耕零售科技底层，能从策略到落地一体化推进。',
        cards: [
          { title: '团队管理者', desc: '在上海运营约 120 人的技术团队，具备成熟的人员管理与跨部门协作经验。' },
          { title: '跨国连接器', desc: '拓展马来西亚市场，把中国成熟的零售系统能力本地化为东南亚方案。' },
          { title: '全栈落地力', desc: '具备 Laravel 后端、自动化工具与数据抓取能力，既能定战略，也能下去 Debug。' }
        ]
      },
      services: {
        subtitle: 'SERVICES',
        title: '我们提供的专业服务',
        items: [
          { title: '零售系统咨询', desc: 'SaaS 架构、电商整合、库存系统、POS 及 Kiosk 落地指导。' },
          { title: '跨国项目统筹', desc: '跨团队沟通、需求分析与本地化方案制定，弥合文化与技术差异。' },
          { title: '企业流程梳理', desc: '从营运、收银、入库、串单，到会计端的全链路串流设计。' },
          { title: '技术选型与规划', desc: '协助企业清晰化技术路线，避免踩坑，减少无效的系统投入。' }
        ]
      },
      advantage: {
        title: <>少数能同时讲<br/><span className="text-blue-400">“业务语言”</span> 和 <span className="text-teal-400">“工程语言”</span> 的团队</>,
        items: [
          { title: '翻译需求', desc: '把企业的混乱流程翻译成技术团队能执行的精准规格。' },
          { title: '解释逻辑', desc: '把复杂的系统逻辑解释给管理层，辅助商业决策。' },
          { title: '目标导向', desc: '不绕弯、不给废话。只关注成本、效率和可规模化。' }
        ],
        quote: "We build retail systems the way founders think — fast, practical, and ready to scale."
      },
      value: {
        title: '我们为客户带来的真实价值',
        items: [
          { title: '降低运营成本', desc: '把繁琐的人工步骤变成可自动化的流程。' },
          { title: '支持规模扩张', desc: '打造底层系统，支持企业从 1 家店走到 6000 家店。' },
          { title: '避免技术踩坑', desc: '减少试错成本，把系统做对一次就够。' },
          { title: '深度本地化', desc: '用符合马来西亚与中国两边思维的方式做整合。' },
          { title: '数据驱动决策', desc: '让经营层看到利润、库存、损耗的真实状况。' }
        ],
        finalQuote: "“我们的使命是让您的业务运转得比想象中更顺畅。”"
      },
      contact: {
        title: 'Let\'s Talk Business',
        desc: '准备好升级您的零售系统了吗？无论是技术咨询还是市场落地，欢迎直接与我们联系。',
        labels: {
          name: '姓名',
          company: '企业/机构',
          type: '需求类型',
          message: '留言',
          send: '发送讯息'
        },
        placeholders: {
          name: '您的称呼',
          company: '公司名称',
          message: '简述您的需求...'
        },
        options: ['零售系统咨询', '马来西亚市场落地', '技术架构规划', '其他合作'],
        successTitle: '信息已发送',
        successDesc: '感谢您的联系，我们会尽快与您取得联系，继续讨论合作细节。'
      }
    },
    en: {
      nav: {
        about: 'About',
        services: 'Services',
        advantage: 'Advantage',
        value: 'Value',
        cases: 'Case Studies',
        contact: 'Contact',
      },
      hero: {
        tag: 'Retail Tech Consulting & Architecture',
        titlePrefix: 'Turn Messy Operations Into',
        titleHighlight: 'Scalable Systems',
        desc: 'We help companies in Southeast Asia transform chaos into data-driven efficiency. From Shanghai to Malaysia, we build retail systems that actually work.',
        btnPrimary: 'Let\'s Collaborate',
        btnSecondary: 'View Our Story',
        floatingBadge: {
          title: 'Let\'s Scale.',
          subtitle: 'From 1 store to 6000.'
        },
        codeBlock: {
          input: '“Messy Retail Operations”',
          output: '“Scalable & Profitable System”'
        }
      },
      about: {
        title: 'Not Just Consultants, Practitioners',
        desc: 'Our team blends UI/UX, system consulting, and business development backgrounds, operating at the core of retail tech architecture.',
        cards: [
          { title: 'Team Leader', desc: 'Operating a ~120 person tech team in Shanghai with deep experience in cross-department collaboration.' },
          { title: 'Cross-Border Connector', desc: 'Adapting mature Chinese retail tech for Southeast Asian needs while pioneering the Malaysian market.' },
          { title: 'Full-Stack Delivery', desc: 'Skilled in Laravel, automation, and data tooling—we handle strategy and roll up our sleeves to debug.' }
        ]
      },
      services: {
        subtitle: 'SERVICES',
        title: 'Professional Services',
        items: [
          { title: 'Retail System Consulting', desc: 'SaaS architecture, e-commerce integration, inventory systems, POS, and Kiosk implementation.' },
          { title: 'Cross-Border Project Mgmt', desc: 'Bridging cultural and technical gaps through requirements analysis and localization strategies.' },
          { title: 'Business Process Optimization', desc: 'Streamlining operations from cashier & inventory to accounting integration.' },
          { title: 'Tech Stack Planning', desc: 'Clarifying technical roadmaps to avoid pitfalls and minimize wasted investment.' }
        ]
      },
      advantage: {
        title: <>Rarely do you find a team that speaks both <br/><span className="text-blue-400">“Business”</span> and <span className="text-teal-400">“Engineering”</span>.</>,
        items: [
          { title: 'Translation', desc: 'Translating messy business flows into precise specs for engineering teams.' },
          { title: 'Clarification', desc: 'Explaining complex system logic to founders to support business decisions.' },
          { title: 'Goal Oriented', desc: 'No fluff. We focus strictly on cost, efficiency, and scalability.' }
        ],
        quote: "We build retail systems the way founders think — fast, practical, and ready to scale."
      },
      value: {
        title: 'Real Value Delivered',
        items: [
          { title: 'Reduce OpEx', desc: 'Turning manual drudgery into automated workflows.' },
          { title: 'Enable Scale', desc: 'Building the foundation to go from 1 store to 6000.' },
          { title: 'Avoid Pitfalls', desc: 'Get the system right the first time and save on trial-and-error costs.' },
          { title: 'Deep Localization', desc: 'Integration that respects both Malaysian and Chinese business mindsets.' },
          { title: 'Data-Driven', desc: 'Giving management visibility into real profit, inventory, and shrinkage.' }
        ],
        finalQuote: "“Our job is to make your business run smoother than you ever thought possible.”"
      },
      contact: {
        title: 'Let\'s Talk Business',
        desc: 'Ready to upgrade your retail operations? Whether it\'s tech consulting or market entry, let\'s connect.',
        labels: {
          name: 'Name',
          company: 'Company/Org',
          type: 'Inquiry Type',
          message: 'Message',
          send: 'Send Message'
        },
        placeholders: {
          name: 'Your Name',
          company: 'Company Name',
          message: 'Briefly describe your needs...'
        },
        options: ['Retail System Consulting', 'Malaysia Market Entry', 'Tech Architecture', 'Other Collaboration'],
        successTitle: 'Message Sent',
        successDesc: 'Thanks for reaching out. We will get back to you soon to discuss details.'
      }
    }
  };

  // Removed unused handleSubmit - form submission is handled by Formspree

  const t = content[lang];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-600 selection:text-white">

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900 text-white">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
          <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-72 h-72 bg-teal-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-900/50 border border-blue-700/50 text-blue-300 font-medium text-sm">
                {t.hero.tag}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
                {t.hero.titlePrefix} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">{t.hero.titleHighlight}</span>.
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                {t.hero.desc}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button onClick={() => scrollToSection('contact')} className="px-8 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2">
                  {t.hero.btnPrimary} <ArrowRight size={18} />
                </button>
                <button onClick={() => scrollToSection('about')} className="px-8 py-3.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-medium transition-all">
                  {t.hero.btnSecondary}
                </button>
              </div>
            </div>
            
            {/* Visual Element: Code/Business Bridge */}
            <div className="hidden md:block relative">
              <div className="relative rounded-xl bg-slate-800 border border-slate-700 p-6 shadow-2xl">
                <div className="flex items-center gap-2 mb-4 border-b border-slate-700 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-2 text-xs text-slate-400 font-mono">system_optimizer.js</span>
                </div>
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex">
                    <span className="text-purple-400 w-24">Input:</span>
                    <span className="text-slate-300">{t.hero.codeBlock.input}</span>
                  </div>
                  <div className="flex">
                    <span className="text-blue-400 w-24">Process:</span>
                    <span className="text-yellow-300">Strategy_Analysis()</span>
                  </div>
                  <div className="flex">
                    <span className="text-blue-400 w-24">Tools:</span>
                    <span className="text-green-300">["SaaS", "Laravel", "POS"]</span>
                  </div>
                  <div className="flex border-t border-slate-700 mt-2 pt-2">
                    <span className="text-teal-400 w-24">Output:</span>
                    <span className="text-white font-bold">{t.hero.codeBlock.output}</span>
                  </div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white text-slate-900 p-4 rounded-lg shadow-xl border border-slate-100 max-w-xs">
                <p className="font-bold text-lg">{t.hero.floatingBadge.title}</p>
                <p className="text-sm text-slate-500">{t.hero.floatingBadge.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.about.title}</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              {t.about.desc}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t.about.cards[0].title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {t.about.cards[0].desc}
              </p>
            </div>
            
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center mb-4">
                <Globe size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t.about.cards[1].title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {t.about.cards[1].desc}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-4">
                <Code2 size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t.about.cards[2].title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {t.about.cards[2].desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">{t.services.subtitle}</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">{t.services.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex gap-4">
              <div className="flex-shrink-0">
                <Layout className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{t.services.items[0].title}</h3>
                <p className="text-slate-600 mb-3">{t.services.items[0].desc}</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex gap-4">
              <div className="flex-shrink-0">
                <Globe className="w-8 h-8 text-teal-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{t.services.items[1].title}</h3>
                <p className="text-slate-600 mb-3">{t.services.items[1].desc}</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex gap-4">
              <div className="flex-shrink-0">
                <ShoppingBag className="w-8 h-8 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{t.services.items[2].title}</h3>
                <p className="text-slate-600 mb-3">{t.services.items[2].desc}</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex gap-4">
              <div className="flex-shrink-0">
                <Cpu className="w-8 h-8 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{t.services.items[3].title}</h3>
                <p className="text-slate-600 mb-3">{t.services.items[3].desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Selling Point (The Translator) */}
      <section id="advantage" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t.advantage.title}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-blue-500/20 p-2 rounded-lg">
                    <Terminal className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white">{t.advantage.items[0].title}</h4>
                    <p className="text-slate-400 text-sm">{t.advantage.items[0].desc}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-teal-500/20 p-2 rounded-lg">
                    <Database className="text-teal-400" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white">{t.advantage.items[1].title}</h4>
                    <p className="text-slate-400 text-sm">{t.advantage.items[1].desc}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-purple-500/20 p-2 rounded-lg">
                    <ArrowRight className="text-purple-400" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white">{t.advantage.items[2].title}</h4>
                    <p className="text-slate-400 text-sm">{t.advantage.items[2].desc}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side quote */}
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <Quote className="mb-4 text-blue-500" />
              <p className="text-xl md:text-2xl font-serif italic text-slate-200 leading-relaxed mb-6">
                "{t.advantage.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-600 flex items-center justify-center text-xl font-bold">J</div>
                <div>
                  <p className="font-bold text-white">Joseph</p>
                  <p className="text-sm text-slate-400">HongYuan Software · 泓远软体</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section id="value" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">{t.value.title}</h2>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
            <div className="group">
              <div className="h-1 w-12 bg-blue-600 mb-4 group-hover:w-full transition-all duration-300"></div>
              <h4 className="font-bold text-lg mb-2">{t.value.items[0].title}</h4>
              <p className="text-slate-600 text-sm">{t.value.items[0].desc}</p>
            </div>
            <div className="group">
              <div className="h-1 w-12 bg-teal-600 mb-4 group-hover:w-full transition-all duration-300"></div>
              <h4 className="font-bold text-lg mb-2">{t.value.items[1].title}</h4>
              <p className="text-slate-600 text-sm">{t.value.items[1].desc}</p>
            </div>
            <div className="group">
              <div className="h-1 w-12 bg-purple-600 mb-4 group-hover:w-full transition-all duration-300"></div>
              <h4 className="font-bold text-lg mb-2">{t.value.items[2].title}</h4>
              <p className="text-slate-600 text-sm">{t.value.items[2].desc}</p>
            </div>
            <div className="group">
              <div className="h-1 w-12 bg-orange-600 mb-4 group-hover:w-full transition-all duration-300"></div>
              <h4 className="font-bold text-lg mb-2">{t.value.items[3].title}</h4>
              <p className="text-slate-600 text-sm">{t.value.items[3].desc}</p>
            </div>
            <div className="group">
              <div className="h-1 w-12 bg-red-600 mb-4 group-hover:w-full transition-all duration-300"></div>
              <h4 className="font-bold text-lg mb-2">{t.value.items[4].title}</h4>
              <p className="text-slate-600 text-sm">{t.value.items[4].desc}</p>
            </div>
             <div className="group flex items-center justify-center bg-slate-50 rounded-lg p-4">
               <p className="font-semibold text-slate-800 text-center">{t.value.finalQuote}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-10 bg-blue-900 text-white flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-4">{t.contact.title}</h3>
                  <p className="text-blue-200 mb-8">
                    {t.contact.desc}
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-blue-100">
                      <Mail size={18} />
                      <span>Business.inquiry@arhmaii.com</span>
                    </div>
                    <div className="flex items-center gap-3 text-blue-100">
                      <Linkedin size={18} />
                      <span>linkedin.com/in/arhmaii</span>
                    </div>
                    <div className="flex items-center gap-3 text-blue-100">
                      <MessageSquare size={18} />
                      <span>WeChat / WhatsApp Available</span>
                    </div>
                  </div>
                </div>
                <div className="mt-12">
                   <p className="text-sm text-blue-400 font-mono">Complex operations don't scare us; inefficiency does.</p>
                </div>
              </div>
              
<div className="p-10">
  <form
    action="https://formspree.io/f/xdkqdgza"
    method="POST"
    className="space-y-4"
  >
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1">
        {t.contact.labels.name}
      </label>
      <input
        name="name"
        type="text"
        className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500"
        placeholder={t.contact.placeholders.name}
        required
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1">
        {t.contact.labels.company}
      </label>
      <input
        name="company"
        type="text"
        className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500"
        placeholder={t.contact.placeholders.company}
        required
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1">
        {t.contact.labels.type}
      </label>
      <select
        name="type"
        className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500"
      >
        {t.contact.options.map((option, i) => (
          <option key={i}>{option}</option>
        ))}
      </select>
    </div>

    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1">
        {t.contact.labels.message}
      </label>
      <textarea
        name="message"
        rows={3}
        className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500"
        placeholder={t.contact.placeholders.message}
        required
      ></textarea>
    </div>

    <button className="w-full py-3 px-6 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg">
      {t.contact.labels.send}
    </button>
  </form>
</div>
            </div>
          </div>
          <div className="text-center mt-12 text-slate-400 text-sm">
            © {new Date().getFullYear()} HongYuan Software · 泓远软体. All rights reserved.
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper component for Quote Icon
const Quote = ({ className }) => (
  <svg className={`w-8 h-8 ${className}`} fill="currentColor" viewBox="0 0 24 24">
    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
  </svg>
);

export default Portfolio;
