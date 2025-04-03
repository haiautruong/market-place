import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { Button, Dropdown, Layout, Space } from "antd";
import { GlobalOutlined, DownOutlined, MenuOutlined } from "@ant-design/icons";
import { ROUTE_CONFIG } from "../../routes";
import "./Header.style.css";

const { Header: AntHeader } = Layout;

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const languageItems = [
    {
      key: "en",
      label: "English",
      onClick: () => i18n.changeLanguage("en"),
    },
    {
      key: "fr",
      label: "Français",
      onClick: () => i18n.changeLanguage("fr"),
    },
  ];

  const handleConnectWallet = () => {
    console.log("Connecting wallet...");
  };

  return (
    <AntHeader
      data-testid="footer"
      className="absolute flex items-center top-0 z-1 w-full !h-14 lg:!h-16 xl:!h-20 !p-0"
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Mobile menu button */}
        <div className="lg:hidden">
          <Button
            type="text"
            icon={<MenuOutlined className="text-white text-xl" />}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="bg-transparent border-none"
          />
        </div>
        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {ROUTE_CONFIG.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              className={`nav-link uppercase ${
                location.pathname === route.path ? "active" : ""
              }`}
            >
              {t(route.label)}
            </Link>
          ))}
        </nav>

        {/* Right side with wallet and language */}
        <Space size={16}>
          <Button
            type="primary"
            className={
              "!shadow-[0px_0px_50px_0px_rgba(187,75,255,0.32)] !h-8 xl:!h-10"
            }
            onClick={handleConnectWallet}
          >
            {t("header.connectWallet")}
          </Button>
          <Dropdown menu={{ items: languageItems }} placement="bottomRight">
            <Button
              type="text"
              className="bg-transparent px-2 flex items-center text-white"
            >
              <GlobalOutlined className="text-white text-lg mr-1" />
              <DownOutlined className="text-xs" />
            </Button>
          </Dropdown>
        </Space>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-[84px] left-0 right-0 mobile-menu py-4 z-40">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-4">
              {ROUTE_CONFIG.map((route) => (
                <Link
                  key={route.path}
                  to={route.path}
                  className={`nav-link uppercase font-medium py-2 ${
                    location.pathname === route.path
                      ? "gradient-text"
                      : "text-white hover:text-opacity-80"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t(route.label)}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </AntHeader>
  );
};

export default Header;
