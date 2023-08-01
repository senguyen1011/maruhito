import { useState } from 'react';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';
import { theme, dropAndBounce, fadeIn } from '../styles';
import Logo from '../components/Logo/Logo';
import Nav from '../components/Nav';
import Container from '../components/Container';
import profileImg from '../assets/priceProfile.png';

const Prices = () => {
	const [color, setColor] = useState('blue');

	const emoteList = [
		'cebaemote21',
		'cebaemote23',
		'cebaemote22',
		'ameemote',
		'ameemote3',
		'ameemote4',
		'chisaemote3',
		'chisaemote2',
		'chisaemote',
	];
	const priceList = [
		{
			key: 'Bust-up',
			sketch: 20,
			base: 35,
			render: 50,
		},
		{
			key: 'Thigh-up',
			sketch: 40,
			base: 55,
			render: 70,
		},
		{
			key: 'Full Body',
			sketch: 80,
			base: 95,
			render: 120,
		},
	];
	return (
		<PricesMain
			animate={{ backgroundColor: theme.blue }}
			exit={{ backgroundColor: theme[color] }}
			transition={fadeIn.transition}
		>
			<Container>
				<LogoRow
					initial={fadeIn.initial}
					animate={fadeIn.animate}
					exit={fadeIn.initial}
					transition={fadeIn.transition}
				>
					<motion.h1
						initial={dropAndBounce.initial}
						animate={dropAndBounce.animate}
						transition={dropAndBounce.transition}
					>
						Price Rates
					</motion.h1>
					<Logo
						color='blueContent'
						size='3rem'
					/>
				</LogoRow>
				<PricesContent
					initial={fadeIn.initial}
					animate={fadeIn.animate}
					exit={fadeIn.initial}
					transition={fadeIn.transition}
				>
					<PriceBreakdown>
						<div>
							<ProfileImage
								src={profileImg}
							/>
							<h3>Character Commission</h3>
						</div>
						<PriceList>
							{priceList.map((priceItem, ind) => (
								<PriceItem key={`price-item-${priceItem.key}-${ind}`}>
									<h2>{priceItem.key}</h2>
									<p>Sketch - {priceItem.sketch} USD</p>
									<p>Base - {priceItem.base} USD</p>
									<p>Fully-rendered - {priceItem.render} USD</p>
								</PriceItem>
							))}
							<PriceItem>
								<h2>Conditions</h2>
								<p>No gore, furry, mecha</p>
								<p>Mild NSFW only (R16)</p>
								<p>Simple BG +25 USD</p>
								<p>Add character +50%</p>
							</PriceItem>
						</PriceList>
					</PriceBreakdown>
					<div>
						<EmoteGrid>
							{emoteList.map((emote, ind) => {
								return (
									<Emote key={`emote-${emote}-${ind}`}>
										<img src={require(`../assets/${emote}.png`)} />
									</Emote>
								);
							})}
						</EmoteGrid>
						<h3>
							Emotes<p>- 20 USD</p>
						</h3>
					</div>
				</PricesContent>
			</Container>
			<Container>
				<Nav
					exclude={['Prices']}
					color='blueContent'
          handleClick={res => setColor(res.color)}
				/>
			</Container>
		</PricesMain>
	);
};

const PricesMain = styled(motion.main)`
	width: 100%;
	min-height: 100vh;
	padding: 3rem 0 2rem 0;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;

	background-color: ${props => props.theme.blue};
	color: ${props => props.theme.blueContent};

	h3 {
		text-align: center;
		margin-top: 0.5rem;
	}

	p {
		margin: 0;
		color: ${props => props.theme.blueMuted};
		margin-left: 1rem;
		display: inline-block;
	}

	@media only screen and (min-width: ${props => props.theme.breakpoints.width.xl}) {
		nav {
			margin-left: auto;
		}
	}
`;

const LogoRow = styled(motion.div)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin-bottom: 1rem;

	h1 {
		font-size: 2.5rem;
	}
`;

const PricesContent = styled(motion.div)`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 4rem;
	@media only screen and (min-width: ${props => props.theme.breakpoints.width.xl}) {
		flex-direction: row;
		justify-content: space-between;
		gap: 0;
	}

	width: 100%;
`;

const ProfileImage = styled.img`
	height: 40rem;
	width: auto%;
	border-radius: ${props => props.theme.borderRadius};

	object-fit: cover;
`;

const PriceBreakdown = styled.div`
	display: flex;
	gap: 1.5rem;
`;

const PriceList = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding-top: 8rem;
	padding-bottom: 2rem;
`;

const PriceItem = styled.div`
	display: flex;
	flex-direction: column;
`;

const EmoteGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr;
	gap: 0.5rem;
`;

const Emote = styled.div`
	background-color: ${props => props.theme.white};
	padding: 0.5rem;
	border-radius: ${props => props.theme.borderRadius};
	img {
		width: 8rem;
		height: 8rem;
	}
`;

export default Prices;
