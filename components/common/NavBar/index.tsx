import {
  NavBarContainer,
  NavBarLogOutBtn,
  NavBarLogOutIcon,
  NavBarSectionItem,
  NavBarSectionItemIcon,
  NavBarSectionItemWrap,
  NavBarSectionWrap,
  NavBarTitle,
} from "./style";
import { NAVBAR_SECTION_ITEMS } from "../../../constants/navBar/navBar.constant";
import { FiLogOut } from "@react-icons/all-files/fi/FiLogOut";
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const NavBar = () => {
  const router = useRouter();

  return (
    <NavBarContainer>
      <NavBarTitle onClick={() => router.push("/")}>먹어보시개</NavBarTitle>
      <NavBarSectionWrap>
        {NAVBAR_SECTION_ITEMS.map((sectionItem) => (
          <Link href={sectionItem.link} key={sectionItem.sectionName}>
            <NavBarSectionItemWrap
              selected={sectionItem.selector === router.pathname}
            >
              <NavBarSectionItem
                selected={sectionItem.selector === router.pathname}
              >
                <NavBarSectionItemIcon
                  selected={sectionItem.selector === router.pathname}
                >
                  <sectionItem.icon />
                </NavBarSectionItemIcon>
                {sectionItem.sectionName}
              </NavBarSectionItem>
            </NavBarSectionItemWrap>
          </Link>
        ))}
      </NavBarSectionWrap>
      {/* <NavBarLogOutBtn>
        <NavBarLogOutIcon>
          <FiLogOut />
        </NavBarLogOutIcon>
        로그아웃
      </NavBarLogOutBtn> */}
    </NavBarContainer>
  );
};

export default NavBar;
