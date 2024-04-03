import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";

function Nav() {
  const menus = [{ title: "뽀모도로" }, { title: "5분 타이머" }, { title: "10분 타이머" }];

  return (
    <NavWrapper>
      <PageName>우왕</PageName>
      <UlStyle>
        {menus.map((menu) => (
          <List name={menu.title}>{menu.title}</List>
        ))}
      </UlStyle>
    </NavWrapper>
  );
}

export default Nav;

const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 25px;
  background-color: #f0f8ff;
`;

const PageName = styled.h1`
  font-size: 25px;
  color: #708090;
`;

const UlStyle = styled.ul`
  display: flex;
  list-style: none;
  gap: 10px;
`;

const List = styled.h4`
  font-size: 20px;
  color: #708090;
`;
