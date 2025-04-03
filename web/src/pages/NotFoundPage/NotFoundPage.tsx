import React from "react";
import { Typography, Button } from "antd";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";

const { Title, Paragraph } = Typography;

const NotFoundPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="not-found-page text-center mt-20">
      <Title level={1}>{t("pages.notFound.title")}</Title>
      <Paragraph>{t("pages.notFound.content")}</Paragraph>
      <Button type="primary">
        <Link to={ROUTES.HOME}>{t("pages.notFound.backHome")}</Link>
      </Button>
    </div>
  );
};

export default NotFoundPage;
