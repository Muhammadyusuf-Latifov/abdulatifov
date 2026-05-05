import { memo, useEffect, useState } from "react";
import logo from "../../../shared/images/mainLogo/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSelect from "./LanguageSelector";

const Header = () => {
  const { t } = useTranslation();
  const [isScroll, setIsScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`bg-[#000000d2] font-extralight text-white shadow-md duration-300 border-b border-black transition backdrop-blur-md sticky top-0 z-50 py-2 ${
          isScroll ? "border-b border-b-[#323232]" : ""
        }`}
      >
        <nav className="container py-2 flex items-center justify-between relative">
          {/* LEFT (DESKTOP) */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-5">
              <li>
                <NavLink className="navlink" to={"/"}>
                  {t("header.home")}
                </NavLink>
              </li>
              <li>
                <NavLink className="navlink" to={"/about"}>
                  {t("header.about")}
                </NavLink>
              </li>
              <li>
                <NavLink className="navlink" to={"/program"}>
                  {t("header.program")}
                </NavLink>
              </li>
            </ul>
          </div>

          {/* CENTER LOGO (DESKTOP FIXED) */}
          <div className="hidden md:flex justify-center absolute inset-0 pointer-events-none">
            <Link to={"/"} className="pointer-events-auto">
              <img src={logo} alt="Logo" className="max-w-14" />
            </Link>
          </div>

          {/* RIGHT (DESKTOP) */}
          <div className="hidden md:flex items-center gap-4">
            <ul className="flex items-center gap-4">
              <li>
                <NavLink className="navlink" to={"/lifestyle"}>
                  {t("header.lifestyle")}
                </NavLink>
              </li>
            </ul>
            <LanguageSelect />
          </div>

          {/* 📱 MOBILE HEADER */}
          <div className="md:hidden grid grid-cols-3 items-center w-full">
            {/* MENU BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="justify-self-start text-2xl"
            >
              ☰
            </button>

            {/* LOGO CENTER */}
            <Link to={"/"} className="justify-self-center">
              <img src={logo} alt="Logo" className="max-w-12" />
            </Link>

            {/* LANGUAGE RIGHT */}
            <div className="justify-self-end">
              <LanguageSelect />
            </div>
          </div>
        </nav>
      </header>

      {/* 📱 MOBILE MENU + OVERLAY */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-all duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* MENU PANEL */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={`bg-[#000000ee] text-white transition-all duration-500 ${
            menuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <ul className="flex flex-col items-center gap-6 py-10">
            <li>
              <NavLink onClick={() => setMenuOpen(false)} to={"/"}>
                {t("header.home")}
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setMenuOpen(false)} to={"/about"}>
                {t("header.about")}
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setMenuOpen(false)} to={"/program"}>
                {t("header.program")}
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setMenuOpen(false)} to={"/lifestyle"}>
                {t("header.lifestyle")}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default memo(Header);
