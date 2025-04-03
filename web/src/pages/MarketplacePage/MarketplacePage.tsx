import React from "react";
import { Col, Row } from "antd";
import FilterSection from "./components/FilterSection";
import CategoryTabs from "./components/CategoryTabs";
import ProductList from "./components/ProductList/ProductList";
import HeaderBanner from "./components/HeaderBanner";
import { useMarketplaceFilters } from "./hooks/useMarketplaceFilters";
import "./MarketplacePage.style.css";

const MarketplacePage: React.FC = () => {
  const { filters, handleFilterChange, handleCategoryChange } =
    useMarketplaceFilters();

  return (
    <div className="marketplace-page pb-30 sm:pb-46 lg:pb-60 xl:pb-90 relative min-h-screen bg-[#060e1a] overflow-x-hidden">
      <HeaderBanner />
      <Row className="sm:mt-8">
        <Col
          span={24}
          md={8}
          lg={6}
          xxl={{ span: 5, offset: 3 }}
          className="!px-10"
        >
          <FilterSection onChange={handleFilterChange} />
        </Col>
        <Col
          span={24}
          md={16}
          lg={18}
          xxl={{ span: 12, offset: 1 }}
          className="!px-10 md:!pr-8 md:!pl-0"
        >
          <CategoryTabs onCategoryChange={handleCategoryChange} />
          <ProductList filters={filters} />
        </Col>
      </Row>
    </div>
  );
};

export default MarketplacePage;
