import { useState } from "react";
import { Icon } from "../common/Icon.component";
import { useNavigate } from "react-router-dom";

export const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const naviagte = useNavigate();

  const onSearch = (e) => {
    e.preventDefault();
    naviagte(`/product/search?keyword=${searchKeyword}`);
  };

  return (
    <div className="flex gap-2 w-full px-4 py-1 border border-[#D4D4D4] rounded-md ">
      <form onSubmit={onSearch} className="w-full">
        <input
          className="w-full"
          type="text"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
      </form>
      {isFocused && (
        <button
          className="flex justify-center items-center w-6 h-6 rounded-full bg-gray-400"
          onMouseDown={() => setSearchKeyword("")}
        >
          <Icon size="small" className="fill-gray-50" type="close" />
        </button>
      )}
    </div>
  );
};
