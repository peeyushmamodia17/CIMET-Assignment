import React from "react";
import { Routes, Route } from "react-router-dom";
import Box from "@mui/system/Box";
import {
  isLoading,
} from "../store";
import { useAtom } from "jotai";
import LoadingScreen from "../component/ScreenLoading/screen-loading";
import Electricity from "../modules/Electricity";
import Page from "./page";

// dashboard
const RouterAtom = () => {

  const [loading,] = useAtom(isLoading);
  
  return (
    <Box>
      <LoadingScreen loading={loading} />
        <Routes>
          <Route
            exact
            path="/"
            element={<Page component={Electricity} title="Electricity" />}
          />
        </Routes>
    </Box>
  );
};

export default RouterAtom;
