import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "bootstrap/dist/css/bootstrap.min.css";

const Root = (props) => {
  const [key, setKey] = useState("home");

  return (
    <div>
      <h1>NavBAR</h1>
      <section>{props.name} is mounted!</section>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="home" title="Home"></Tab>
        <Tab eventKey="graph" title="Graph"></Tab>
      </Tabs>
    </div>
  );
};

export default Root;
