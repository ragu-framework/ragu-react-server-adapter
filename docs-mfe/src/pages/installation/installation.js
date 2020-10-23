import React from "react";
import logo from '../../../../repository-assets/logo.png';
import {StepList} from "../../components/steps/step-list";
import './installation.css';
import {installationSteps} from "./installation-steps";

export const Installation = () => {
  return <div className="ragu-react-server-adapter__installation">
    <div className="ragu-react-server-adapter__installation__logo-wrapper">
      <img src={logo} alt="React adapter logo" className="ragu-react-server-adapter__installation__logo"/>
    </div>

    <StepList steps={installationSteps}/>
  </div>;
}
