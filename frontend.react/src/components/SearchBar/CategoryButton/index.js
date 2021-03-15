import { MenuOption } from "../../Navbar/style";
import { useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";
import AnimLoad from "../../../utils/AnimLoad";
import searchJson from "./img/search.json";
import ClickOutsideListener from "../../../utils/ClickOutsideListener";
import axios from "axios";
import { SearchButton, Category, MenuCategory } from "./style";

export default function CategoryButton() {
  const categoryRef = useRef("All");
  const menuRef = useRef();
  const [searchAnim, setSearchAnim] = useState(null);
  const searchContainer = useRef(null);
  const [isActive, setIsActive] = ClickOutsideListener(menuRef, false);
  const [category, setCategory] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () =>
      setCategory((await axios("http://localhost:8080/category")).data))();
  }, [isActive]);

  useEffect(() => {
    AnimLoad(setSearchAnim, searchContainer, searchJson, 1, 20);
  }, []);

  const returnCategory = () => {
    return category.map((category) => (
      <MenuOption
        key={category.categoryId}
        id={category.categoryId}
        onClick={(e) => onClickMenuOption(e)}
      >
        {category.name}
      </MenuOption>
    ));
  };

  const onClickCategory = (e) => {
    setIsActive(!isActive);
    dispatch({
      type: "SET_CATEGORY",
      payload: category,
    });
  };

  const onClickMenuOption = (e) => {
    categoryRef.current = e.target.value;
    dispatch({
      type: "SET_SEARCH_CATEGORY",
      payload: e.target.id,
    });
  };

  return (
    <Category onClick={onClickCategory}>
      <label>Category : {categoryRef.current}</label>
      <MenuCategory
        className={`${isActive ? "active" : "inactive"}`}
        ref={menuRef}
      >
        {returnCategory()}
      </MenuCategory>
      <SearchButton
        ref={searchContainer}
        onClick={() => searchAnim.playSegments([0, 21], true)}
      />
    </Category>
  );
}
