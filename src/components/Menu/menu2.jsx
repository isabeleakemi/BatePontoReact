import React from 'react';
import styled from 'styled-components';
import logo_menu from "../../assets/images/google-forms.png";

const Fundo = styled.div`
    background-color: red;
    height: 100vh;
`;

const MenuContainer = styled.div`
    background-color: white;
    height: 100vh;
    width: 250px;
`;

const MenuOpen = styled.li`
     color: grey;
     width: 100%;
     height: 50px;
     border: 1px solid black;
     margin: 0%;
     display: flex;
     flex-direction: row;
     justify-content: center;
     align-items: center;

     hover{
         cursor: pointer;
         background-color: pink;
     }
`;

const MenuOpen2 = styled.div`
     ul{
        height: auto;
        padding: 0;
        width: 100%;
     }

     li{
        color: grey;
        width: 100%;
        height: 50px;
        border: 1px solid black;
        margin: 0%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
     }

     li:hover{
         cursor: pointer;
         background-color: pink;
     }
`;

const MenuItem = styled.ul`
    height: auto;
    padding: 0;
    width: 100%;
`;

const Icone = styled.div`
    flex: 30%;
    display: grid;
    place-items: center;
`;

const Titulo = styled.div`
    flex: 70%;
`;

const Menu = () => {
    return(
        <Fundo>
            <MenuContainer>
                <MenuOpen2>
                    <ul>
                        <li onClick={() => {window.location.pathname = "local da pagina"}}>
                            <Icone>
                                <img src={logo_menu}/>
                            </Icone>
                            <Titulo>Titulo</Titulo>
                        </li>
                    </ul>
                </MenuOpen2>
                <div>
                    <MenuItem>
                        <MenuOpen onClick={() => {window.location.pathname = "local da pagina"}}>
                            <Icone>
                                <img src={logo_menu}/>
                            </Icone>
                            <Titulo>Titulo</Titulo>
                        </MenuOpen>
                    </MenuItem>
                </div>
                <div>
                    <MenuItem>
                        <MenuOpen onClick={() => {window.location.pathname = "local da pagina"}}>
                            <div>Icone</div>
                            
                        </MenuOpen>
                    </MenuItem>
                </div>
            </MenuContainer>
        </Fundo>
    );
};

export default Menu;