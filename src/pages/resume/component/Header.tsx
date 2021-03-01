import React from 'react';
import { useIntl } from 'umi';
import styles from './Header.less';

export default () => {
  const intl = useIntl();
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <div className="font" style={{ fontSize: 30 }}>
          {intl.formatMessage({
            id: 'name',
          })}
        </div>
        <div style={{ fontSize: 12 }}>
          {intl.formatMessage({
            id: 'motto',
          })}
        </div>
      </div>
      <div className={styles.right}>
        <div>
          <svg className="icon" aria-hidden="true">
            <use href="#icon-frontend" />
          </svg>
          <span className={styles.info}>
            {intl.formatMessage({
              id: 'career',
            })}
          </span>
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
          <span className={styles.info}>
            {intl.formatMessage({
              id: 'address',
            })}
          </span>
        </div>
      </div>
    </div>
  );
};
