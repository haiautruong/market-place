import React, { useState } from "react";
import { Input, Button } from "antd";

const navigationLinks = [
  [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About us" },
    { href: "/our-teams", label: "Our teams" },
  ],
  [
    { href: "/whitepaper", label: "Whitepaper" },
    { href: "/marketplace", label: "Marketplace" },
    { href: "/roadmap", label: "Roadmap" },
  ],
  [
    { href: "/faqs", label: "FAQs" },
    { href: "/news", label: "News" },
    { href: "/community", label: "Community" },
  ],
];

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    // TODO: Implement subscription logic
    console.log("Subscribing email:", email);
  };

  return (
    <footer className="bg-[#17161A] py-16 text-white">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-[1.5fr_1fr_2fr] xl:gap-20 lg:gap-16 md:gap-16 gap-12">
        {/* Navigation Section */}
        <div>
          <h2 className="text-lg mb-6 font-drone">NAVIGATION</h2>
          <div className="grid grid-cols-3 gap-8">
            {navigationLinks.map((column, columnIndex) => (
              <div key={columnIndex} className="space-y-4">
                {column.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block !text-white hover:!text-[#DA458F]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-lg mb-6 font-drone">CONTACT US</h2>
          <div className="space-y-4">
            <p className="flex items-center">
              <span className="mr-2">📞</span>
              01234568910
            </p>
            <p className="flex items-center">
              <span className="mr-2">✉️</span>
              tymex-talent@tyme.com
            </p>
          </div>
        </div>

        {/* Subscribe Section */}
        <div>
          <h2 className="text-lg mb-6 font-drone">
            SUBSCRIBE TO RECEIVE OUR LATEST UPDATE
          </h2>
          <div className="flex gap-2">
            <Input
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-[44px] !border-white"
            />
            <Button onClick={handleSubscribe} type="primary">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto mt-16 pt-8 border-t border-[#3A3841] flex flex-col md:flex-row justify-between items-center gap-4">
        <p>©2023 Tyme - Edit. All Rights reserved.</p>
        <div className="flex gap-8">
          <span className="!text-white hover:!text-[#DA458F]">Security</span>
          <span className="!text-white hover:!text-[#DA458F]">Legal</span>
          <span className="!text-white hover:!text-[#DA458F]">Privacy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
