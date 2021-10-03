import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { NavEl, NavLink, NavList, NavListItem } from './styles/nav'
import Container from '../shared/container'

const Nav = ({ children, ...restProps }) => {
    return (
        <NavEl id="navbar" {...restProps}>
            <Container>
                <NavList>
                    <NavListItem >
                        <NavLink to="/">
                            <StaticImage
                                alt="Long Line Riders text logo"
                                src="../../images/long-line-riders-text-bull-logo.png"
                                width={150}
                                height={150}
                                className="nav-logo"
                            />
                        </NavLink>
                    </NavListItem>
                    <NavListItem>
                        <NavLink to="/about">About</NavLink>
                    </NavListItem>
                    <NavListItem>
                        <NavLink to="/listen">Listen</NavLink>
                    </NavListItem>
                    <NavListItem>
                        <NavLink to="/contact">Contact</NavLink>
                    </NavListItem>
                </NavList>
            </Container>
        </NavEl>
    )
}

export default Nav