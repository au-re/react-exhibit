import { SystemHeader } from "../../lib";
import React from "react";
import { shallow } from "enzyme";

it("renders without parameters", () => {
  expect(shallow(<SystemHeader />)).toMatchSnapshot();
});

it("renders with children", () => {
  expect(shallow(<SystemHeader><div>test</div></SystemHeader>)).toMatchSnapshot();
});
