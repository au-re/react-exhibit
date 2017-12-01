import GithubCorner from "./index";
import React from "react";
import { shallow } from "enzyme";

it("renders without parameters", () => {
  expect(shallow(<GithubCorner />)).toMatchSnapshot();
});

it("renders with parameters", () => {
  expect(shallow(<GithubCorner href="/" size="50" octoColor="#333" bannerColor="#151513" />)).toMatchSnapshot();
});
