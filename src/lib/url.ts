// Internal links must survive being served from a subpath (preview builds on
// GitHub Pages) as well as from the domain root (production).
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}${path}`;
}
