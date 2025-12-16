import styles from "./card.module.css";

export const Card = (props) => {
  const {title, body, image, date, author} =props;
  return (
    <div className={styles.container}>
      <img src={image} 
      alt="image" 
      className={styles.image}/>
      <div className={styles.card_body}>
        <label className={styles.card_label}>
        Members Only
        </label>
        <h2 className={styles.card_title}>{title}</h2>
      </div>
      <p className={styles.card_paragraph}>
        {body}
      </p>
      <div className={styles.author}>
        <img src="https://avatar.iran.liara.run/public/19" alt="author-image" className={styles.author_img}/>
        <div className={styles.author_data}>
          <label>{author}</label>
          <label>{date}</label>
        </div>
      </div>
    </div>
  )
}
