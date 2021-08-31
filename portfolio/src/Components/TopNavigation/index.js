import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppName,
  ArrowDown,
  NameContainer,
  NameLink,
  TopContainer,
  TopContainerButton,
} from "./styled";
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";

export const TopNavigation = () => {
  const [arrow, setArrow] = useState(false);
  return (
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

      <ArrowDown
        onClick={() => {
          setArrow(!arrow);
        }}
      >
        {arrow ? (
          <AiFillCaretDown
            size={23}
            style={{
              color: "#000",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          />
        ) : (
          <AiFillCaretUp
            size={23}
            style={{
              color: "#000",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          />
        )}
      </ArrowDown>
    </TopContainer>
  );
};
