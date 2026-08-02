import imageDataCache from './imageData.json';

// 1x1 transparent PNG – valid blurDataURL so <Image placeholder="blur" /> never
// throws when the admin API is unreachable and the cache has no entry.
const FALLBACK_BLUR =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';

export async function loadImageData(hash) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_ADMIN_URL}/api/${process.env.NEXT_PUBLIC_ADMIN_HASH}/image/data/${hash}`,
      { headers: { 'User-Agent': 'watsu-frontend/1.0' } },
    );

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }

    const contentType = res.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      throw new Error(`unexpected content-type "${contentType}"`);
    }

    return await res.json();
  } catch (error) {
    // Keep the page renderable instead of crashing getStaticProps. Prefer the
    // real cached blur/alt; fall back to a neutral pixel only if the cache has
    // no entry for this hash.
    console.warn(`loadImageData failed for "${hash}": ${error.message}`);

    return imageDataCache[hash] || { hash, alt: '', base64: FALLBACK_BLUR };
  }
}

export const imageLoader = ({ width, src, square = false }) => {
  if (square) {
    return `${process.env.NEXT_PUBLIC_ADMIN_URL}/api/${process.env.NEXT_PUBLIC_ADMIN_HASH}/image/file/${src}?width=${width}&originalRatio=0`;
  }
  return `${process.env.NEXT_PUBLIC_ADMIN_URL}/api/${process.env.NEXT_PUBLIC_ADMIN_HASH}/image/file/${src}?width=${width}`;
};