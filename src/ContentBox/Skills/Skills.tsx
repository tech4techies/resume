/** @format */

import React, { Fragment } from "react";
import {
  Title,
  ListBox,
  List,
  ListItem,
  StyledImage,
  StyledListDiv,
} from "../../components/components";
import { Config } from "../../config";

const StarImage: React.FC = () => {
  return (
    <StyledImage
      style={{ height: 20, width: 20 }}
      src={"https://cdn.convertcart.com/uploads/ac8ea213.svg"}
      alt=''
    />
  );
};

interface IListProps {
  val: string;
}

const ListContent: React.FC<IListProps> = (props) => {
  const { val } = props;
  return (
    <StyledListDiv style={{ marginTop: 2, marginLeft: 3 }}>{val}</StyledListDiv>
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
              <StarImage /> <ListContent val={skill} />{" "}
            </ListItem>
          ))}
        </List>
      </ListBox>
    </Fragment>
  );
};

export default Skills;
