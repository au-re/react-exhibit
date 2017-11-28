import { ApplicationList, ApplicationListItem, ApplicationListDropdown } from "../../../lib";
import React from "react";

export default () => (
  <ApplicationList>
    <ApplicationListItem label="not active" link="/Other" />
    <ApplicationListItem label="active" link="/ApplicationList" />
    <ApplicationListItem label="not active" link="/Other" />
    <ApplicationListDropdown label="Demo Dropdown Open" open>
      <ApplicationListItem label="not active" link="/Other" />
      <ApplicationListItem label="not active" link="/Other" />
    </ApplicationListDropdown>
    <ApplicationListDropdown label="Demo Dropdown Closed">
      <ApplicationListItem label="not active" link="/Other" />
      <ApplicationListItem label="not active" link="/Other" />
    </ApplicationListDropdown>
    <ApplicationListItem label="not active" link="/Other" />
    <ApplicationListItem label="not active" link="/Other" />
  </ApplicationList>);
