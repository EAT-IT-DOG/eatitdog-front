import * as S from "./style";
import React from "react";
import NavBar from "../NavBar";
import SearchBar from "../SearchBar";
import ProfileBar from "../ProfileBar";
import DarkmodeButton from "../DarkmodeButton";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <S.Container>
      <NavBar />
      <S.ConentWrap>
        <S.HeaderWrap>
          <SearchBar />
          <DarkmodeButton />
        </S.HeaderWrap>
        {children}
      </S.ConentWrap>
      <ProfileBar />
    </S.Container>
  );
};

export default Layout;
