import styles from './JobFunnelSection.module.css';
import Link from 'next/link';

export default function JobFunnelSection({ 
  title, paragraph1, paragraph2, buttonText, imageUrl , link
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
         <Link href={link}> <button>{buttonText}</button></Link>
        </div>

      </div>
    </section>
  );
}
