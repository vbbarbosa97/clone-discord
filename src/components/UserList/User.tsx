import React from 'react';
import iconeDiscord from '../../assets/icone_discord.svg';
import { Avatar, Profile, UserData } from './styles';

export type UserProps = {
	name: string;
	userOnline: boolean;
	colorAvatar: string;
};

export const User = ({ name, userOnline, colorAvatar }: UserProps) => {
	const backgroundcColorAvatar = colorAvatar ? colorAvatar : '#7289da';

	return (
		<Profile>
			<Avatar userOnline={userOnline} style={{ backgroundColor: backgroundcColorAvatar }}>
				<img src={iconeDiscord} alt="iconeDiscord" />
			</Avatar>
			<UserData userOnline={userOnline}>
				<strong>{name}</strong>
			</UserData>
		</Profile>
	);
};
