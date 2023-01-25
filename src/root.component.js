import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DataNavBar from "./Components/DataNavBar";

const Root = (props) => {
  const [key, setKey] = useState("home");

  return <DataNavBar props={props} />;
};

export default Root;
