import React from "react";

import { IoCalendarClearOutline, IoChevronUp } from "react-icons/io5";
import Historic from "../components/Historic";
import DoughnutChart from "../components/DoughnutChart";

const Overview = () => {
    return (
        <div className="flex-grow flex flex-col p-8 gap-8 text-[#64748B] items-center overflow-y-scroll">
            <div className="w-full">
                <button className="p-4 grow-0 flex gap-2 bg-white rounded-lg items-center border border-[#E2E8F0] shadow">
                    <IoCalendarClearOutline />
                    <p>Dec 29, 2023 - Jan 4, 2024</p>
                </button>
            </div>
            {/* Historic */}
            <Historic />
            {/* Info */}
            <div className="flex flex-col sm:flex-row gap-6 p-6 bg-white rounded-lg items-center border border-[#E2E8F0] shadow">
                <div className="flex flex-col gap-1">
                    <div className="flex flex-row items-center">
                        <p className="text-2xl font-bold">18.61</p>
                        <IoChevronUp className="text-green-600 text-sm font-bold" />
                        <p className="text-green-600 text-xs font-light">18%</p>
                    </div>
                    <p>Besoin en eau</p>
                </div>
                <hr className="border border-[#E2E8F0] h-full" />
                <div className="flex flex-col gap-1">
                    <div className="flex flex-row items-center">
                        <p className="text-2xl font-bold">18.61</p>
                        <IoChevronUp className="text-green-600 text-sm font-bold" />
                        <p className="text-green-600 text-xs font-light">18%</p>
                    </div>
                    <p>Besoin en eau</p>
                </div>
                <hr className="border border-[#E2E8F0] h-full" />
                <div className="flex flex-col gap-1">
                    <div className="flex flex-row items-center">
                        <p className="text-2xl font-bold">18.61</p>
                        <IoChevronUp className="text-green-600 text-sm font-bold" />
                        <p className="text-green-600 text-xs font-light">18%</p>
                    </div>
                    <p>Besoin en eau</p>
                </div>
            </div>
            {/* Doughnut */}
            <div className="flex flex-col md:flex-row gap-8 justify-between items-center w-full">
                <div className="w-full md:w-1/2 h-full">
                    <DoughnutChart />
                </div>
                <div className="w-full md:w-1/2 h-full">
                    <DoughnutChart />
                </div>
            </div>
            {/* Table */}
            <nav aria-label="Page navigation example">
                <ul class="flex items-center -space-x-px h-8 text-sm">
                    <li>
                        <a
                            href="#"
                            class="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                        >
                            <span class="sr-only">Previous</span>
                            <svg
                                class="w-2.5 h-2.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 6 10"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 1 1 5l4 4"
                                />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                        >
                            1
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                        >
                            2
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            aria-current="page"
                            class="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"
                        >
                            3
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                        >
                            4
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                        >
                            5
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                        >
                            <span class="sr-only">Next</span>
                            <svg
                                class="w-2.5 h-2.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 6 10"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m1 9 4-4-4-4"
                                />
                            </svg>
                        </a>
                    </li>
                </ul>
            </nav>
            <table class="w-full text-sm text-left text-gray-500">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Culture Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Type
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Eau(l)
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Engrais(g)
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Pesticides(l)
                        </th>
                    </tr>
                </thead>
            </table>
        </div>
    );
};

export default Overview;
