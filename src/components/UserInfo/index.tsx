import { IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import iconeDiscord from '../../assets/icone_discord.svg';
import {
	Avatar,
	Container,
	HeadphoneIcon,
	Icons,
	MicIcon,
	MicIconOff,
	Profile,
	SettingsIcon,
	UserData,
} from './styles';

const Layout = () => {
	const [micActive, setMicActive] = useState<boolean>(true);

	const handleMic = () => setMicActive(!micActive);

	return (
		<Container>
			<Profile>
				<Avatar>
					<img src={iconeDiscord} alt="iconeDiscord" />
				</Avatar>
				<UserData>
					<strong>Vinicius Bat...</strong>
					<span>#1239</span>
				</UserData>
			</Profile>
			<Icons>
				<IconButton onClick={handleMic} size="small">
					{micActive ? <MicIcon fontSize="small" /> : <MicIconOff fontSize="small" />}
				</IconButton>

				<IconButton size="small">
					<HeadphoneIcon fontSize="small" />
				</IconButton>

				<IconButton size="small">
					<SettingsIcon fontSize="small" />
				</IconButton>
			</Icons>
		</Container>
	);
};

export default Layout;
