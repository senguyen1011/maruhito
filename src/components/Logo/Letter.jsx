import { useState } from "react";
import { motion } from "framer-motion";
import { styled } from "styled-components";
import { dropAndBounce } from '../../styles';
const Letter = ({ size = '2rem', letter, letterMap, ind, animateDelay, animate }) => {
  const hoverDuration = 0.25;
  const [isHover, setHover] = useState(false);

  if (animate) {
    return (
      <LogoLetter
        size={size}
        letter={letterMap}
        initial={{ ...dropAndBounce.initial, rotate: 0 }}
        animate={{
          ...dropAndBounce.animate,
          rotate: letterMap.rotate,
        }}
        transition={{
          type: isHover ? 'ease-in' : dropAndBounce.transition.type,
          duration: isHover ? hoverDuration : dropAndBounce.transition.duration,
          bounce: dropAndBounce.transition.bounce,
          delay: isHover ? 0 : animateDelay + 0.05 * ind,
        }}
        whileHover={{
          scale: 0.8,
          transition: {
            type: 'easeInOut',
            duration: hoverDuration,
            delay: 0,
          },
        }}
        onHoverStart={e => setHover(true)}
      >
        {letter}
      </LogoLetter>
    );
  } else {
    return (
      <LogoLetter
        size={size}
        letter={letterMap}
        isLink={true}
      >
        {letter}
      </LogoLetter>
    );
  }
};


const LogoLetter = styled(motion.div)`
	display: inline-block;
	position: absolute;
	${props => props.letter.coordinate.x};
	${props => props.letter.coordinate.y};

	font-size: ${props => props.size};
	color: ${props => props.theme[props.letter.color]};
	transform: rotate(${props => props.letter.rotate}deg);

	cursor: ${props => (props.isLink ? 'pointer' : 'default')};
`;



export default Letter;