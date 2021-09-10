import React from "react";
import { Link } from "react-router-dom";
import {
  AppName,
  NameContainer,
  TopContainer,
  TopContainerButton,
} from "./styled";
import { HideMenu } from "../HideMenu/index";

export const TopNavigation = () => {
  return (
    <>
      <TopContainer>
        <NameContainer>
          <Link to="/">
            <AppName>MyPortfolio</AppName>
          </Link>
        </NameContainer>
        <Link>
          <TopContainerButton>Earth</TopContainerButton>
        </Link>
        <Link>
          <TopContainerButton>Earth</TopContainerButton>
        </Link>
        <HideMenu />
      </TopContainer>
    </>
  );
};
