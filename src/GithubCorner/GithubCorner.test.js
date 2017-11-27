import Header from "./index";
import React from "react";
import { shallow } from "enzyme";

it("renders without parameters", () => {
  expect(shallow(<Header />)).toMatchSnapshot();
});

it("renders with children", () => {
  expect(shallow(<Header><div>test</div></Header>)).toMatchSnapshot();
});