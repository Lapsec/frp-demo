import './index.css';
import React, { useEffect, useState } from 'react';
import { headerMountedObserable$ } from '../../service/header'
// import { observable } from "rxjs";

const Header = () => {
  const [campusSelectedValue, setCampusSelectedValue] = useState('1');

  useEffect(() => {
    headerMountedObserable$.subscribe(res => {
      console.log('header res', res);
      const { campusId, gradeId, classId } = res;
      setCampusSelectedValue(campusId);
    })
  }, []);

  return <div className='header_wrap'>
    <div>
      <span>校区：</span>
      <select value={campusSelectedValue} name="校区" id="campus">
        <option value="1">校区-1</option>
        <option value="2">校区-2</option>
        <option value="3">校区-3</option>
        <option value="4">校区-4</option>
      </select>
    </div>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <div>
      <span>年级：</span>
      <select name="年级" id="grade">
        <option value="1">高一</option>
        <option value="2">高二</option>
        <option value="3">高三</option>
      </select>
    </div>

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <div>
      <span>班级：</span>
      <select name="年级" id="grade">
        <option value="1">一班</option>
        <option value="2">二班</option>
        <option value="3">三班</option>
      </select>
    </div>
    
  </div>
}

export default Header;