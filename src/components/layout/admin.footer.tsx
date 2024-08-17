'use client'

import { Layout } from 'antd';

const AdminFooter = () =>{
    const { Footer } = Layout;
    return (
        <Footer style={{ textAlign: 'center' }}>
       Anh Dung  ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    )

}

export default AdminFooter;