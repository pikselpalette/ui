import React from "react";
import ReactDOM from "react-dom";

import { Button } from '../../src';

const Index = () => {
  return (
    <div>
      <Button>Hello!</Button>
      <Button type='call-to-action'>This is a call to action</Button>
      <Button type='dark'>This is from the dark theme</Button>
      <Button style={{ background: 'purple', color: 'white', borderColor: 'purple' }}>And here is a button with custom themes</Button>
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("app"));

