import React, {useState} from "react";
import {PrimaryButton} from "../buttons/primary-button";
import {ProgressBar} from "../progress-bar/progress-bar";
import {Step} from "./step";
import './step-list.css';

export const StepList = ({steps}) => {
  const [currentStep, setCurrentStep] = useState(1);

  return <div>
    <Step title={steps[currentStep-1].title} number={currentStep}>
      {steps[currentStep-1].content}
    </Step>

    <div className="ragu-react-server-adapter__step-list__step-control">
    <PrimaryButton aria-label="Previous" disabled={currentStep === 1} onClick={() => setCurrentStep(currentStep - 1)}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 9V8l-4 4 4 4v-3h4v-2h-4z" fill="rgba(255,255,255,1)"/></svg>
    </PrimaryButton>
    <ProgressBar total={steps.length} current={currentStep}/>
    <PrimaryButton aria-label="Next" disabled={currentStep >= steps.length} onClick={() => setCurrentStep(currentStep + 1)}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 9H8v2h4v3l4-4-4-4v3z" fill="rgba(255,255,255,1)"/></svg>
    </PrimaryButton>
    </div>
  </div>;
}
