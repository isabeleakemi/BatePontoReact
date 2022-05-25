import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
    {
        title: 'Cadastros',
        path: '/cadastros',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Cadastro de Funcionário',
                path: '/cadastros/cadastrofuncionario',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Cadastro',
                path: '/overview/revenue',
                icon: <IoIcons.IoIosPaper />,
            },
        ]
    },

    {
        title: 'Cartão Ponto',
        path: '/cartaoponto',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Incluir Ponto',
                path: '/cartaoponto/incluirponto',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Reports 2',
                path: '/reports/reports2',
                icon: <IoIcons.IoIosPaper />,
            },
        ]
    },
]
