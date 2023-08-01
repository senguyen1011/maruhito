import { styled } from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin: 0 auto;

  padding: 0 2rem;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	

  @media only screen and (min-width: ${props => props.theme.breakpoints.width.xm}) {
		max-width: ${props => props.theme.breakpoints.width.sm};
	}

  @media only screen and (min-width: ${props => props.theme.breakpoints.width.md}) {
		max-width: ${props => props.theme.breakpoints.width.md};
	}

  @media only screen and (min-width: ${props => props.theme.breakpoints.width.lg}) {
		max-width: ${props => props.theme.breakpoints.width.lg};
	}

  @media only screen and (min-width: ${props => props.theme.breakpoints.width.xl}) {
		max-width: ${props => props.theme.breakpoints.width.xl};
	}

  @media only screen and (min-width: ${props => props.theme.breakpoints.width.xxl}) {
		max-width: ${props => props.theme.breakpoints.width.xxl};
	}
`;

export default Container;