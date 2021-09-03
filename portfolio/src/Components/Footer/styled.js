import styled from "styled-components";

export const PrincipalConainer = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.15) 0%,
      rgba(0, 0, 0, 0.15) 100%
    ),
    radial-gradient(
        at top center,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(0, 0, 0, 0.4) 120%
      )
      #989898;
  background-blend-mode: multiply, multiply;
  position: absolute;
  bottom: 0;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  display: flex;
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const ColumnContainer = styled.div`
  flex-direction: column;
  display: flex;
`;

export const ColumnTitle = styled.text`
  color: #000;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  padding-bottom: 15px;
`;
export const Contacts = styled.a`
  color: #454545;
  text-decoration: none;
  transition: 300ms;
  vertical-align: middle;
  transition-timing-function: ease-out;
  padding-top: 2.5px;
  padding-bottom: 2.5px;
  &:hover {
    color: #000;
    transform: translate(10px, 0px);
  }
  display: flex;
`;
