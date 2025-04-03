import React from "react";
import { Typography } from "antd";
import { useTranslation } from "react-i18next";

const { Title, Paragraph } = Typography;

const RoadmapPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="roadmap-page min-h-[30vh] mt-20 text-center">
      <Title level={1}>{t("pages.roadmap.title")}</Title>
      <Paragraph>{t("pages.roadmap.content")}</Paragraph>
    </div>
  );
};

export default RoadmapPage;
