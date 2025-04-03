import React from "react";
import { Typography } from "antd";
import { useTranslation } from "react-i18next";

const { Title, Paragraph } = Typography;

const TeamsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="teams-page min-h-[30vh] mt-20 text-center">
      <Title level={1}>{t("pages.teams.title")}</Title>
      <Paragraph>{t("pages.teams.content")}</Paragraph>
    </div>
  );
};

export default TeamsPage;
