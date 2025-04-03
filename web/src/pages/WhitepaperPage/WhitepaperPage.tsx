import React from "react";
import { Typography } from "antd";
import { useTranslation } from "react-i18next";

const { Title, Paragraph } = Typography;

const WhitepaperPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="whitepaper-page min-h-[30vh] mt-20 text-center">
      <Title level={1}>{t("pages.whitepaper.title")}</Title>
      <Paragraph>{t("pages.whitepaper.content")}</Paragraph>
    </div>
  );
};

export default WhitepaperPage;
