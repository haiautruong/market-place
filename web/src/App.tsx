import { Suspense } from "react";
import { ConfigProvider, Layout, Spin } from "antd";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import theme from "./styles/theme";
import { ROUTE_CONFIG, SPECIAL_ROUTES } from "./routes";
import "./styles/global.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const { Content } = Layout;

const PageLoader = () => (
  <div className="w-full h-[70vh] flex items-center justify-center">
    <Spin size="large" />
  </div>
);

function App() {
  return (
    <Router>
      <ConfigProvider theme={theme}>
        <Layout className="min-h-screen w-full">
          <Header />
          <Content data-testid="outlet">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                {ROUTE_CONFIG.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={<route.component />}
                  />
                ))}

                {SPECIAL_ROUTES.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={<route.component />}
                  />
                ))}
              </Routes>
            </Suspense>
          </Content>
          <Footer />
        </Layout>
      </ConfigProvider>
    </Router>
  );
}

export default App;
