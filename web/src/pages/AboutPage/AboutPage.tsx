import React from "react";
import { Typography } from "antd";
import { useTranslation } from "react-i18next";

const { Title, Paragraph } = Typography;

const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="about-page min-h-[30vh] mt-20 text-center">
      <Title level={1}>{t("pages.about.title")}</Title>
      <Paragraph>{t("pages.about.content")}</Paragraph>
    </div>
  );
};

export default AboutPage;
