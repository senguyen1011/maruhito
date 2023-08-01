import { useEffect } from 'react';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';
import { fadeIn } from '../styles';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Title from '../components/Logo/Title';
import fanArtImg from '../assets/sana.png';
import originalImg from '../assets/maruxmas.png';
import ContainerWithNav from '../components/ContainerWithNav';
import { theme } from '../styles';
const Art = () => {
  useEffect(() => {
    const themeColor = document.getElementById('themeColor');
    themeColor.setAttribute('content', theme.blue);
  });
	return (
		<ContainerWithNav
			navColor='blue'
			navExclude={['Art']}
		>
			<ArtContainer>
				<Title
					width='32rem'
					letterMap={[
						{
							key: 'A',
							color: 'blue',
							rotate: 20,
							coordinate: {
								y: 'top: -0.05em',
								x: 'left: 0',
							},
						},
						{
							key: 'R',
							color: 'pink',
							rotate: 1,
							coordinate: {
								y: 'top: 0',
								x: 'left: 0.6em',
							},
						},
						{
							key: 'T',
							color: 'yellow',
							rotate: 10,
							coordinate: {
								y: 'top: 0',
								x: 'left: 1.2em',
							},
						},
						{
							key: 'W',
							color: 'blue',
							rotate: -6,
							coordinate: {
								y: 'top: 0',
								x: 'left: 1.9em',
							},
						},
						{
							key: 'O',
							color: 'pink',
							rotate: -6,
							coordinate: {
								y: 'top: 0',
								x: 'left: 2.75em',
							},
						},
						{
							key: 'R',
							color: 'yellow',
							rotate: -4,
							coordinate: {
								y: 'top: 0',
								x: 'left: 3.45em',
							},
						},
						{
							key: 'K',
							color: 'blue',
							rotate: -8,
							coordinate: {
								y: 'top: 0',
								x: 'left: 4.12em',
							},
						},
						{
							key: 'S',
							color: 'pink',
							rotate: -21,
							coordinate: {
								y: 'top: 0',
								x: 'left: 4.7em',
							},
						},
					]}
				/>
				<LinkWrapper
					initial={fadeIn.initial}
					animate={fadeIn.animate}
					exit={fadeIn.initial}
				>
					<Link to='/fanart'>
						<ArtLink
							whileHover={{
								scale: 0.975,
								transition: {
									type: 'easeInOut',
									duration: 0.25,
								},
							}}
							whileTap={{
								scale: 0.925,
								transition: {
									type: 'spring',
									duration: 0.5,
									bounce: 0.5,
								},
							}}
						>
							<img src={fanArtImg} />
							<LinkLabel color='pink'>Fanart</LinkLabel>
						</ArtLink>
					</Link>
					<Link to='/original'>
						<ArtLink
							whileHover={{
								scale: 0.975,
								transition: {
									type: 'easeInOut',
									duration: 0.25,
								},
							}}
							whileTap={{
								scale: 0.925,
								transition: {
									type: 'spring',
									duration: 0.5,
									bounce: 0.5,
								},
							}}
						>
							<img src={originalImg} />
							<LinkLabel color='yellow'>Original</LinkLabel>
						</ArtLink>
					</Link>
				</LinkWrapper>
			</ArtContainer>
		</ContainerWithNav>
	);
};

const ArtContainer = styled(Container)`
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

const LinkWrapper = styled(motion.div)`
	height: 100%;
	justify-content: center;
	
	gap: 2rem;
	margin: 2rem 0;

  display: flex;
	flex-direction: column;
	align-items: center;
	@media only screen and (min-width: ${props => props.theme.breakpoints.width.lg}) {
		display: grid;
	grid-template-columns: 1fr 1fr;
	}

	width: 100%;
`;

const ArtLink = styled(motion.div)`
	display: flex;
	flex-direction: column;
	gap: 0;
	border-radius: ${props => props.theme.borderRadius};
	overflow: hidden;
	height: 100%;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

const LinkLabel = styled.div`
	background-color: ${props => props.theme[props.color]};

	color: ${props => props.theme[`${props.color}Content`]};
	font-size: 1.5rem;
	text-align: center;
	padding: 0.5rem 1.5rem;
`;

export default Art;
