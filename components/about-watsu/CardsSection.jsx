import styles from './CardsSection.module.scss';
import AboutWatsuCard from './AboutWatsuCard';

const CardsSection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <h1
          className={[styles.title, 'titleDecoration', 'mainHeading'].join(' ')}
        >
          O Watsu
        </h1>
        <div className={styles.wrapper}>
          <AboutWatsuCard
            title="Účinky"
            link="/o-watsu/ucinky"
            imageSource={'/icons/effects.svg'}
            imageAlt="účinky"
          >
            {' '}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ad
              aliquid quisquam laborum, earum obcaecati placeat quis! Tempore at
              quibusdam reiciendis tenetur blanditiis voluptatem minima,
              perferendis, aspernatur pariatur, nostrum porro! Ex inventore
              temporibus, dolorem odit amet excepturi alias! Voluptatum animi
              sint adipisci, est, nemo quos amet earum tempore iusto harum natus
              quidem aliquid sit voluptatem porro deleniti dolores aut
              consequuntur?
            </p>
          </AboutWatsuCard>
          <AboutWatsuCard
            title="Průběh terapie"
            link="/o-watsu/prubeh-terapie"
            imageSource={'/icons/therapy.svg'}
            imageAlt="průběh terapie"
          >
            {' '}
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam,
              dicta consectetur nihil odit quaerat natus culpa deserunt eaque ab
              sit assumenda error nulla libero. Non ex ratione eligendi velit
              harum?
            </p>
          </AboutWatsuCard>
          <AboutWatsuCard
            title="Kontraindikace"
            link="/o-watsu/kontraindikace"
            imageSource={'/icons/contraindications.svg'}
            imageAlt="kontraindikace"
          >
            {' '}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Praesentium, accusantium exercitationem voluptatum laborum id
              similique quos, dolorem nisi repellat, velit facere. Veritatis,
              nisi. Ab non placeat, quibusdam excepturi perspiciatis optio?
              Rerum voluptatibus labore, autem distinctio consequuntur nostrum
              at neque reiciendis fugit nulla, ipsa praesentium quasi veniam
              modi aperiam commodi nisi reprehenderit recusandae, temporibus
              mollitia officiis assumenda vel repellendus voluptatum. Error.
            </p>
          </AboutWatsuCard>
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
