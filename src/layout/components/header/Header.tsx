import { memo, useEffect, useState } from "react";
import logo from "../../../shared/images/mainLogo/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSelect from "./LanguageSelector";

const Header = () => {
  const { t } = useTranslation();
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`bg-[#000000d2]   font-extralight text-white shadow-md duration-300 border-b border-black transition  backdrop-blur-md sticky top-0 z-50 py-2 ${isScroll ? "border-b  border-b-[#323232] transition  " : ""}`}
    >
      <nav className="container py-2   flex items-center justify-between">
        <div>
          <ul className="flex items-center gap-5">
            <li>
              <NavLink className={`navlink`} to={"/"}>
                {t("header.home")}
              </NavLink>
            </li>
            <li>
              <NavLink className={`navlink`} to={"/about"}>
                {t("header.about")}
              </NavLink>
            </li>
            <li>
              <NavLink className={`navlink`} to={"/program"}>
                {t("header.program")}
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="">
          <Link
            to={"/"}
            className="absolute left-[50%] top-2 translate-x-[-50%]"
          >
            <img src={logo} alt="Logo" className="max-w-14   " />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <ul className="flex items-center gap-4">
            <li>
              <NavLink className={`navlink`} to={"/lifestyle"}>
                {t("header.lifestyle")}
              </NavLink>
            </li>
            <li>
              <NavLink className={`navlink`} to={"/"}>
                {t("header.home")}
              </NavLink>
            </li>
          </ul>
          <LanguageSelect />
        </div>
      </nav>
    </header>
  );
};

export default memo(Header);
