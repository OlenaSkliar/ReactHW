import React from 'react';
import styles from './dropdownlist.css';

export function DropdownList() {
  return (
      <ul className={styles.list} >
        <li className={styles.listItem}><a href="#" className={styles.link}>Комментарии</a></li>
        <li className={styles.listItem}><a href="#" className={styles.link}>Поделиться</a></li>
        <li className={styles.listItem}><a href="#" className={styles.link}>Скрыть</a></li>
        <li className={styles.listItem}><a href="#" className={styles.link}>Сохранить</a></li>
        <li className={styles.listItem}><a href="#" className={styles.link}>Пожаловаться</a></li>
      </ul>
  );
}
