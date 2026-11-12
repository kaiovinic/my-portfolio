/* =============================================================
   Portfólio — Kaio Vinicius Silva
   Um único requestAnimationFrame move tudo. Carregado por pages/index.tsx.
   ============================================================= */
(() => {
'use strict';

const $  = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];

const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const lerp  = (a, b, t) => a + (b - a) * t;
const damp  = (a, b, tau, dt) => lerp(a, b, 1 - Math.exp(-dt / tau));
const easeIO = t => (t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const TAU = Math.PI * 2;
const INK = '#0a0a0a';
const SIGNAL = '#d1ff1a';

const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;

/* estado global compartilhado por todas as cenas */
const S = { y: scrollY, vw: innerWidth, vh: innerHeight, px: -1, py: -1, pointer: false };
const scenes = [];
const scene = fn => scenes.push(fn);

/* ---------------------------------------------------------------
   Menu
   --------------------------------------------------------------- */
const burger = $('#burger');
const drawer = $('#drawer');
burger.addEventListener('click', () => {
  const open = drawer.classList.toggle('open');
  burger.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', String(open));
  document.body.style.overflow = open ? 'hidden' : '';
});
$$('a', drawer).forEach(a => a.addEventListener('click', () => {
  drawer.classList.remove('open');
  burger.classList.remove('open');
  document.body.style.overflow = '';
}));

/* ---------------------------------------------------------------
   Relógio do hero
   --------------------------------------------------------------- */
const clock = $('#clock');
if (clock) {
  const tick = () => {
    clock.textContent = new Date().toLocaleTimeString('pt-BR', { hour12: false });
  };
  tick(); setInterval(tick, 1000);
}

/* ---------------------------------------------------------------
   Revelar ao rolar
   --------------------------------------------------------------- */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: .15, rootMargin: '0px 0px -5% 0px' });
$$('.reveal').forEach((el, i) => {
  el.style.transitionDelay = (i % 4) * 70 + 'ms';
  io.observe(el);
});

/* ===============================================================
   HERO — o retrato escrito com a stack
   A foto fica visível por baixo. O canvas desenha, dentro de um
   círculo que segue o cursor, a mesma imagem reescrita em código.
   Rolando a página o círculo cresce até tomar a tela inteira.
   =============================================================== */
const heroStage = $('#heroStage');
const canvas = $('#codeLayer');
const photo = $('#portraitSrc');
const heroEl = $('.hero');
const heroUi = $('.hero-inner');

const STACK = 'React Next.js TypeScript Node.js NestJS C# .NET ASP.NET Core PostgreSQL MySQL Prisma Docker GitHub Actions ADVPL TLPP PO-UI Jest Vitest Cypress Clean Architecture SOLID ';
const MAPN = 160;                       // resolução do mapa de luz
const TONES = [
  { fill: 'rgba(255,255,255,.05)', weight: 300 },
  { fill: 'rgba(209,255,26,.15)',  weight: 300 },
  { fill: 'rgba(209,255,26,.30)',  weight: 300 },
  { fill: 'rgba(209,255,26,.52)',  weight: 400 },
  { fill: 'rgba(209,255,26,.78)',  weight: 500 },
  { fill: '#d1ff1a',               weight: 600 },
  { fill: '#f4ffc4',               weight: 600 },
];
const toneOf = v =>
  v < .07 ? 0 : v < .22 ? 1 : v < .36 ? 2 : v < .50 ? 3 : v < .64 ? 4 : v < .80 ? 5 : 6;

const ctx = canvas ? canvas.getContext('2d') : null;
const code = { W: 0, H: 0, layers: [], ready: false };
let luma = null;

/* --- mapa de luz: a partir da foto, ou das iniciais se ela faltar --- */
function lumaFromCanvas(cv) {
  const d = cv.getContext('2d').getImageData(0, 0, MAPN, MAPN).data;
  const out = new Uint8Array(MAPN * MAPN);
  for (let i = 0, p = 0; i < out.length; i++, p += 4) {
    const v = (d[p] * .2126 + d[p + 1] * .7152 + d[p + 2] * .0722) * (d[p + 3] / 255);
    out[i] = Math.round(v / 255 * 15);
  }
  return out;
}

/* onde o retrato está dentro do palco — o mesmo cálculo do CSS */
function portraitRect(W, H) {
  const ok = photo && photo.complete && photo.naturalWidth > 0;
  const ar = ok ? photo.naturalWidth / photo.naturalHeight : 1;
  const narrow = W < 900;
  if (narrow) return { x: 0, y: 0, w: W, h: W / ar };   // largura toda, no topo
  return { x: W - H * ar, y: 0, w: H * ar, h: H };      // altura toda, à direita
}

function buildLuma(W, H) {
  const cv = document.createElement('canvas');
  cv.width = cv.height = MAPN;
  const g = cv.getContext('2d');
  g.fillStyle = '#000';
  g.fillRect(0, 0, MAPN, MAPN);

  const ok = photo && photo.complete && photo.naturalWidth > 0;
  if (ok) {
    g.drawImage(photo, 0, 0, photo.naturalWidth, photo.naturalHeight, 0, 0, MAPN, MAPN);
    // um pouco mais de contraste ajuda os tons a se separarem
    const img = g.getImageData(0, 0, MAPN, MAPN);
    const d = img.data;
    for (let i = 0; i < d.length; i += 4) {
      for (let k = 0; k < 3; k++) d[i + k] = clamp((d[i + k] / 255 - .5) * 1.35 + .5, 0, 1) * 255;
    }
    g.putImageData(img, 0, 0);
  } else {
    // sem foto: as iniciais viram o retrato
    const grad = g.createRadialGradient(MAPN / 2, MAPN * .45, 8, MAPN / 2, MAPN * .45, MAPN * .62);
    grad.addColorStop(0, '#5a5a5a'); grad.addColorStop(1, '#000');
    g.fillStyle = grad; g.fillRect(0, 0, MAPN, MAPN);
    g.fillStyle = '#fff';
    g.textAlign = 'center'; g.textBaseline = 'middle';
    g.font = '900 96px Archivo, Arial, sans-serif';
    g.fillText('KV', MAPN / 2, MAPN * .46);
    g.font = '500 13px "Martian Mono", monospace';
    g.fillStyle = 'rgba(255,255,255,.55)';
    g.fillText('FULL-STACK', MAPN / 2, MAPN * .68);
  }
  return lumaFromCanvas(cv);
}

function buildCode() {
  if (!ctx || !heroStage) return;
  const W = heroStage.clientWidth, H = heroStage.clientHeight;
  if (!W || !H) return;

  luma = buildLuma(W, H);

  const dpr = Math.min(devicePixelRatio || 1, 2, Math.sqrt(3.2e6 / (W * H)));
  code.W = W; code.H = H;
  canvas.width = Math.round(W * dpr);
  canvas.height = Math.round(H * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  const size = clamp(Math.round(Math.min(W, H) / 78), 8, 13);
  const fontFor = w => `${w} ${size}px "Martian Mono", ui-monospace, monospace`;
  ctx.font = fontFor(500);
  const cw = ctx.measureText('M').width || size * .7;
  const ch = size * 1.28;
  const cols = Math.ceil(W / cw), rows = Math.ceil(H / ch);

  const hasPhoto = photo && photo.complete && photo.naturalWidth > 0;
  const box = hasPhoto ? portraitRect(W, H) : { x: 0, y: 0, w: W, h: H };
  code.box = box;

  code.layers = [0, 1, 2].map(shift => {
    const cv = document.createElement('canvas');
    cv.width = canvas.width; cv.height = canvas.height;
    const g = cv.getContext('2d');
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    g.textBaseline = 'top';

    const buckets = TONES.map(() => []);
    let idx = shift * 3;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const glyph = STACK[idx++ % STACK.length];
        if (glyph === ' ') continue;
        const x = c * cw, y = r * ch;
        const u = (x + cw / 2 - box.x) / box.w;
        const v = (y + ch / 2 - box.y) / box.h;
        const inside = u >= 0 && u < 1 && v >= 0 && v < 1;
        const value = inside
          ? luma[Math.floor(v * MAPN) * MAPN + Math.floor(u * MAPN)] / 15
          : 0;
        buckets[toneOf(value)].push(glyph, x, y);
      }
    }
    buckets.forEach((list, t) => {
      g.font = fontFor(TONES[t].weight);
      g.fillStyle = TONES[t].fill;
      for (let i = 0; i < list.length; i += 3) g.fillText(list[i], list[i + 1], list[i + 2]);
    });
    return cv;
  });

  code.ready = true;
}

/* --- a lente --- */
const lens = { x: 0, y: 0, r: 0 };
const intro = { start: performance.now(), done: reduced };
const INTRO_MS = 1600;

function drawCode(now, takeover) {
  if (!ctx || !code.ready) return;
  const { W, H, layers } = code;
  ctx.clearRect(0, 0, W, H);

  const frame = layers[reduced ? 0 : Math.floor(now / 150) % layers.length];

  // intro: a tela preta sobe revelando a foto, com uma linha de varredura
  if (!intro.done) {
    const k = (now - intro.start) / INTRO_MS;
    const yPhoto = H * easeIO(clamp(k));
    ctx.fillStyle = INK;
    ctx.fillRect(0, yPhoto, W, H - yPhoto);
    ctx.save();
    ctx.beginPath(); ctx.rect(0, yPhoto, W, H - yPhoto); ctx.clip();
    ctx.drawImage(frame, 0, 0, W, H);
    ctx.restore();
    if (yPhoto < H) { ctx.fillStyle = SIGNAL; ctx.fillRect(0, yPhoto - 1, W, 2); }
    if (k >= 1) intro.done = true;
    return;
  }

  const radius = lens.r + Math.pow(takeover, 1.4) * Math.hypot(W, H);
  if (radius < 1) return;
  const cx = lerp(lens.x, W / 2, takeover);
  const cy = lerp(lens.y, H * .46, takeover);

  ctx.save();
  ctx.beginPath(); ctx.arc(cx, cy, radius, 0, TAU); ctx.clip();
  ctx.fillStyle = INK; ctx.fillRect(0, 0, W, H);
  ctx.drawImage(frame, 0, 0, W, H);
  ctx.restore();

  if (takeover < .98) {
    ctx.strokeStyle = SIGNAL;
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.arc(cx, cy, radius, 0, TAU); ctx.stroke();
  }
}

if (ctx) {
  const start = () => { buildCode(); };
  if (photo) {
    if (photo.complete) start();
    else { photo.addEventListener('load', start); photo.addEventListener('error', start); }
    // se a imagem nem existir, não espera para sempre
    setTimeout(() => { if (!code.ready) start(); }, 1200);
  } else start();

  const parallax = { x: 0, y: 0 };

  scene((dt, now) => {
    const { W, H } = code;
    if (!W) return;

    const p = clamp(S.y / Math.max(1, H * .9));          // progresso da rolagem no hero
    const over = fine && S.pointer && S.py < H - S.y && intro.done;

    // sem cursor a lente passeia sozinha, em volta do rosto
    const b = code.box || { x: 0, y: 0, w: W, h: H };
    const t = now / 1000;
    const wanderX = b.x + b.w * (.5 + Math.cos(t * .34) * .20);
    const wanderY = b.y + b.h * (.44 + Math.sin(t * .27) * .16);

    const baseR = Math.min(W, H) * (over ? .30 : .22);
    const tx = over ? S.px : wanderX;
    const ty = over ? S.py + S.y : wanderY;   // o canvas vive no topo da página
    lens.x = damp(lens.x, tx, over ? 90 : 420, dt);
    lens.y = damp(lens.y, ty, over ? 90 : 420, dt);
    lens.r = damp(lens.r, intro.done ? baseR : 0, 260, dt);

    drawCode(now, p);

    // paralaxe leve do palco e da coluna de texto
    const mx = over ? S.px / W - .5 : 0;
    const my = over ? S.py / H - .5 : 0;
    parallax.x = damp(parallax.x, mx, 240, dt);
    parallax.y = damp(parallax.y, my, 240, dt);
    heroStage.style.transform =
      `translate3d(${(-parallax.x * 14).toFixed(2)}px, ${(-parallax.y * 9 - p * H * .05).toFixed(2)}px, 0) scale(${(1 + p * .06).toFixed(4)})`;
    heroUi.style.transform = `translate3d(0, ${(-p * 42).toFixed(1)}px, 0)`;
    heroUi.style.opacity = (1 - clamp(p * 1.25)).toFixed(3);
  });
}

/* ===============================================================
   Cursor e ímã
   =============================================================== */
addEventListener('pointermove', e => {
  S.px = e.clientX; S.py = e.clientY; S.pointer = true;
}, { passive: true });
addEventListener('pointerleave', () => { S.pointer = false; });

if (fine && !reduced) {
  document.documentElement.classList.add('has-cursor');
  const cur = $('#cursor');
  const ring = $('i', cur);
  const trail = { x: innerWidth / 2, y: innerHeight / 2 };

  addEventListener('pointerover', e => {
    cur.classList.toggle('is-link', Boolean(e.target.closest('a, button, .slide')));
  }, { passive: true });

  scene((dt) => {
    if (!S.pointer) { cur.style.opacity = '0'; return; }
    cur.style.opacity = '1';
    trail.x = damp(trail.x, S.px, 90, dt);
    trail.y = damp(trail.y, S.py, 90, dt);
    cur.style.transform = `translate3d(${S.px}px, ${S.py}px, 0)`;
    ring.style.transform = `translate3d(${(trail.x - S.px).toFixed(1)}px, ${(trail.y - S.py).toFixed(1)}px, 0)`;
  });

  $$('[data-magnet]').forEach(el => {
    el.addEventListener('pointermove', e => {
      const b = el.getBoundingClientRect();
      const dx = e.clientX - (b.left + b.width / 2);
      const dy = e.clientY - (b.top + b.height / 2);
      el.style.transition = 'transform .25s ease-out';
      el.style.transform = `translate3d(${(dx * .26).toFixed(1)}px, ${(dy * .34).toFixed(1)}px, 0)`;
    });
    el.addEventListener('pointerleave', () => {
      el.style.transition = 'transform .5s cubic-bezier(.16,1,.3,1)';
      el.style.transform = '';
    });
  });

}

/* ===============================================================
   Crachá pendurado — um pêndulo amortecido
   O cordão e o cartão giram em volta do topo do cordão. O vento do
   mouse passando perto empurra o crachá; dá para pegar, arrastar e
   soltar, e ele volta balançando até parar.
   =============================================================== */
(() => {
  const zone = $('#badgeZone');
  const rig = $('#badgeRig');
  const card = $('#idCard');
  if (!zone || !rig || !card) return;

  const G = 11;        // "gravidade / comprimento": quanto maior, mais rápido o balanço
  const DAMP = 1.15;   // atrito do ar
  const MAX = .75;     // ângulo máximo, em radianos (~43°)
  const st = { a: 0, w: 0, drag: false, grab: 0, lastPx: -1 };

  // o pivô é o topo do rig, que não se move com a rotação
  const pivot = () => {
    const z = zone.getBoundingClientRect();
    return { x: z.left + z.width / 2, y: z.top + rig.offsetTop };
  };
  const angleTo = (x, y) => { const p = pivot(); return Math.atan2(x - p.x, y - p.y); };

  card.addEventListener('pointerdown', e => {
    st.drag = true;
    st.grab = st.a - angleTo(e.clientX, e.clientY);  // sem pulo ao pegar fora do centro
    card.setPointerCapture(e.pointerId);
    e.preventDefault();
  });
  const release = () => { st.drag = false; st.w = clamp(st.w, -3.5, 3.5); };
  card.addEventListener('pointerup', release);
  card.addEventListener('pointercancel', release);

  if (fine && !reduced) {
    const cur = $('#cursor');
    card.addEventListener('pointerenter', () => cur.classList.add('is-drag'));
    card.addEventListener('pointerleave', () => { if (!st.drag) cur.classList.remove('is-drag'); });
    card.addEventListener('pointerup', e => {
      const b = card.getBoundingClientRect();
      const inside = e.clientX >= b.left && e.clientX <= b.right && e.clientY >= b.top && e.clientY <= b.bottom;
      cur.classList.toggle('is-drag', inside);
    });
  }

  scene((dtMs) => {
    const dt = dtMs / 1000;
    const b = zone.getBoundingClientRect();
    if (b.bottom < -200 || b.top > S.vh + 200) { st.lastPx = -1; return; }  // fora da tela

    if (st.drag) {
      const next = clamp(angleTo(S.px, S.py) + st.grab, -MAX, MAX);
      st.w = lerp(st.w, (next - st.a) / Math.max(dt, 1e-3), .5);  // velocidade para o arremesso
      st.a = next;
    } else if (!reduced) {
      // vento: o mouse passando perto do crachá empurra na direção do movimento
      if (S.pointer && st.lastPx >= 0) {
        const r = card.getBoundingClientRect();
        const dx = Math.max(r.left - S.px, 0, S.px - r.right);
        const dy = Math.max(r.top - S.py, 0, S.py - r.bottom);
        const near = clamp(1 - Math.hypot(dx, dy) / 180);
        if (near > 0) st.w += (S.px - st.lastPx) * .007 * near;
      }
      st.w += (-G * Math.sin(st.a) - DAMP * st.w) * dt;
      st.a = clamp(st.a + st.w * dt, -MAX, MAX);
      if (Math.abs(st.a) === MAX) st.w *= -.4;  // bate no limite e volta
    }
    st.lastPx = S.pointer ? S.px : -1;

    // rotate() positivo gira no sentido horário: o cartão vai para a esquerda,
    // então o ângulo entra com sinal trocado. O giro em Y dá volume ao balanço.
    rig.style.transform = `rotate(${(-st.a).toFixed(4)}rad)`;
    card.style.transform = `perspective(900px) rotateY(${clamp(st.w * 7, -22, 22).toFixed(2)}deg)`;
  });
})();

/* ===============================================================
   Faixas rolantes que aceleram com a rolagem
   =============================================================== */
const tracks = $$('.marquee-track').map(el => ({
  el, x: 0, w: 0, dir: el.classList.contains('rev') ? 1 : -1
}));
const measureTracks = () => tracks.forEach(t => { t.w = t.el.scrollWidth / 3; });
measureTracks();

let lastY = scrollY, vy = 0;
scene(dt => {
  const dy = scrollY - lastY; lastY = scrollY;
  vy = damp(vy, dy, 90, dt);
  tracks.forEach(t => {
    if (!t.w) return;
    t.x += t.dir * (dt * .045 + Math.abs(vy) * .02);
    if (t.x <= -t.w) t.x += t.w;
    if (t.x >= 0) t.x -= t.w;
    t.el.style.transform = `translate3d(${t.x.toFixed(2)}px, 0, 0)`;
  });
});

/* ===============================================================
   Slider de projetos
   =============================================================== */
(() => {
  const track = $('#slides');
  if (!track) return;
  const slides = [...track.children];
  const cur = $('#cur'), total = $('#total'), bar = $('#progress');
  let i = 0;

  total.textContent = String(slides.length).padStart(2, '0');

  const go = n => {
    i = clamp(n, 0, slides.length - 1);
    track.style.transform = `translate3d(-${i * 100}%, 0, 0)`;
    cur.textContent = String(i + 1).padStart(2, '0');
    bar.style.width = ((i + 1) / slides.length * 100) + '%';
  };
  go(0);

  $('#next').addEventListener('click', () => go(i + 1));
  $('#prev').addEventListener('click', () => go(i - 1));
  addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') go(i + 1);
    if (e.key === 'ArrowLeft') go(i - 1);
  });

  let x0 = null;
  const begin = x => (x0 = x);
  const end = x => {
    if (x0 === null) return;
    const d = x - x0; x0 = null;
    if (Math.abs(d) > 60) go(d < 0 ? i + 1 : i - 1);
  };
  track.addEventListener('touchstart', e => begin(e.touches[0].clientX), { passive: true });
  track.addEventListener('touchend',   e => end(e.changedTouches[0].clientX));
  track.addEventListener('mousedown',  e => { e.preventDefault(); begin(e.clientX); });
  addEventListener('mouseup', e => end(e.clientX));
})();

/* ===============================================================
   Paralaxe das letras gigantes dos projetos
   =============================================================== */
const ghosts = $$('.slide-ghost');
scene(() => {
  ghosts.forEach(g => {
    const b = g.getBoundingClientRect();
    const off = (b.top + b.height / 2 - S.vh / 2) / S.vh;
    g.style.transform = `translate3d(${(off * 60).toFixed(1)}px, -50%, 0)`;
  });
});

/* ===============================================================
   Loop e medidas
   =============================================================== */
let last = performance.now();
const loop = now => {
  const dt = Math.min(now - last, 50) || 16.67;
  last = now;
  S.y = scrollY;
  for (let i = 0; i < scenes.length; i++) scenes[i](dt, now);
  requestAnimationFrame(loop);
};
requestAnimationFrame(loop);

let rt;
addEventListener('resize', () => {
  clearTimeout(rt);
  rt = setTimeout(() => {
    S.vw = innerWidth; S.vh = innerHeight;
    measureTracks();
    buildCode();
  }, 180);
});

})();
