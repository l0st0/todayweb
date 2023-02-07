import React from "react";
import { Result } from "@todayweb/cms";
import { Home } from "@mui/icons-material";

const ResultPage = () => {
  return (
    <div>
      <Result
        text="Helloo"
        icon={{
          element: <Home />,
        }}
        type="error"
      />
    </div>
  );
};

export default ResultPage;
