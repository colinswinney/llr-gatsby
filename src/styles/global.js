import { createGlobalStyle} from 'styled-components'
import { normalize } from 'styled-normalize'
import '@fontsource/oswald/400.css'
import '@fontsource/ultra'

export const colors = {
    white: `#fffdfb`,
    black: `#232323`,
    red: `#B01F37`,
    red900: `#681221`,
    blue: `#2E87AA`,
    orange: `#D1A75C`,
    yellow: `#D6C93D`,
}

export const vars = {
    oswald: `"Oswald", -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif`,
    ultra: `"Ultra", Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol`,
    breakpointSm: `700px`,
    breakpointLg: `1200px`,
    transition: `all 0.2s ease`
}

export const GlobalStyles = createGlobalStyle`

    ${normalize}

    html,
    body {
        font-size: 100%;
    }

    body {
        font-family: ${vars.oswald};
        color: ${colors.black};
        background-color: ${colors.white};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin-top: 0;
        font-family: ${vars.ultra};
    }

    h1 {
        margin-top: 0;
        font-size: 4.209rem;
    }

    h2 {
        font-size: 3.157rem;
    }

    h3 {
        font-size: 2.369rem;
    }

    h4 {
        font-size: 1.777rem;
    }

    h5 {
        font-size: 1.333rem;
    }

    h6 {
        font-size: 1rem;
    }

    p {
        margin-top: 0;
    }

    small {
        font-size: 0.75rem;
    }

    a {
        text-decoration: none;
        transition: ${vars.transition};

        &:hover {
            text-decoration: underline;
        }
    }

`;