export async function loadImageData(hash) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_ADMIN_URL}/api/${process.env.NEXT_PUBLIC_ADMIN_HASH}/image/data/${hash}`,
  );
  const imageData = await res.json();

  return imageData;
}

export const imageLoader = ({ width, src, square = false }) => {
  if (square) {
    return `${process.env.NEXT_PUBLIC_ADMIN_URL}/api/${process.env.NEXT_PUBLIC_ADMIN_HASH}/image/file/${src}?width=${width}&originalRatio=0`;
  }
  return `${process.env.NEXT_PUBLIC_ADMIN_URL}/api/${process.env.NEXT_PUBLIC_ADMIN_HASH}/image/file/${src}?width=${width}`;
};