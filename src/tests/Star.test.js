import React from "react";
import { render, queryByAttribute, screen } from '@testing-library/react';
import Star from "../components/Star";

test('render a star', () => {
  const getById = queryByAttribute.bind(null, 'id');
  const view = render(<Star />);
  const element = getById(view.container, 'star');
  expect(element).toBeInTheDocument();

  const h1 = screen.getByText(/Great Star/);
  expect(h1).toHaveTextContent('Great Star');
});