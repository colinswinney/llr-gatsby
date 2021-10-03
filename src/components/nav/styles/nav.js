import styled from 'styled-components'
import { Link } from 'gatsby'
import { colors, vars } from '../../../styles/global'

export const NavEl = styled.nav`
    width: 100%;
	background-color: transparent;
	display: flex;
    position: absolute;
`;

export const NavList = styled.ul`
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
`
export const NavListItem = styled.li`
    margin: 0 2rem 0 0;
    display: flex;
    align-items: center;
    justify-content: center;

    &:first-of-type {
        margin-right: auto;
    }
`

export const NavLink = styled(Link)`
	padding: 0.5rem;
	color: ${colors.black};
	font-family: ${vars.ultra};
	font-size: 1.25rem;
	line-height: 1;
	text-transform: uppercase;

	&:hover {
		color: ${colors.red};
	}

	.nav-logo {
		margin: 0 0 0 0;
		transition: ${vars.transition};
		filter: grayscale(1) brightness(0.4);

		&:hover {
			filter: grayscale(0);
		}
	}
`;