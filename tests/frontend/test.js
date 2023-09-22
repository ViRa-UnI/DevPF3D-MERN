```javascript
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Portfolio from '../src/components/Portfolio';
import Project from '../src/components/Project';
import Blog from '../src/components/Blog';
import Skill from '../src/components/Skill';
import Login from '../src/components/Login';
import Register from '../src/components/Register';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders Portfolio component without crashing', () => {
  act(() => {
    render(<Portfolio />, container);
  });
});

it('renders Project component without crashing', () => {
  act(() => {
    render(<Project />, container);
  });
});

it('renders Blog component without crashing', () => {
  act(() => {
    render(<Blog />, container);
  });
});

it('renders Skill component without crashing', () => {
  act(() => {
    render(<Skill />, container);
  });
});

it('renders Login component without crashing', () => {
  act(() => {
    render(<Login />, container);
  });
});

it('renders Register component without crashing', () => {
  act(() => {
    render(<Register />, container);
  });
});
```