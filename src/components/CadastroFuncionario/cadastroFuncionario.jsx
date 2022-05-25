import React, { useState } from 'react';
import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from '../Menu/menuData';
import SubMenu from '../Menu/subMenu';
import { IconContext } from 'react-icons';
import { Nav, NavIcon, TituloNav, TituloUsuario, SidebarNav, SidebarWrap, Container } from '../Menu/menu';

const FormularioCadastroFuncionario = styled.div`
    width: 700px;
    height: 450px;
    background: #fff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: center;
`

const Input = styled.div`
    label{
        display: block;
        margin-bottom: 10px;
    }

    input{
        width: 400px;
        font-size:16px;
        padding:8px 5px 5px 5px;
    }
`

const Input2 = styled.div`
    margin-right: 10px;

    label{
        display: block;
        margin-bottom: 10px;
    }

    input{
        width: 100px;
        font-size:16px;
        padding:8px 5px 5px 5px;
    }
`

const InputHorizontal = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
`

const CadastroFuncionario = () => {
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
            <Container>
                <FormularioCadastroFuncionario>
                        <Input>
                            <label>Nome</label>
                            <input type="text"/>
                        </Input>
                        <Input>
                            <label>Senha</label>
                            <input type="password"/>
                        </Input>
                        <InputHorizontal>
                            <Input2>
                                <label>Carga Horária</label>
                                <input type="text"/>
                            </Input2>
                            <Input2>
                                <label>Entrada 1</label>
                                <input type="text"/>
                            </Input2>
                            <Input2>
                                <label>Saída 1</label>
                                <input type="text"/>
                            </Input2>
                        </InputHorizontal>
                        
                </FormularioCadastroFuncionario>
            </Container>
        </>
        
    );
};

export default CadastroFuncionario;