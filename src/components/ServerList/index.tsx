import React, { useState } from 'react';
import AddDiscord from '../../assets/add_discord.svg';
import DownloadDiscord from '../../assets/download_discord.svg';
import LocationDiscord from '../../assets/location_discord.svg';
import ServerButton from '../ServerButton';
import { Container, Separator } from './styles';

const ServerList = () => {
	const [buttonSelected, setButtonSelected] = useState<number>(1);

	const handleButtonSelected = (value: number) => setButtonSelected(value);

	return (
		<Container>
			<ServerButton
				buttonSelected={buttonSelected}
				handleButtonSelected={handleButtonSelected}
				value={1}
				isHome
				isServer
			/>
			<Separator />
			<ServerButton
				buttonSelected={buttonSelected}
				handleButtonSelected={handleButtonSelected}
				value={2}
				isServer
				nameServer="VB"
			/>
			<ServerButton
				buttonSelected={buttonSelected}
				handleButtonSelected={handleButtonSelected}
				value={3}
				isServer
				nameServer="ALI"
			/>
			<ServerButton
				buttonSelected={buttonSelected}
				handleButtonSelected={handleButtonSelected}
				value={4}
				isServer
				nameServer="TG"
			/>
			<ServerButton
				buttonSelected={buttonSelected}
				handleButtonSelected={handleButtonSelected}
				value={5}
				isServer={false}
				pathIcon={AddDiscord}
			/>
			<ServerButton
				buttonSelected={buttonSelected}
				handleButtonSelected={handleButtonSelected}
				value={6}
				isServer={false}
				pathIcon={LocationDiscord}
			/>
			<Separator />
			<ServerButton
				buttonSelected={buttonSelected}
				handleButtonSelected={handleButtonSelected}
				value={7}
				isServer={false}
				pathIcon={DownloadDiscord}
			/>
		</Container>
	);
};

export default ServerList;
