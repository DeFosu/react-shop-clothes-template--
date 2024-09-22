import React, { useState } from "react";
import {
    AiOutlineClose,
    AiOutlineHeart,
    AiOutlineSearch,
} from "react-icons/ai";
import DarkOverlay from "../Overlay/DarkOverlay";
import NavigationMenu from "./NavigationMenu";
import TopBar from "./TopBar";
import Container from "../Container/Container";

const navigationMenuData = [
    {
        text: "Link-1",
        link: "/",
        color: "text-red-600",
    },
    {
        text: "Link-2",
        link: "/",
        color: "text-green-600",
    },
    {
        text: "Link-3",
        link: "/",
    },
    {
        text: "Link-4",
        link: "/",
    },
    {
        text: "Link-5",
        link: "/",
    },
    {
        text: "Link-6",
        link: "/",
    },
    {
        text: "Link-7",
        link: "/",
    },
];

const Header: React.FC = () => {
    const [searchOpen, setSearchOpen] = useState(false);

    const closeSearchModal = () => setSearchOpen(false);
    const openSearchModal = () => setSearchOpen(true);

    return (
        <header className="w-full bg-neutral-950 text-neutral-100">
            <DarkOverlay
                openStatus={searchOpen}
                closeFunction={closeSearchModal}
            >
                <div className="z-10">
                    <div className="flex justify-between font-semibold text-neutral-200">
                        <h2 className="text-2xl">Search</h2>
                        <button className="p-0.5" onClick={closeSearchModal}>
                            <AiOutlineClose size={24} />
                        </button>
                    </div>
                    <form
                        action=""
                        className="flex items-center mt-4 overflow-hidden border-2 rounded border-neutral-900"
                    >
                        <select
                            name="gender"
                            className="px-6 text-xl font-semibold h-14 text-neutral-900 bg-neutral-200"
                        >
                            <option value="all" className="font-normal">
                                All Genders
                            </option>
                            <option value="man" className="font-normal">
                                Man
                            </option>
                            <option value="woman" className="font-normal">
                                Woman
                            </option>
                        </select>
                        <div className="border h-14 border-neutral-900"></div>
                        <input
                            type="search"
                            name="search"
                            className="pl-6 text-xl h-14 text-neutral-900 placeholder-neutral-400 bg-neutral-200 focus:outline-none"
                            placeholder="Search..."
                        />
                        <button className="grid h-14 place-content-center aspect-square bg-neutral-200 text-neutral-900">
                            <AiOutlineSearch size={24} />
                        </button>
                    </form>
                </div>
            </DarkOverlay>
            <TopBar />
            <Container>
                <div className="flex items-center gap-8">
                    <div className="text-3xl font-bold">Logo</div>
                    <div className="flex flex-col w-full">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-8">
                                <button className="py-2 text-sm uppercase">
                                    Для хлопців
                                </button>
                                <button className="py-2 text-sm font-normal uppercase">
                                    Для дівчат
                                </button>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <button>Btn-2</button>
                                <button
                                    className="p-0.5"
                                    onClick={openSearchModal}
                                >
                                    <AiOutlineSearch size={20} />
                                </button>
                                <button className="p-0.5">
                                    <AiOutlineHeart size={20} />
                                </button>
                                <button>Btn-4</button>
                                <button>Btn-5</button>
                            </div>
                        </div>
                        <nav>
                            <NavigationMenu links={navigationMenuData} />
                        </nav>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;
