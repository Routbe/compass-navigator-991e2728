/**
 * Vector artwork for Google Wallet passes, drawn in code from the official
 * ROUT logo (src/lib/brand/logo.ts) — never AI-generated. The same SVGs are
 * rasterised to the static PNGs in public/assets/wallet and, per card, by
 * /api/wallet/render/<card>/hero.png.
 */
import { BRAND, bunny, bunnyWithRings } from "@/lib/brand/logo";

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
const HEX6 = /^#[0-9a-f]{6}$/i;
const rgbOf = (hex: string) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16)) as [number, number, number];
const hexOf = (c: number[]) => `#${c.map((v) => Math.round(Math.max(0, Math.min(255, v))).toString(16).padStart(2, "0")).join("")}`;

/** Mixes `b` into `a` by `t` (0..1). */
export function mixHex(a: string, b: string, t: number): string {
  const x = rgbOf(a), y = rgbOf(b);
  return hexOf(x.map((v, i) => v + (y[i]! - v) * t));
}

/** Saturation (0..1) of a hex colour. */
export function saturation(hex: string): number {
  const c = rgbOf(hex).map((v) => v / 255);
  const max = Math.max(...c), min = Math.min(...c);
  return max === 0 ? 0 : (max - min) / max;
}

/**
 * Pass background in the member's own colour. Neutral grey/black canvases are
 * tinted with the profile accent so the closed pass in the Wallet list is never
 * a flat grey block.
 */
export function walletCardColor(bg: string | null | undefined, accent: string | null | undefined): string {
  const base = bg && HEX6.test(bg) ? bg.toLowerCase() : BRAND.ink;
  const acc = accent && HEX6.test(accent) ? accent.toLowerCase() : BRAND.purple;
  if (saturation(base) >= 0.25) return base;
  return mixHex(mixHex(BRAND.ink, acc, 0.55), "#000000", 0.25);
}

/** Square logo (660×660): official bunny inside the purple/mint rings on ink. */
export function walletLogoSvg(size = 660): string {
  const r = size / 2;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}"><rect width="${size}" height="${size}" fill="${BRAND.ink}"/>${bunnyWithRings(r, r, r * 0.92, BRAND.paper)}</svg>`;
}

function guilloche(w: number, h: number, color: string, opacity: number): string {
  let paths = "";
  for (let k = 0; k < 14; k++) {
    let d = "";
    for (let x = 0; x <= w; x += 8) {
      const y = h * 0.55 + Math.sin(x / (38 + k * 3) + k * 0.7) * (h * 0.18) + Math.sin(x / 11 + k) * 4 + (k - 7) * 9;
      d += `${x === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    }
    paths += `<path d="${d}" fill="none" stroke="${color}" stroke-width="1.2" opacity="${opacity}"/>`;
  }
  return paths;
}

/** Sovereign seal (660×660): rosette with the ROUT bunny and certification ring text. */
export function sovereignSealSvg(size = 660): string {
  const c = size / 2;
  const petals = Array.from({ length: 48 }, (_, i) => {
    const a = (i / 48) * Math.PI * 2;
    return `<line x1="${c + Math.cos(a) * c * 0.62}" y1="${c + Math.sin(a) * c * 0.62}" x2="${c + Math.cos(a) * c * 0.96}" y2="${c + Math.sin(a) * c * 0.96}" stroke="${i % 2 ? BRAND.mint : BRAND.purple}" stroke-width="${size * 0.008}" opacity="0.85"/>`;
  }).join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
<defs><radialGradient id="g" cx="40%" cy="35%" r="75%"><stop offset="0" stop-color="#2a2733"/><stop offset="1" stop-color="${BRAND.ink}"/></radialGradient>
<path id="ring" d="M ${c} ${c} m -${c * 0.78} 0 a ${c * 0.78} ${c * 0.78} 0 1 1 ${c * 1.56} 0 a ${c * 0.78} ${c * 0.78} 0 1 1 -${c * 1.56} 0"/></defs>
<circle cx="${c}" cy="${c}" r="${c}" fill="url(#g)"/>${petals}
<circle cx="${c}" cy="${c}" r="${c * 0.6}" fill="${BRAND.ink}" stroke="${BRAND.mint}" stroke-width="${size * 0.01}"/>
<text font-family="Inter, sans-serif" font-weight="600" font-size="${size * 0.05}" letter-spacing="${size * 0.012}" fill="${BRAND.paper}" opacity="0.9"><textPath href="#ring" startOffset="0">SOVEREIGN · VERIFIED · EUROPEAN · ROUT ·</textPath></text>
${bunny(c - c * 0.38, c - c * 0.42, c * 0.76, BRAND.paper)}
</svg>`;
}

/** Compliance array (1032×336): trust bar shown as an image module on the pass. */
export function complianceArraySvg(): string {
  const w = 1032, h = 336;
  const items = [["GDPR", "EU-compliant"], ["eIDAS", "Ready"], ["NFC", "Secure Element"], ["PASSKEY", "WebAuthn"], ["EU", "Data residency"]];
  const cw = (w - 80) / items.length;
  const cells = items.map(([k, v], i) => {
    const x = 40 + i * cw;
    return `<rect x="${x + 6}" y="150" width="${cw - 12}" height="130" rx="18" fill="#ffffff" fill-opacity="0.05" stroke="${i % 2 ? BRAND.purple : BRAND.mint}" stroke-opacity="0.7" stroke-width="2"/>
<text x="${x + cw / 2}" y="212" text-anchor="middle" font-family="Inter, sans-serif" font-weight="600" font-size="30" fill="${BRAND.paper}">${k}</text>
<text x="${x + cw / 2}" y="250" text-anchor="middle" font-family="Inter, sans-serif" font-size="18" fill="${BRAND.paper}" opacity="0.65">${v}</text>`;
  }).join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"><rect width="${w}" height="${h}" fill="${BRAND.ink}"/>${guilloche(w, h, BRAND.mint, 0.08)}
${bunny(40, 40, 64, BRAND.paper)}
<text x="124" y="86" font-family="Inter, sans-serif" font-weight="600" font-size="30" letter-spacing="6" fill="${BRAND.paper}">ROUT TRUST ARRAY</text>
<text x="124" y="114" font-family="Inter, sans-serif" font-size="18" fill="${BRAND.paper}" opacity="0.6">Cryptographic protocols anchored on European infrastructure</text>${cells}</svg>`;
}

export type HeroCard = { displayName: string; handle: string; sovereignId: string; bg: string; accent: string; fg: string; space: "root" | "alias" };

/** Hero image (1032×336, Google's 3.07:1 hero ratio): the front of the member's ROUT Card. */
export function walletHeroSvg(c: HeroCard): string {
  const w = 1032, h = 336;
  const light = mixHex(c.bg, "#ffffff", 0.18), dark = mixHex(c.bg, "#000000", 0.45);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
<defs>
<linearGradient id="base" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${light}"/><stop offset="0.55" stop-color="${c.bg}"/><stop offset="1" stop-color="${dark}"/></linearGradient>
<linearGradient id="sheen" x1="0" y1="0" x2="1" y2="0.4"><stop offset="0.25" stop-color="#ffffff" stop-opacity="0"/><stop offset="0.45" stop-color="#ffffff" stop-opacity="0.16"/><stop offset="0.6" stop-color="#ffffff" stop-opacity="0"/></linearGradient>
<linearGradient id="chip" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f3e3a6"/><stop offset="0.5" stop-color="#c9a84c"/><stop offset="1" stop-color="#8a6d22"/></linearGradient>
</defs>
<rect width="${w}" height="${h}" fill="url(#base)"/>
${guilloche(w, h, c.accent, 0.22)}
<circle cx="${w - 150}" cy="${h / 2}" r="190" fill="none" stroke="${c.accent}" stroke-opacity="0.25" stroke-width="2"/>
<circle cx="${w - 150}" cy="${h / 2}" r="150" fill="none" stroke="${c.accent}" stroke-opacity="0.18" stroke-width="2"/>
${bunny(w - 230, h / 2 - 82, 160, c.fg)}
<rect width="${w}" height="${h}" fill="url(#sheen)"/>
${bunny(48, 36, 46, c.fg)}
<text x="106" y="72" font-family="Inter, sans-serif" font-weight="600" font-size="28" letter-spacing="8" fill="${c.fg}">ROUT</text>
<rect x="48" y="118" width="78" height="58" rx="10" fill="url(#chip)"/>
<path d="M48 147h78M87 118v58M66 118v58M108 118v58" stroke="#6b5418" stroke-opacity="0.5" stroke-width="1.5"/>
<text x="48" y="240" font-family="Inter, sans-serif" font-weight="600" font-size="40" fill="${c.fg}">${esc(c.displayName.slice(0, 32))}</text>
<text x="48" y="286" font-family="Inter, sans-serif" font-size="22" letter-spacing="3" fill="${c.fg}" opacity="0.75">${esc(c.sovereignId)}  ·  ${c.space === "alias" ? "/u/" : "@"}${esc(c.handle.slice(0, 30))}</text>
<rect x="1" y="1" width="${w - 2}" height="${h - 2}" fill="none" stroke="${c.accent}" stroke-opacity="0.45" stroke-width="2"/>
</svg>`;
}

/** Wide logo (1280×400, Google Wallet "wide logo" field): bunny + ROUT wordmark on ink. */
export function walletWideLogoSvg(): string {
  const w = 1280, h = 400;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"><rect width="${w}" height="${h}" fill="${BRAND.ink}"/>
${bunnyWithRings(390, h / 2, 150, BRAND.paper)}
<text x="590" y="246" font-family="Inter, sans-serif" font-weight="600" font-size="150" letter-spacing="30" fill="${BRAND.paper}">ROUT</text></svg>`;
}

/** Brand hero (1032×336): generic class-level hero showing a ROUT Card without personal data. */
export function walletBrandHeroSvg(): string {
  return walletHeroSvg({ displayName: "ROUT Card", handle: "rout", sovereignId: "SOVEREIGN · EU", bg: "#1b1530", accent: BRAND.mint, fg: BRAND.paper, space: "root" });
}

/** Image module (1860×620): ROUT Card front beside its three scan layers. */
export function walletCardModuleSvg(): string {
  const w = 1860, h = 620;
  const rows = [["Public QR", "Shows public identity and card status only"], ["NFC handshake", "Authorises access at a verified reader"], ["Rotating token", "Owner-only, single-use digital proof"]];
  const list = rows.map(([k, v], i) => `<circle cx="1040" cy="${232 + i * 120}" r="10" fill="${i % 2 ? BRAND.purple : BRAND.mint}"/>
<text x="1072" y="${242 + i * 120}" font-family="Inter, sans-serif" font-weight="600" font-size="40" fill="${BRAND.paper}">${k}</text>
<text x="1072" y="${284 + i * 120}" font-family="Inter, sans-serif" font-size="26" fill="${BRAND.paper}" opacity="0.62">${v}</text>`).join("");
  const card = walletHeroSvg({ displayName: "ROUT Card", handle: "rout", sovereignId: "SOVEREIGN · EU", bg: "#1b1530", accent: BRAND.mint, fg: BRAND.paper, space: "root" }).replace(/^<svg [^>]*?width="\d+" height="\d+"/, `<svg xmlns="http://www.w3.org/2000/svg" x="80" y="142" width="860" height="280"`);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"><rect width="${w}" height="${h}" fill="${BRAND.ink}"/>${guilloche(w, h, BRAND.purple, 0.07)}
<text x="80" y="96" font-family="Inter, sans-serif" font-weight="600" font-size="30" letter-spacing="8" fill="${BRAND.mint}">ROUT CARD · THREE LAYERS</text>
${card}${list}</svg>`;
}
