import './index.css';
import React, { useEffect, useState } from 'react';
import { headerfetchDataObservable$ } from '../../service/header'
// import { observable } from "rxjs";

const Header = () => {
  const [campusSelectedValue, setCampusSelectedValue] = useState('1');
  const [gradeSelectedValue, setGradeSelectedValue] = useState('1');
  const [classSelectedValue, setClassSelectedValue] = useState('1');

  useEffect(() => {
    const headerSubcribe = headerfetchDataObservable$.subscribe(res => {
      const { campusId, gradeId, classId } = res;
      setGradeSelectedValue(gradeId);
      setClassSelectedValue(classId);
      setCampusSelectedValue(campusId);
    })
    return () => {
      headerSubcribe.unsubscribe();
    }
  }, []);

  const campusChangeHandler = (e) => {
    console.log('%cindex.js line:20 e', 'color: #007acc;', e.target.value);
  };

  const gradeChangeHandler = () => {};

  const classChangeHandler = () => {};

  return <div className='header_wrap'>
    <div>
      <span>校区：</span>
      <select onChange={campusChangeHandler} value={campusSelectedValue} name="校区" id="campus">
        <option value="1">校区-1</option>
        <option value="2">校区-2</option>
        <option value="3">校区-3</option>
        <option value="4">校区-4</option>
      </select>
    </div>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <div>
      <span>年级：</span>
      <select value={gradeSelectedValue} name="年级" id="grade">
        <option value="1">高一</option>
        <option value="2">高二</option>
        <option value="3">高三</option>
      </select>
    </div>

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <div>
      <span>班级：</span>
      <select value={classSelectedValue} name="年级" id="grade">
        <option value="1">一班</option>
        <option value="2">二班</option>
        <option value="3">三班</option>
      </select>
    </div>
    
  </div>
}

export default Header;