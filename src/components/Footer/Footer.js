import React from 'react';
import {BiPhoneCall, BiMailSend} from 'react-icons/bi'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineWhatsApp } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
      <LinkTitle>Call</LinkTitle>
      <LinkItem href='tel:918369105182'>+91-8369105182</LinkItem>
      </LinkColumn>
      <LinkColumn>
      <LinkTitle>Email</LinkTitle>
      <LinkItem href='mailto:maazqureshi009@gmail.com'>maazqureshi009@gmail.com</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
      <SocialContainer>
      <SocialIcons href='https://www.github.com/MaazQureshi009'>
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/maazqureshi009/'>
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href='https://www.instagram.com/maazqureshi009/'>
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
      <SocialIcons href='https://wa.me/918369105182'>
        <AiOutlineWhatsApp size="3rem"/>
      </SocialIcons>
      </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
