import { unstableSetRender } from "antd";
import { createRoot, Root } from "react-dom/client";

// Extend Element and DocumentFragment types to include _reactRoot property
declare global {
  interface Element {
    _reactRoot?: Root;
  }
  interface DocumentFragment {
    _reactRoot?: Root;
  }
}

// Adapt Antd for react 19 (https://ant.design/docs/react/v5-for-19)
export function setupAntdAdapter() {
  unstableSetRender((node, container) => {
    container._reactRoot ||= createRoot(container);
    const root = container._reactRoot;
    root.render(node);
    return async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
      root.unmount();
    };
  });
}
