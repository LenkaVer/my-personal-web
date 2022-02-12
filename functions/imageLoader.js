const adminUrl = 'https://watsuadmin.verzichova.cz/';

export async function loadImageData(hash) {
  const res = await fetch(`${adminUrl}api-image/image-data/${hash}`);
  const imageData = await res.json();

  return imageData;
}

export const imageLoader = ({ width, src }) => {
  return `${adminUrl}api-image/image/${src}?width=${width}`;
};