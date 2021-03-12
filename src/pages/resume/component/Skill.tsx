import React from 'react';
import { useIntl } from 'umi';
import styles from './Skill.less';

export default () => {
  const intl = useIntl();

  return (
    <div className={styles.main}>
      <div>
        <svg className="icon" aria-hidden="true" style={{ fontSize: 18 }}>
          <use href="#icon-skill" />
        </svg>
        <span className="font" style={{ marginLeft: 10, fontSize: 18 }}>
          {intl.formatMessage({
            id: 'skill',
          })}
        </span>
      </div>
      <ul className={styles.list}>
        <li>
          {intl.formatMessage({
            id: 'skillItem1',
          })}
        </li>
        <li>
          {intl.formatMessage({
            id: 'skillItem2',
          })}
        </li>
        <li>
          {intl.formatMessage({
            id: 'skillItem3',
          })}
        </li>
        <li>
          {intl.formatMessage({
            id: 'skillItem4',
          })}
        </li>
        <li>
          {intl.formatMessage({
            id: 'skillItem5',
          })}
        </li>
        <li>
          {intl.formatMessage({
            id: 'skillItem6',
          })}
        </li>
        <li>
          {intl.formatMessage({
            id: 'skillItem7',
          })}
        </li>
        <li>
          {intl.formatMessage({
            id: 'skillItem8',
          })}
        </li>
        <li>
          {intl.formatMessage({
            id: 'skillItem9',
          })}
        </li>
        <li>
          {intl.formatMessage({
            id: 'skillItem10',
          })}
        </li>
        <li>
          {intl.formatMessage({
            id: 'skillItem11',
          })}
        </li>
        <li>
          {intl.formatMessage({
            id: 'skillItem12',
          })}
        </li>
      </ul>
      <div>
        <svg className="icon" aria-hidden="true" style={{ fontSize: 18 }}>
          <use href="#icon-web" />
        </svg>
        <span className="font" style={{ marginLeft: 10, fontSize: 18 }}>
          {intl.formatMessage({
            id: 'personalWebsite',
          })}
        </span>
      </div>
      <div>
        {intl.formatMessage({
          id: 'home',
        })}
        ：<a href="https://yangchenhui.xin">yangchenhui.xin</a>
      </div>
      <div>
        {intl.formatMessage({
          id: 'blog',
        })}
        ：<a href="https://blog.yangchenhui.xin">blog.yangchenhui.xin</a>
      </div>
      <div>
        {intl.formatMessage({
          id: 'music',
        })}
        ：<a href="https://music.yangchenhui.xin">music.yangchenhui.xin</a>
      </div>
    </div>
  );
};
