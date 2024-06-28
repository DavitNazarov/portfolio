import { router } from "@/constants/router";
import { AllPages } from "@/components/AllPages";

export const AppRouterComp = [
  {
    path: router.home,
    Component: AllPages.Home,
  },
  {
    path: router.about,
    Component: AllPages.About,
  },
  {
    path: router.projects,
    Component: AllPages.Projects,
  },
  {
    path: router.experience,
    Component: AllPages.Experience,
  },
  {
    path: "*",
    Component: AllPages.NotFound,
  },
];
