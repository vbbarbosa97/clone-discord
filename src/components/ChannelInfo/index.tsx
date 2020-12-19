import { IconButton, InputAdornment } from '@material-ui/core';
import { Help, Inbox, Loyalty, Notifications, PeopleAlt, Search } from '@material-ui/icons';
import React from 'react';
import { ActionsContainer, Container, InputSearch, Symbol, Title, TitleContainer } from './styles';

const ChannelInfo = () => {
	const icons = [
		{ icon: <Notifications htmlColor="#b9bbbe" /> },
		{ icon: <Loyalty htmlColor="#b9bbbe" /> },
		{ icon: <PeopleAlt htmlColor="#fff" /> },
	];

	return (
		<Container>
			<TitleContainer>
				<Symbol>#</Symbol>
				<Title>geral</Title>
			</TitleContainer>
			<ActionsContainer>
				{icons.map((item) => (
					<IconButton key={Math.random()}>{item.icon}</IconButton>
				))}

				<InputSearch
					variant="standard"
					placeholder="Buscar"
					inputProps={{ 'aria-label': 'naked' }}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<IconButton size="small">
									<Search fontSize="small" htmlColor="#b9bbbe" />
								</IconButton>
							</InputAdornment>
						),
					}}
				/>
				<IconButton>
					<Inbox htmlColor="#b9bbbe" />
				</IconButton>
				<IconButton>
					<Help htmlColor="#43b581" />
				</IconButton>
			</ActionsContainer>
		</Container>
	);
};

export default ChannelInfo;
