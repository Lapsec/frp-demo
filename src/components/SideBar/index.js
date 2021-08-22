import './index.css';
import 'antd/dist/antd.css';
import React, { useEffect, useState } from 'react';
import { sideBarServiceHandler } from '../../service/sideBar';
import { headerBehaviorSubject$ } from '../../service/header.js';
import { Menu } from 'antd';;

const SideBar = () => {
  const [menuList, setMenuList ] = useState([]);
  useEffect(() => {
    headerBehaviorSubject$.subscribe((res: any) => {
      console.log('fucking side bar,', res);
      setMenuList(res?.panelGroup || []);
    })
  }, [])

  console.log('%cindex.js line:17 menuList', 'color: #007acc;', menuList);

  const menuSelecHandler = (event) => {
    const { key } = event;
    // console.log(key);
    sideBarServiceHandler(key);
  };
  return <div className="side_bar_wrap">
    <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      style={{ height: '100%' }}
      onSelect={menuSelecHandler}
    >
      {menuList.map((menuItem: any) => {
        return (<Menu.Item key={menuItem.id}>{menuItem.name}</Menu.Item>)
      })}
    </Menu>
    
  </div>
}

export default SideBar;