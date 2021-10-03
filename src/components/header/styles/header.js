import styled from 'styled-components'
import { colors, vars } from '../../../styles/global'

export const HeaderEl = styled.header`
	padding-top: 15rem;
	text-align: center;
    background-color: #D1A75D;
	display: flex;
    flex-direction: column;

	.home-image {
		max-width: 700px;
        margin-bottom: 2rem;
	}
`;

export const Heading = styled.h1`
    margin-bottom: 1rem;
`

export const SubHeading = styled.h2`
    font-family: ${vars.oswald};
    font-size: 2rem;
    letter-spacing: .25rem;
`