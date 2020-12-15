import React, { useState } from 'react';
import { Button, Column, Container, ContainerButton } from './styles';
import iconeDiscord from '../../assets/icone_discord.svg';

export type Props = {
	isHome?: boolean;
	mentions?: number;
	isServer: boolean;
	nameServer?: string;
	pathIcon?: string;
	value: number;
	buttonSelected: number;
	handleButtonSelected: (value: number) => void;
};

const ServerButton = ({
	isHome,
	mentions,
	isServer,
	nameServer,
	pathIcon,
	value,
	buttonSelected,
	handleButtonSelected,
}: Props) => {
	const [columnActive, setColumnActive] = useState<number>(0);

	const notHome = !isHome;
	const notServer = !isServer;
	const buttonSelectedActive = value === buttonSelected ? true : false;
	const hoverActiveColumn = columnActive === value && columnActive !== buttonSelected ? true : false;

	const handleOnMouseEnter = (buttonValue: number) => setColumnActive(buttonValue);
	const handleOnMouseLeave = () => setColumnActive(0);

	return (
		<Container>
			<Column
				className="columnButton"
				selected={buttonSelectedActive}
				hoverColumnActive={hoverActiveColumn}
			/>
			<ContainerButton>
				<Button
					selected={buttonSelectedActive}
					onClick={() => handleButtonSelected(value)}
					isServer={isServer}
					value={value}
					onMouseEnter={() => handleOnMouseEnter(value)}
					onMouseLeave={handleOnMouseLeave}
				>
					{isHome && <img src={iconeDiscord} alt="iconeDiscord" />}
					{isServer && notHome && nameServer}
					{notHome && notServer && <img src={pathIcon} alt="icone" />}
				</Button>
			</ContainerButton>
		</Container>
	);
};

export default ServerButton;
