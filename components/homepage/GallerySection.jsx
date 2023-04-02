import styles from './GallerySection.module.scss';
import Image from 'next/image';
import { imageLoader } from '../../functions/imageLoader';
//import { SRLWrapper } from 'simple-react-lightbox';
import SectionCard from '../globals/SectionCard';
import { useState } from 'react';
import FsLightbox from 'fslightbox-react';

const GallerySection = ({ images }) => {
  const [toggler, setToggler] = useState(false);
  const [slide, setSlide] = useState(0);

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
  const lightboxUrls = galleryImages.map((galleryImage) =>
    imageLoader({
      width: 1800,
      src: galleryImage.data.hash,
      square: false,
    }),
  );
  const squareLoader = ({ width, src }) => {
    return imageLoader({ width: width, src: src, square: true });
  };
  return (
    <SectionCard extraClass={'gallerySection'}>
      <h2
        className={[styles.title, 'titleDecoration', 'sectionHeading'].join(
          ' ',
        )}
      >
        Jak vypadá terapie
      </h2>

      <div className={styles.gallery}>
        {galleryImages.map((galleryImage, index) => {
          return (
            <div
              key={galleryImage.data.hash}
              onClick={() => {
                setSlide(index + 1);
                setToggler(!toggler);
              }}
              className={[styles.galleryItem, styles[`image${index}`]].join(
                ' ',
              )}
            >
              <Image
                loader={squareLoader}
                src={galleryImage.data.hash}
                alt={galleryImage.data.alt}
                width={galleryImage.width}
                height={galleryImage.height}
                placeholder={'blur'}
                blurDataURL={galleryImage.data.base64}
                srl_gallery_image="true"
                sizes={
                  [3, 4].includes(index)
                    ? `(max-width: 768px) 55vw, (max-width: 1500px) 37vw, 554px`
                    : `(max-width: 768px) 28vw, (max-width: 1500px) 18vw, 273px`
                }
              />
            </div>
          );
        })}
      </div>
      <FsLightbox toggler={toggler} sources={lightboxUrls} slide={slide} />
    </SectionCard>
  );
};

export default GallerySection;
