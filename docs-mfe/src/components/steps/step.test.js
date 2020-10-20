import React from "react";
import { render } from '@testing-library/react';
import {Step} from "./step";

describe('Steps Component', () => {
  it('renders the title', () => {
    const stepComponent = render(<Step number={1} title="My title" />)
    expect(stepComponent.getByText((_, node) => {
      return node.tagName === 'H1' && node.textContent === '1 My title';
    })).toBeInTheDocument();
  });

  it('renders the child content', () => {
    const stepComponent = render(<Step number={1} title="My title"><div>Hello, World</div></Step>)
    expect(stepComponent.getByText('Hello, World')).toBeInTheDocument();
  });
})
