import React from 'react';
import styles from './Profile.less';
export default () => {
  return (
    <div className={styles.main}>
      <div>
        <svg className="icon" aria-hidden="true" style={{ fontSize: 18 }}>
          <use href="#icon-profile" />
        </svg>
        <span className="font" style={{ marginLeft: 10, fontSize: 18 }}>
          自我介绍
        </span>
      </div>
      <div className={styles.content}>
        兴趣是最好的老师，喜欢看书，善于利用网络学习并加以应用；<br/>
        较强的执行力和抗压能力，能完成好自己的本职工作；<br />
        关注前端前沿技术，有组件化的思想，良好的代码风格。
      </div>
    </div>
  );
};
