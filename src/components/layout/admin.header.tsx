'use client'
import { Layout, Menu, theme } from 'antd';

const AdminHeader = () =>{
    const { Header } = Layout;
    const {
        token: { colorBgContainer },
      } = theme.useToken();
    return(
        <Header style={{ padding: 0, background: "#CCC" }} />
    )
}

export default AdminHeader;