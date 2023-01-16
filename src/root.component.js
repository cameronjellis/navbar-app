import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DataNavBar from "./Components/DataNavBar";

const Root = (props) => {
  const [key, setKey] = useState("home");

  return (
    <div>
      <h1>NavBAR</h1>
      <section>{props.name} is mounted!</section>
      <DataNavBar />
    </div>
  );
};

export default Root;
