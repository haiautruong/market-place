import { lazy } from "react";

// Lazy-loaded components
const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const TeamsPage = lazy(() => import("./pages/TeamsPage"));
const MarketplacePage = lazy(() => import("./pages/MarketplacePage"));
const RoadmapPage = lazy(() => import("./pages/RoadmapPage"));
const WhitepaperPage = lazy(() => import("./pages/WhitepaperPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  TEAMS: "/teams",
  MARKETPLACE: "/marketplace",
  ROADMAP: "/roadmap",
  WHITEPAPER: "/whitepaper",
};

export interface RouteConfig {
  path: string;
  label: string;
  component: React.ComponentType;
  exact?: boolean;
}

export const ROUTE_CONFIG: RouteConfig[] = [
  { path: ROUTES.HOME, label: "header.HOME", component: HomePage, exact: true },
  { path: ROUTES.ABOUT, label: "header.ABOUT_US", component: AboutPage },
  { path: ROUTES.TEAMS, label: "header.OUR_TEAMS", component: TeamsPage },
  {
    path: ROUTES.MARKETPLACE,
    label: "header.MARKETPLACE",
    component: MarketplacePage,
  },
  { path: ROUTES.ROADMAP, label: "header.ROADMAP", component: RoadmapPage },
  {
    path: ROUTES.WHITEPAPER,
    label: "header.WHITEPAPER",
    component: WhitepaperPage,
  },
];

// Special routes (not in main navigation)
export const SPECIAL_ROUTES = [{ path: "*", component: NotFoundPage }];
