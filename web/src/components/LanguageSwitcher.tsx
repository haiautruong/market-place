import React from "react";
import { Dropdown } from "antd";
import type { MenuProps } from "antd";
import { useTranslation } from "react-i18next";
import { GlobalOutlined } from "@ant-design/icons";

const LanguageSwitcher: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const items: MenuProps["items"] = [
    {
      key: "en",
      label: t("language.english"),
      onClick: () => changeLanguage("en"),
    },
    {
      key: "fr",
      label: t("language.french"),
      onClick: () => changeLanguage("fr"),
    },
  ];

  return (
    <Dropdown menu={{ items }} placement="bottomRight">
      <button className="text-white bg-transparent border-0 cursor-pointer flex items-center">
        <GlobalOutlined className="text-[1.25rem] mr-1" />
        <span className="text-[0.875rem]">{getCurrentLanguageDisplay()}</span>
      </button>
    </Dropdown>
  );

  function getCurrentLanguageDisplay() {
    switch (i18n.language) {
      case "en":
        return "EN";
      case "fr":
        return "FR";
      default:
        return "EN";
    }
  }
};

export default LanguageSwitcher;
