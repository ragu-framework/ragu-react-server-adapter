import React from "react";
import './progress-bar.css';

export const ProgressBar = ({current, total}) =>
  <div className="ragu-react-server-adapter__progress_bar">
    <span className="ragu-react-server-adapter__progress_bar__control" style={{
      width: `calc(100% / ${total / current})`,
    }}>{current} / {total}</span>
  </div>
