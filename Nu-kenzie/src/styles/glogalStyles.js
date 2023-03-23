import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0 auto;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    outline: none;
    
    }

    :root{
    --primary-1: #FD377E;
    --primary-2:#E34981;
    --secondary:#03B898;
    --white: #ffffff;

    --grey-1:#F8F9FA;
    --grey-2:#E9ECEF;
    --grey-3:#868E96;
    --grey-4:#212529;

    --font-Nunito:font-family: 'Nunito', sans-serif;
}
button{
    cursor: pointer;
}


`;
