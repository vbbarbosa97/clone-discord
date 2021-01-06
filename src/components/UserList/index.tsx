import React from 'react';
import { Container, TitleCategory } from './styles';
import { User, UserProps } from './User';

const UserList = () => {
	const usersOnline: UserProps[] = [
		{ name: 'Vinicius Batista', userOnline: true, colorAvatar: '#f04847' },
		{ name: 'João da Silva', userOnline: true, colorAvatar: '#7289da' },
		{ name: 'Antonio José', userOnline: true, colorAvatar: '#43b581' },
		{ name: 'Maria Joaquina', userOnline: true, colorAvatar: '#7289da' },
	];

	const usersOffline: UserProps[] = [
		{ name: 'Marcos da Silva', userOnline: false, colorAvatar: '#43b581' },
		{ name: 'Jorge Barbosa', userOnline: false, colorAvatar: '#43b581' },
		{ name: 'Cristiano Ronaldo', userOnline: false, colorAvatar: '#7289da' },
		{ name: 'Lionel Messi', userOnline: false, colorAvatar: '#f04847' },
		{ name: 'Neymar Junior', userOnline: false, colorAvatar: '#f04847' },
		{ name: 'Gabriel Jesus', userOnline: false, colorAvatar: '#7289da' },
		{ name: 'Lionel Messi', userOnline: false, colorAvatar: '#43b581' },
		{ name: 'Neymar Junior', userOnline: false, colorAvatar: '#7289da' },
		{ name: 'Gabriel Jesus', userOnline: false, colorAvatar: '#f04847' },
		{ name: 'Lionel Messi', userOnline: false, colorAvatar: '#f04847' },
		{ name: 'Neymar Junior', userOnline: false, colorAvatar: '#43b581' },
		{ name: 'Gabriel Jesus', userOnline: false, colorAvatar: '#43b581' },
		{ name: 'Lionel Messi', userOnline: false, colorAvatar: '#7289da' },
		{ name: 'Neymar Junior', userOnline: false, colorAvatar: '#f04847' },
		{ name: 'Gabriel Jesus', userOnline: false, colorAvatar: '#7289da' },
		{ name: 'Lionel Messi', userOnline: false, colorAvatar: '#f04847' },
		{ name: 'Neymar Junior', userOnline: false, colorAvatar: '#7289da' },
		{ name: 'Gabriel Jesus', userOnline: false, colorAvatar: '#43b581' },
	];

	return (
		<Container>
			<TitleCategory>DISPONÍVEL-{usersOnline.length}</TitleCategory>
			{usersOnline.map((item) => (
				<User userOnline={item.userOnline} name={item.name} colorAvatar={item.colorAvatar} />
			))}

			<TitleCategory>OFFLINE-{usersOffline.length}</TitleCategory>
			{usersOffline.map((item) => (
				<User userOnline={item.userOnline} name={item.name} colorAvatar={item.colorAvatar} />
			))}
		</Container>
	);
};

export default UserList;
