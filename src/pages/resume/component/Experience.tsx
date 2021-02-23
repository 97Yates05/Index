import React from 'react';
import styles from './Experience.less';

export default () => {
  return (
    <div className={styles.main}>
      <div>
        <svg className="icon" aria-hidden="true" style={{ fontSize: 18 }}>
          <use href="#icon-experience" />
        </svg>
        <span className="font" style={{ marginLeft: 10, fontSize: 18 }}>
          经历/经验
        </span>
      </div>
      <div>
        <div className={styles.title}>
          <div>
            <svg className="icon" aria-hidden="true">
              <use href="#icon-byte" />
            </svg>
            <span className="font" style={{ marginLeft: 10 }}>
              字节跳动 - 垂直业务(实习经历)
            </span>
          </div>
          <div className={`font ${styles.time}`}>2020年10月 - 2020年12月</div>
        </div>
        <div style={{ marginTop: 10 }}>
          主要负责日常业务的迭代需求，日常业务包括ToB方面厂商系统、运管系统和内部的数据平台，ToC方面懂车帝app和小程序。
          <ul style={{ paddingInlineStart: 20 }}>
            <li>
              完成基于Umi的React项目的日常开发需求，包括代码实现、接口联调、自测、提测、代码CR、小流量验证和正式上线；
            </li>
            <li>
              基于ECharts可视化库，解决原有代码重复、不可复用的问题，完成了内部数据平台项目公用组件的封装工作；
            </li>
            <li>参与需求评审，周会进行技术分享；</li>
          </ul>
        </div>
        <hr />
        <div className={styles.title}>
          <div>
            <svg className="icon" aria-hidden="true">
              <use href="#icon-book" />
            </svg>
            <span className="font" style={{ marginLeft: 10 }}>
              科创企业智能估值系统(学院项目)
            </span>
          </div>
          <div className={`font ${styles.time}`}>2021年1月 - 2021年3月</div>
        </div>
        <div style={{ marginTop: 10 }}>
          主要负责前端开发方面的任务分配、需求讲解以及技术指导方面工作。
          <ul style={{ paddingInlineStart: 20 }}>
            <li>
              完成产业链族谱需求，采用AntV的X6图编辑引擎，解决了产业链关系图的展示问题；
            </li>
            <li>
              利用EOLINKER工具管理项目接口，利用云效安排迭代、需求以及跟踪进度；
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
              web在线音乐(个人项目)
            </span>
          </div>
          <div className={`font ${styles.time}`}>2020年2月 - 2020年3月</div>
        </div>
        <div style={{ marginTop: 10 }}>
          主要工作是页面的设计排版、交互逻辑以及页面跳转逻辑的实现，并进行了代码和性能的优化。
          <ul style={{ paddingInlineStart: 20 }}>
            <li>
              基于网易云API，实现web在线搜索、播放音乐、查看MV、私人FM、历史播放、主页等功能;
            </li>
            <li>
              项目地址：
              <a href="https://github.com/97Yates05/Music">
                https://github.com/97Yates05/Music
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
