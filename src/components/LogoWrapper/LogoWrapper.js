import React from 'react';
import Logo from '../../assets/Logo.svg';
import Logo2 from '../../assets/Logo2.svg';
import Logo3 from '../../assets/Logo3.svg';
import { Container } from './LogoWrapperStyled';

const LogoWrapper = () => (
  <Container>
    <picture>
      <source media="(max-width: 440px)" srcSet={Logo3} />
      <source media="(max-width: 840px)" srcSet={Logo2} />
      <img src={Logo} />
    </picture>
  </Container>
);

export default LogoWrapper;
