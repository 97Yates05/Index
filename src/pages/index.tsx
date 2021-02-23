import React, { useEffect, useState } from 'react';
import anime from 'animejs';
import styles from './index.less';
import { blue, red } from '@ant-design/colors';
import blogSvg from '@/assets/blog.svg';
import musicSvg from '@/assets/music.svg';
import { Link } from 'umi';

export default () => {
  const [type, setType] = useState('music');
  const [isShow, setIsShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    anime({
      targets: '#title span',
      translateX: 20,
      duration: 1500,
      direction: 'alternate',
      loop: true,
      delay: anime.stagger(150),
      easing: 'cubicBezier(.5, .05, .1, .3)',
    });
    let music = anime({
      targets: '#music',
      strokeDashoffset: '*=0.5',
      easing: 'linear',
      autoplay: false,
      duration: 5000,
      complete: () => {
        anime.set('#music', {
          strokeDashoffset: 'calc(6.28 * 40%)',
        });
        blog.restart();
        setType('blog');
      },
    });
    let blog = anime({
      targets: '#blog',
      strokeDashoffset: '*=0.5',
      easing: 'linear',
      autoplay: false,
      duration: 5000,
      complete: () => {
        anime.set('#blog', {
          strokeDashoffset: 'calc(6.28 * 40%)',
        });
        music.restart();
        setType('music');
      },
    });
    music.play();
  }, []);
  useEffect(() => {
    if (isShow) {
      anime({
        targets: '.list div',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 750,
        delay: anime.stagger(150),
        easing: 'cubicBezier(.5, .05, .1, .3)',
        begin: () => {
          anime.set('.list', {
            visibility: 'visible',
          });
        },
      });
    } else {
      anime({
        targets: '.list div',
        opacity: 0,
        translateY: 20,
        duration: 750,
        delay: anime.stagger(50),
        easing: 'cubicBezier(.5, .05, .1, .3)',
        complete: () => {
          anime.set('.list', {
            visibility: 'hidden',
          });
        },
      });
    }
  }, [isShow]);

  return (
    <div
      className={styles.main}
      style={{ backgroundColor: `${type === 'music' ? red[3] : blue[3]}` }}
    >
      <div className={styles.logo} id="title">
        <span>杨</span>
        <span>晨</span>
        <span>辉</span>
        <span>的</span>
        <span>小</span>
        <span>站</span>
      </div>
      <div
        className={styles.img}
        onClick={() => window.open('https://' + type + '.yangchenhui.xin')}
      >
        <img
          src={type === 'music' ? musicSvg : blogSvg}
          alt="轮播图"
          style={{ height: '10vw' }}
        />
        <div>{type === 'music' ? '在线音乐' : '个人博客'}</div>
      </div>
      <div className={styles.menu}>
        <svg
          className="icon"
          aria-hidden="true"
          onClick={() => setIsShow(!isShow)}
          style={{ fontSize: 25 }}
        >
          <use href="#icon-menu" />
        </svg>
        <div className={`list ${styles.list}`}>
          <div>
            <Link to="/resume">简历</Link>
          </div>
          <div onClick={() => setIsOpen(true)}>介绍</div>
        </div>
      </div>
      <div className={styles.content}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width={'100%'}
          height={'100%'}
        >
          <circle
            cx="50%"
            cy="50%"
            r="40%"
            stroke="white"
            strokeWidth="1"
            fill={'none'}
          />
          <circle
            id="music"
            className={styles.circle}
            cx="50%"
            cy="50%"
            r="40%"
            fill="none"
            stroke="white"
            strokeWidth={5}
            strokeLinecap="round"
          />
          <circle
            id="blog"
            className={styles.rotate}
            cx="50%"
            cy="50%"
            r="40%"
            fill="none"
            stroke="white"
            strokeLinecap="round"
            strokeWidth={5}
          />
          <circle
            cx="90%"
            cy="50%"
            r="10"
            stroke="white"
            strokeWidth={1}
            fill="#fff"
            style={{ fill: `${type === 'blog' ? blue[3] : '#fff'}` }}
          />
          <circle
            cx="10%"
            cy="50%"
            r="10"
            stroke="white"
            strokeWidth={1}
            style={{ fill: `${type === 'music' ? red[3] : '#fff'}` }}
          />
        </svg>
      </div>
      <div
        className={styles.drawer}
        style={{ width: `${isOpen ? '100%' : '0'}` }}
      >
        <div
          className={styles.mask}
          style={{
            opacity: `${isOpen ? 1 : 0}`,
            height: `${isOpen ? '100%' : 0}`,
          }}
          onClick={() => setIsOpen(false)}
        />
        <div
          className={styles.drawerContent}
          style={{ transform: `translateX(${isOpen ? '-10px' : '100%'})` }}
        >
          <div className={styles.title}>网站详情</div>
          <div>
            本网站使用React开发，为其他个人开发网站的导航站，目前有在线音乐(基于Vue开发)和个人博客(基于React开发)两个网站。
          </div>
          <div className={styles.title}>导航列表</div>
          <div style={{ marginBottom: 10 }}>
            <img
              src={musicSvg}
              className={styles.avatar}
              alt="icon"
              style={{ backgroundColor: red[3] }}
            />
            <span className={styles.listTitle}>在线音乐</span>
          </div>
          <div>
            在线音乐应用，仿照mac网易云音乐客户端实现了部分功能（后期考虑重构）。前端基于Vue，采用Vue
            Cli集成路由、状态管理等功能;后端基于开源
            <a href="https://github.com/Binaryify/NeteaseCloudMusicApi">
              网易云音乐API库
            </a>
            实现。
          </div>
          <div style={{ marginTop: 20, marginBottom: 10 }}>
            <img
              src={blogSvg}
              className={styles.avatar}
              alt="icon"
              style={{ backgroundColor: blue[3] }}
            />
            <span className={styles.listTitle}>个人博客</span>
          </div>
          <div>
            个人博客应用，目前还处于迭代中。前端基于React，采用Next.js集成路由配置、打包等功能；后端采用Dgraph图数据库，配合图形化查询语言graphql。
          </div>
        </div>
      </div>
    </div>
  );
};
