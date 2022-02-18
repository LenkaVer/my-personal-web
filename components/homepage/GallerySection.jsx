import styles from './GallerySection.module.scss';
import Image from 'next/image';
import { imageLoader } from '../../functions/imageLoader';
import { SRLWrapper } from 'simple-react-lightbox';

const GallerySection = ({ images }) => {
  const galleryImages = [
    { data: images.watsu1, width: 300, height: 300 },
    { data: images.watsu2, width: 300, height: 300 },
    { data: images.watsu3, width: 300, height: 300 },
    { data: images.watsu4, width: 500, height: 500 },
    { data: images.watsu5, width: 500, height: 500 },
    { data: images.watsu6, width: 300, height: 300 },
    { data: images.watsu7, width: 300, height: 300 },
    { data: images.watsu8, width: 300, height: 300 },
    { data: images.watsu9, width: 300, height: 300 },
  ];
  const options = {
    buttons: {
      showAutoplayButton: false,
      showDownloadButton: false,
      showFullscreenButton: false,
      showThumbnailsButton: false,
    },
  };
  const squareLoader = ({ width, src }) => {
    return imageLoader({ width: width, src: src, square: true });
  };
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <h2
            className={[styles.title, 'titleDecoration', 'sectionHeading'].join(
              ' ',
            )}
          >
            Jak vypadá terapie
          </h2>
          <SRLWrapper options={options}>
            <div className={styles.gallery}>
              {galleryImages.map((galleryImage, index) => {
                return (
                  <a
                    key={galleryImage.data.hash}
                    href={galleryImage.data.originalUrl}
                    className={[
                      styles.galleryItem,
                      styles[`image${index}`],
                    ].join(' ')}
                  >
                    <Image
                      loader={squareLoader}
                      src={galleryImage.data.hash}
                      alt={galleryImage.data.alt}
                      width={galleryImage.width}
                      height={galleryImage.height}
                      placeholder={'blur'}
                      blurDataURL={galleryImage.data.base64}
                      priority={true}
                    />
                  </a>
                );
              })}
            </div>
          </SRLWrapper>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
