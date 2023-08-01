import { styled } from 'styled-components';
import Container from '../components/Container';
import Title from '../components/Logo/Title';
import ContainerWithNav from '../components/ContainerWithNav';
import Carousel from '../components/Carousel';
import BackLink from '../components/BackLink';
import { theme } from '../styles';
import { useEffect } from 'react';  
const Original = () => {
  useEffect(() => {
    const themeColor = document.getElementById('themeColor');
    themeColor.setAttribute('content', theme.yellow);
  });

	return (
		<ContainerWithNav
			navColor='yellow'
			navExclude={['Art']}
		>
			<ArtContainer>
				<Title
        width='26rem'
					letterMap={[
						{
							key: 'O',
							color: 'blue',
							rotate: -7,
							coordinate: {
								y: 'top: 0',
								x: 'left: 0',
							},
						},
						{
							key: 'R',
							color: 'pink',
							rotate: 8,
							coordinate: {
								y: 'top: 0',
								x: 'left: 0.7em',
							},
						},
						{
							key: 'I',
							color: 'yellow',
							rotate: -9,
							coordinate: {
								y: 'top: 0',
								x: 'left: 1.3em',
							},
						},
						{
							key: 'G',
							color: 'blue',
							rotate: -17,
							coordinate: {
								y: 'top: 0',
								x: 'left: 1.6em',
							},
						},
						{
							key: 'I',
							color: 'pink',
							rotate: -2,
							coordinate: {
								y: 'top: 0',
								x: 'left: 2.35em',
							},
						},
						{
							key: 'N',
							color: 'yellow',
							rotate: 10,
							coordinate: {
								y: 'top: 0',
								x: 'left: 2.65em',
							},
						},
						{
							key: 'A',
							color: 'blue',
							rotate: -7,
							coordinate: {
								y: 'top: 0',
								x: 'left: 3.3em',
							},
						},
						{
							key: 'L',
							color: 'pink',
							rotate: -11,
							coordinate: {
								y: 'top: 0',
								x: 'left: 3.95em',
							},
						},
					]}
				/>
				<Carousel gallery={['sana.png', 'sif.png', 'bocchi.png', 'okayu.png', 'ina.png']} />
				<BackLink />
			</ArtContainer>
		</ContainerWithNav>
	);
};

const ArtContainer = styled(Container)`
	display: flex;
	flex-direction: column;
	justify-content: start;
	gap: 2rem;
	flex-grow: 1;
`;



export default Original;
