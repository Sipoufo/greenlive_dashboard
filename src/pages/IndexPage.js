import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import SideBar from "../components/SideBar";
import { BiSearch } from "react-icons/bi";
import { FaBars } from "react-icons/fa6";

const IndexPage = () => {
    const [menuActive, setMenuActive] = useState(false);
    return (
        <div className="w-screen h-screen flex justify-center overflow-hidden">
            <div className="relative w-full flex flex-row max-w-screen-2xl">
                {/* Slider Bar */}
                <div
                    className={`${
                        !menuActive && "hidden"
                    } absolute z-30 h-full lg:hidden block w-full`}
                >
                    <SideBar setMenuActive={setMenuActive} />
                </div>
                <div className="h-full lg:block hidden w-[18%]">
                    <SideBar />
                </div>
                <div className="flex-grow bg-[#F1F5F9] w-full">
                    <div className="w-full h-full flex flex-col">
                        <div className="bg-white border border-[#E2E8F0] items-center h-20 flex flex-row justify-between px-8 py-4">
                            {/* Search part */}
                            <div className="w-4/12 hidden md:flex">
                                <form>
                                    <label class="mb-2 text-sm font-medium text-gray-900 sr-only">
                                        Search
                                    </label>
                                    <div class="relative">
                                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <button>
                                                <BiSearch />
                                            </button>
                                        </div>
                                        <input
                                            type="search"
                                            class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-100 rounded-lg bg-white"
                                            placeholder="Search Mockups, Logos..."
                                            required
                                        />
                                    </div>
                                </form>
                            </div>
                            <FaBars className="lg:hidden" onClick={(e) => setMenuActive(true)} />
                            <div className="flex flex-row gap-2 items-center h-full">
                                <div className="flex flex-col items-end">
                                    <h1 className="text-sm font-bold">
                                        Thomas Sentry
                                    </h1>
                                    <h2 className="text-[#637381] text-sm font-medium">
                                        Administrator
                                    </h2>
                                </div>
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/assets/logos/logo.png"
                                    }
                                    className="h-full object-contain"
                                    alt="logo"
                                />
                            </div>
                        </div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndexPage;
