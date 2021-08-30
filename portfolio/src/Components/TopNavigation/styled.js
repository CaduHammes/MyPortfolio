import styled from "styled-components";

export const TopContainer = styled.div`
  justify-content: space-between;
  flex-direction: row;
  background-color: transparent;
  align-items: center;
  position: -webkit-sticky;
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
  &:hover {
    transition: 300ms;
    box-shadow: 0px 2px 10px rgb(217, 212, 212);
  }
  border-radius: 5px;
  vertical-align: middle;
  width: 160px;
  height: 40px;
  margin: 5px;
`;
export const ArrowDown = styled.button`
  color: #000;
  size: 25px;
  background-color: transparent;
  border: 0;
  justify-content: center;
  align-items: center;
  &:hover {
    transition: 300ms;
    box-shadow: 0px 2px 10px rgb(217, 212, 212);
  }
  border-radius: 20px;
  vertical-align: middle;
  width: 40px;
  height: 40px;
  margin: 5px;
`;
