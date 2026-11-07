/**
 * ============================================================================
 * PKABOT — CONTROLADOR PRINCIPAL DA LANDING PAGE (main.js)
 * ============================================================================
 * Lê os parâmetros de window.PKABOT_CONFIG (js/config.js) e inicializa a
 * navegação responsiva, secção de vídeo YouTube, planos, FAQ e modais.
 */

(function () {
  "use strict";

  const cfg = window.PKABOT_CONFIG || {};

  /**
   * Utilitário seguro para atualizar texto de um elemento pelo ID
   */
  function setText(id, value) {
    const el = document.getElementById(id);
    if (el && typeof value === "string" && value.trim() !== "") {
      el.textContent = value;
    }
  }

  /**
   * Extrai o ID de 11 caracteres de um vídeo do YouTube a partir de ID puro ou URL
   */
  function extractYouTubeId(input) {
    if (!input || typeof input !== "string") return "";
    const trimmed = input.trim();
    if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) {
      return trimmed;
    }
    const match = trimmed.match(
      /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    return match ? match[1] : "";
  }

  /**
   * 1. Aplica os dados do ficheiro central de configuração (js/config.js)
   */
  function applyConfiguration() {
    // Hero Section
    if (cfg.hero) {
      setText("hero-badge", cfg.hero.badge);
      setText("hero-title", cfg.hero.title);
      setText("hero-subtitle", cfg.hero.subtitle);

      const primaryCtaSpan = document.querySelector("#hero-primary-cta span");
      if (primaryCtaSpan && cfg.hero.primaryCtaText) {
        primaryCtaSpan.textContent = cfg.hero.primaryCtaText;
      }
      const secondaryCtaSpan = document.querySelector("#hero-secondary-cta span");
      if (secondaryCtaSpan && cfg.hero.secondaryCtaText) {
        secondaryCtaSpan.textContent = cfg.hero.secondaryCtaText;
      }

      // Captura de ecrã real da interface (se configurada)
      const screenshotContainer = document.getElementById("hero-screenshot-container");
      if (screenshotContainer && cfg.hero.screenshotUrl && cfg.hero.screenshotUrl.trim() !== "") {
        const img = document.createElement("img");
        img.src = cfg.hero.screenshotUrl.trim();
        img.alt = cfg.hero.screenshotAlt || "Interface oficial do PKABOT";
        img.className = "hero-real-screenshot";
        img.loading = "eager";
        screenshotContainer.innerHTML = "";
        screenshotContainer.appendChild(img);
      }
    }

    // Demonstração (YouTube Embed)
    if (cfg.demo) {
      setText("demo-heading", cfg.demo.title);
      setText("demo-subtitle", cfg.demo.subtitle);
      setText("video-placeholder-title", cfg.demo.placeholderTitle);
      setText("video-placeholder-desc", cfg.demo.placeholderDescription);

      const videoId = extractYouTubeId(cfg.demo.youtubeVideoIdOrUrl);
      const videoStage = document.getElementById("video-stage");
      if (videoStage && videoId) {
        const wrapper = document.createElement("div");
        wrapper.className = "video-iframe-wrapper";
        const iframe = document.createElement("iframe");
        iframe.src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(videoId) + "?rel=0";
        iframe.title = "Demonstração Oficial PKABOT";
        iframe.loading = "lazy";
        iframe.allow =
          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        iframe.allowFullscreen = true;
        wrapper.appendChild(iframe);
        videoStage.innerHTML = "";
        videoStage.appendChild(wrapper);
      }
    }

    // Planos e Preços
    if (cfg.pricing) {
      setText("pricing-heading", cfg.pricing.sectionTitle);
      setText("pricing-subtitle", cfg.pricing.sectionSubtitle);
      setText("plan-badge", cfg.pricing.planBadge);
      setText("plan-name", cfg.pricing.planName);
      setText("plan-currency", cfg.pricing.currency);
      setText("plan-price", cfg.pricing.priceValue);
      setText("plan-period", cfg.pricing.pricePeriod);
      setText("plan-note", cfg.pricing.priceNote);
      setText("buy-now-text", cfg.pricing.ctaButtonText);

      if (cfg.pricing.validityHighlight) {
        setText("plan-validity-pill", "🔒 " + cfg.pricing.validityHighlight);
      }

      const featuresListEl = document.getElementById("plan-features-list");
      if (featuresListEl && Array.isArray(cfg.pricing.featuresIncluded)) {
        featuresListEl.innerHTML = "";
        cfg.pricing.featuresIncluded.forEach(function (itemText) {
          const li = document.createElement("li");
          li.textContent = itemText;
          featuresListEl.appendChild(li);
        });
      }
    }

    // FAQ (Acordeão Dinâmico)
    renderFaqList();

    // Rodapé e Contactos
    if (cfg.contact) {
      const email = cfg.contact.supportEmail || "suporte@pkabot.com";
      const footerEmailEl = document.getElementById("footer-support-email");
      if (footerEmailEl) {
        footerEmailEl.href = "mailto:" + email;
        footerEmailEl.textContent = "✉️ " + email;
      }
      const modalEmailEl = document.getElementById("modal-support-email");
      if (modalEmailEl) {
        modalEmailEl.href = "mailto:" + email;
        modalEmailEl.textContent = email;
      }

      if (cfg.contact.socials) {
        bindSocialLink("social-discord", cfg.contact.socials.discord);
        bindSocialLink("social-youtube", cfg.contact.socials.youtube);
        bindSocialLink("social-instagram", cfg.contact.socials.instagram);
        bindSocialLink("social-telegram", cfg.contact.socials.telegram);
      }
    }

    if (cfg.legal) {
      setText("footer-disclaimer", cfg.legal.disclaimer);
      setText("footer-year", cfg.legal.copyrightYear);
    }
  }

  function bindSocialLink(elementId, url) {
    const el = document.getElementById(elementId);
    if (!el) return;
    if (url && typeof url === "string" && url.trim() !== "" && url.trim() !== "#") {
      el.href = url.trim();
      el.target = "_blank";
    } else {
      el.href = "#";
      el.addEventListener("click", function (ev) {
        ev.preventDefault();
      });
    }
  }

  /**
   * 2. Renderiza e controla o acordeão de Perguntas Frequentes (FAQ)
   */
  function renderFaqList() {
    const faqListEl = document.getElementById("faq-list");
    if (!faqListEl || !Array.isArray(cfg.faq)) return;

    faqListEl.innerHTML = "";

    cfg.faq.forEach(function (item, idx) {
      const itemWrap = document.createElement("div");
      itemWrap.className = "faq-item" + (idx === 0 ? " is-open" : "");

      const btnId = "faq-btn-" + idx;
      const panelId = "faq-panel-" + idx;

      const trigger = document.createElement("button");
      trigger.type = "button";
      trigger.className = "faq-trigger";
      trigger.id = btnId;
      trigger.setAttribute("aria-expanded", idx === 0 ? "true" : "false");
      trigger.setAttribute("aria-controls", panelId);

      const qSpan = document.createElement("span");
      qSpan.textContent = item.question;

      const iconSpan = document.createElement("span");
      iconSpan.className = "faq-trigger__icon";
      iconSpan.setAttribute("aria-hidden", "true");
      iconSpan.textContent = "+";

      trigger.appendChild(qSpan);
      trigger.appendChild(iconSpan);

      const panel = document.createElement("div");
      panel.className = "faq-panel";
      panel.id = panelId;
      panel.setAttribute("role", "region");
      panel.setAttribute("aria-labelledby", btnId);
      if (idx !== 0) {
        panel.hidden = true;
      }

      if (item.provisional) {
        const provBadge = document.createElement("span");
        provBadge.className = "faq-provisional-tag";
        provBadge.textContent = "Política em revisão";
        panel.appendChild(provBadge);
      }

      const ansP = document.createElement("p");
      ansP.textContent = item.answer;
      panel.appendChild(ansP);

      trigger.addEventListener("click", function () {
        const isOpen = itemWrap.classList.contains("is-open");
        // Fecha os demais itens para manter leitura limpa
        faqListEl.querySelectorAll(".faq-item").forEach(function (otherItem) {
          otherItem.classList.remove("is-open");
          const otherBtn = otherItem.querySelector(".faq-trigger");
          const otherPanel = otherItem.querySelector(".faq-panel");
          if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
          if (otherPanel) otherPanel.hidden = true;
        });

        if (!isOpen) {
          itemWrap.classList.add("is-open");
          trigger.setAttribute("aria-expanded", "true");
          panel.hidden = false;
        }
      });

      itemWrap.appendChild(trigger);
      itemWrap.appendChild(panel);
      faqListEl.appendChild(itemWrap);
    });
  }

  /**
   * 3. Menu Mobile e Comportamento do Header
   */
  function initNavigation() {
    const header = document.querySelector(".site-header");
    const toggleBtn = document.getElementById("mobile-menu-toggle");
    const nav = document.getElementById("site-nav");
    const navLinks = document.querySelectorAll(".site-nav__link, .site-nav__mobile-cta a");

    function closeMobileMenu() {
      if (!toggleBtn || !nav) return;
      toggleBtn.setAttribute("aria-expanded", "false");
      toggleBtn.setAttribute("aria-label", "Abrir menu de navegação");
      nav.classList.remove("is-open");
    }

    if (toggleBtn && nav) {
      toggleBtn.addEventListener("click", function () {
        const expanded = toggleBtn.getAttribute("aria-expanded") === "true";
        toggleBtn.setAttribute("aria-expanded", String(!expanded));
        toggleBtn.setAttribute(
          "aria-label",
          !expanded ? "Fechar menu de navegação" : "Abrir menu de navegação"
        );
        nav.classList.toggle("is-open", !expanded);
      });

      navLinks.forEach(function (link) {
        link.addEventListener("click", closeMobileMenu);
      });

      document.addEventListener("keydown", function (ev) {
        if (ev.key === "Escape") closeMobileMenu();
      });
    }

    window.addEventListener(
      "scroll",
      function () {
        if (!header) return;
        header.classList.toggle("is-scrolled", window.scrollY > 20);
      },
      { passive: true }
    );
  }

  /**
   * 4. Controlo de Modais e Botão "Comprar agora" (Preparado para PIX sem simular compras)
   */
  function initModalsAndCheckout() {
    const buyBtn = document.getElementById("buy-now-btn");
    const checkoutModal = document.getElementById("checkout-modal");

    function openModal(modalEl) {
      if (!modalEl) return;
      modalEl.hidden = false;
      document.body.style.overflow = "hidden";
    }

    function closeAllModals() {
      document.querySelectorAll(".modal-backdrop").forEach(function (m) {
        m.hidden = true;
      });
      document.body.style.overflow = "";
    }

    if (buyBtn) {
      buyBtn.addEventListener("click", function () {
        if (
          cfg.pricing &&
          cfg.pricing.pixCheckoutEnabled === true &&
          typeof cfg.pricing.pixCheckoutUrl === "string" &&
          cfg.pricing.pixCheckoutUrl.trim() !== ""
        ) {
          window.location.href = cfg.pricing.pixCheckoutUrl.trim();
        } else {
          openModal(checkoutModal);
        }
      });
    }

    document.querySelectorAll("[data-modal-target]").forEach(function (trigger) {
      trigger.addEventListener("click", function () {
        const targetId = trigger.getAttribute("data-modal-target");
        const modal = document.getElementById(targetId);
        openModal(modal);
      });
    });

    document.querySelectorAll("[data-close-modal]").forEach(function (btn) {
      btn.addEventListener("click", closeAllModals);
    });

    document.querySelectorAll(".modal-backdrop").forEach(function (backdrop) {
      backdrop.addEventListener("click", function (ev) {
        if (ev.target === backdrop) closeAllModals();
      });
    });

    document.addEventListener("keydown", function (ev) {
      if (ev.key === "Escape") closeAllModals();
    });
  }

  /**
   * 5. Animações Discretas ao Rolar a Página (IntersectionObserver)
   */
  function initScrollReveal() {
    const elements = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      elements.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach(function (el) {
      observer.observe(el);
    });
  }

  // Inicialização ao carregar o DOM
  document.addEventListener("DOMContentLoaded", function () {
    applyConfiguration();
    initNavigation();
    initModalsAndCheckout();
    initScrollReveal();
  });
})();
