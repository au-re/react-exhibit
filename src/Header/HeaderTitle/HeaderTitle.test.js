import { HeaderTitle } from "../../lib";
import React from "react";
import { shallow } from "enzyme";

it("renders without parameters", () => {
  expect(shallow(<HeaderTitle />)).toMatchSnapshot();
});

it("renders with an img", () => {
  expect(shallow(<HeaderTitle src="/test.jpg" />)).toMatchSnapshot();
});

it("renders with a link", () => {
  expect(shallow(<HeaderTitle href="/" />)).toMatchSnapshot();
});
