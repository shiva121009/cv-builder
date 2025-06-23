import styles from './JobFunnelSection.module.css';

export default function JobFunnelSection({ 
  title, paragraph1, paragraph2, buttonText, imageUrl 
}) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.left}>
          <img 
            src={imageUrl}
            alt="Job Search Funnel"
          />
        </div>

        <div className={styles.right}>
          <h2>{title}</h2>
          <p>{paragraph1}</p>
          <p>{paragraph2}</p>
          <button>{buttonText}</button>
        </div>

      </div>
    </section>
  );
}
