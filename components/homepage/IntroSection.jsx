import styles from './IntroSection.module.scss';
import Image from 'next/image';
import { imageLoader } from '../../functions/imageLoader';

const IntroSection = ({ images }) => {
  return (
    <section className={styles['intro-section']}>
      <div className="container">
        <div className={styles['intro-section__wrapper']}>
          <div className={styles['intro-section__description']}>
            <h1
              className={
                (styles['intro-section__heading'],
                ['title-decoration'].join(' '))
              }
            >
              Watsu terapie
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              ducimus voluptates aliquid tempore laboriosam unde nam, inventore
              voluptatibus nisi consequuntur dignissimos quis quod, labore qui
              sequi. Suscipit excepturi unde corporis! Nostrum nam distinctio,
              odio cum a maiores aliquid nesciunt fuga voluptatum, sunt
              voluptate, sequi quia debitis recusandae impedit possimus
              repellendus quasi accusamus placeat facilis doloremque maxime
              libero hic. Laboriosam, qui! Veritatis perspiciatis sit doloremque
              deleniti perferendis. Voluptas consequatur sunt repellendus
              aliquam voluptate consectetur laboriosam rerum, voluptatum officia
              totam beatae provident sapiente repellat, molestias quae. Illo
              soluta iste eligendi sit dignissimos! In optio, voluptatum
              accusantium saepe, odio cumque dolore ducimus iste id, architecto
              minima error iusto magnam ipsam. Ipsa, sunt facere, error iure
              aspernatur eligendi provident natus odio labore iste numquam!
            </p>
          </div>
          <div className={styles['intro-section__opinion']}>
            <h3
              className={
                (styles['intro-section__subheading'],
                ['title-decoration'].join(' '))
              }
            >
              Moje cesta k watsu
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              rem, exercitationem, animi possimus cum impedit quis est
              voluptates repudiandae aliquam, blanditiis facere voluptate
              deleniti maxime debitis totam recusandae libero itaque. Fugit
              eligendi odio at, recusandae alias repellendus corporis sit?
              Delectus excepturi consequuntur illum natus alias optio
              praesentium quam vel, eos nesciunt ab quia voluptatibus sequi
              totam reiciendis nihil quibusdam dolore?
            </p>
          </div>

          <div className={styles['intro-section__img']}>
            <Image
              loader={imageLoader}
              src={images.introSectionFoto.hash}
              alt={images.introSectionFoto.alt}
              width={400}
              height={400}
              placeholder={'blur'}
              blurDataURL={images.introSectionFoto.base64}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
