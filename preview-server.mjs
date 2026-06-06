import "./styles.css";

const whatsappNumber = "5567996251572";
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  "Olá, quero agendar um horário na Drey Vieira Barbearia."
)}`;

type IconName =
  | "whatsapp"
  | "play"
  | "crown"
  | "scissors"
  | "beard"
  | "shield"
  | "pin"
  | "clock"
  | "instagram"
  | "arrowUp"
  | "arrowLeft"
  | "arrowRight"
  | "target"
  | "camera";

type Service = {
  icon: IconName;
  title: string;
  description: string;
  className: string;
};

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#serviços" },
  { label: "Galeria", href: "#galeria" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" }
];

const features = [
  {
    icon: "crown" as IconName,
    title: "Experiência premium",
    text: "Ambiente sofisticado e atendimento de alto nível."
  },
  {
    icon: "scissors" as IconName,
    title: "Técnicas avançadas",
    text: "Cortes modernos e acabamentos impecáveis."
  },
  {
    icon: "beard" as IconName,
    title: "Estilo que impacta",
    text: "Realçamos o melhor de você com personalidade."
  },
  {
    icon: "shield" as IconName,
    title: "Confiança garantida",
    text: "Qualidade, precisão e dedicação em cada detalhe."
  }
];

const services: Service[] = [
  {
    icon: "scissors",
    title: "Corte masculino",
    description: "Estilos personalizados para todos os tipos de personalidade.",
    className: "service-cut"
  },
  {
    icon: "beard",
    title: "Barba",
    description: "Modelagem precisa para realçar seu estilo com acabamento premium.",
    className: "service-beard"
  },
  {
    icon: "scissors",
    title: "Barba premium",
    description: "Toalha quente, produtos especiais e hidratação para máximo cuidado.",
    className: "service-premium"
  },
  {
    icon: "beard",
    title: "Corte infantil",
    description: "Estilo e diversão para os pequenos também saírem confiantes.",
    className: "service-kids"
  }
];

const testimonials = [
  {
    name: "Lucas Menezes",
    text: "Ambiente top demais, atendimento impecável e o corte sempre do jeito que eu gosto."
  },
  {
    name: "Rafael Souza",
    text: "Melhor barbearia da cidade! Profissionais qualificados e atendimento diferenciado."
  },
  {
    name: "Bruno Ferreira",
    text: "Confiança que só aumenta a cada visita. Recomendo de olhos fechados!"
  }
];

function icon(name: IconName): string {
  const attrs = 'viewBox="0 0 24 24" aria-hidden="true" focusable="false"';
  const common = 'fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"';
  const filled = 'fill="currentColor"';

  const paths: Record<IconName, string> = {
    whatsapp: `<path ${common} d="M19.1 4.9A9.6 9.6 0 0 0 3.7 16.2L2.6 21.4l5.3-1.2A9.6 9.6 0 0 0 19.1 4.9Z"/><path ${common} d="M8.9 8.5c.2-.5.4-.5.7-.5h.5c.2 0 .4.1.5.4l.8 1.9c.1.3.1.5-.1.7l-.5.6c-.2.2-.2.4-.1.6.4.8 1.1 1.5 1.8 2 .4.3.8.5 1.2.6.2.1.4 0 .6-.2l.8-.9c.2-.2.4-.3.7-.2l1.9.9c.3.1.4.3.4.6 0 .7-.4 1.5-1 1.8-.7.4-1.7.4-3-.1-2.6-.9-4.6-2.7-5.7-5.1-.5-1.1-.6-2.1 0-3.1Z"/>`,
    play: `<circle ${common} cx="12" cy="12" r="9"/><path ${filled} d="M10 8.8v6.4c0 .5.6.8 1 .5l4.8-3.2c.4-.2.4-.8 0-1.1L11 8.3c-.4-.3-1 0-1 .5Z"/>`,
    crown: `<path ${common} d="m3 8 4.2 4.1L12 4l4.8 8.1L21 8l-2 10H5L3 8Z"/><path ${common} d="M5 20h14"/>`,
    scissors: `<circle ${common} cx="6" cy="6" r="2.5"/><circle ${common} cx="6" cy="18" r="2.5"/><path ${common} d="M8 8l12 10M8 16 20 6"/>`,
    beard: `<path ${filled} d="M12 3c3.9 0 6.7 2.6 6.7 6.5 0 1.7-.4 3.5-1.2 5.3-.9 2-2.8 5.2-5.5 5.2s-4.6-3.2-5.5-5.2c-.8-1.8-1.2-3.6-1.2-5.3C5.3 5.6 8.1 3 12 3Zm-3 9.6c.8 0 1.4-.5 1.4-1.2S9.8 10.2 9 10.2s-1.4.5-1.4 1.2.6 1.2 1.4 1.2Zm6 0c.8 0 1.4-.5 1.4-1.2s-.6-1.2-1.4-1.2-1.4.5-1.4 1.2.6 1.2 1.4 1.2ZM9.1 15.4c.8 1.4 1.8 2.1 2.9 2.1s2.1-.7 2.9-2.1H9.1Z"/>`,
    shield: `<path ${common} d="M12 3 20 6v5.6c0 4.5-3 7.8-8 9.4-5-1.6-8-4.9-8-9.4V6l8-3Z"/>`,
    pin: `<path ${filled} d="M12 2.4A7.5 7.5 0 0 0 4.5 10c0 5.2 7.5 11.8 7.5 11.8S19.5 15.2 19.5 10A7.5 7.5 0 0 0 12 2.4Zm0 10.3A2.7 2.7 0 1 1 12 7a2.7 2.7 0 0 1 0 5.4Z"/>`,
    clock: `<circle ${common} cx="12" cy="12" r="9"/><path ${common} d="M12 7v5l3.5 2"/>`,
    instagram: `<rect ${common} x="4" y="4" width="16" height="16" rx="5"/><circle ${common} cx="12" cy="12" r="3.2"/><circle ${filled} cx="16.8" cy="7.2" r="1"/>`,
    arrowUp: `<path ${common} d="M12 19V5"/><path ${common} d="m6 11 6-6 6 6"/>`,
    arrowLeft: `<path ${common} d="M15 18 9 12l6-6"/>`,
    arrowRight: `<path ${common} d="m9 18 6-6-6-6"/>`,
    target: `<circle ${common} cx="12" cy="12" r="8"/><circle ${common} cx="12" cy="12" r="3"/><path ${common} d="M12 2v3M12 19v3M2 12h3M19 12h3"/>`,
    camera: `<path ${common} d="M4 8h4l1.5-2h5L16 8h4v11H4V8Z"/><circle ${common} cx="12" cy="13.5" r="3.2"/>`
  };

  return `<svg ${attrs}>${paths[name]}</svg>`;
}

function sectionTitle(eyebrow: string, title: string): string {
  return `
    <div class="section-heading">
      <span>${eyebrow}</span>
      <h2>${title}</h2>
    </div>
  `;
}

function renderHeader(): string {
  return `
    <header class="site-header" id="home">
      <a class="brand" href="#home" aria-label="Drey Vieira Barbearia">
        <img src="/logo.png" alt="Drey Vieira Barbearia" />
        <div>
          <strong>Drey Vieira</strong>
          <span>Barbearia</span>
        </div>
      </a>
      <nav class="desktop-nav" aria-label="Navegação principal">
        ${navItems.map((item, index) => `<a class="${index === 0 ? "active" : ""}" href="${item.href}">${item.label}</a>`).join("")}
      </nav>
      <a class="outline-button header-action" href="${whatsappUrl}" target="_blank" rel="noreferrer">
        ${icon("whatsapp")}
        <span>Agendar</span>
      </a>
    </header>
  `;
}

function renderHero(): string {
  return `
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-copy">
        <p class="eyebrow">Drey Vieira Barbearia</p>
        <h1 id="hero-title">Seu estilo,<br />sua identidade,<br /><span>nossa arte.</span></h1>
        <p class="hero-text">Mais que um corte, uma experiência que transforma confiança em presença.</p>
        <div class="hero-actions">
          <a class="gold-button" href="${whatsappUrl}" target="_blank" rel="noreferrer">${icon("whatsapp")} Agendar agora</a>
          <a class="dark-button" href="#galeria">${icon("play")} Ver vídeo</a>
        </div>
      </div>
      <div class="hero-logo" aria-label="Logo Drey Vieira Barbearia">
        <img src="/logo.png" alt="Drey Vieira Barbearia" />
      </div>
    </section>
  `;
}

function renderFeatures(): string {
  return `
    <section class="features" aria-label="Diferenciais">
      ${features
        .map(
          (item) => `
            <article>
              <div class="feature-icon">${icon(item.icon)}</div>
              <div>
                <h3>${item.title}</h3>
                <p>${item.text}</p>
              </div>
            </article>
          `
        )
        .join("")}
    </section>
  `;
}

function renderServices(): string {
  return `
    <section class="services" id="serviços" aria-labelledby="services-title">
      ${sectionTitle("Nossos serviços", 'Do clássico ao moderno,<br />o padrão é <span>excelência.</span>')}
      <div class="service-grid">
        ${services
          .map(
            (service) => `
              <article class="service-card ${service.className}">
                <div class="service-photo"></div>
                <div class="service-icon">${icon(service.icon)}</div>
                <div class="service-body">
                  <h3>${service.title}</h3>
                  <p>${service.description}</p>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
      <a class="small-gold-button" href="${whatsappUrl}" target="_blank" rel="noreferrer">Ver todos os serviços</a>
    </section>
  `;
}

function renderAbout(): string {
  return `
    <section class="about" id="sobre" aria-labelledby="about-title">
      <div class="about-image" role="img" aria-label="Interior sofisticado da barbearia"></div>
      <div class="about-copy" id="galeria">
        <p class="eyebrow">Sobre nós</p>
        <h2 id="about-title">Um lugar feito para homens que exigem o <span>melhor.</span></h2>
        <p>Aqui não é só sobre cortar cabelo. É sobre autoestima, presença e atitude. Cada detalhe foi pensado para proporcionar uma experiência única, do atendimento ao resultado final.</p>
        <div class="stats">
          <div>${icon("target")}<strong>+5</strong><span>Anos de experiência</span></div>
          <div>${icon("beard")}<strong>+1.000</strong><span>Clientes satisfeitos</span></div>
          <div>${icon("shield")}<strong>100%</strong><span>Foco em qualidade</span></div>
          <div>${icon("camera")}<strong>Atendimento</strong><span>Personalizado para você</span></div>
        </div>
      </div>
    </section>
  `;
}

function renderTestimonials(): string {
  return `
    <section class="testimonials" id="depoimentos" aria-labelledby="testimonials-title">
      ${sectionTitle("Depoimentos", 'Quem vive, <span>recomenda.</span>')}
      <button class="round-control left" aria-label="Depoimento anterior">${icon("arrowLeft")}</button>
      <div class="testimonial-grid">
        ${testimonials
          .map(
            (testimonial, index) => `
              <article class="testimonial-card">
                <div class="avatar avatar-${index + 1}"></div>
                <div>
                  <div class="stars">★★★★★</div>
                  <p>${testimonial.text}</p>
                  <strong>${testimonial.name}</strong>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
      <button class="round-control right" aria-label="Próximo depoimento">${icon("arrowRight")}</button>
    </section>
  `;
}

function renderFooter(): string {
  return `
    <footer class="footer" id="contato">
      <div class="footer-grid">
        <div class="footer-item">
          ${icon("pin")}
          <div><strong>Endereço</strong><span>Rua Pilad Rebuá, 1602<br />Campo Grande - MS</span></div>
        </div>
        <div class="footer-item">
          ${icon("clock")}
          <div><strong>Horário de funcionamento</strong><span>Segunda a Sábado<br />08:00h às 20:00h</span></div>
        </div>
        <a class="footer-item" href="${whatsappUrl}" target="_blank" rel="noreferrer">
          ${icon("whatsapp")}
          <div><strong>Agendamentos</strong><span>(67) 99625-1572<br />Clique para chamar no WhatsApp</span></div>
        </a>
        <a class="footer-item" href="https://www.instagram.com/dreyvieira.barbearia" target="_blank" rel="noreferrer">
          ${icon("instagram")}
          <div><strong>Siga nosso Instagram</strong><span>@dreyvieira.barbearia<br />Veja nossos trabalhos</span></div>
        </a>
      </div>
      <a class="back-top" href="#home" aria-label="Voltar ao topo">${icon("arrowUp")}</a>
      <p class="copyright">Drey Vieira Barbearia - Todos os direitos reservados © 2024</p>
    </footer>
  `;
}

function renderPage(): void {
  const app = document.querySelector<HTMLDivElement>("#app");
  if (!app) return;

  app.innerHTML = `
    ${renderHeader()}
    <main>
      ${renderHero()}
      ${renderFeatures()}
      ${renderServices()}
      ${renderAbout()}
      ${renderTestimonials()}
    </main>
    ${renderFooter()}
  `;
}

renderPage();
