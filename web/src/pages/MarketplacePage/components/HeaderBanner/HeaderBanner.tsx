import { useState, useEffect } from "react";
import { Skeleton } from "antd";
import banner1x from "./assets/banner-1x.webp";
import banner2x from "./assets/banner-2x.webp";
import banner3x from "./assets/banner-3x.webp";

const HeaderBanner = () => {
  const [loading, setLoading] = useState({
    desktop: true,
    tablet: true,
    mobile: true,
  });

  const handleImageLoad = (device: "desktop" | "tablet" | "mobile") => {
    setLoading((prev) => ({
      ...prev,
      [device]: false,
    }));
  };

  // Preload images
  useEffect(() => {
    const preloadImage = (
      src: string,
      device: "desktop" | "tablet" | "mobile"
    ) => {
      const img = new Image();
      img.src = src;
      img.onload = () => handleImageLoad(device);
    };

    preloadImage(banner3x, "desktop");
    preloadImage(banner2x, "tablet");
    preloadImage(banner1x, "mobile");
  }, []);

  return (
    <div className="w-screen">
      {/* Desktop Banner */}
      <div className="hidden lg:block">
        {loading.desktop ? (
          <Skeleton.Image
            className="!w-full !h-[430px] xl:!h-[650px] 2xl:!h-[800px]"
            active
          />
        ) : (
          <img src={banner3x} alt="banner" className="w-full object-contain" />
        )}
      </div>

      {/* Tablet Banner */}
      <div className="hidden md:block lg:hidden">
        {loading.tablet ? (
          <Skeleton.Image className="!w-full !h-[320px]" active />
        ) : (
          <img src={banner2x} alt="banner" className="w-full object-contain" />
        )}
      </div>

      {/* Mobile Banner */}
      <div className="block md:hidden mt-14 sm:mt-0">
        {loading.mobile ? (
          <Skeleton.Image className="!w-full !h-[200px] sm:!h-[270px]" active />
        ) : (
          <img src={banner1x} alt="banner" className="w-full object-contain" />
        )}
      </div>
    </div>
  );
};

export default HeaderBanner;
