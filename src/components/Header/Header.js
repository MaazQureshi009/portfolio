import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineWhatsApp } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+918369105182';
  
    window.location.href = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
  };
  return (
  <Container>
    <Div1>
      <Link href='/'>
        <a style={{ display: 'flex', alignItems:'center', color:'white', marginBottom: '15px'}}>
          <DiCssdeck size="3rem"/><Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technology</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/MaazQureshi009'>
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/maazqureshi009/'>
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons onClick={handleWhatsAppClick}>
        <AiOutlineWhatsApp size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
)};

export default Header;
