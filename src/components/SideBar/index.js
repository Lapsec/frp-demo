import './index.css';
import 'antd/dist/antd.css';
import { sideBarServiceHandler } from '../../service/sideBar';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const SideBar = () => {
  const menuSelecHandler = (event) => {
    const { key } = event;
    console.log(key);
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
      <Menu.Item key="1">option1</Menu.Item>
      <Menu.Item key="2">option2</Menu.Item>
      <Menu.Item key="3">option3</Menu.Item>
      <Menu.Item key="4">option4</Menu.Item>
    </Menu>
    
  </div>
}

export default SideBar;