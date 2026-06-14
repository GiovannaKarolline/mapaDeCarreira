/*
  carreira-json.js — v3 geométrico
  Currículo / Mapa de Carreira | Giovanna Karolline 2026
*/

"use strict";

const DATA_URL = "assets/data/carreira.json";

/* ─── UTILITÁRIOS ─────────────────────────── */
const el   = (tag, cls = "", txt = "") => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (txt) e.textContent = txt;
  return e;
};

const byId = (id) => document.getElementById(id);

/* ─── PARTÍCULAS GEOMÉTRICAS ──────────────── */
const initParticles = () => {
  const container = byId("particles");
  if (!container) return;

  const shapes = [
    { cls: "particle particle-sq",  bg: "#5b21b6" },
    { cls: "particle particle-dm",  bg: "#b45309" },
    { cls: "particle particle-sq",  bg: "#0f6b4d" },
    { cls: "particle particle-dm",  bg: "#7c3aed" },
    { cls: "particle particle-sq",  bg: "#d97706" },
  ];

  const COUNT = 18;

  for (let i = 0; i < COUNT; i++) {
    const sh  = shapes[i % shapes.length];
    const p   = document.createElement("div");
    p.className = sh.cls;

    const size     = Math.random() * 8 + 3;
    const left     = Math.random() * 100;
    const duration = Math.random() * 25 + 18;
    const delay    = Math.random() * -duration;
    const opacity  = Math.random() * 0.25 + 0.08;

    p.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${left}%;
      background: ${sh.bg};
      opacity: ${opacity};
      animation-duration: ${duration}s;
      animation-delay: ${delay}s;
    `;

    container.appendChild(p);
  }
};

/* ─── NAVBAR ──────────────────────────────── */
const initNavbar = () => {
  const navbar  = byId("navbar");
  const menuBtn = byId("menu-btn");
  const navMenu = byId("nav-links");

  /* Scroll */
  const onScroll = () => {
    if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 50);
    highlightLink();
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Hambúrguer */
  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
      const open = navMenu.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(open));
    });

    navMenu.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        navMenu.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", (e) => {
      if (!navbar.contains(e.target)) {
        navMenu.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* Link ativo */
  const NAV_IDS = ["sobre", "educacao", "carreira", "certificacoes", "habilidades", "idiomas"];

  function highlightLink() {
    const scrollY = window.scrollY + 90;
    let active = "";

    NAV_IDS.forEach((id) => {
      const sec = byId(id);
      if (sec && scrollY >= sec.offsetTop) active = id;
    });

    document.querySelectorAll(".nav-link").forEach((a) => {
      const href = (a.getAttribute("href") || "").replace("#", "");
      a.classList.toggle("active", href === active);
    });
  }
};

/* ─── SCROLL TO TOP ───────────────────────── */
const initScrollTop = () => {
  const btn = byId("scroll-top");
  if (!btn) return;
  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 350);
  }, { passive: true });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
};

/* ─── INTERSECTION OBSERVER ───────────────── */
const observeAll = (selector, cb, threshold = 0.12) => {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        cb(e.target);
        obs.unobserve(e.target);
      }
    });
  }, { threshold });
  document.querySelectorAll(selector).forEach((n) => obs.observe(n));
};

/* ─── BARRAS ANIMADAS ─────────────────────── */
const animateBars = () => {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const bar = e.target;
      bar.style.width = `${bar.dataset.level}%`;
      bar.classList.add("filled");
      obs.unobserve(bar);
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".skill-bar-fill, .language-bar-fill")
          .forEach((b) => obs.observe(b));
};

/* ─── INICIALIZAR ANIMAÇÕES ───────────────── */
const initAnimations = () => {
  observeAll(".timeline-item",      (n) => n.classList.add("animate-in"));
  observeAll(".skill-card",         (n) => n.classList.add("animate-in"));
  observeAll(".edu-card",           (n) => n.classList.add("animate-in"));
  observeAll(".cert-card",          (n) => n.classList.add("animate-in"));
  observeAll(".animate-target",     (n) => n.classList.add("animate-in"));
  animateBars();
};

/* ─── PARSE JSON ──────────────────────────── */
const parseJSON = (text) => {
  try { return JSON.parse(text); }
  catch (err) {
    try {
      console.warn("[carreira-json] Sanitizando JSON com vírgula extra.");
      return JSON.parse(text.replace(/,\s*([}\]])/g, "$1"));
    } catch { throw err; }
  }
};

/* ─── RENDER: META ────────────────────────── */
const renderMeta = ({ seo, profile }) => {
  document.title = seo.title;
  const d = document.querySelector('meta[name="description"]');
  if (d) d.setAttribute("content", seo.description);

  const add = (name, val, prop = false) => {
    const m = document.createElement("meta");
    prop ? m.setAttribute("property", name) : (m.name = name);
    m.content = val;
    document.head.appendChild(m);
  };

  add("author", seo.author);
  add("og:title",       seo.title,        true);
  add("og:description", seo.description,  true);
  add("og:image",       profile.photo,    true);

  const link = document.createElement("link");
  link.rel = "canonical"; link.href = seo.canonicalUrl;
  document.head.appendChild(link);
};

/* ─── RENDER: PERFIL / HERO ───────────────── */
const renderProfile = ({ profile, contacts, stats }) => {
  /* Nome */
  const fn = byId("profile-name-first");
  const ln = byId("profile-name-last");
  if (fn && profile.name)     fn.textContent = profile.name;
  if (ln && profile.lastName) ln.textContent = profile.lastName;

  /* Headline */
  const hl = byId("profile-headline");
  if (hl) hl.textContent = profile.headline;

  /* Localização */
  const loc = byId("profile-location");
  if (loc && profile.location) {
    /* Remove todos os filhos que não sejam o ícone */
    Array.from(loc.childNodes).forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE || (node.nodeType === Node.ELEMENT_NODE && !node.classList.contains("location-icon"))) {
        loc.removeChild(node);
      }
    });
    loc.appendChild(document.createTextNode(" " + profile.location));
  }

  /* Objetivo */
  const obj = byId("profile-objective");
  if (obj && profile.objective) obj.textContent = profile.objective;

  /* Resumo */
  const summ = byId("profile-summary");
  if (summ && profile.summary) summ.textContent = profile.summary;

  /* Foto */
  const photo = byId("profile-photo");
  if (photo) { photo.src = profile.photo; photo.alt = profile.photoAlt; }

  /* Links CV */
  [byId("cv-link"), byId("nav-cv-link")].forEach((a) => {
    if (!a) return;
    a.href = profile.cvUrl;
    a.setAttribute("aria-label", `Baixar currículo de ${profile.name} em PDF`);
  });

  /* Stats */
  const statsEl = byId("hero-stats");
  if (statsEl && Array.isArray(stats)) {
    statsEl.innerHTML = "";
    stats.forEach(({ value, label }) => {
      const chip = el("div", "stat-chip");
      chip.setAttribute("aria-label", `${label}: ${value}`);
      chip.appendChild(el("span", "stat-value", value));
      chip.appendChild(el("span", "stat-label", label));
      statsEl.appendChild(chip);
    });
  }

  /* Contatos */
  const contactList = byId("contact-list");
  if (contactList && Array.isArray(contacts)) {
    contactList.innerHTML = "";

    const iconMap = {
      phone:    "☎",
      email:    "✉",
      linkedin: "in",
      github:   "gh",
    };

    contacts.forEach(({ label, url, icon }) => {
      const li = el("li");
      const a  = el("a", "contact-link");
      a.href = url;

      if (url.startsWith("http")) {
        a.target = "_blank";
        a.rel    = "noopener noreferrer";
      }

      a.setAttribute("aria-label", label);

      const iconEl  = el("span", "contact-icon", iconMap[icon] ?? "•");
      const labelEl = el("span", "", label);
      a.appendChild(iconEl);
      a.appendChild(labelEl);
      li.appendChild(a);
      contactList.appendChild(li);
    });
  }
};

/* ─── RENDER: EDUCAÇÃO ────────────────────── */
const renderEducation = (education) => {
  const container = byId("education-list");
  if (!container || !Array.isArray(education)) return;
  container.innerHTML = "";

  education.forEach((item, i) => {
    const card = el("div", "edu-card");
    card.style.transitionDelay = `${i * 0.12}s`;

    const icon = el("div", "edu-icon", item.icon ?? "🎓");
    icon.setAttribute("aria-hidden", "true");

    const body = el("div", "edu-body");

    const course = el("p", "edu-course", item.course);
    const inst   = el("p", "edu-institution", item.institution);

    const meta   = el("div", "edu-meta");
    const period = el("span", "edu-period", item.period);

    const statusCls = item.status === "Concluído"
      ? "edu-status edu-status--concluido"
      : "edu-status edu-status--andamento";
    const status = el("span", statusCls, item.status);

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

/* ─── RENDER: CERTIFICAÇÕES ───────────────── */
const renderCertifications = (certifications) => {
  const container = byId("cert-grid");
  if (!container || !Array.isArray(certifications)) return;
  container.innerHTML = "";

  certifications.forEach((cert, i) => {
    const card = el("div", "cert-card");
    card.style.transitionDelay = `${i * 0.12}s`;

    /* Ícone */
    const iconWrap = el("div", "cert-icon-wrap", cert.icon ?? "📜");
    iconWrap.setAttribute("aria-hidden", "true");

    /* Nome */
    const name   = el("p", "cert-name",   cert.name);
    const issuer = el("p", "cert-issuer", cert.issuer);
    const area   = el("p", "cert-area",   cert.area);

    /* Status + link */
    const footer = el("div", "cert-status-wrap");

    const statusCls = cert.status === "Concluído"
      ? "cert-status cert-status--concluido"
      : "cert-status cert-status--andamento";
    const status = el("span", statusCls, cert.status);
    footer.appendChild(status);

    if (cert.url) {
      const link = el("a", "cert-link", "Ver badge ↗");
      link.href   = cert.url;
      link.target = "_blank";
      link.rel    = "noopener noreferrer";
      link.setAttribute("aria-label", `Ver badge de ${cert.name} no Credly`);
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

/* ─── RENDER: TIMELINE ────────────────────── */
const renderTimeline = (careerSteps) => {
  const timeline = byId("career-timeline");
  if (!timeline) return;
  timeline.innerHTML = "";

  const statusLabels = {
    completed: "Concluído",
    current:   "Etapa atual",
    next:      "Próximo passo",
  };

  careerSteps.forEach((step, i) => {
    const item = el("article", "timeline-item");
    item.setAttribute("role", "listitem");
    item.setAttribute("aria-labelledby", `career-${i}`);
    item.style.transitionDelay = `${i * 0.1}s`;

    /* Marcador diamante */
    const diamond = el("div", `timeline-diamond ${step.status}`);
    diamond.setAttribute("aria-hidden", "true");

    /* Card */
    const card = el("div", `timeline-card${step.status === "current" ? " current" : ""}`);

    /* Header */
    const header = el("div", "timeline-card-header");

    const icon = el("span", "timeline-icon", step.icon ?? "");
    icon.setAttribute("aria-hidden", "true");

    const meta   = el("div", "timeline-meta");
    const title  = el("h3", "timeline-title", step.title);
    title.id     = `career-${i}`;
    const period = el("p",  "timeline-period", step.period ?? "");
    meta.appendChild(title);
    meta.appendChild(period);

    const badge = el("span",
      `timeline-status status-${step.status}`,
      statusLabels[step.status] ?? step.status
    );
    badge.setAttribute("aria-label", `Status: ${statusLabels[step.status]}`);

    header.appendChild(icon);
    header.appendChild(meta);
    header.appendChild(badge);

    /* Descrição */
    const desc = el("p", "timeline-description", step.description);

    /* Botão toggle */
    const toggleBtn = el("button", "toggle-btn");
    toggleBtn.setAttribute("aria-expanded", "false");
    toggleBtn.setAttribute("aria-controls", `detail-${i}`);
    const btnTxt   = el("span", "", "Ver detalhes");
    const btnArrow = el("span", "arrow", " ▾");
    toggleBtn.appendChild(btnTxt);
    toggleBtn.appendChild(btnArrow);

    /* Painel */
    const detail = el("div", "timeline-details");
    detail.id    = `detail-${i}`;
    detail.setAttribute("aria-hidden", "true");

    detail.appendChild(el("p", "details-section-title", "Soft Skills desta etapa"));
    const softList = el("ul", "soft-skill-list");
    step.softSkills.forEach((s) => softList.appendChild(el("li", "soft-skill-item", s)));
    detail.appendChild(softList);

    detail.appendChild(el("p", "details-section-title", "Roadmap de aprendizado"));
    const badges = el("div", "roadmap-badges");
    step.roadmap.forEach((t) => badges.appendChild(el("span", "roadmap-badge", t)));
    detail.appendChild(badges);

    /* Toggle */
    toggleBtn.addEventListener("click", () => {
      const open = detail.classList.toggle("open");
      toggleBtn.classList.toggle("open", open);
      toggleBtn.setAttribute("aria-expanded", String(open));
      detail.setAttribute("aria-hidden", String(!open));
      btnTxt.textContent = open ? "Ocultar detalhes" : "Ver detalhes";
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

/* ─── RENDER: HABILIDADES ─────────────────── */
const renderSkills = ({ skillGroups, otherSkills }) => {
  const container = byId("skill-groups");
  if (container) {
    container.innerHTML = "";

    skillGroups.forEach((group, gi) => {
      const card = el("div", "skill-card");
      card.setAttribute("role", "listitem");
      card.style.transitionDelay = `${gi * 0.1}s`;

      /* Cabeçalho */
      const header = el("div", "skill-card-header");
      const icon   = el("span", "skill-card-icon", group.icon ?? "◈");
      icon.setAttribute("aria-hidden", "true");
      const title  = el("p", "skill-card-title", group.title);
      header.appendChild(icon);
      header.appendChild(title);
      card.appendChild(header);

      /* Skills */
      group.skills.forEach((skill) => {
        const item = el("div", "skill-item");

        const row     = el("div", "skill-row");
        const nameEl  = el("span", "skill-name", skill.name);
        const pctEl   = el("span", "skill-percent", `${skill.level}%`);
        row.appendChild(nameEl);
        row.appendChild(pctEl);

        const track = el("div", "skill-bar-track");
        track.setAttribute("role", "progressbar");
        track.setAttribute("aria-label", `${skill.name}: ${skill.level}%`);
        track.setAttribute("aria-valuenow", skill.level);
        track.setAttribute("aria-valuemin", "0");
        track.setAttribute("aria-valuemax", "100");

        const fill = el("div", "skill-bar-fill");
        fill.dataset.level = skill.level;

        track.appendChild(fill);
        item.appendChild(row);
        item.appendChild(track);
        card.appendChild(item);
      });

      container.appendChild(card);
    });
  }

  /* Outras competências */
  const otherList = byId("other-skills");
  if (otherList && Array.isArray(otherSkills)) {
    otherList.innerHTML = "";
    otherSkills.forEach((skill) => {
      const li    = el("li");
      const badge = el("span", "other-skill-badge", skill);
      li.appendChild(badge);
      otherList.appendChild(li);
    });
  }
};

/* ─── RENDER: IDIOMAS ─────────────────────── */
const renderLanguages = (languages) => {
  const list = byId("language-list");
  if (!list) return;
  list.innerHTML = "";

  languages.forEach((lang) => {
    const item = el("li", "language-item");

    const header = el("div", "language-header");
    header.appendChild(el("span", "language-name", lang.name));
    header.appendChild(el("span", "language-level", lang.level));

    const track = el("div", "language-bar-track");
    track.setAttribute("role", "progressbar");
    track.setAttribute("aria-label", `${lang.name}: ${lang.level}`);
    track.setAttribute("aria-valuenow", lang.percent ?? 0);
    track.setAttribute("aria-valuemin", "0");
    track.setAttribute("aria-valuemax", "100");

    const fill = el("div", "language-bar-fill");
    fill.dataset.level = lang.percent ?? 0;

    track.appendChild(fill);
    item.appendChild(header);
    item.appendChild(track);
    list.appendChild(item);
  });
};

/* ─── RENDER: PÁGINA COMPLETA ───────────────── */
const renderPage = (data) => {
  /* Blindagem contra erros em qualquer função de render */
  try { renderMeta(data); }       catch (e) { console.error('[render] Meta:',    e); }
  try { renderProfile(data); }    catch (e) { console.error('[render] Profile:', e); }
  try { renderEducation(data.education); } catch (e) { console.error('[render] Education:', e); }
  try { renderTimeline(data.careerSteps); } catch (e) { console.error('[render] Timeline:', e); }
  try { renderCertifications(data.certifications); } catch (e) { console.error('[render] Certs:', e); }
  try { renderSkills(data); }     catch (e) { console.error('[render] Skills:',  e); }
  try { renderLanguages(data.languages); } catch (e) { console.error('[render] Languages:', e); }

  /* Double RAF: garante pintura antes das animações */
  requestAnimationFrame(() => requestAnimationFrame(initAnimations));
};

/* ─── MENSAGEM DE ERRO ────────────────────── */
const showError = (msg) => {
  const main = byId("conteudo-principal");
  if (!main) return;

  const box = el("div");
  box.style.cssText = `
    margin: 2rem auto;
    max-width: 640px;
    padding: 1.5rem 2rem;
    background: rgba(180,83,9,.06);
    border-left: 4px solid #b45309;
    font-family: 'Fira Code', monospace;
    font-size: .84rem;
    line-height: 1.7;
    color: #78350f;
    white-space: pre-wrap;
    clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%);
  `;
  box.setAttribute("role", "alert");
  box.textContent = msg;
  main.prepend(box);
};

/* ─── LOADING ─────────────────────────────── */
const hideLoading = () => {
  const loading = byId("loading");
  if (!loading) return;
  loading.classList.add("hidden");
  setTimeout(() => loading.remove(), 600);
};

/* ─── BOOTSTRAP ─────────────────────────────── */
initParticles();
initNavbar();
initScrollTop();

/*
 * Failsafe: se o fetch não resolver em 10s por qualquer motivo
 * (erro de rede, servidor parado, etc.), oculta o loading.
 * Garante que o usuário não fique preso na tela de carregamento.
 */
const _loadingFailsafe = setTimeout(() => {
  console.warn('[carreira-json] Failsafe: loading removido por timeout.');
  hideLoading();
}, 10000);

fetch(DATA_URL)
  .then((res) => {
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
    return res.text();
  })
  .then(parseJSON)
  .then((data) => {
    clearTimeout(_loadingFailsafe);
    renderPage(data);
    hideLoading();
  })
  .catch((err) => {
    clearTimeout(_loadingFailsafe);
    hideLoading();
    showError(
      "\u26a0 Dados n\u00e3o carregados.\n\n" +
      "Execute em servidor local:\n" +
      "  python -m http.server 8080\n\n" +
      "Ou publique no GitHub Pages.\n\n" +
      `Erro: ${err.message}`
    );
    console.error('[carreira-json]', err);
  });
