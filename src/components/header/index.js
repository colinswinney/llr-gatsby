import * as React from 'react'
import { HeaderEl, Heading, SubHeading } from './styles/header'
import Container from '../shared/container'

export default function Header({ pageTitle, children, ...restProps }) {
    return (
        <HeaderEl {...restProps}>
            <Container>
                {children}
            </Container>
        </HeaderEl>
    )
}

Header.Heading = function HeaderHeading({ children, ...restProps }) {
	return <Heading {...restProps}>{children}</Heading>;
};

Header.SubHeading = function HeaderSubHeading({ children, ...restProps }) {
	return <SubHeading {...restProps}>{children}</SubHeading>;
};