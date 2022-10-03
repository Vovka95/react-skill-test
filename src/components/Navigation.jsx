import { NavLink } from "react-router-dom";

import Logo from "./Logo";

const Navigation = () => {
    const navLinkBaseClasses = "px-3 py-2 rounded-md text-sm font-medium mr-2";
    const navLinkActiveClasses = "bg-gray-900 text-white";
    const navLinkNonActiveClasses =
        "text-gray-800 hover:bg-gray-700 hover:text-white";

    return (
        <nav className="flex justify-between items-center w-full">
            <NavLink to="/">
                <Logo />
            </NavLink>
            <div className="grow"></div>
            <NavLink end to="/">
                {({ isActive }) => (
                    <div
                        className={[
                            isActive
                                ? navLinkActiveClasses
                                : navLinkNonActiveClasses,
                            navLinkBaseClasses,
                        ].join(" ")}
                    >
                        Home
                    </div>
                )}
            </NavLink>
            <NavLink to="/beers">
                {({ isActive }) => (
                    <div
                        className={[
                            isActive
                                ? navLinkActiveClasses
                                : navLinkNonActiveClasses,
                            navLinkBaseClasses,
                        ].join(" ")}
                    >
                        Beers
                    </div>
                )}
            </NavLink>
        </nav>
    );
};

export default Navigation;
