import React from "react";
import styled from "styled-components";
import recipe from "../../assets/recipe-book.svg";
import day from "../../assets/daylight.svg";
import night from "../../assets/night-mode.svg";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  padding: 18px 0;
  width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-weight: bold;
  font-style: italic;
  color: ${({ theme }) => theme.secoundary};
`;

const ToggleButton = styled.button`
  padding: 12px 16px;
  background: ${({ theme }) => theme.toggle.color};
  border: none;
  color: white;
  font-size: 0.8rem;
  border-radius: 8px;
  &:hover {
    background: ${({ theme }) => theme.toggle.hover};
  }
  &:focus {
    outline: none;
  }
`;

const Header = ({ theme, onToggle }) => {
  return (
    <HeaderContainer>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div
          style={{
            display: "flex",
            gap: "12px",
            alignItems: "center",
          }}
        >
          <img style={{ width: "50px" }} src={recipe} alt="logo" />
          <Title>Recipe App</Title>
        </div>
      </Link>
      <ToggleButton onClick={onToggle}>
        {theme === "light" ? (
          <img style={{ width: "24px" }} src={day} alt="day" />
        ) : (
          <img style={{ width: "24px" }} src={night} alt="night" />
        )}
      </ToggleButton>
    </HeaderContainer>
  );
};

export default Header;
