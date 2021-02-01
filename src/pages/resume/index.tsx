import React from 'react';
import styles from './index.less';
import Header from './component/Header';
import Experience from './component/Experience'
import Profile from '@/pages/resume/component/Profile';
import Education from '@/pages/resume/component/Education';
import Skill from '@/pages/resume/component/Skill';

export default function IndexPage() {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.content}>
        <Profile />
        <Education />
      </div>
      <div className={styles.footer}>
        <Skill/>
        <Experience />
      </div>
    </div>
  );
}
