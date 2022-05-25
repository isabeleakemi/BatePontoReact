import React from 'react';
import styled from 'styled-components';
import logo_login from "../../assets/images/user.png";

const Container = styled.div`
    margin: 0;
    height: 100vh;
    background: #6C7A89;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const Box = styled.div`
    width: 300px;
    height: 450px;
    background: black;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: center;
`;

const Titulo = styled.h1`
  color: white;
  padding: 15px 0 8px;
`;

const Logo = styled.img`
    padding: 0 0 50px;
`;

const Input = styled.div`
    position:relative;
    margin-bottom:25px;

    label{
        position:absolute;
        top:0px;
        left:0px;
        font-size:16px;
        color: white;	
        pointer-event:none;
        transition: all 0.5s ease-in-out;
    }

    input{
        border:0;
        border-bottom:1px solid #555;  
        background:transparent;
        width:100%;
        padding:8px 0 5px 0;
        font-size:16px;
        color:#fff;
    }

    input:focus{
        border:none;	
        outline:none;
        border-bottom:1px solid #27d0fe;
    }

    input:focus ~ label{
        top:-12px;
        font-size:12px;
    }

    input:valid ~ label{
        top:-12px;
        font-size:12px;
    }
`;

const Botao = styled.button`
    margin: 15px auto 0px auto;
    display: block;
    border-radius: 20px;
    background-color: #27d0fe;
    border: none;
    color: white;
    font-weight: 600;
    font-size: 14px;
    padding: 8px 75px;
    cursor: pointer;
`;

const Login = () => {
    return (
        <Container>
            <Box>
                <Titulo>Entrar</Titulo>
                <Logo src={logo_login}/>
                <Input>
                    <input type="text" required/>
                    <label>Usuário</label>
                </Input>
                <Input>
                    <input type="password" required/>
                    <label>Senha</label>
                </Input>
                <Botao>LOGIN</Botao>
            </Box>
        </Container>
    );
};

export default Login;