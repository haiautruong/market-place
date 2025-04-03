import React from "react";
import { Spin } from "antd";

interface WithLoadingProps {
  isLoading: boolean;
  children: React.ReactNode;
}

export const withLoading = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return function WithLoadingComponent({
    isLoading,
    ...props
  }: WithLoadingProps & P) {
    if (isLoading) {
      return (
        <div className="w-full h-[50vh] flex items-center justify-center">
          <Spin size="large" />
        </div>
      );
    }

    return <WrappedComponent {...(props as P)} />;
  };
};
