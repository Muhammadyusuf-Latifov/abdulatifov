import { useTranslation } from "react-i18next";
import { HoverEffect } from "../../../shared/ui/HoverEffect";

const CardHoverEffectDemo = () => {
  const { t } = useTranslation();
  const instagram = t("secondProgram.description");
  const projects = [
    {
      title: "Instagram",
      description: instagram,

      link: "https://instagram.com/abdulatifoov",
    },
    {
      title: "Telegram",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      link: "https://t.me/abdulatifov_7",
    },
    {
      title: "Google",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
      link: "https://google.com",
    },
    {
      title: "Meta",
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      link: "https://meta.com",
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
