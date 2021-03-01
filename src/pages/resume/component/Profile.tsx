import React from 'react';
import { useIntl } from 'umi';
import styles from './Profile.less';
export default () => {
  const intl = useIntl();
  return (
    <div className={styles.main}>
      <div>
        <svg className="icon" aria-hidden="true" style={{ fontSize: 18 }}>
          <use href="#icon-profile" />
        </svg>
        <span className="font" style={{ marginLeft: 10, fontSize: 18 }}>
          {intl.formatMessage({
            id: 'profile',
          })}
        </span>
      </div>
      <div className={styles.content}>
        {intl.formatMessage({
          id: 'profileContent1',
        })}
        <br />
        {intl.formatMessage({
          id: 'profileContent2',
        })}
        <br />
        {intl.formatMessage({
          id: 'profileContent3',
        })}
      </div>
    </div>
  );
};
