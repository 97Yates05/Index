import React from 'react';
import styles from './Education.less';
import hebut from '@/assets/hebut.svg';

export default () => {
  return (
    <div className={styles.main}>
      <div>
        <svg className="icon" aria-hidden="true" style={{ fontSize: 18 }}>
          <use href="#icon-education" />
        </svg>
        <span className="font" style={{ marginLeft: 10, fontSize: 18 }}>
          教育背景
        </span>
      </div>
      <div className={styles.content}>
        <div className={styles.school}>
          <div style={{ flex: 1 }}>
            <div>2019 - 2022</div>
            <div style={{ marginTop: 10 }}><span className='font'>北京邮电大学</span> | 软件工程硕士学位</div>
          </div>
          <svg className="icon" aria-hidden="true" style={{ fontSize: 44 }}>
            <use href="#icon-bupt" />
          </svg>
        </div>
        <hr />
        <div className={styles.school} style={{ marginTop: 10 }}>
          <div style={{ flex: 1 }}>
            <div>2015 - 2019</div>
            <div style={{ marginTop: 10 }}><span className='font'>河北工业大学</span> | 电气工程及其自动化学士学位</div>
          </div>
          <img src={hebut} alt="logo" style={{ width: 44, height: 44,color:'#000' }} />
        </div>
      </div>
    </div>
  );
};
