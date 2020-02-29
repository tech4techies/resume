/** @format */

import React, { Fragment, useState } from "react";
import { ListBox, Title, ListItem, List } from "../../components/components";
import { Config } from "../../config";

const Experience: React.FC = () => {
  const experience = Config.experience;
  return (
    <Fragment>
      <ListBox>
        <Title> Experience </Title>
        <List>{experience.map((exp) => {})}</List>
      </ListBox>
    </Fragment>
  );
};

export default Experience;
