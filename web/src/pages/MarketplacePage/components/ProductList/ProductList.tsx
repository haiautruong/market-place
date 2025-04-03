import { useEffect, useMemo } from "react";
import { useProducts } from "../../hooks/useProducts";
import { useInView } from "react-intersection-observer";
import { IProductFilters } from "../../../../types/product";
import { Button, Empty, message, Skeleton, Card } from "antd";
import ProductCard from "../ProductCard/ProductCard";

interface ProductListProps {
  filters: IProductFilters;
}

// Skeleton component for product cards
const ProductCardSkeleton = () => (
  <Card
    className="rounded-xl overflow-hidden border border-gray-800 h-full !p-4"
    styles={{ body: { padding: 0 } }}
  >
    <div className="relative">
      <Skeleton.Image className="!w-full !h-[200px]" active />
      <Skeleton.Button
        className="absolute top-1 right-1"
        active
        size="small"
        shape="circle"
      />
      <Skeleton.Button className="absolute top-1 left-1" active size="small" />
    </div>
    <div className="mt-4 flex gap-4">
      <Skeleton active title={false} paragraph={{ rows: 1, width: "100%" }} />
      <Skeleton
        active
        title={false}
        paragraph={{ rows: 1, width: "100%" }}
        className="flex-1/2"
      />
    </div>
    <div className="mt-2 flex items-center gap-2 ">
      <Skeleton.Avatar active size="small" shape="circle" />
      <Skeleton active title={false} paragraph={{ rows: 1 }} />
    </div>
  </Card>
);

const ProductList = ({ filters }: ProductListProps) => {
  const { ref: loadMoreRef } = useInView();
  const {
    data,
    isError,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isLoading,
  } = useProducts(filters);

  const allProducts = useMemo(() => {
    return data?.pages.flatMap((page) => page.products) || [];
  }, [data]);

  useEffect(() => {
    if (isError) {
      message.error("Failed to load products. Please try again later.");
    }
  }, [isError]);

  const handleViewMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  const renderSkeletons = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 px-2">
      {Array.from({ length: 8 }).map((_, index) => (
        <ProductCardSkeleton key={`skeleton-${index}`} />
      ))}
    </div>
  );

  const renderListContent = () => {
    if (isLoading) {
      return renderSkeletons();
    }

    if (isError) {
      return (
        <Empty
          description={
            <span>
              Error: {error.message}
              <br />
              Please try again later.
            </span>
          }
        />
      );
    }

    if (!allProducts.length) {
      return (
        <Empty description="No products found. Try adjusting your search or filters." />
      );
    }

    console.log({ isLoading });

    return (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 px-2">
          {allProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        {hasNextPage && (
          <div ref={loadMoreRef} className="mt-10 text-center">
            <Button
              type="primary"
              className="w-50"
              size="middle"
              onClick={handleViewMore}
              loading={isFetchingNextPage}
            >
              {isFetchingNextPage ? "Loading..." : "View more"}
            </Button>
          </div>
        )}
      </>
    );
  };

  return <div className="md:min-h-[1150px]">{renderListContent()}</div>;
};

export default ProductList;
