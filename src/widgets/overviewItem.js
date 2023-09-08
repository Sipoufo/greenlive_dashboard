import React from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const OverviewItem = ({ name, icon, haveItems, isActive, setActive }) => {
    return (
        <button
            type="button"
            class="flex items-center w-full px-4 py-2 hover:text-[#DEE4EE] text-base font-medium transition duration-75 hover:bg-itemHover rounded-sm"
            onClick={(e) => setActive(!isActive)}
        >
            {icon}
            <span class="flex-1 ml-3 text-left whitespace-nowrap">
                {name}
            </span>
            <IoChevronDown className={`${!haveItems && "hidden"} ${isActive && "hidden"}`} />
            <IoChevronUp className={`${!haveItems && "hidden"} ${!isActive && "hidden"}`}/>
        </button>
    );
};

export default OverviewItem;
