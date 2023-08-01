import { styled } from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeIn } from '../../styles';
import Letter from './Letter';

const Logo = ({ color, size = '2rem', animate = false, animateDelay = 0 }) => {
	const letterMap = [
		{
			key: 'm',
			color: 'blue',
			rotate: -13,
			coordinate: {
				y: 'top: 0.15em',
				x: 'left: 0',
			},
		},
		{
			key: 'a',
			color: 'pink',
			rotate: 9,
			coordinate: {
				y: 'top: 0',
				x: 'left: 0.95em',
			},
		},
		{
			key: 'r',
			color: 'yellow',
			rotate: -7,
			coordinate: {
				y: 'top: 0.125em',
				x: 'left: 1.55em',
			},
		},
		{
			key: 'u',
			color: 'blue',
			rotate: 17,
			coordinate: {
				y: 'top: 0.2em',
				x: 'left: 1.95em',
			},
		},
		{
			key: 'h',
			color: 'pink',
			rotate: -23,
			coordinate: {
				y: 'bottom: 0',
				x: 'left: 0.35em',
			},
		},
		{
			key: 'i',
			color: 'yellow',
			rotate: -12,
			coordinate: {
				y: 'bottom: 0',
				x: 'left: 1.05em',
			},
		},
		{
			key: 't',
			color: 'blue',
			rotate: -4,
			coordinate: {
				y: 'bottom: 0',
				x: 'left: 1.4em',
			},
		},
		{
			key: 'o',
			color: 'pink',
			rotate: -4,
			coordinate: {
				y: 'bottom: 0',
				x: 'left: 1.8em',
			},
		},
	];

	if (color) {
		letterMap.forEach(letter => {
			letter.color = color;
		});
	}
	const hoverDuration = 0.25;

	if (animate) {
		return (
			<LogoWrapper size={size}>
				{letterMap.map((letter, ind) => {
					return (
						<Letter
							key={`logo-letter-${letter.key}-${ind}`}
							size={size}
							letter={letter.key}
							letterMap={letter}
							ind={ind}
							animateDelay={animateDelay}
							animate={animate}
						/>
					);
				})}
			</LogoWrapper>
		);
	} else {
		return (
			<LogoWrapper
				size={size}
				whileHover={{
					scale: 0.9,
					transition: {
						type: 'easeInOut',
						duration: hoverDuration,
						delay: 0,
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
				exit={fadeIn.initial}
			>
				<Link to='/'>
					{letterMap.map((letter, ind) => {
						return (
							<Letter
								key={`logo-letter-${letter.key}-${ind}`}
								size={size}
								letter={letter.key}
								letterMap={letter}
								ind={ind}
								animate={animate}
							/>
						);
					})}
				</Link>
			</LogoWrapper>
		);
	}
};

const LogoWrapper = styled(motion.div)`
	position: relative;

	width: calc(${props => props.size} * 2.725);
	height: calc(${props => props.size} * 2);

	margin: -0.75em 0;
`;

export default Logo;
