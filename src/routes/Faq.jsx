import { styled } from 'styled-components';
import { motion } from 'framer-motion';
import { fadeIn } from '../styles';
import Container from '../components/Container';
import Title from '../components/Logo/Title';
import ContainerWithNav from '../components/ContainerWithNav';
import { theme } from '../styles';
import { useEffect } from 'react'; 

const Faq = () => {
  useEffect(() => {
    const themeColor = document.getElementById('themeColor');
    themeColor.setAttribute('content', theme.yellow);
  });

	const faqItems = [
		{
			question: 'What type of art do you specialize in?',
			answer:
				'My style lean towards anime! I am particularly inspired by series/franchises such as Love Live, Idolm@ster, and Blue Archive. I also take inspiration from illustrators namely Tomari, Namie, and Nagu!',
		},
		{
			question: 'How frequently do you draw art?',
			answer:
				'Every month, I attempt to share at least 3 art pieces! Most of them are fully rendered sketches in half body but I do like to experiment and do different poses or even add background into my drawing.',
		},
		{
			question: 'Do you take commissions?',
			answer:
				'Yes! However, I am typically busy with college so my availability depends on how much free time I have. I will try to keep people posted on Twitter as commissions help me boost my income as well as give me experience as an artist in the market.',
		},
		{
			question: 'Are there things you would refuse to draw?',
			answer:
				"I may refuse to draw subjects that are socially/morally controversial to draw. Other than that, there are things that I am not confident enough to draw such as men, dynamic poses, detailed backgrounds, and intricate clothing so I would default to refusing them as well unless I've practiced enough for it.",
		},
		{
			question: 'What app do you use for drawing?',
			answer:
				'I use Clip Studio Paint! I have also used Photoshop and PaintTool Sai 2 but Clip Studio Paint simply caters to my preferences as a digital artist!',
		},
	];
	return (
		<ContainerWithNav
			navColor='yellow'
			navExclude={['FAQ']}
		>
			<Container>
				<Title
        width='11rem'
					letterMap={[
						{
							key: 'F',
							color: 'blue',
							rotate: -18,
							coordinate: {
								y: 'top: 0',
								x: 'left: 0',
							},
						},
						{
							key: 'A',
							color: 'pink',
							rotate: 1,
							coordinate: {
								y: 'top: 0',
								x: 'left: 0.5em',
							},
						},
						{
							key: 'Q',
							color: 'yellow',
							rotate: -7,
							coordinate: {
								y: 'top: 0',
								x: 'left: 1.125em',
							},
						},
					]}
				/>

				<FaqList>
					{faqItems.map((item, ind) => {
						return (
							<motion.li
								key={`faq-item-${ind}`}
								initial={fadeIn.initial}
								animate={fadeIn.animate}
								transition={{
									delay: 0.05 * ind,
								}}
								exit={fadeIn.initial}
							>
								<h1>{item.question}</h1>
								<p>{item.answer}</p>
							</motion.li>
						);
					})}
				</FaqList>
			</Container>
		</ContainerWithNav>
	);
};

const FaqList = styled(motion.ol)`
	list-style-type: none;
	margin-left: 0;
	counter-reset: item;
	padding-left: 0;

	li:before {
		content: counter(item) ' ';
		counter-increment: item;
		font-size: 5rem;
		display: inline-block;
		margin-left: -5rem;
		width: 5rem;
		color: ${props => props.theme.blue};
	}

	li:nth-child(even):before {
		color: ${props => props.theme.pink};
	}

	li {
		margin-left: 5rem;
	}

	li h1 {
		display: inline-block;
	}

	li:nth-child(even) h1 {
		color: ${props => props.theme.pinkContent};
	}

	li p {
		color: ${props => props.theme.blue};
	}
`;

export default Faq;
