// ============================================================
// 全站交互脚本（每个页面都会加载，体积很小，无第三方库）
//   1) 页面滚动后，页眉变成毛玻璃
//   2) 顶部阅读进度条（老浏览器兜底；新浏览器用纯 CSS 实现）
//   3) 产品下拉菜单：点击展开 / Esc 关闭 / 点外面关闭
//   4) 语言下拉、手机菜单：点外面或按 Esc 自动收起；手机菜单打开时锁住页面滚动
//   5) 滚动渐显动画：元素进入屏幕时浮现
//   6) 卡片柔光：光斑跟随鼠标
// 所有内容在“不开 JavaScript”时也完整可见、可用——脚本只负责锦上添花。
// ============================================================

const root = document.documentElement;
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---- 1) 页眉滚动状态 ----
const header = document.querySelector<HTMLElement>('[data-header]');
const syncHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 8);
syncHeader();
window.addEventListener('scroll', syncHeader, { passive: true });

// ---- 2) 阅读进度条兜底（不支持 CSS 滚动驱动动画的浏览器）----
if (!CSS.supports('animation-timeline: scroll()')) {
  const bar = document.querySelector<HTMLElement>('.scroll-progress');
  if (bar) {
    let ticking = false;
    const update = () => {
      const max = root.scrollHeight - window.innerHeight;
      bar.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`;
      ticking = false;
    };
    window.addEventListener(
      'scroll',
      () => {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(update);
        }
      },
      { passive: true },
    );
    update();
  }
}

// ---- 3) 产品下拉菜单（mega menu）----
document.querySelectorAll<HTMLElement>('[data-mega]').forEach((item) => {
  const toggle = item.querySelector<HTMLButtonElement>('.mega-toggle');
  const setOpen = (open: boolean) => {
    item.classList.toggle('is-open', open);
    toggle?.setAttribute('aria-expanded', String(open));
  };
  toggle?.addEventListener('click', () => setOpen(!item.classList.contains('is-open')));
  item.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && item.classList.contains('is-open')) {
      setOpen(false);
      toggle?.focus();
    }
  });
  item.addEventListener('focusout', (e) => {
    if (!item.contains(e.relatedTarget as Node | null)) setOpen(false);
  });
  item.addEventListener('mouseleave', () => setOpen(false));
  document.addEventListener('click', (e) => {
    if (!item.contains(e.target as Node)) setOpen(false);
  });
});

// ---- 4) <details> 下拉：语言菜单 ----
document.querySelectorAll<HTMLDetailsElement>('details[data-dropdown]').forEach((d) => {
  document.addEventListener('click', (e) => {
    if (d.open && !d.contains(e.target as Node)) d.open = false;
  });
  d.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && d.open) {
      d.open = false;
      d.querySelector('summary')?.focus();
    }
  });
});

// ---- 4b) 手机菜单 ----
const mnav = document.querySelector<HTMLDetailsElement>('[data-mnav]');
if (mnav) {
  mnav.addEventListener('toggle', () => root.classList.toggle('nav-open', mnav.open));
  // 点菜单里的链接（包括 #about 这种页内锚点）后自动收起
  mnav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => (mnav.open = false)));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mnav.open) {
      mnav.open = false;
      mnav.querySelector('summary')?.focus();
    }
  });
  // 窗口拉宽到桌面布局时，自动关掉手机菜单
  matchMedia('(min-width: 1081px)').addEventListener('change', (e) => {
    if (e.matches) mnav.open = false;
  });
}

// ---- 5) 滚动渐显 ----
const revealEls = document.querySelectorAll<HTMLElement>('[data-reveal]');
if ('IntersectionObserver' in window && !reduceMotion) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -6% 0px', threshold: 0.08 },
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('is-in'));
}

// ---- 5b) 语言建议：浏览器首选语言是本站另一种语言时，提示切换 ----
const suggest = document.querySelector<HTMLElement>('[data-lang-suggest]');
if (suggest) {
  const KEY = 'lang-suggest-dismissed';
  let dismissed = false;
  try {
    dismissed = localStorage.getItem(KEY) === '1';
  } catch {
    // 隐私模式等情况下 localStorage 不可用：当作没关过
  }
  const current = root.lang;
  const blocks = Array.from(suggest.querySelectorAll<HTMLElement>('[data-suggest-for]'));
  const supported = blocks.map((b) => b.dataset.suggestFor);
  const prefs = (navigator.languages?.length ? navigator.languages : [navigator.language]).map((l) => l.toLowerCase().split('-')[0]);
  // 找访客最想要、且本站有的语言；如果最想要的就是当前页面语言，则不提示
  const wanted = prefs.find((p) => p === current || supported.includes(p));
  const block = blocks.find((b) => b.dataset.suggestFor === wanted);
  if (!dismissed && block) {
    block.hidden = false;
    setTimeout(() => {
      suggest.hidden = false;
      requestAnimationFrame(() => suggest.classList.add('is-in'));
    }, 1200);
  }
  suggest.querySelector('[data-suggest-close]')?.addEventListener('click', () => {
    suggest.hidden = true;
    try {
      localStorage.setItem(KEY, '1');
    } catch {
      // 忽略
    }
  });
}

// ---- 6) 卡片柔光跟随鼠标 ----
if (matchMedia('(hover: hover)').matches && !reduceMotion) {
  document.addEventListener(
    'pointermove',
    (e) => {
      const card = (e.target as Element | null)?.closest?.<HTMLElement>('[data-spotlight]');
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    },
    { passive: true },
  );
}
