import { memo } from "react";
import { useTranslation } from "react-i18next";
import { CheckLine } from "lucide-react";
const GridProgram = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="py-[50px]">
        <div className="container">
          <h2 className="text-center  text-white text-[34px]">
            {t("program.title")}
          </h2>
          <div className="grid grid-cols-3 gap-4 mt-[30px]">
            <div
              className="bg-[#3b3b3b] col-span-2
 px-4 py-4 rounded-[10px]"
            >
              <div>
                <CheckLine className="text-white " />
              </div>
              <div>
                <p className="text-white">
                  Пошаговую структуру тренировок, выстроенную под твоё время и
                  уровень подготовки
                </p>
              </div>
            </div>
            <div className="bg-[#3b3b3b] px-4 py-4 rounded-[10px]">
              <div>
                <CheckLine className="text-white " />
              </div>
              <div>
                <p className="text-white">
                  Пошаговую структуру тренировок, выстроенную под твоё время и
                  уровень подготовки
                </p>
              </div>
            </div>
            <div className="bg-[#3b3b3b] px-4 py-4 rounded-[10px]">
              <div>
              
              </div>
              <div>
                <p className="text-white">
                  Пошаговую структуру тренировок, выстроенную под твоё время и
                  уровень подготовки
                </p>
              </div>
            </div>
            <div className="bg-[#3b3b3b] col-span-2 px-4 py-4 rounded-[10px]">
              <div>
                <CheckLine className="text-white " />
              </div>
              <div>
                <p className="text-white">
                  Пошаговую структуру тренировок, выстроенную под твоё время и
                  уровень подготовки
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(GridProgram);
