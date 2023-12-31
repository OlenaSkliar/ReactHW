import React from 'react';
import styles from './layout.css';
import {Header} from "../Header";
import {Content} from "../Content";

interface ILayoutProps{
  children?: React.ReactNode;
}
export function Layout({ children }: ILayoutProps) {
  return (
      <div className={styles.layout}>
          {children}
      </div>
  );
}
