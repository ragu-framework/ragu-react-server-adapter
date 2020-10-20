import React from "react";
import {render} from "@testing-library/react";
import {ProgressBar} from "./progress-bar";

describe('ProgressBar', () => {
  it('shows current and total', () => {
    const progressBar = render(<ProgressBar current={1} total={10} />);
    expect(progressBar.getByText('1 / 10')).toBeInTheDocument();
  })
});
