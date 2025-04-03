import React, { useState } from "react";
import { Button } from "antd";
import { ECategory } from "../../../../types/product";
import { ALL } from "../../../../constants";

interface ICategoryTabs {
  onCategoryChange: (category: TCateTab) => void;
}

export type TCateTab = ECategory | typeof ALL;

const categories: TCateTab[] = [ALL, ...Object.values(ECategory)];

const baseButtonStyles =
  "font-semibold text-base transition-all !h-[44px] !min-h-[44px] flex items-center !border-none !text-white";

const activeGradient =
  "!bg-[linear-gradient(91.47deg,#DA458F_-6%,#DA34DD_113.05%)]";
const inactiveGradient =
  "!bg-[linear-gradient(91.47deg,rgba(218,69,143,0.4)_-6%,rgba(218,52,221,0.4)_113.05%)]";

const getButtonStyles = (isSelected: boolean) => `
    ${baseButtonStyles}
    ${isSelected ? activeGradient : inactiveGradient}
    hover:brightness-125 transition-all duration-200
  `;

const CategoryTabs: React.FC<ICategoryTabs> = ({ onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState<TCateTab>(ALL);

  const handleCategoryChange = (category: TCateTab) => {
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  return (
    <div className="w-full overflow-x-auto hide-scrollbar flex gap-3 py-3 mb-4 sticky top-0 z-10 bg-[#060e1a] px-2">
      {categories.map((category) => (
        <Button
          key={category}
          onClick={() => handleCategoryChange(category)}
          type={selectedCategory === category ? "primary" : "default"}
          size="middle"
          className={getButtonStyles(selectedCategory === category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryTabs;
