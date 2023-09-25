import React from 'react';
import styles from './preview.css';
import PreviewImg from "./previewImg.png";

export function Preview() {
  return (
      <div className={styles.preview}>
        <img className={styles.previewImg} src={PreviewImg} alt="preview-img"/>
      </div>
  );
}
