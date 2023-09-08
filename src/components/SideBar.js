import React, { useState } from "react";
import OverviewItem from "../widgets/overviewItem";

import { IoGridOutline, IoCalendarClearOutline, IoLogoXing } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi2";
import { FaXmark } from "react-icons/fa6";

const SideBar = ({ setMenuActive }) => {
    const [activeOverviewSubMenu, setActiveOverviewSubMenu] = useState(false);

    return (
        <div className="w-full h-full bg-primary flex flex-col gap-6 px-6 py-3">
            <div className="h-20 flex justify-center items-center">
                <img
                    src={process.env.PUBLIC_URL + "/assets/logos/logo_lg.png"}
                    className="h-full w-10/12 object-contain"
                    alt="logo"
                />
            </div>
            <ul className="flex-grow space-y-2 text-white">
                <li className="font-light text-[##A9B5C7]">Menu</li>
                <li>
                    <OverviewItem
                        name="Overview"
                        icon={<IoGridOutline />}
                        haveItems={true}
                        isActive={activeOverviewSubMenu}
                        setActive={setActiveOverviewSubMenu}
                    />
                    <ul className={`${!activeOverviewSubMenu && "hidden"} ml-6 space-y-2 items-center w-full text-[#DEE4EE] font-medium px-4 py-2`}>
                        <li className="hover:text-white hover:underline underline-offset-4">
                            Analyse
                        </li>
                        <li className="hover:text-white hover:underline underline-offset-4">
                            Prévision
                        </li>
                        <li className="hover:text-white hover:underline underline-offset-4">
                            Optimisation
                        </li>
                        <li className="hover:text-white hover:underline underline-offset-4">
                            CRM
                        </li>
                    </ul>
                </li>
                <li>
                    <OverviewItem
                        icon={<IoCalendarClearOutline />}
                        haveItems={false}
                        isActive={false}
                        name="Overview"
                    />
                </li>
                <li>
                    <OverviewItem
                        icon={<HiOutlineUser />}
                        haveItems={false}
                        isActive={false}
                        name="Profile"
                    />
                </li>
                <li className="w-full flex justify-center lg:hidden">
                    <button onClick={(e) => setMenuActive(false)} className="h-10 w-10 bg-white rounded-full text-primary flex justify-center items-center text-2xl">
                        <FaXmark />
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default SideBar;
