import React from "react";

import {
  PrincipalConainer,
  ColumnContainer,
  ColumnTitle,
  Contacts,
} from "./styled";
import { FaInstagram } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <PrincipalConainer>
      <ColumnContainer>
        <ColumnTitle>Contacts</ColumnTitle>
        <Contacts href="https://twitter.com/hammes_cadu">
          <FaTwitter />
          twitter
        </Contacts>
        <Contacts href="https://www.instagram.com/caduhammes/">
          <FaInstagram />
          insta
        </Contacts>
        <Contacts href="https://github.com/CaduHammes">
          <FaGithub />
          github
        </Contacts>
        <Contacts href="https://open.spotify.com/user/duduhammes">
          <FaSpotify />
          spotify
        </Contacts>
      </ColumnContainer>
      <ColumnContainer>
        <ColumnTitle>Pages</ColumnTitle>
      </ColumnContainer>
    </PrincipalConainer>
  );
};
