import { useState } from "react";
import { Icon } from "../common/Icon.component";

export const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");

  return (
    <div className="flex gap-2 w-full px-4 py-1 border border-[#D4D4D4] rounded-md ">
      <input
        className="w-full outline-none"
        type="text"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
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
