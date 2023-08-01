import { useState } from 'react';
import { styled } from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { theme, dropAndBounce, fadeIn } from '../styles';
import Logo from '../components/Logo/Logo';
import Nav from '../components/Nav';
import Container from '../components/Container';
import profileImg from '../assets/contactProfile.png';
import { ReactComponent as Kofi } from '../assets/svg/kofi.svg';
import { ReactComponent as PayPal } from '../assets/svg/paypal.svg';
import { ReactComponent as Twitter } from '../assets/svg/twitter.svg';
import { ReactComponent as Instagram } from '../assets/svg/instagram.svg';

const Contacts = () => {
	const [color, setColor] = useState('blue');
	const [copied, setCopied] = useState(false);

	const iconLinks = [
		{
			element: <Kofi />,
			link: 'https://ko-fi.com/maruhito',
		},
		{
			element: <PayPal />,
			link: '',
		},
		{
			element: <Twitter />,
			link: 'https://twitter.com/maruhito_',
		},
		{
			element: <Instagram />,
			link: 'https://www.instagram.com/maruhito_/',
		},
	];

	const handleCopy = text => {
		navigator.clipboard.writeText(text);
		setCopied(true);

		const timerId = setTimeout(() => setCopied(false), 1500);
		return () => clearTimeout(timerId);
	};

	return (
		<ContactsMain
			animate={{ backgroundColor: theme.yelloww }}
			exit={{ backgroundColor: theme[color] }}
			transition={fadeIn.transition}
		>
			<AnimatePresence initial={false}>
				{copied && (
					<Alert
						initial={dropAndBounce.initial}
						animate={dropAndBounce.animate}
						exit={fadeIn.initial}
					>
						Copied!
					</Alert>
				)}
			</AnimatePresence>
			<Container>
				<LogoRow
					initial={fadeIn.initial}
					animate={fadeIn.animate}
					exit={fadeIn.initial}
					transition={fadeIn.transition}
				>
					<Logo
						color='yellowContent'
						size='3rem'
					/>
				</LogoRow>
				<ContactsContent
					initial={fadeIn.initial}
					animate={fadeIn.animate}
					exit={fadeIn.initial}
					transition={fadeIn.transition}
				>
					<ProfileImage src={profileImg} />
					<ProfileParagraph>
						<motion.h1
							initial={dropAndBounce.initial}
							animate={dropAndBounce.animate}
							transition={dropAndBounce.transition}
						>
							Contact me!
						</motion.h1>
						<div>
							<CopyLinks>
								<a
									onClick={() => {
										handleCopy('marumaaru108@gmail.com');
									}}
								>
									email: marumaaru108@gmail.com
								</a>
								<a
									onClick={() => {
										handleCopy('maruhito_');
									}}
								>
									discord: @maruhito_
								</a>
							</CopyLinks>
							<LinkIcons>
								{iconLinks.map((link, ind) => {
									return (
										<motion.a
											key={`icon-link-${ind}`}
											href={link.link}
											target='_blank'
											initial={dropAndBounce.initial}
											animate={dropAndBounce.animate}
											transition={{
												...dropAndBounce.transition,
												delay: 0.1 * ind,
											}}
										>
											<motion.div
												whileHover={{
													scale: 0.9,
													transition: {
														type: 'spring',
														duration: 0.5,
														bounce: 0.5,
													},
												}}
												whileTap={{
													scale: 0.8,
													transition: {
														type: 'spring',
														duration: 0.5,
														bounce: 0.5,
													},
												}}
											>
												{link.element}
											</motion.div>
										</motion.a>
									);
								})}
								{/* <motion.a
									href='https://ko-fi.com/maruhito'
									target='_blank'
									initial={dropAndBounce.initial}
									animate={dropAndBounce.animate}
									transition={{
										...dropAndBounce.transition,
										delay: 0.1,
									}}
								>
									<Kofi />
								</motion.a>
								<motion.a
									href=''
									initial={dropAndBounce.initial}
									animate={dropAndBounce.animate}
									transition={{
										...dropAndBounce.transition,
										delay: 0.2,
									}}
								>
									<PayPal />
								</motion.a>
								<motion.a
									href='https://twitter.com/maruhito_'
									target='_blank'
									initial={dropAndBounce.initial}
									animate={dropAndBounce.animate}
									transition={{
										...dropAndBounce.transition,
										delay: 0.3,
									}}
								>
									<Twitter />
								</motion.a>
								<motion.a
									href='https://www.instagram.com/maruhito_/'
									target='_blank'
									initial={dropAndBounce.initial}
									animate={dropAndBounce.animate}
									transition={{
										...dropAndBounce.transition,
										delay: 0.4,
									}}
								>
									<Instagram />
								</motion.a> */}
							</LinkIcons>
						</div>

						<Separator
							initial={fadeIn.initial}
							animate={fadeIn.animate}
							transition={fadeIn.transition}
						/>
						<Nav
							color='yellowContent'
							align='center'
							exclude={['Contacts']}
							handleClick={res => setColor(res.color)}
						/>
					</ProfileParagraph>
				</ContactsContent>
			</Container>
		</ContactsMain>
	);
};

const ContactsMain = styled(motion.main)`
	width: 100%;
	min-height: 100vh;
	padding: 3rem 0 2rem 0;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;

	background-color: ${props => props.theme.yellow};
	color: ${props => props.theme.yellowContent};
`;

const LogoRow = styled(motion.div)`
	display: flex;
	justify-content: end;
	width: 100%;
	margin-bottom: 1rem;
`;

const ContactsContent = styled(motion.div)`
	display: flex;
	align-items: center;
	gap: 2rem;
	text-align: center;
`;

const ProfileImage = styled(motion.img)`
	height: 40rem;
	width: auto%;
	border-radius: ${props => props.theme.borderRadius};

	object-fit: cover;
`;

const ProfileParagraph = styled.div`
	display: flex;
	flex-direction: column;
	h1 {
		font-size: 2.5rem;
	}
`;

const Separator = styled(motion.div)`
	width: 100%;
	height: 0.175rem;

	background-color: ${props => props.theme.yellowContent};
	border-radius: 0.175rem;
`;

const CopyLinks = styled.div`
	display: flex;
	flex-direction: column;
	a {
		color: ${props => props.theme.yellowMuted};
		font-size: 1.15rem;

		margin: 0;
		cursor: pointer;
		transition: color 0.125s ease-in-out;
	}
	a:hover {
		color: ${props => props.theme.yellowContent};
	}
`;

const LinkIcons = styled.div`
	margin: 1.5rem 0;
	display: flex;
	align-items: center;
	gap: 2.5rem;
	justify-content: center;
	svg {
		fill: ${props => props.theme.yellowContent};
		height: 2.5rem;
		width: 2.5rem;
	}
`;

const Alert = styled(motion.div)`
	border-radius: ${props => props.theme.borderRadius};
	background-color: ${props => props.theme.yellowContent};
	color: ${props => props.theme.yellow};
	padding: 0.75rem 1.5rem;
	position: absolute;
`;

export default Contacts;
