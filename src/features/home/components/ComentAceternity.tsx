import { useTranslation } from "react-i18next";
import { HoverEffect } from "../../../shared/ui/HoverEffect";

const CardHoverEffectDemo = () => {
  const { t } = useTranslation();
  const instagram = t("secondProgram.description");
  const telegram = t("secondProgram.tgDesc");
  const emailDesc = t("secondProgram.emailDesc");
  const projects = [
    {
      title: "Instagram",
      description: instagram,

      link: "https://instagram.com/abdulatifow",
    },
    {
      title: "Telegram",
      description: telegram,
      link: "https://t.me/abdulatifow",
    },
    {
      title: "Email",
      description: emailDesc,

      link: "mailto:zyec22@icloud.com",
    },
    {
      title: "You Tube",
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      link: "https://www.youtube.com/@abdulatifoov",
    },
    {
      title: "Amazon",
      description:
        "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      link: "https://amazon.com",
    },
    {
      title: "Microsoft",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      link: "https://microsoft.com",
    },
  ];
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
};

export default CardHoverEffectDemo;
