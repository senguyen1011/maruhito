import { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';
import { useMediaQuery } from '@uidotdev/usehooks';
import { theme, dropAndBounce, fadeIn } from '../styles';
import Logo from '../components/Logo/Logo';
import Nav from '../components/Nav';
import MobileNav from '../components/MobileNav';
import Container from '../components/Container';
import profileImg from '../assets/aboutProfile.png';

const About = () => {
  useEffect(() => {
    const themeColor = document.getElementById('themeColor');
    themeColor.setAttribute('content', theme.pink);
  });
	const [color, setColor] = useState('blue');
	const isWidthMd = useMediaQuery(`only screen and (min-width: ${theme.breakpoints.width.md})`);
	return (
		<AboutMain
			animate={{ backgroundColor: theme.pink }}
			exit={{ backgroundColor: theme[color] }}
			transition={fadeIn.transition}
		>
			<Container>
				{isWidthMd ? (
					<LogoRow
						initial={fadeIn.initial}
						animate={fadeIn.animate}
						exit={fadeIn.initial}
						transition={fadeIn.transition}
					>
						<Logo
							color='pinkContent'
							size='3rem'
						/>
					</LogoRow>
				) : (
					<MobileNav
						color='pinkContent'
						align='center'
						exclude={['About']}
						handleClick={res => setColor(res.color)}
					/>
				)}

				<AboutContent
					initial={fadeIn.initial}
					animate={fadeIn.animate}
					exit={fadeIn.initial}
					transition={fadeIn.transition}
				>
					<ProfileImage
						src={profileImg}
						initial={fadeIn.initial}
						animate={fadeIn.animate}
						transition={fadeIn.transition}
					/>
					<ProfileParagraph>
						<motion.h1
							initial={dropAndBounce.initial}
							animate={dropAndBounce.animate}
							transition={dropAndBounce.transition}
						>
							About Me
						</motion.h1>
						<motion.p
							initial={fadeIn.initial}
							animate={fadeIn.animate}
							transition={fadeIn.transition}
						>
							Hi! I am Maru and I am an illustrator who's commonly active on Twitter! I am also
							a college student pursuing Multimedia Arts; one day I'll be an animator based in
							the Philippines or Japan! I dream to share my creativity among the masses!
						</motion.p>
						{isWidthMd && (
							<>
								<Separator
									initial={fadeIn.initial}
									animate={fadeIn.animate}
									transition={fadeIn.transition}
								/>
								<Nav
									color='pinkContent'
									align='center'
									exclude={['About']}
									handleClick={res => setColor(res.color)}
								/>
							</>
						)}
					</ProfileParagraph>
				</AboutContent>
			</Container>
		</AboutMain>
	);
};

const AboutMain = styled(motion.main)`
	width: 100%;
	min-height: 100vh;
	padding: 3rem 0 2rem 0;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;

  padding-top: calc(${props => props.theme.mobileNavHeight} + 3rem);

	background-color: ${props => props.theme.pink};
	color: ${props => props.theme.pinkContent};

  @media only screen and (min-width: ${props => props.theme.breakpoints.width.md}) {
    padding-top: 0;
	}
`;

const LogoRow = styled(motion.div)`
	display: flex;
	justify-content: end;
	width: 100%;
	margin-bottom: 1rem;
`;

const AboutContent = styled(motion.div)`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
	text-align: center;

	@media only screen and (min-width: ${props => props.theme.breakpoints.width.md}) {
		flex-direction: row;
		text-align: left;
	}
`;

const ProfileImage = styled(motion.img)`
height: 30rem;
	width: auto;
	border-radius: ${props => props.theme.borderRadius};

	object-fit: cover;

  @media only screen and (min-width: ${props => props.theme.breakpoints.width.md}) {
		height: 40rem;
	}
`;

const ProfileParagraph = styled.div`
	h1 {
		font-size: 2.5rem;
	}
	p {
		color: ${props => props.theme.pinkMuted};
		font-size: 1.15rem;
	}
`;

const Separator = styled(motion.div)`
	width: 100%;
	height: 0.175rem;

	background-color: ${props => props.theme.pinkMuted};
	border-radius: 0.175rem;
`;

export default About;
