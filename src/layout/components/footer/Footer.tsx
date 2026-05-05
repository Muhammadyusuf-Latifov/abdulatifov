import { NavLink } from "react-router-dom";
import {   FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiTelegram2Fill ,RiInstagramFill  } from "react-icons/ri";
import {useTranslation} from "react-i18next"

export default function Footer() {
  const {t} = useTranslation()
  return (
    <footer className="bg-[#131721] text-white py-10 ">
      <div className="container mx-auto px-4 grid grid-cols-3 max-[700px]:grid-cols-2  gap-8">
        {/* Logo */}
        <div className="">
          <p className="text-2xl font-bold mb-3">Abdulatifov</p>
          <p className="text-gray-400">
            Zamonaviy web ilovalar va kontent yaratish platformasi. Biz bilan
            birga o‘rganing, yarating va rivojlaning.
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center justify-center">
          <div>
            <p className="text-[20px] font-semibold mb-3">Sahifalar</p>
            <ul className="space-y-2 text-gray-400 font-extralight ">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-white " : "hover:text-white duration-300"
                  }
                >
                  {t("header.home")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "text-white " : "hover:text-white duration-300"
                  }
                >
                  {t("header.about")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/program"
                  className={({ isActive }) =>
                    isActive ? "text-white " : "hover:text-white duration-300"
                  }
                >
                  {t("header.program")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/lifestyle"
                  className={({ isActive }) =>
                    isActive ? "text-white " : "hover:text-white duration-300"
                  }
                >
                  {t("header.lifestyle")}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Social */}
        <div className="flex flex-col items-end max-[700px]:items-center max-[700px]:justify-center max-[700px]:col-span-2">
          <div>
            <p className="text-lg font-semibold mb-3">
              Biz ijtimoiy tarmoqlarda
            </p>
            <div className="flex gap-4 text-2xl">
              <a
                href="https://instagram.com/abdulatifow"
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-500 duration-300"
              >
                <RiInstagramFill />
              </a>
              <a
                href="https://t.me/abdulatifow"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400 duration-300"
              >
                <RiTelegram2Fill />
              </a>
              <a
                href="https://www.youtube.com/@abdulatifoov"
                target="_blank"
                rel="noreferrer"
                className="hover:text-red-500 duration-300"
              >
                <FaYoutube />
              </a>
              <a
                href="mailto:zyec22@icloud.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-500 duration-300"
              >
                <MdEmail />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <hr className="mt-5 border-none h-px bg-[#454545]" />
      </div>
      <div className="text-center text-gray-500 mt-10 text-sm">
        © {new Date().getFullYear()} Muhammadziyo
      </div>
    </footer>
  );
}
 