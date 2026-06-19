

"use strict";


var ICONS = {
  
  phone:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="15" height="15" aria-hidden="true">' +
    '<path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.27-.27.67-.36 1-.24 1.1.4 2.3.6 3.6.6' +
    ' .55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.29 21 3 13.71 3 5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1' +
    ' 0 1.25.2 2.45.57 3.57.11.32.03.7-.24.97L6.6 10.8z"/></svg>',
  email:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="15" height="15" aria-hidden="true">' +
    '<path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>',
  linkedin:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="15" height="15" aria-hidden="true">' +
    '<path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26' +
    'c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79' +
    'M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68' +
    'm1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>',
  github:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="15" height="15" aria-hidden="true">' +
    '<path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34' +
    '-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83' +
    '.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64' +
    ' 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02' +
    '.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21' +
    'c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>',
  
  graduation:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="28" height="28" aria-hidden="true">' +
    '<path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/></svg>',
  clipboard:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="28" height="28" aria-hidden="true">' +
    '<path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14' +
    'c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>',
  
  code:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="28" height="28" aria-hidden="true">' +
    '<path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>',
  cloud:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="28" height="28" aria-hidden="true">' +
    '<path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14' +
    'c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/></svg>',
  shield:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="28" height="28" aria-hidden="true">' +
    '<path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>',
  
  seedling:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="26" height="26" aria-hidden="true">' +
    '<path d="M17 8C8 10 5.9 16.17 3.82 21H5.71c.51-1.17 1.02-2.33 1.62-3.35C9.07 20.23 11.46 21 14 21' +
    'c5.52 0 10-4.48 10-10S19.52 1 14 1c0 3.87-1.72 7.35-4.42 9.72C12.08 9.36 14.59 8 17 8z"/></svg>',
  rocket:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="26" height="26" aria-hidden="true">' +
    '<path d="M9.19 6.35c-2.04 2.29-3.44 5.58-3.57 5.89L2 10l4-4 3.19.35zm5.46 8.3' +
    'c-.31.13-3.58 1.53-5.87 3.57L9.14 22l4-4-.49-3.35zm5.09-9.65c.1-.42.16-.86.16-1.3V2' +
    'c-.44 0-.88.06-1.3.16-1.38.3-5.33 2.3-7.6 5.14.42.28.8.6 1.14.94L14 10l1.86 1.86' +
    'c.28.29.61.67.93 1.14 2.84-2.27 4.84-6.22 5.09-8.57.1-.31.16-.52-.14-1.83z"/>' +
    '<path d="M10.83 17.17L6.83 13.17l-3.54 3.54 3.54 3.53 4-3.07z"/></svg>',
  star:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="26" height="26" aria-hidden="true">' +
    '<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>',
};


var EMOJI_MAP = {
  
  '\uD83C\uDF93': 'graduation',  
  '\uD83D\uDCCB': 'clipboard',   
  
  '\u2615': 'code',        
  '\u2601\uFE0F': 'cloud',       
  '\uD83D\uDEE1\uFE0F': 'shield',
  '\uD83D\uDEE1': 'shield',      
  
  '\uD83C\uDF31': 'seedling',    
  '\uD83D\uDE80': 'rocket',      
  '\u2B50': 'star',        
};


var getIconHTML = function (iconKey, fallbackKey) {
  if (!iconKey) return ICONS[fallbackKey || 'star'] || '';
  if (ICONS[iconKey]) return ICONS[iconKey];          
  if (EMOJI_MAP[iconKey]) return ICONS[EMOJI_MAP[iconKey]]; 
  return ICONS[fallbackKey || 'star'] || '';                 
};


var FALLBACK_DATA = {
  seo: {
    title: 'Giovanna Karolline | Desenvolvedora de Software',
    description: 'Curriculo e mapa de carreira de Giovanna Karolline Menezes Ribeiro.',
    author: 'Giovanna Karolline Menezes Ribeiro',
    canonicalUrl: 'https://giovannakarolline.github.io/mapa-de-carreira'
  },
  profile: {
    name: 'Giovanna Karolline',
    lastName: 'Menezes Ribeiro',
    headline: 'Desenvolvedora de Software',
    location: 'Sao Paulo, SP',
    objective: 'Busco um estagio voltado ao desenvolvimento de software.',
    photo: 'assets/images/profile.jpg',
    photoAlt: 'Foto profissional de Giovanna Karolline Menezes Ribeiro',
    summary: 'Estudante de Analise e Desenvolvimento de Sistemas no IFSP.',
    cvUrl: 'Curriculo_Giovanna_Ribeiro.PDF'
  },
  contacts: [
    { label: '(11) 94926-4778', url: 'tel:+5511949264778', icon: 'phone' },
    { label: 'mennezes.giovanna@gmail.com', url: 'mailto:mennezes.giovanna@gmail.com', icon: 'email' },
    { label: 'linkedin.com/in/giovanna-karolline', url: 'https://www.linkedin.com/in/giovanna-karolline', icon: 'linkedin' },
    { label: 'github.com/GiovannaKarolline', url: 'https://github.com/GiovannaKarolline', icon: 'github' }
  ],
  stats: [
    { value: '2+', label: 'Anos de estudo' },
    { value: '3', label: 'Certificacoes' },
    { value: '7+', label: 'Linguagens e Frameworks' }
  ],
  education: [
    { course: 'Tecnologo em ADS', institution: 'IFSP', location: 'Sao Paulo', period: '03/2024 - 12/2026', status: 'Em andamento', icon: 'graduation' },
    { course: 'Ensino Medio Tecnico em Logistica', institution: 'IFSP', location: 'Sao Paulo', period: 'Concluido em 2023', status: 'Concluido', icon: 'clipboard' }
  ],
  certifications: [
    { name: 'PROPROFISSAO - Instituto PROA', issuer: 'Instituto PROA', area: 'Fullstack C# ASP.NET', status: 'Em andamento', icon: 'code' },
    { name: 'AWS Academy Data Engineering', issuer: 'Amazon Web Services', area: 'Engenharia de Dados', status: 'Concluido', icon: 'cloud' },
    {
      name: 'Defesa de Redes', issuer: 'Cisco', area: 'Defesa de Redes', status: 'Concluido', icon: 'shield',
      url: 'https://www.credly.com/badges/1935fef3-e074-4090-96bf-1cb4ce66e556/public_url'
    }
  ],
  careerSteps: [
    {
      title: 'Estudante & Estagiaria', period: 'Objetivo atual', status: 'current', icon: 'seedling',
      description: 'Consolidacao de fundamentos. Projeto de extensao em Flutter/Dart com SCRUM e Figma.',
      softSkills: ['Comunicacao assertiva', 'Organizacao via SCRUM', 'Proatividade'],
      roadmap: ['Flutter / Dart', 'ReactJS', 'Java', 'Python', 'Figma', 'SQL', 'Git & GitHub']
    },
    {
      title: 'Desenvolvedora Junior', period: 'Proximo passo - 2026+', status: 'next', icon: 'rocket',
      description: 'Atuacao fullstack, Java e Node.js, testes automatizados e documentacao profissional.',
      softSkills: ['Responsabilidade sobre entregas', 'Colaboracao em code reviews', 'Comunicacao tecnica'],
      roadmap: ['Spring Boot', 'Node.js', 'APIs REST', 'Testes Automatizados', 'PostgreSQL', 'Docker', 'CI/CD']
    },
    {
      title: 'Lideranca Tecnica', period: 'Objetivo de longo prazo', status: 'next', icon: 'star',
      description: 'Arquitetura de sistemas, orientacao de equipes e decisoes tecnicas com visao sistemica.',
      softSkills: ['Mentoria com escuta ativa', 'Visao sistemica', 'Facilitacao de ambientes seguros'],
      roadmap: ['Arquitetura de Software', 'Cloud AWS', 'Engenharia de Dados', 'Seguranca', 'Gestao de Pessoas']
    }
  ],
  skillGroups: [
    {
      title: 'Linguagens', icon: '</>',
      skills: [{ name: 'JavaScript / HTML / CSS', level: 80 }, { name: 'Java', level: 65 }, { name: 'Python', level: 60 }, { name: 'C', level: 50 }]
    },
    {
      title: 'Frameworks & Libs', icon: '[*]',
      skills: [{ name: 'ReactJS', level: 70 }, { name: 'C#', level: 65 }, { name: 'Bootstrap', level: 75 }, { name: 'Flask', level: 50 }]
    },
    {
      title: 'Ferramentas & Metodos', icon: '{#}',
      skills: [{ name: 'Git & GitHub', level: 80 }, { name: 'SQL', level: 65 }, { name: 'Figma', level: 60 }, { name: 'SCRUM / Agile', level: 70 }]
    }
  ],
  otherSkills: ['Logica de programacao', 'Versionamento de codigo', 'Gestao de requisitos',
    'Documentacao tecnica', 'Diagramas UML', 'Comunicacao assertiva',
    'Trabalho em equipe', 'AWS', 'Linux'],
  languages: [
    { name: 'Portugues', level: 'Nativo', percent: 100 },
    { name: 'Ingles', level: 'Intermediario', percent: 60 }
  ]
};


const el = (tag, cls, txt) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (txt !== undefined && txt !== null) e.textContent = txt;
  return e;
};

const byId = (id) => document.getElementById(id);


const countUp = (targetEl, endVal, suffix) => {
  const duration = 1400;
  const start = performance.now();
  const step = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    targetEl.textContent = Math.floor(eased * endVal) + suffix;
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};


const hideLoading = () => {
  try {
    const loading = byId('loading');
    if (!loading) return;
    loading.classList.add('hidden');
    loading.style.opacity = '0';
    loading.style.visibility = 'hidden';
    loading.style.pointerEvents = 'none';
    setTimeout(function () {
      if (loading.parentNode) loading.parentNode.removeChild(loading);
    }, 700);
  } catch (e) {
    var el2 = document.getElementById('loading');
    if (el2) el2.style.display = 'none';
  }
};


const initParticles = () => {
  const container = byId('particles');
  if (!container) return;

  const shapes = [
    { cls: 'particle particle-sq', bg: '#5b21b6' },
    { cls: 'particle particle-dm', bg: '#b45309' },
    { cls: 'particle particle-ln', bg: '#5b21b6' },
    { cls: 'particle particle-sq', bg: '#0f6b4d' },
    { cls: 'particle particle-dm', bg: '#7c3aed' },
    { cls: 'particle particle-ln', bg: '#d97706' },
    { cls: 'particle particle-sq', bg: '#d97706' },
  ];

  const COUNT = 8;
  for (let i = 0; i < COUNT; i++) {
    const sh = shapes[i % shapes.length];
    const p = document.createElement('div');
    p.className = sh.cls;
    const isLine = sh.cls.includes('particle-ln');
    const size = isLine ? 1 : Math.random() * 6 + 2;
    const rotation = Math.floor(Math.random() * 60);
    const left = Math.random() * 100;
    const duration = Math.random() * 35 + 35;
    const delay = Math.random() * -duration;
    const opacity = Math.random() * 0.09 + 0.04;
    const height = isLine ? 18 : size;
    p.style.cssText = `width:${size}px;height:${height}px;left:${left}%;background:${sh.bg};` +
      `--r:${rotation}deg;` +
      `opacity:${opacity};animation-duration:${duration}s;animation-delay:${delay}s;`;
    container.appendChild(p);
  }
};


const initNavbar = () => {
  const navbar = byId('navbar');
  const menuBtn = byId('menu-btn');
  const navMenu = byId('nav-links');

  
  const NAV_IDS = ['sobre', 'educacao', 'carreira', 'certificacoes', 'habilidades', 'idiomas'];

  const highlightLink = () => {
    const scrollY = window.scrollY + 90;
    let active = '';
    NAV_IDS.forEach((id) => {
      const sec = byId(id);
      if (sec && scrollY >= sec.offsetTop) active = id;
    });
    document.querySelectorAll('.nav-link').forEach((a) => {
      const href = (a.getAttribute('href') || '').replace('#', '');
      a.classList.toggle('active', href === active);
    });
  };

  const onScroll = () => {
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 50);
    highlightLink();
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
      const open = navMenu.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(open));
    });
    navMenu.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        navMenu.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
    document.addEventListener('click', (e) => {
      if (navbar && !navbar.contains(e.target)) {
        navMenu.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }
};


const initScrollTop = () => {
  const btn = byId('scroll-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 350);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
};


const observeAll = (selector, cb, threshold) => {
  if (typeof IntersectionObserver === 'undefined') {
    document.querySelectorAll(selector).forEach((n) => cb(n));
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { cb(e.target); obs.unobserve(e.target); }
    });
  }, { threshold: threshold || 0.12 });
  document.querySelectorAll(selector).forEach((n) => obs.observe(n));
};


const animateBars = () => {
  if (typeof IntersectionObserver === 'undefined') {
    document.querySelectorAll('.skill-bar-fill, .language-bar-fill').forEach((b) => {
      b.style.width = (b.dataset.level || 0) + '%';
      b.classList.add('filled');
    });
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const bar = e.target;
      bar.style.width = (bar.dataset.level || 0) + '%';
      bar.classList.add('filled');
      obs.unobserve(bar);
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.skill-bar-fill, .language-bar-fill').forEach((b) => obs.observe(b));
};


const initCounters = () => {
  if (typeof IntersectionObserver === 'undefined') return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el2 = e.target;
      const endVal = parseInt(el2.dataset.target || '0', 10);
      const suffix = el2.dataset.suffix || '';
      countUp(el2, endVal, suffix);
      obs.unobserve(el2);
    });
  }, { threshold: 0.6 });
  document.querySelectorAll('.stat-value[data-target]').forEach((el2) => obs.observe(el2));
};


const initAnimations = () => {
  observeAll('.timeline-item', (n) => n.classList.add('animate-in'));
  observeAll('.skill-card', (n) => n.classList.add('animate-in'));
  observeAll('.edu-card', (n) => n.classList.add('animate-in'));
  observeAll('.cert-card', (n) => n.classList.add('animate-in'));
  observeAll('.animate-target', (n) => n.classList.add('animate-in'));
  animateBars();
  initCounters();
};


const renderMeta = ({ seo, profile }) => {
  if (!seo) return;
  document.title = seo.title;
  const d = document.querySelector('meta[name="description"]');
  if (d) d.setAttribute('content', seo.description);

  const addMeta = (name, val, prop) => {
    const m = document.createElement('meta');
    if (prop) m.setAttribute('property', name); else m.name = name;
    m.content = val;
    document.head.appendChild(m);
  };
  if (seo.author) addMeta('author', seo.author);
  if (seo.title) addMeta('og:title', seo.title, true);
  if (seo.description) addMeta('og:description', seo.description, true);
  if (profile && profile.photo) addMeta('og:image', profile.photo, true);
  if (seo.canonicalUrl) {
    const link = document.createElement('link');
    link.rel = 'canonical'; link.href = seo.canonicalUrl;
    document.head.appendChild(link);
  }
};


const renderProfile = ({ profile, contacts, stats }) => {
  if (!profile) return;

  
  const fn = byId('profile-name-first');
  const ln = byId('profile-name-last');
  if (fn && profile.name) fn.textContent = profile.name;
  if (ln && profile.lastName) {
    ln.textContent = profile.lastName;
    ln.dataset.text = profile.lastName; 
  }

  
  
  const hl = byId('profile-headline');
  if (hl && profile.headline) {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      hl.textContent = profile.headline;
    } else {
      hl.textContent = '';
      hl.setAttribute('aria-label', profile.headline);
      const fullText = profile.headline;
      let idx = 0;
      const tick = () => {
        hl.textContent += fullText[idx++];
        if (idx < fullText.length) setTimeout(tick, 62);
      };
      setTimeout(tick, 620);
    }
  }  

  
  const loc = byId('profile-location');
  if (loc && profile.location) {
    Array.from(loc.childNodes).forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) loc.removeChild(node);
    });
    loc.appendChild(document.createTextNode(' ' + profile.location));
  }

  
  const obj = byId('profile-objective');
  if (obj && profile.objective) obj.textContent = profile.objective;

  
  const tgl = byId('profile-tagline');
  if (tgl && profile.tagline) tgl.textContent = profile.tagline;

  const summ = byId('profile-summary');
  if (summ && profile.summary) summ.textContent = profile.summary;

  
  const photo = byId('profile-photo');
  if (photo) { photo.src = profile.photo; photo.alt = profile.photoAlt || ''; }

  
  [byId('cv-link'), byId('nav-cv-link')].forEach((a) => {
    if (!a) return;
    a.href = profile.cvUrl || '#';
    a.setAttribute('aria-label', 'Baixar curriculo de ' + (profile.name || '') + ' em PDF');
  });
  
  const statsEl = byId('hero-stats');
  if (statsEl && Array.isArray(stats)) {
    statsEl.innerHTML = '';
    stats.forEach(({ value, label }) => {
      const chip = el('div', 'stat-chip');
      chip.setAttribute('aria-label', label + ': ' + value);

      const m = String(value).match(/^(\d+)(\+?)$/);
      const num = m ? parseInt(m[1], 10) : 0;
      const suffix = m ? m[2] : '';

      const valueEl = el('span', 'stat-value', '0');
      valueEl.setAttribute('data-target', num);
      valueEl.setAttribute('data-suffix', suffix);

      chip.appendChild(valueEl);
      chip.appendChild(el('span', 'stat-label', label));
      statsEl.appendChild(chip);
    });
  }

  
  const contactList = byId('contact-list');
  if (contactList && Array.isArray(contacts)) {
    contactList.innerHTML = '';
    contacts.forEach(({ label, url, icon }) => {
      const li = el('li');
      const a = el('a', 'contact-link');
      a.href = url || '#';
      if ((url || '').startsWith('http')) { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
      a.setAttribute('aria-label', label);

      const iconEl = el('span', 'contact-icon');
      iconEl.innerHTML = getIconHTML(icon, 'email');
      const labelEl = el('span', 'contact-label', label);

      a.appendChild(iconEl);
      a.appendChild(labelEl);
      li.appendChild(a);
      contactList.appendChild(li);
    });
  }
};


const renderEducation = (education) => {
  const container = byId('education-list');
  if (!container || !Array.isArray(education)) return;
  container.innerHTML = '';

  education.forEach((item, i) => {
    const card = el('div', 'edu-card');
    card.style.transitionDelay = (i * 0.12) + 's';

    const icon = el('div', 'edu-icon');
    icon.innerHTML = getIconHTML(item.icon, 'graduation');
    icon.setAttribute('aria-hidden', 'true');

    const body = el('div', 'edu-body');
    const course = el('p', 'edu-course', item.course);
    const inst = el('p', 'edu-institution', item.institution);
    const meta = el('div', 'edu-meta');
    const period = el('span', 'edu-period', item.period);

    const done = (item.status || '').toLowerCase().startsWith('conclu');
    const status = el('span',
      done ? 'edu-status edu-status--concluido' : 'edu-status edu-status--andamento',
      item.status
    );

    meta.appendChild(period);
    meta.appendChild(status);
    body.appendChild(course);
    body.appendChild(inst);
    body.appendChild(meta);
    card.appendChild(icon);
    card.appendChild(body);
    container.appendChild(card);
  });
};


const renderCertifications = (certifications) => {
  const container = byId('cert-grid');
  if (!container || !Array.isArray(certifications)) return;
  container.innerHTML = '';

  certifications.forEach((cert, i) => {
    const card = el('div', 'cert-card');
    card.style.transitionDelay = (i * 0.12) + 's';

    const iconWrap = el('div', 'cert-icon-wrap');
    iconWrap.innerHTML = getIconHTML(cert.icon, 'shield');
    iconWrap.setAttribute('aria-hidden', 'true');

    const name = el('p', 'cert-name', cert.name);
    const issuer = el('p', 'cert-issuer', cert.issuer);
    const area = el('p', 'cert-area', cert.area);

    const footer = el('div', 'cert-status-wrap');
    const done = (cert.status || '').toLowerCase().startsWith('conclu');
    const status = el('span',
      done ? 'cert-status cert-status--concluido' : 'cert-status cert-status--andamento',
      cert.status
    );
    footer.appendChild(status);

    if (cert.url) {
      const link = el('a', 'cert-link', 'Ver badge \u2197');
      link.href = cert.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.setAttribute('aria-label', 'Ver badge de ' + cert.name + ' no Credly');
      footer.appendChild(link);
    }

    card.appendChild(iconWrap);
    card.appendChild(name);
    card.appendChild(issuer);
    card.appendChild(area);
    card.appendChild(footer);
    container.appendChild(card);
  });
};


const renderTimeline = (careerSteps) => {
  const timeline = byId('career-timeline');
  if (!timeline || !Array.isArray(careerSteps)) return;
  timeline.innerHTML = '';

  const STATUS_LABELS = { completed: 'Concluido', current: 'Etapa atual', next: 'Proximo passo' };

  careerSteps.forEach((step, i) => {
    const item = el('article', 'timeline-item');
    item.setAttribute('role', 'listitem');
    item.setAttribute('aria-labelledby', 'career-' + i);
    item.style.transitionDelay = (i * 0.1) + 's';

    const diamond = el('div', 'timeline-diamond ' + (step.status || 'next'));
    diamond.setAttribute('aria-hidden', 'true');

    const card = el('div', 'timeline-card' + (step.status === 'current' ? ' current' : ''));
    const header = el('div', 'timeline-card-header');

    const icon = el('span', 'timeline-icon');
    icon.innerHTML = getIconHTML(step.icon, 'star');
    icon.setAttribute('aria-hidden', 'true');

    const meta = el('div', 'timeline-meta');
    const title = el('h3', 'timeline-title', step.title);
    title.id = 'career-' + i;
    const period = el('p', 'timeline-period', step.period || '');
    meta.appendChild(title);
    meta.appendChild(period);

    const statusLabel = STATUS_LABELS[step.status] || step.status || '';
    const badge = el('span', 'timeline-status status-' + (step.status || 'next'), statusLabel);
    badge.setAttribute('aria-label', 'Status: ' + statusLabel);

    header.appendChild(icon);
    header.appendChild(meta);
    header.appendChild(badge);

    const desc = el('p', 'timeline-description', step.description || '');

    const toggleBtn = el('button', 'toggle-btn');
    toggleBtn.setAttribute('aria-expanded', 'false');
    toggleBtn.setAttribute('aria-controls', 'detail-' + i);
    const btnTxt = el('span', '', 'Ver detalhes');
    const btnArrow = el('span', 'arrow', ' \u25BE');
    toggleBtn.appendChild(btnTxt);
    toggleBtn.appendChild(btnArrow);

    const detail = el('div', 'timeline-details');
    detail.id = 'detail-' + i;
    detail.setAttribute('aria-hidden', 'true');

    detail.appendChild(el('p', 'details-section-title', 'Soft Skills desta etapa'));
    const softList = el('ul', 'soft-skill-list');
    (step.softSkills || []).forEach((s) => softList.appendChild(el('li', 'soft-skill-item', s)));
    detail.appendChild(softList);

    detail.appendChild(el('p', 'details-section-title', 'Roadmap de aprendizado'));
    const badges = el('div', 'roadmap-badges');
    (step.roadmap || []).forEach((t) => badges.appendChild(el('span', 'roadmap-badge', t)));
    detail.appendChild(badges);

    toggleBtn.addEventListener('click', () => {
      const open = detail.classList.toggle('open');
      toggleBtn.classList.toggle('open', open);
      toggleBtn.setAttribute('aria-expanded', String(open));
      detail.setAttribute('aria-hidden', String(!open));
      btnTxt.textContent = open ? 'Ocultar detalhes' : 'Ver detalhes';

      
      if (open) {
        const roadmapBadges = detail.querySelectorAll('.roadmap-badge');
        roadmapBadges.forEach((b, idx) => {
          b.style.opacity = '0';
          b.style.transform = 'translateY(10px)';
          b.style.transition = `opacity .22s ease ${idx * 38}ms,
                                transform .22s ease ${idx * 38}ms`;
          
          void b.offsetWidth;
          b.style.opacity = '1';
          b.style.transform = 'translateY(0)';
        });
      }
    });

    card.appendChild(header);
    card.appendChild(desc);
    card.appendChild(toggleBtn);
    card.appendChild(detail);
    item.appendChild(diamond);
    item.appendChild(card);
    timeline.appendChild(item);
  });
};


const renderSkills = ({ skillGroups, otherSkills }) => {
  const container = byId('skill-groups');
  if (container && Array.isArray(skillGroups)) {
    container.innerHTML = '';
    skillGroups.forEach((group, gi) => {
      const card = el('div', 'skill-card');
      card.setAttribute('role', 'listitem');
      card.style.transitionDelay = (gi * 0.1) + 's';

      const header = el('div', 'skill-card-header');
      const icon = el('span', 'skill-card-icon', group.icon || '\u25C8');
      icon.setAttribute('aria-hidden', 'true');
      header.appendChild(icon);
      header.appendChild(el('p', 'skill-card-title', group.title));
      card.appendChild(header);

      (group.skills || []).forEach((skill) => {
        const item = el('div', 'skill-item');
        const row = el('div', 'skill-row');
        row.appendChild(el('span', 'skill-name', skill.name));
        row.appendChild(el('span', 'skill-percent', skill.level + '%'));

        const track = el('div', 'skill-bar-track');
        track.setAttribute('role', 'progressbar');
        track.setAttribute('aria-label', skill.name + ': ' + skill.level + '%');
        track.setAttribute('aria-valuenow', skill.level);
        track.setAttribute('aria-valuemin', '0');
        track.setAttribute('aria-valuemax', '100');

        const fill = el('div', 'skill-bar-fill');
        fill.dataset.level = skill.level;

        track.appendChild(fill);
        item.appendChild(row);
        item.appendChild(track);
        card.appendChild(item);
      });

      container.appendChild(card);
    });
  }

  const otherList = byId('other-skills');
  if (otherList && Array.isArray(otherSkills)) {
    otherList.innerHTML = '';
    otherSkills.forEach((skill) => {
      const li = el('li');
      const badge = el('span', 'other-skill-badge', skill);
      li.appendChild(badge);
      otherList.appendChild(li);
    });
  }
};


const renderLanguages = (languages) => {
  const list = byId('language-list');
  if (!list || !Array.isArray(languages)) return;
  list.innerHTML = '';

  languages.forEach((lang) => {
    const item = el('li', 'language-item');

    const header = el('div', 'language-header');
    header.appendChild(el('span', 'language-name', lang.name));
    header.appendChild(el('span', 'language-level', lang.level));

    const track = el('div', 'language-bar-track');
    track.setAttribute('role', 'progressbar');
    track.setAttribute('aria-label', lang.name + ': ' + lang.level);
    track.setAttribute('aria-valuenow', lang.percent || 0);
    track.setAttribute('aria-valuemin', '0');
    track.setAttribute('aria-valuemax', '100');

    const fill = el('div', 'language-bar-fill');
    fill.dataset.level = lang.percent || 0;

    track.appendChild(fill);
    item.appendChild(header);
    item.appendChild(track);
    list.appendChild(item);
  });
};


const renderPage = (data) => {
  try { renderMeta(data); } catch (e) { console.error('[render] Meta:', e); }
  try { renderProfile(data); } catch (e) { console.error('[render] Profile:', e); }
  try { renderEducation(data.education); } catch (e) { console.error('[render] Edu:', e); }
  try { renderTimeline(data.careerSteps); } catch (e) { console.error('[render] Timeline:', e); }
  try { renderCertifications(data.certifications); } catch (e) { console.error('[render] Certs:', e); }
  try { renderSkills(data); } catch (e) { console.error('[render] Skills:', e); }
  try { renderLanguages(data.languages); } catch (e) { console.error('[render] Langs:', e); }

  requestAnimationFrame(() => requestAnimationFrame(initAnimations));
};


const showError = (msg) => {
  const main = byId('conteudo-principal');
  if (!main) return;
  const box = el('div');
  box.style.cssText = [
    'margin:2rem auto', 'max-width:640px', 'padding:1.5rem 2rem',
    'background:rgba(180,83,9,.06)', 'border-left:4px solid #b45309',
    "font-family:'Fira Code',monospace", 'font-size:.84rem',
    'line-height:1.7', 'color:#78350f', 'white-space:pre-wrap',
    'clip-path:polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,0 100%)'
  ].join(';');
  box.setAttribute('role', 'alert');
  box.textContent = msg;
  main.prepend(box);
};


try { initParticles(); } catch (e) { console.error('[bootstrap] particles:', e); }
try { initNavbar(); } catch (e) { console.error('[bootstrap] navbar:', e); }
try { initScrollTop(); } catch (e) { console.error('[bootstrap] scrolltop:', e); }


const _loadingTimeout = setTimeout(function () {
  hideLoading();
  console.warn('[carreira-json] Safety timeout acionado.');
}, 5000);


(function loadData() {
  const finalize = (data) => {
    try {
      if (!data || typeof data !== 'object') throw new Error('Dados inválidos.');
      renderPage(data);
      clearTimeout(_loadingTimeout);
      if (window._loadingFailsafe) clearTimeout(window._loadingFailsafe);
      hideLoading();
    } catch (err) {
      clearTimeout(_loadingTimeout);
      hideLoading();
      try { showError('\u26A0\uFE0F  Erro ao renderizar: ' + err.message); } catch (_) { }
      console.error('[carreira-json] Erro fatal no render:', err);
    }
  };

  
  if (typeof fetch !== 'undefined') {
    fetch('assets/data/carreira.json')
      .then((res) => {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        return res.json();
      })
      .then((data) => {
        console.info('[carreira-json] Dados carregados de carreira.json');
        finalize(data);
      })
      .catch((err) => {
        console.warn('[carreira-json] Fetch falhou, usando fallback embutido.', err.message);
        finalize(FALLBACK_DATA);
      });
  } else {
    
    console.warn('[carreira-json] fetch indisponivel, usando fallback embutido.');
    finalize(FALLBACK_DATA);
  }
}());
