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
    <PrimaryButton disabled={currentStep === 1} onClick={() => setCurrentStep(currentStep - 1)}>Previous</PrimaryButton>
    <ProgressBar total={steps.length} current={currentStep}/>
    <PrimaryButton disabled={currentStep >= steps.length} onClick={() => setCurrentStep(currentStep + 1)}>Next</PrimaryButton>
    </div>
  </div>;
}
