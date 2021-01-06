import React from 'react';
import iconeDiscord from '../../assets/icone_discord.svg';
import { Avatar, Profile, UserData, TitleMessage } from './styles';

export const Message = () => {
	return (
		<Profile>
			<Avatar>
				<img src={iconeDiscord} alt="iconeDiscord" />
			</Avatar>
			<UserData>
				<TitleMessage>
					<strong>Vinicius Batista Barbosa</strong>
					<span>12/05/2020</span>
				</TitleMessage>
				<span>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna sed eget dictum sit varius. Elit
					nisi eget sodales.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna sed eget dictum
				</span>
			</UserData>
		</Profile>
	);
};
