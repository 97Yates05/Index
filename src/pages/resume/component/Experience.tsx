import React from 'react';
import { useIntl } from 'umi';
import styles from './Experience.less';

export default () => {
  const intl = useIntl();

  return (
    <div className={styles.main}>
      <div>
        <svg className="icon" aria-hidden="true" style={{ fontSize: 18 }}>
          <use href="#icon-experience" />
        </svg>
        <span className="font" style={{ marginLeft: 10, fontSize: 18 }}>
          {intl.formatMessage({
            id: 'experience',
          })}
        </span>
      </div>
      <div>
        <div className={styles.title}>
          <div>
            <svg className="icon" aria-hidden="true">
              <use href="#icon-tencent" />
            </svg>
            <span className="font" style={{ marginLeft: 10 }}>
              {intl.formatMessage({
                id: 'tencentName',
              })}
            </span>
          </div>
          <div className={`font ${styles.time}`}>
            {intl.formatMessage({
              id: 'tencentTime',
            })}
          </div>
        </div>
        <div style={{ marginTop: 10 }}>
          <ul style={{ paddingInlineStart: 20 }}>
            <li>
              {intl.formatMessage({
                id: 'tencentContent1',
              })}
            </li>
            <li>
              {intl.formatMessage({
                id: 'tencentContent2',
              })}
            </li>
            <li>
              {intl.formatMessage({
                id: 'tencentContent3',
              })}
            </li>
          </ul>
        </div>
        <hr />
        <div className={styles.title}>
          <div>
            <svg className="icon" aria-hidden="true">
              <use href="#icon-byte" />
            </svg>
            <span className="font" style={{ marginLeft: 10 }}>
              {intl.formatMessage({
                id: 'bytedanceName',
              })}
            </span>
          </div>
          <div className={`font ${styles.time}`}>
            {intl.formatMessage({
              id: 'bytedanceTime',
            })}
          </div>
        </div>
        <div style={{ marginTop: 10 }}>
          <ul style={{ paddingInlineStart: 20 }}>
            <li>
              {intl.formatMessage({
                id: 'bytedanceContent1',
              })}
            </li>
            <li>
              {intl.formatMessage({
                id: 'bytedanceContent2',
              })}
            </li>
            <li>
              {intl.formatMessage({
                id: 'bytedanceContent3',
              })}
            </li>
            <li>
              {intl.formatMessage({
                id: 'bytedanceContent4',
              })}
            </li>
          </ul>
        </div>
        <hr />
        <div className={styles.title}>
          <div>
            <svg className="icon" aria-hidden="true">
              <use href="#icon-book" />
            </svg>
            <span className="font" style={{ marginLeft: 10 }}>
              {intl.formatMessage({
                id: 'valueSystemName',
              })}
            </span>
          </div>
          <div className={`font ${styles.time}`}>
            {intl.formatMessage({
              id: 'valueSystemTime',
            })}
          </div>
        </div>
        <div style={{ marginTop: 10 }}>
          <ul style={{ paddingInlineStart: 20 }}>
            <li>
              {intl.formatMessage({
                id: 'valueSystemContent1',
              })}
            </li>
            <li>
              {intl.formatMessage({
                id: 'valueSystemContent2',
              })}
            </li>
          </ul>
        </div>
        <hr />
        <div className={styles.title}>
          <div>
            <svg className="icon" aria-hidden="true">
              <use href="#icon-person" />
            </svg>
            <span className="font" style={{ marginLeft: 10 }}>
              {intl.formatMessage({
                id: 'personProjectName',
              })}
            </span>
          </div>
          <div className={`font ${styles.time}`}>
            {' '}
            {intl.formatMessage({
              id: 'personProjectTime',
            })}
          </div>
        </div>
        <div style={{ marginTop: 10 }}>
          <ul style={{ paddingInlineStart: 20 }}>
            <li>
              {intl.formatMessage({
                id: 'personProjectContent1',
              })}
            </li>
            <li>
              {intl.formatMessage({
                id: 'personProjectContent2',
              })}
            </li>
            <li>
              {intl.formatMessage({
                id: 'personProjectContent3',
              })}
            </li>
            <li>
              {intl.formatMessage({
                id: 'personProjectContent4',
              })}
            </li>
            <li>
              {intl.formatMessage({
                id: 'personProjectContent5',
              })}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
