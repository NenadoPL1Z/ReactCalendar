import React, {FC} from 'react';
import {Layout, Menu, Row} from "antd";
import {useHistory} from "react-router-dom";
import {useTypedSelector} from "../hooks/useTypedSelector";

const Navbar: FC = () => {
    const router = useHistory()
    const {isAuth} = useTypedSelector(state => state.auth)
    return (
        <Layout.Header>
            <Row justify='end'>
                {isAuth ?
                    <>
                        <div style={{color: 'white', marginRight: '10px'}}>WWK</div>
                        <Menu theme='dark' mode='horizontal'  selectable={false}>
                            <Menu.Item
                                key={1}
                                onClick={() => console.log(1)}>Выйти</Menu.Item>
                        </Menu>
                    </>
                    :
                    <Menu theme='dark' mode='horizontal'  selectable={false}>
                        <Menu.Item
                            key={1}
                            onClick={() => router.push('/login')}>Войти</Menu.Item>
                    </Menu>}
            </Row>
        </Layout.Header>
    );
};

export default Navbar;