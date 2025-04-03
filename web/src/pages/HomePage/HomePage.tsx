import React from "react";
import { Typography } from "antd";
import { useTranslation } from "react-i18next";

const { Title, Paragraph } = Typography;

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="home-page min-h-[30vh] mt-20 text-center">
      <div className="flex flex-col items-center justify-center max-w-3xl mx-auto text-center">
        <Title
          level={1}
          className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
        >
          {t("pages.home.title")}
        </Title>
        <Paragraph className="text-gray-300 text-lg mb-8">
          {t("pages.home.content")}
        </Paragraph>
      </div>
    </div>
  );
};

export default HomePage;
