import { Route, Routes } from "react-router-dom";
import { AppRouterComp } from "@/config/router";
const AppRouter = () => {
  return (
    <Routes>
      {AppRouterComp.map((route) => (
        <Route key={route.path} path={route.path} Component={route.Component} />
      ))}
    </Routes>
  );
};

export default AppRouter;
