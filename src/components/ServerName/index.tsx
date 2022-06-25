import { Button } from '@material-ui/core';
import {
	Build,
	CheckBoxOutlineBlank,
	Create,
	ExitToApp,
	ExpandLess,
	ExpandMore,
	FlashOn,
	Notifications,
	PersonAdd
} from '@material-ui/icons';
import React, { useRef, useState } from 'react';
import { Container, Item, Menu, MenuContainer, NameItem, Separator, Title } from './styles';

const ServerName = () => {
	const [open, setOpen] = useState<boolean>(false);

	const anchorRef = useRef<HTMLButtonElement>(null);

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	document.addEventListener(
		'click',
		() => {
			if (open) {
				setOpen(false);
			}
		},
		true
	);

	const menuItems = [
		{
			icone: <FlashOn fontSize="small" />,
			nome: 'Impulso de servidor',
			iconColor: '#ff73fa',
			nameColor: '#b9bbbe',
		},
		{
			icone: <PersonAdd fontSize="small" />,
			nome: 'Convidar pessoas',
			iconColor: '#7289da',
			nameColor: '#7289da',
		},
		{
			icone: <Notifications fontSize="small" />,
			nome: 'Config. de notificação',
			nameColor: '#b9bbbe',
			iconColor: '#b9bbbe',
		},
		{
			icone: <Build fontSize="small" />,
			nome: 'Config. de privacidade',
			iconColor: '#b9bbbe',
			nameColor: '#b9bbbe',
		},
		{
			icone: <Create fontSize="small" />,
			nome: 'Alterar apelido',
			iconColor: '#b9bbbe',
			nameColor: '#b9bbbe',
		},
		{
			icone: <CheckBoxOutlineBlank fontSize="small" />,
			nome: 'Ocultar canais silenciados',
			iconColor: '#b9bbbe',
			nameColor: '#b9bbbe',
		},
		{
			icone: <ExitToApp fontSize="small" />,
			nome: 'Sair do servidor',
			iconColor: '#f04747',
			nameColor: '#f04747',
		},
	];

	return (
		<Container>
			<Title>Meu Servidor 12345</Title>
			<Button
				ref={anchorRef}
				aria-controls={open ? 'menu-list-grow' : undefined}
				aria-haspopup="true"
				onClick={handleToggle}
			>
				{open ? (
					<ExpandLess fontSize="default" htmlColor="#fff" />
				) : (
					<ExpandMore fontSize="default" htmlColor="#fff" />
				)}
			</Button>
			<MenuContainer
				open={open}
				anchorEl={anchorRef.current}
				role={undefined}
				transition
				disablePortal
			>
				<Menu>
					{menuItems.map((item, index) => (
						<div key={index.toString() + item.nome}>
							<Item iconColor={item.iconColor} nameColor={item.nameColor}>
								<NameItem>{item.nome}</NameItem>
								{item.icone}
							</Item>
							{index === 0 || index === 1 || index === 3 || index === 5 ? <Separator /> : null}
						</div>
					))}
				</Menu>
			</MenuContainer>
		</Container>
	);
};

export default ServerName;
