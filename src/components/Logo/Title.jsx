import { styled } from 'styled-components';
import { motion } from 'framer-motion';
import { fadeIn } from '../../styles';
import Letter from './Letter';

const Title = ({ size = '6rem', width, letterMap, animateDelay = 0 }) => {
	return (
		<TitleWrapper
			size={size}
			width={width}
			count={letterMap.length}
			exit={fadeIn.initial}
		>
			{letterMap.map((letter, ind) => {
				return (
					<Letter
						key={`logo-letter-${letter.key}-${ind}`}
						size={size}
						letter={letter.key}
						letterMap={letter}
						ind={ind}
						animate={true}
						animateDelay={animateDelay}
					/>
				);
			})}
		</TitleWrapper>
	);
};

const TitleWrapper = styled(motion.div)`
	position: relative;

	width: ${props => props.width};
	height: ${props => props.size};
`;

export default Title;
