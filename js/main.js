// CJH 的技术博客 - 主逻辑

document.addEventListener("DOMContentLoaded", () => {
  // ===== 开场动画 =====
  const introOverlay = document.getElementById("introOverlay");
  if (introOverlay) {
    setTimeout(() => {
      introOverlay.classList.add("exit");
      setTimeout(() => {
        introOverlay.remove();
        // 开场结束后启动 Hero 动画
        startHeroAnimations();
      }, 1000);
    }, 1800);
  } else {
    startHeroAnimations();
  }

  function startHeroAnimations() {
    // 逐字动画标题
    initCharReveal();
    // 点阵背景
    initDotGrid();
    // Hero 元素入场
    document.querySelector(".hero-label")?.classList.add("animate");
    document.querySelector(".hero-desc")?.classList.add("animate");
    document.querySelector(".hero-cta")?.classList.add("animate");
    document.querySelector(".hero-visual")?.classList.add("animate");
  }

  // ===== 逐字动画 =====
  function initCharReveal() {
    const title = document.getElementById("heroTitle");
    if (!title) return;

    const text = title.innerHTML;
    const lines = text.split("<br>");
    let charIndex = 0;
    const baseDelay = 1.6; // 开场动画后开始

    const newHTML = lines.map((line, lineIdx) => {
      const chars = line.split("").map(char => {
        if (char === " ") {
          return `<span class="char-space"></span>`;
        }
        const delay = baseDelay + charIndex * 0.06;
        charIndex++;
        return `<span class="char" style="animation-delay:${delay}s">${char}</span>`;
      }).join("");
      return lineIdx < lines.length - 1 ? chars + "<br>" : chars;
    }).join("");

    title.innerHTML = newHTML;
    title.style.opacity = "1";
    title.style.transform = "none";
    title.style.animation = "none";
  }

  // ===== 点阵背景 =====
  function initDotGrid() {
    const canvas = document.getElementById("heroGrid");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animId;
    let mouseX = -1000, mouseY = -1000;

    function resize() {
      const hero = canvas.parentElement;
      canvas.width = hero.offsetWidth;
      canvas.height = hero.offsetHeight;
    }

    resize();
    window.addEventListener("resize", resize);

    canvas.parentElement.addEventListener("mousemove", (e) => {
      const rect = canvas.parentElement.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    });

    canvas.parentElement.addEventListener("mouseleave", () => {
      mouseX = -1000;
      mouseY = -1000;
    });

    const dotSpacing = 32;
    const dotRadius = 1;
    const activeRadius = 120;

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let x = dotSpacing; x < canvas.width; x += dotSpacing) {
        for (let y = dotSpacing; y < canvas.height; y += dotSpacing) {
          const dx = x - mouseX;
          const dy = y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < activeRadius) {
            const intensity = 1 - dist / activeRadius;
            const r = dotRadius + intensity * 2.5;
            ctx.beginPath();
            ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(37, 99, 235, ${0.15 + intensity * 0.5})`;
            ctx.fill();
          } else {
            ctx.beginPath();
            ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(0, 0, 0, 0.06)";
            ctx.fill();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    }

    // 延迟启动点阵动画
    setTimeout(() => {
      canvas.classList.add("visible");
      draw();
    }, 2200);
  }

  // ===== 鼠标光晕 =====
  const cursorGlow = document.getElementById("cursorGlow");
  if (cursorGlow) {
    let glowX = 0, glowY = 0, currentX = 0, currentY = 0;

    document.addEventListener("mousemove", (e) => {
      glowX = e.clientX;
      glowY = e.clientY;
      cursorGlow.classList.add("active");
    });

    document.addEventListener("mouseleave", () => {
      cursorGlow.classList.remove("active");
    });

    function updateGlow() {
      currentX += (glowX - currentX) * 0.1;
      currentY += (glowY - currentY) * 0.1;
      cursorGlow.style.left = currentX + "px";
      cursorGlow.style.top = currentY + "px";
      requestAnimationFrame(updateGlow);
    }
    updateGlow();
  }

  // ===== CTA 磁吸效果 =====
  const heroCta = document.getElementById("heroCta");
  if (heroCta) {
    heroCta.addEventListener("mousemove", (e) => {
      const rect = heroCta.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      heroCta.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    });

    heroCta.addEventListener("mouseleave", () => {
      heroCta.style.transform = "";
    });
  }

  // ===== 滚动进度条 =====
  const progressBar = document.querySelector(".scroll-progress");

  // 导航栏滚动效果
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll("section[id]");

  // Hero 视差
  const heroVisual = document.querySelector(".hero-visual");

  let ticking = false;

  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;

        // 滚动进度条
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
        if (progressBar) progressBar.style.width = progress + "%";

        // 导航栏阴影
        navbar.classList.toggle("scrolled", scrollY > 10);

        // Hero 视差
        if (heroVisual && scrollY < window.innerHeight) {
          heroVisual.style.transform = `translateY(${scrollY * 0.12}px)`;
        }

        // 高亮当前区域导航
        let current = "";
        sections.forEach(section => {
          const top = section.offsetTop - 100;
          if (scrollY >= top) {
            current = section.getAttribute("id");
          }
        });

        navLinks.forEach(link => {
          link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
        });

        ticking = false;
      });
      ticking = true;
    }
  });

  // 汉堡菜单
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navMenu.classList.toggle("open");
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("open");
      navMenu.classList.remove("open");
    });
  });

  // 邮箱复制功能
  const emailCard = document.getElementById("email-card");
  if (emailCard) {
    emailCard.addEventListener("click", () => {
      const email = "cjh2571849673@163.com";
      navigator.clipboard.writeText(email).then(() => {
        showToast("邮箱已复制到剪贴板");
      }).catch(() => {
        const textarea = document.createElement("textarea");
        textarea.value = email;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        showToast("邮箱已复制到剪贴板");
      });
    });
  }

  // CSDN 链接点击
  const csdnCard = document.getElementById("csdn-card");
  if (csdnCard) {
    csdnCard.addEventListener("click", () => {
      window.open("https://blog.csdn.net/qq_68725483", "_blank", "noopener,noreferrer");
    });
  }

  // 板块入场动画（统一管理）
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("section-visible");
        sectionObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -60px 0px" });

  document.querySelectorAll("section[id]:not(#hero)").forEach(el => {
    sectionObserver.observe(el);
  });

  // 时间线入场动画
  const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, index * 150);
        timelineObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".timeline-item").forEach(el => {
    timelineObserver.observe(el);
  });

  // 技能标签交错入场
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const tags = entry.target.querySelectorAll(".skill-tag");
        tags.forEach((tag, i) => {
          tag.style.opacity = "0";
          tag.style.transform = "translateY(12px) scale(0.9)";
          tag.style.transition = `opacity 0.4s ease ${i * 0.06}s, transform 0.4s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.06}s`;
          requestAnimationFrame(() => {
            tag.style.opacity = "1";
            tag.style.transform = "translateY(0) scale(1)";
          });
        });
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  const skillTags = document.querySelector(".skill-tags");
  if (skillTags) skillObserver.observe(skillTags);

  // 联系方式卡片交错入场
  const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const cards = entry.target.querySelectorAll(".contact-card");
        cards.forEach((card, i) => {
          card.style.opacity = "0";
          card.style.transform = "translateY(20px)";
          card.style.transition = `opacity 0.5s ease ${i * 0.15}s, transform 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.15}s`;
          requestAnimationFrame(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          });
        });
        contactObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  const contactCards = document.querySelector(".contact-cards");
  if (contactCards) contactObserver.observe(contactCards);
});

// Toast 提示
function showToast(message) {
  let toast = document.querySelector(".copy-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "copy-toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2000);
}