/** @format */

import React, { Fragment } from "react";
import TopBar from "./TopBar/TopBar";
import ContentBox from "./ContentBox/ContentBox";
import { Box } from "./components/components";
function App() {
  return (
    <Fragment>
      <Box style={{ width: 1360, alignItems: "center" }}>
        <TopBar />
        <ContentBox />
      </Box>
    </Fragment>
  );
}

export default App;
