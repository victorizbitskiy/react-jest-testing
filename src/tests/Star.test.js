import React from "react";
import { render, queryByAttribute } from '@testing-library/react';
import Star from "../components/Star";

test('render a star', () => {
  const getById = queryByAttribute.bind(null, 'id');
  const view = render(<Star />);
  const element = getById(view.container, 'star');
  expect(element).toBeInTheDocument();
});