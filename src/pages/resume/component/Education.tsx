import React from 'react';
import styles from './Education.less';
import hebut from '@/assets/hebut.svg';
import { useIntl } from 'umi';

export default () => {
  const intl = useIntl();

  return (
    <div className={styles.main}>
      <div>
        <svg className="icon" aria-hidden="true" style={{ fontSize: 18 }}>
          <use href="#icon-education" />
        </svg>
        <span className="font" style={{ marginLeft: 10, fontSize: 18 }}>
          {intl.formatMessage({
            id: 'education',
          })}
        </span>
      </div>
      <div className={styles.content}>
        <div className={styles.school}>
          <div style={{ flex: 1 }}>
            <div>2019 - 2022</div>
            <div style={{ marginTop: 10 }}>
              <div className="font">
                {intl.formatMessage({
                  id: 'buptName',
                })}
              </div>
              <div style={{ fontSize: 12 }}>
                {intl.formatMessage({
                  id: 'buptDegree',
                })}
              </div>
            </div>
          </div>
          <svg className="icon" aria-hidden="true" style={{ fontSize: 44 }}>
            <use href="#icon-bupt" />
          </svg>
        </div>
        <hr />
        <div className={styles.school} style={{ marginTop: 10 }}>
          <div style={{ flex: 1 }}>
            <div>2015 - 2019</div>
            <div style={{ marginTop: 10 }}>
              <div className="font">
                {intl.formatMessage({
                  id: 'hebutName',
                })}
              </div>
              <div style={{ fontSize: 12 }}>
                {intl.formatMessage({
                  id: 'hebutDegree',
                })}
              </div>
            </div>
          </div>
          <img
            src={hebut}
            alt="logo"
            style={{ width: 44, height: 44, color: '#000' }}
          />
        </div>
      </div>
    </div>
  );
};
