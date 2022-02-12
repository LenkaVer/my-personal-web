import styles from './GallerySection.module.scss';
import Image from 'next/image';
import { imageLoader } from '../../functions/imageLoader';
import { SRLWrapper } from 'simple-react-lightbox';

const GallerySection = ({ images }) => {
  const galleryImages = [
    { data: images.watsu1, width: 800, height: 800 },
    { data: images.watsu2, width: 800, height: 800 },
    { data: images.watsu3, width: 800, height: 800 },
    { data: images.watsu4, width: 800, height: 800 },
    { data: images.watsu5, width: 800, height: 800 },
    { data: images.watsu6, width: 800, height: 800 },
  ];
  const options = {
    buttons: {
      showAutoplayButton: false,
      showDownloadButton: false,
      showFullscreenButton: false,
      showThumbnailsButton: false,
    },
  };
  return (
    <section className={styles['gallery-section']}>
      <div className="container">
        <h2 className={styles['gallery-section__title']}>Jak vypadá terapie</h2>
        <SRLWrapper options={options}>
          <div className={styles['gallery-section__gallery']}>
            {galleryImages.map((galleryImage) => {
              return (
                <a
                  key={galleryImage.data.hash}
                  href={galleryImage.data.originalUrl}
                  className={styles['gallery-section__gallery-item']}
                >
                  <Image
                    loader={imageLoader}
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
    </section>
  );
};

export default GallerySection;
