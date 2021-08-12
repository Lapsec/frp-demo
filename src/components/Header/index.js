import './index.css';

const Header = () => {
  return <div className='header_wrap'>
    <div>
      <span>校区：</span>
      <select name="校区" id="campus">
        <option value="campus1">校区-1</option>
        <option value="campus2">校区-2</option>
        <option value="campus3">校区-3</option>
        <option value="campus4">校区-4</option>
      </select>
    </div>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <div>
      <span>年级：</span>
      <select name="年级" id="grade">
        <option value="campus1">高一</option>
        <option value="campus2">高二</option>
        <option value="campus3">高三</option>
      </select>
    </div>

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <div>
      <span>班级：</span>
      <select name="年级" id="grade">
        <option value="campus1">一班</option>
        <option value="campus2">二班</option>
        <option value="campus3">三班</option>
      </select>
    </div>
    
  </div>
}

export default Header;