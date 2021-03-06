import styled from "styled-components";

export const TopContainer = styled.div`
  justify-content: space-between;
  flex-direction: row;
  background-color: transparent;
  align-items: center;
  position: fixed;
  margin: 0;
  padding: 0;
  top: 0;
  padding: 10px;
  background-color: transparent;
  width: 100%;
  display: flex;
  padding-left: 70px;
  padding-right: 70px;
`;

export const TopContainerButton = styled.button`
  color: #000;
  size: 25px;
  background-color: transparent;
  border: 0;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  vertical-align: middle;
  width: 160px;
  height: 50px;
  margin: 5px;
  transition: transform 300ms;
  transition-timing-function: ease-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    box-shadow: 0px 0px 10px #e8e8e8;
  }
`;

export const AppName = styled.text`
  font-weight: bolder;
  font-size: 25px;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: #000;

  a {
    text-decoration: none;
  }
`;

export const NameContainer = styled.div`
  a {
    text-decoration: none;
  }
`;
