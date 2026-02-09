
import rasm from "../../../shared/images/mainLogo/hero.jpg";
import { useTranslation } from "react-i18next";
import GridProgram  from "../components/GridProgram";
import CommentAceternity from "../components/ComentAceternity";

const Home = () => {
  const { t } = useTranslation();
  const title = t("hero.title");
  const words = title.split(" ");

  return (
    <>
      <section>
        <div className="relative max-w-full w-full min-h-[180px]">
          <div
            className="absolute inset-0 bg-cover min-h-180 bg-center bg-no-repeat bg-fixed"
            style={{ backgroundImage: `url(${rasm})` }}
          ></div>

          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative container min-h-180 flex items-center  z-10 text-white p-4 ">
            <div className=" rounded-[14px] backdrop-blur-sm max-w-[60%]">
              <h1 className="hero-title py-4 px-4 text-[45px]">
                <span className="text-black bg-white px-2 rounded-[10px]">
                  {words.slice(0, 3).join(" ")}
                </span>{" "}
                {words.slice(3).join(" ")}
              </h1>
              <p className="text-[#c3c3c3] px-4">{t("hero.description")}</p>
            </div>
          </div>
        </div>
      </section>
      <GridProgram />
      <CommentAceternity />
    </>
  );
};

export default Home