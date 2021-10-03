import * as React from 'react'
import { MainEl } from './styles/main'
import Container from '../shared/container'

const Main = ({ children, ...restProps }) => {
    return (
        <MainEl {...restProps}>
            <Container>
                {children}
            </Container>
        </MainEl>
    )
}

export default Main