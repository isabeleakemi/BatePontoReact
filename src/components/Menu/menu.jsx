import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './menuData';
import SubMenu from './subMenu';
import { IconContext } from 'react-icons';


export const Nav = styled.div`
    background: #15171c;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;    
`;

export const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const SidebarNav = styled.nav`
    background: #15171c;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
    z-index: 10;
`;

export const SidebarWrap = styled.div`
    width: 100%;
`;

export const TituloNav = styled.h1`
    color: white;
    padding-left: 3rem;
`;

export const TituloUsuario = styled.h3`
    color: white;
    position: absolute;
    right: 2rem;
`;

export const Container = styled.div`
    background: #6C7A89;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
            <IconContext.Provider value={{ color: 'fff' }}>
                <Nav>
                    <NavIcon to='#'>
                        <FaIcons.FaBars onClick={ showSidebar } />
                    </NavIcon>
                    <TituloNav>Sistema BatePonto</TituloNav>
                    <TituloUsuario>Usuário: Isabele Akemi</TituloUsuario>
                </Nav>
                <SidebarNav sidebar={ sidebar }>
                    <SidebarWrap>
                        <NavIcon to='#'>
                            <AiIcons.AiOutlineClose onClick={ showSidebar } />
                        </NavIcon>
                        { SidebarData.map((item, index) => {
                            return <SubMenu item={ item } key={ index } />
                        })}
                    </SidebarWrap>
                </SidebarNav>
            </IconContext.Provider>
            <Container></Container>
        </>
        
    );
};

export default Sidebar;
