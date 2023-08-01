import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { styled } from 'styled-components';
import { fadeIn } from '../styles';

const carouselHeight = '36rem';
const variants = {
	enter: direction => {
		return {
			x: direction > 0 ? 1000 : -1000,
			opacity: 0,
		};
	},
	center: {
		zIndex: 1,
		x: 0,
		opacity: 1,
	},
	exit: direction => {
		return {
			zIndex: 0,
			x: direction < 0 ? 1000 : -1000,
			opacity: 0,
		};
	},
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
	return Math.abs(offset) * velocity;
};

const Carousel = ({ gallery }) => {
	const [[page, direction], setPage] = useState([0, 0]);

	const paginate = dir => {
		if (page + dir < 0) {
			setPage([gallery.length - 1, dir]);
		} else if (page + dir >= gallery.length) {
			setPage([0, dir]);
		} else {
			setPage([page + dir, dir]);
		}
	};
	return (
		<>
			<CarouselContainer
				initial={fadeIn.initial}
				animate={fadeIn.animate}
				exit={fadeIn.initial}
			>
				<AnimatePresence
					initial={false}
					custom={direction}
				>
					<motion.img
						key={page}
						src={require(`../assets/${gallery[page]}`)}
						custom={direction}
						variants={variants}
						initial='enter'
						animate='center'
						exit='exit'
						transition={{
							x: { type: 'spring', stiffness: 300, damping: 30 },
							opacity: { duration: 0.2 },
						}}
						drag='x'
						dragConstraints={{ left: 0, right: 0 }}
						dragElastic={1}
						onDragEnd={(e, { offset, velocity }) => {
							const swipe = swipePower(offset.x, velocity.x);

							if (swipe < -swipeConfidenceThreshold) {
								paginate(1);
							} else if (swipe > swipeConfidenceThreshold) {
								paginate(-1);
							}
						}}
					/>
				</AnimatePresence>
				<ControlsContainer>
					<Controls
						onClick={() => paginate(-1)}
						whileHover={{
							scale: 0.9,
							transition: {
								type: 'easeInOut',
								duration: 0.25,
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
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='32 0 512 512'
						>
							<path
								fill='none'
								stroke='currentColor'
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='72'
								d='M328 112L184 256l144 144'
							/>
						</svg>
					</Controls>
					<Controls
						onClick={() => paginate(1)}
						whileHover={{
							scale: 0.9,
							transition: {
								type: 'easeInOut',
								duration: 0.25,
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
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='-32 0 512 512'
						>
							<path
								fill='none'
								stroke='currentColor'
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='72'
								d='M184 112l144 144-144 144'
							/>
						</svg>
					</Controls>
				</ControlsContainer>
			</CarouselContainer>
			<Pagination
				initial={fadeIn.initial}
				animate={fadeIn.animate}
				exit={fadeIn.initial}
			>
				{gallery.map((_, ind) => {
					return ind === page ? <span className='active' /> : <span />;
				})}
			</Pagination>
		</>
	);
};

const CarouselContainer = styled(motion.div)`
	width: 100%;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: start;
	overflow: hidden;
	height: ${carouselHeight};
	border-radius: ${props => props.theme.borderRadius};

	img {
		position: absolute;
		height: ${carouselHeight};
		width: auto;
		border-radius: ${props => props.theme.borderRadius};
	}
`;

const ControlsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: ${carouselHeight};
`;

const Controls = styled(motion.button)`
	align-self: center;
	border-radius: 9999px;
	width: 4rem;
	height: 4rem;
	aspect-ratio: 1;
	outline: none;
	border: none;
	z-index: 3;
	background-color: ${props => props.theme.blue};
	padding: 1rem;
	color: ${props => props.theme.blueContent};
	font-size: 2rem;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	opacity: 0.5;
`;

const Pagination = styled(motion.div)`
	display: flex;
	justify-content: space-between;
	gap: 1rem;

	span {
		border-radius: 9999px;
		width: 1rem;
		height: 1rem;
		border: 2px solid ${props => props.theme.pink};
	}

	span.active {
		background-color: ${props => props.theme.pink};
	}
`;

export default Carousel;
