import styles from './TopJobsSection.module.css';

export default function TopJobsSection({ title, paragraph1, paragraph2, imageUrl }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.left}>
          <h2>{title}</h2>
          <p>{paragraph1}</p>
          <p>{paragraph2}</p>
        </div>

        <div className={styles.right}>
          <img 
            src={imageUrl} 
            alt="Top Jobs" 
          />
        </div>

      </div>
    </section>
  );
}
