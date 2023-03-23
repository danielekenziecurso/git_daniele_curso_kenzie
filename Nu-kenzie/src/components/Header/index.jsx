import React from 'react';
import { StyledHeader } from './styles';
import kenzie from '../../assets/img/nu-kenzie.svg';

const Header = () => {
  return (
    <StyledHeader>
     <img src={kenzie}/>
    </StyledHeader>
  )
}

export default Header;