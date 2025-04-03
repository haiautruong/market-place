import React from "react";
import { Select, Slider, Button, Input, Form } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import {
  ESort,
  ETheme,
  ETier,
  IProductFilters,
} from "../../../../types/product";
import { ALL, PriceConfig } from "../../../../constants";
import { useFilterSection } from "../../hooks/useFilterSection";

interface IFilterSectionProps {
  onChange: (filter: IProductFilters) => void;
}

export interface IFilterFormValues {
  search?: string;
  theme?: ETheme | typeof ALL;
  tier?: ETier | typeof ALL;
  priceRange?: number[];
  timeSort?: ESort;
  priceSort?: ESort;
}

const initialValues: IFilterFormValues = {
  theme: ALL,
  tier: ALL,
  priceRange: [PriceConfig.min, PriceConfig.max],
  timeSort: ESort.DESC,
  priceSort: ESort.ASC,
};

const FilterSection: React.FC<IFilterSectionProps> = ({ onChange }) => {
  const [form] = Form.useForm<IFilterFormValues>();
  const { handleValuesChange, resetValues } = useFilterSection(onChange);

  const handleReset = () => {
    form.resetFields();
    resetValues();
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onValuesChange={handleValuesChange}
      onFinish={handleValuesChange}
      className="rounded-lg w-full sticky top-0 !py-3"
      initialValues={initialValues}
    >
      {/* Quick Search */}
      <Form.Item name="search">
        <Input
          placeholder="Quick search"
          prefix={<SearchOutlined className="text-gray-400" />}
          className="w-full h-[44px] !border-[#3a3841]"
        />
      </Form.Item>

      {/* Price Range */}
      <h3 className="text-white mb-2 font-medium">PRICE</h3>
      <Form.Item name="priceRange" className="!mb-0">
        <Slider
          range
          min={PriceConfig.min}
          max={PriceConfig.max}
          step={PriceConfig.step}
          className="custom-slider"
          tooltip={{ formatter: (value) => `${value} ETH` }}
        />
      </Form.Item>
      <div className="flex justify-between text-[#D6D6D6] text-sm mb-4">
        <span>{PriceConfig.min} ETH</span>
        <span>{PriceConfig.max} ETH</span>
      </div>

      {/* Tier */}
      <div>
        <h3 className="text-[#89888B] mb-2 font-medium">TIER</h3>
        <Form.Item name="tier">
          <Select
            options={[
              { value: ALL, label: "ALL" },
              { value: ETier.BASIC, label: "Basic" },
              { value: ETier.PREMIUM, label: "Premium" },
              { value: ETier.DELUXE, label: "Deluxe" },
            ]}
          />
        </Form.Item>
      </div>

      {/* Theme */}
      <div>
        <h3 className="text-[#89888B] mb-2 font-medium">THEME</h3>
        <Form.Item name="theme">
          <Select
            options={[
              { value: ALL, label: "ALL" },
              { value: ETheme.HALLOWEEN, label: "Halloween" },
              { value: ETheme.LIGHT, label: "Light" },
              { value: ETheme.COLORFUL, label: "Colorful" },
            ]}
          />
        </Form.Item>
      </div>

      {/* Time Sort */}
      <div>
        <h3 className="text-[#89888B] mb-2 font-medium">TIME</h3>
        <Form.Item name="timeSort">
          <Select
            options={[
              { value: ESort.DESC, label: "Latest" },
              { value: ESort.ASC, label: "Oldest" },
            ]}
          />
        </Form.Item>
      </div>

      {/* Price Sort */}
      <div>
        <h3 className="text-[#89888B] mb-2 font-medium">PRICE</h3>
        <Form.Item name="priceSort">
          <Select
            options={[
              { value: ESort.ASC, label: "Low to high" },
              { value: ESort.DESC, label: "High to low" },
            ]}
          />
        </Form.Item>
      </div>

      {/* Buttons Row */}
      <div className="flex gap-2">
        <Button
          onClick={handleReset}
          className="flex-1 bg-[#1A103C] text-white hover:!bg-[#2A1F4C] border-none h-[44px]"
        >
          Reset filter
        </Button>
        <Button type="primary" className="flex-2" htmlType="submit">
          Search
        </Button>
      </div>
    </Form>
  );
};

export default FilterSection;
