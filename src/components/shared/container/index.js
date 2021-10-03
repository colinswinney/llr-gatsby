import * as React from 'react'
import { ContainerEl } from './styles/container'

const Container = ({children, ...restProps}) => {
    return (
        <ContainerEl {...restProps}>
            {children}
        </ContainerEl>
    )
}

export default Container