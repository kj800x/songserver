import React from "react";
import { NavLink, Link } from "react-router-dom";

import styled from "styled-components";

const HeaderWrapper = styled.header`
  background: darkblue;
  border-bottom: 1px solid grey;
  display: flex;
  align-items: center;
  padding: 0 6px 0 0;
  flex-wrap: wrap;

  h1 {
    padding: 8px;
    font-size: 20px;
    margin: 0;
    flex: 1;
  }

  a {
    color: white !important;
    text-decoration: none !important;
  }

  a.logo {
    font-style: italic;
  }
`;

const StyledNavLink = styled(NavLink)`
  margin-left: 20px;
  font-size: small;
  font-style: normal;
  border: 1px solid #7c0000;
  padding: 6px;
  border-bottom: none;
  position: relative;
  bottom: -5px;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  background: #3c003c;

  &.active {
    background: #773a77;
  }
`;

export const Header = () => (
  <HeaderWrapper>
    <h1>
      <Link className="logo" to="/">
        Songs
      </Link>
      <StyledNavLink
        to="/"
        className="tab"
        isActive={(match, location) =>
          match && !location.pathname.startsWith("/view")
        }
      >
        Home
      </StyledNavLink>
    </h1>
  </HeaderWrapper>
);
