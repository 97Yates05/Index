import React from 'react';
import styles from './Header.less';

export default () => {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <div className="font" style={{ fontSize: 30 }}>
          杨晨辉
        </div>
        <div style={{ fontSize: 12 }}>
          做你喜欢的事情，任何时候都不会太迟
        </div>
      </div>
      <div className={styles.right}>
        <div>
          <svg className="icon" aria-hidden="true">
            <use href="#icon-frontend" />
          </svg>
          <span className={styles.info}>前端开发工程师</span>
        </div>
        <div>
          <svg className="icon" aria-hidden="true">
            <use href="#icon-phone" />
          </svg>
          <span className={styles.info}>13001302373</span>
        </div>
        <div>
          <svg className="icon" aria-hidden="true">
            <use href="#icon-email" />
          </svg>
          <span className={styles.info}>t783072156@outlook.com</span>
        </div>
        <div>
          <svg className="icon" aria-hidden="true">
            <use href="#icon-address" />
          </svg>
          <span className={styles.info}>北京市海淀区西土城路10号</span>
        </div>
      </div>
    </div>
  );
};
