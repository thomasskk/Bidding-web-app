import { Search, Container, SearchItem, Separator } from "./style";
import { MenuOption } from "../Navbar/style";
import { useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";
import ClickOutsideListener from "../../utils/ClickOutsideListener";
import { Category, MenuCategory } from "./style";
import axios from "axios";

export default function SearchBar() {
  const dispatch = useDispatch();
  const categoryRef = useRef("All");
  const menuRef = useRef();
  const [isActive, setIsActive] = ClickOutsideListener(menuRef, false);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    (async () =>
      setCategory((await axios("http://localhost:8080/category")).data))();
  }, [isActive]);

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

  const OnChangeInputSearch = (e) => {
    e.persist();
    dispatch({
      type: "SET_SEARCH_NAME",
      payload: e.target.value,
    });
  };

  return (
    <Container>
      <Search>
        <SearchItem>
          <div>
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => OnChangeInputSearch(e)}
            />
          </div>
        </SearchItem>
        <Separator />
        <Category onClick={onClickCategory}>
          <label>Category : {categoryRef.current}</label>
          <MenuCategory
            className={`${isActive ? "active" : "inactive"}`}
            ref={menuRef}
          >
            {returnCategory()}
          </MenuCategory>
        </Category>
      </Search>
    </Container>
  );
}
