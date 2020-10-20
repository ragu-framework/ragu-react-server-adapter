import React from "react";
import './step.css';

export const Step = ({title, number, children}) => <section>
  <h1><span className="ragu-react-server-adapter__step-indicator">{number}</span> {title}</h1>

  <div>
    {children}
  </div>
</section>
