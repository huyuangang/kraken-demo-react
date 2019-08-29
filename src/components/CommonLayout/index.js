
import React from 'react';
import { Layout, Menu } from 'antd';

import './index.scss';

const { Header, Content } = Layout;

export default function CommonLayout(props) {
    return (
        <Layout>
            <Header className="headerWrap">
                <div className="headerLogo">Kraken</div>
                <div className="navWrap">
                    <Menu mode="horizontal">
                        <Menu.Item className="menuItem">
                            app1
                        </Menu.Item>
                        <Menu.Item className="menuItem">
                            app2
                        </Menu.Item>
                    </Menu>
                </div>
            </Header>
        </Layout>
    )
}
