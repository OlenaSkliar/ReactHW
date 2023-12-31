import React from 'react';
import styles from './textcontent.css';
import Avatar from "./dg.png";
export function TextContent() {
  return (
      <div className={styles.textContent}>
          <div className={styles.metaData}>
              <div className={styles.userLink}>
                  <img className={styles.avatar} src={Avatar} alt="avatar"/>
                  <a href="ReactComponents/src/shared/CardsList/Card/TextContent#user-url" className={styles.username}>Дмитрий Гришин</a>
              </div>
              <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано</span>
          4 часа назад
      </span>
          </div>
          <h2 className={styles.title}>
              <a href="ReactComponents/src/shared/CardsList/Card/TextContent#post-url" className={styles.postLink}>Следует отметить, что новая модель организационной деятельности...</a>
          </h2>
      </div>
  );
}
