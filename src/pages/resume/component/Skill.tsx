import React from 'react';
import styles from './Skill.less';

export default () => {
  return (
    <div className={styles.main}>
      <div>
        <svg className="icon" aria-hidden="true" style={{ fontSize: 18 }}>
          <use href="#icon-skill" />
        </svg>
        <span className="font" style={{ marginLeft: 10, fontSize: 18 }}>
          技能/荣誉
        </span>
      </div>
      <ul className={styles.list}>
        <li>熟练掌握JavaScript</li>
        <li>熟练使用JS框架React</li>
        <li>熟练使用HTML和CSS</li>
        <li>熟悉TypeScript的使用</li>
        <li>熟悉CSS框架Antd、Element</li>
        <li>了解网络通信基本原理</li>
        <li>了解Node.js和Webpack</li>
        <li>了解基本的算法和数据结构</li>
        <li>了解Graphql和Dgraph</li>
        <li>了解Docker和Jenkins</li>
        <li>中国大学生服务外包大赛二等奖</li>
        <li>英语四六级合格</li>
        <li>院级优秀志愿者</li>
      </ul>
      <div>
        <svg className="icon" aria-hidden="true" style={{ fontSize: 18 }}>
          <use href="#icon-web" />
        </svg>
        <span className="font" style={{ marginLeft: 10, fontSize: 18 }}>
          个人网站
        </span>
      </div>
      <a href="https://yangchenhui.xin">https://yangchenhui.xin</a>
    </div>
  );
};
