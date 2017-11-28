import { SystemTitle } from "../../lib";
import React from "react";
import { shallow } from "enzyme";

it("renders without parameters", () => {
  expect(shallow(<SystemTitle />)).toMatchSnapshot();
});

it("renders with an img", () => {
  expect(shallow(<SystemTitle src="/test.jpg" />)).toMatchSnapshot();
});

it("renders with a link", () => {
  expect(shallow(<SystemTitle href="/" />)).toMatchSnapshot();
});

it("renders with a title", () => {
  expect(shallow(<SystemTitle title="hello world" />)).toMatchSnapshot();
});
