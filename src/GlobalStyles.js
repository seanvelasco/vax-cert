import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

::selection {
	background: rgba(0, 0, 0, 0.4);
}

code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}

    h1 {
        margin: 0;
    }
    
    color: rgba(255, 255, 255, 0.9);
`;

export const theme = {
}

export default GlobalStyles;