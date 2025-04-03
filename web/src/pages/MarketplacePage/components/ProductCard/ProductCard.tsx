import React from "react";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { IProduct } from "../../../../types/product";
import Author from "../Author";

import character1 from "../../assets/character/assassin.png";
import character2 from "../../assets/character/basketball-girl.png";
import character3 from "../../assets/character/mafia-england.png";
import character4 from "../../assets/character/neon-guy.png";
import character5 from "../../assets/character/the-dj.png";
import ethIcon from "../../assets/logo-ethereum.png";

const characterImageMap = [
  character1,
  character2,
  character3,
  character4,
  character5,
];

const bgTierMap: Record<string, string> = {
  Basic: "linear-gradient(90.13deg, #DD5AFE 0%, #6366F1 100%)",
  Premium: "linear-gradient(90.13deg, #49DD81 0%, #22B4C6 100%)",
  Deluxe: "linear-gradient(90.13deg, #FE5A5A 0%, #F163D2 100%)",
};

const getCharacterImage = (id: number) => {
  return characterImageMap[id % characterImageMap.length];
};

const ProductCard: React.FC<IProduct> = ({
  title,
  price,
  imageId,
  category,
  author,
  isFavorite,
  tier,
}) => {
  return (
    <div className="product-card group relative rounded-lg bg-[#3A384199] p-4 transition-all duration-300 hover:shadow-[0_0_6px_#FF54EE] cursor-pointer">
      {/* Category Badge */}
      <div className="absolute z-1 left-6 top-6">
        <span className="rounded bg-[#313B4580] px-3 py-1 text-xs text-white">
          {category}
        </span>
      </div>

      {/* Favorite Button */}
      <button className="absolute z-1 right-6 top-6 flex h-4 w-4 text-white">
        {isFavorite ? (
          <HeartFilled className="text-[#DA458F]" />
        ) : (
          <HeartOutlined className="text-white" />
        )}
      </button>

      {/* Image Container */}
      <div
        className="relative mb-4 aspect-square overflow-hidden rounded-sm flex items-end"
        style={{
          background: bgTierMap[tier],
        }}
      >
        <img
          src={getCharacterImage(imageId)}
          alt={title}
          className="h-auto w-full object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4">
        {/* Title and Price */}
        <div className="flex items-center justify-between lg:h-11 lg:gap-2">
          <h3 className="text-sm text-white">{title}</h3>
          <p className="text-sm text-white text-right flex items-center gap-1">
            <img src={ethIcon} alt={"eth"} className="aspect-[8/13] w-2" />
            {price} <span className="text-sm">ETH</span>
          </p>
        </div>

        <Author
          firstName={author.firstName}
          lastName={author.lastName}
          avatar={author.avatar}
          onlineStatus={author.onlineStatus}
          email={author.email}
          gender={author.gender}
        />
      </div>
    </div>
  );
};

export default ProductCard;
