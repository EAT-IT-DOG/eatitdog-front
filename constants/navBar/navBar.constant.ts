import { VscHome } from "@react-icons/all-files/vsc/VscHome";
import { CgProfile } from "@react-icons/all-files/cg/CgProfile";
import { FaRegPlusSquare } from "@react-icons/all-files/fa/FaRegPlusSquare";
import { BiSearch } from "@react-icons/all-files/bi/BiSearch";
import { SEARCH_FOOD_TYPES_ITEM } from "../search/search.constant";

export const NAVBAR_SECTION_ITEMS = [
  { sectionName: "홈", selector: "/", link: "/", icon: VscHome },
  {
    sectionName: "내정보",
    selector: "/profile",
    link: "/profile",
    icon: CgProfile,
  },
  {
    sectionName: "제안",
    selector: "/suggestion",
    link: "/suggestion",
    icon: FaRegPlusSquare,
  },
  {
    sectionName: "검색",
    selector: "/search",
    link: `/search?type=${SEARCH_FOOD_TYPES_ITEM[0].type}`,
    icon: BiSearch,
  },
] as const;
