const adminUrl = 'https://watsuadmin.verzichova.cz/';

export async function loadImageData(hash) {
  const res = await fetch(`${adminUrl}api-image/image-data/${hash}`);
  const imageData = await res.json();

  return imageData;
}

export const imageLoader = ({ width, src, square = false }) => {
  if (square) {
    return `${adminUrl}api-image/image/${src}?width=${width}&originalRatio=0`;
  }
  return `${adminUrl}api-image/image/${src}?width=${width}`;
};