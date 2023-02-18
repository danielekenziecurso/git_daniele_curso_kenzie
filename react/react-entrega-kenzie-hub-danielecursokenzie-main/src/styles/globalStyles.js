import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    margin: 0 auto;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    outline: none;
    list-style: none;
    font-family: 'Inter', sans-serif;;
    
button{
    cursor: pointer;
}
:root{
    --Color-primary:#FF577F;
    --Color-primary-Focus:#FF427F;
    --Color-primary-Negative:#59323F;
    --color-Grey-0:#F8F9FA;
    --color-Grey-1:#868E96;
    --color-Grey-2:#343B41;
    --color-Grey-3:#212529;
    --color-Grey-4:#121214;
    --color-Sucess:#3FE864;
    --color-Negative:#E83F5B;
    
}
`