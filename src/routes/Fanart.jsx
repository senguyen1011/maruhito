import { styled } from 'styled-components';
import Container from '../components/Container';
import Title from '../components/Logo/Title';
import ContainerWithNav from '../components/ContainerWithNav';
import Carousel from '../components/Carousel';
import BackLink from '../components/BackLink';
import { theme } from '../styles';
import { useEffect } from 'react';  
const Fanart = () => {
  useEffect(() => {
    const themeColor = document.getElementById('themeColor');
    themeColor.setAttribute('content', theme.pink);
  });

	return (
		<ContainerWithNav
			navColor='pink'
			navExclude={['Art']}
		>
			<ArtContainer>
				<Title
        width='22rem'
					letterMap={[
						{
							key: 'F',
							color: 'blue',
							rotate: -7,
							coordinate: {
								y: 'top: 0',
								x: 'left: 0',
							},
						},
						{
							key: 'A',
							color: 'pink',
							rotate: 8,
							coordinate: {
								y: 'top: 0',
								x: 'left: 0.5em',
							},
						},
						{
							key: 'N',
							color: 'yellow',
							rotate: -9,
							coordinate: {
								y: 'top: 0',
								x: 'left: 1.12em',
							},
						},
						{
							key: 'A',
							color: 'blue',
							rotate: -17,
							coordinate: {
								y: 'top: 0',
								x: 'left: 1.775em',
							},
						},
						{
							key: 'R',
							color: 'pink',
							rotate: -2,
							coordinate: {
								y: 'top: 0',
								x: 'left: 2.5em',
							},
						},
						{
							key: 'T',
							color: 'yellow',
							rotate: 10,
							coordinate: {
								y: 'top: 0',
								x: 'left: 3.125em',
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



export default Fanart;
