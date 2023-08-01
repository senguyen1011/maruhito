import { useState } from 'react';
import { motion } from 'framer-motion';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { fadeIn } from '../styles';

const BackLink = () => {
	const [isHover, setHover] = useState(false);
	return (
		<LinkWrapper
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
      initial={fadeIn.initial}
      animate={fadeIn.animate}
      exit={fadeIn.initial}
      whileTap={{
        scale: 0.9,
        transition: {
          type: 'spring',
          duration: 0.5,
          bounce: 0.5,
        },
      }}
			to='/art'
		>
			{[
				'B',
				'A',
				'C',
				'K',
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 -48 512 512'
				>
					<path
						fill='none'
						stroke='currentColor'
						stroke-linecap='round'
						stroke-linejoin='round'
						stroke-width='84'
						d='M184 112l144 144-144 144'
					/>
				</svg>,
			].map((letter, ind) => {
				return (
					<motion.span
						key={`back-${ind}`}
						animate={isHover ? { y: '-0.25em' } : { y: 0 }}
						transition={{ type: 'spring', bounce: 0.5,  delay: 0.05 * ind }}
					>
						{letter}
					</motion.span>
				);
			})}
		</LinkWrapper>
	);
};

export default BackLink;

const LinkWrapper = styled(motion(Link))`
  display: flex;
	align-items: center;
	gap: 0.0125em;

 
	margin: a0 auto;
	
	font-size: 2rem;

  @media only screen and (min-width: ${props => props.theme.breakpoints.width.md}) {
		margin-right: 0;
	}

	span:nth-child(1) {
		color: ${props => props.theme.blue};
	}
	span:nth-child(2) {
		color: ${props => props.theme.pink};
	}
	span:nth-child(3) {
		color: ${props => props.theme.yellow};
	}
	span:nth-child(4) {
		color: ${props => props.theme.blue};
	}
	span:nth-child(5) {
		color: ${props => props.theme.yellow};
	}
	svg {
		display: inline-block;
		height: 2rem;
	}
`;
