/** @format */

import React, { Fragment } from "react";
import { StarImage } from "../../components/common";
import {
  List,
  ListBox,
  ListItem,
  StyledListDiv,
  Title,
} from "../../components/components";
import { Config } from "../../config";

interface IListProps {
  val: string;
}

const ListContent: React.FC<IListProps> = (props) => {
  const { val } = props;
  return (
    <StyledListDiv style={{ marginTop: 3, marginLeft: 3 }}>{val}</StyledListDiv>
  );
};
const Skills: React.FC = () => {
  return (
    <Fragment>
      <ListBox>
        <Title> Skills </Title>
        <List>
          {Config.skills.map((skill) => (
            <ListItem key={skill}>
              <StarImage /> <ListContent val={skill} />
            </ListItem>
          ))}
        </List>
      </ListBox>
    </Fragment>
  );
};

export default Skills;
