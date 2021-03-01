import React from 'react';
import styles from './index.less';
import Header from './component/Header';
import Experience from './component/Experience';
import Profile from '@/pages/resume/component/Profile';
import Education from '@/pages/resume/component/Education';
import Skill from '@/pages/resume/component/Skill';
import { getLocale, setLocale, useIntl } from 'umi';
import { useState } from 'react';

export default function IndexPage() {
  const [isZH, setIsZH] = useState(true);
  const intl = useIntl();

  setLocale(isZH ? 'zh-CN' : 'en-US', false);
  const handleClick = () => {
    setIsZH(!isZH);
  };

  return (
    <>
      <div className={styles.main}>
        <Header />
        <div className={styles.content}>
          <Profile />
          <Education />
        </div>
        <div className={styles.footer}>
          <Skill />
          <Experience />
        </div>
      </div>
      <span className={styles.locale}>
        {
          <span className={styles.lang} onClick={handleClick}>
            {intl.formatMessage({
              id: 'lang',
            })}
          </span>
        }
      </span>
    </>
  );
}
