import React from "react";
import {render} from "@testing-library/react";
import {StepList} from "./step-list";

describe('StepList', () => {
  const steps = [
    {
      title: 'first title',
      content: 'first content'
    },
    {
      title: 'second title',
      content: 'second content'
    },
  ]

  describe('controlling the progress bar', () => {
    it('renders a progress bar', () => {
      const component = render(<StepList steps={steps} />)
      expect(component.getByText('1 / 2')).toBeInTheDocument();
    });

    it('increases the progress bar when click on next button', () => {
      const component = render(<StepList steps={steps} />);
      component.getByText('Next').click();
      expect(component.getByText('2 / 2')).toBeInTheDocument();
    });

    it('decreases the progress bar when click on previous button', () => {
      const component = render(<StepList steps={steps} />);
      component.getByText('Next').click();
      component.getByText('Previous').click();
      expect(component.getByText('1 / 2')).toBeInTheDocument();
    });

    it('does not exceeds the steps length when click on next', () => {
      const component = render(<StepList steps={steps} />);

      component.getByText('Next').click();
      component.getByText('Next').click();

      expect(component.getByText('2 / 2')).toBeInTheDocument();
    });

    it('does not decreases less one', () => {
      const component = render(<StepList steps={steps} />);

      component.getByText('Previous').click();

      expect(component.getByText('1 / 2')).toBeInTheDocument();
    });
  });

  describe('rendering the content', () => {
    it('renders the first step as default', () => {
      const component = render(<StepList steps={steps} />);
      expect(component.getByText('first title')).toBeInTheDocument();
      expect(component.getByText('first content')).toBeInTheDocument();
    });
  });
});
