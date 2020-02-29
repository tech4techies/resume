/** @format */

import React from "react";
import { ListHeading, StarImage } from "../../components/common";
import {
  Box,
  FlexBox,
  List,
  ListItem,
  Title,
} from "../../components/components";
import { Config } from "../../config";

interface IBoxProps {
  duration: string;
}
const ListContentBox: React.FC<IBoxProps> = (props) => {
  return (
    <FlexBox style={{ marginLeft: 30 }}>
      <Box>{props.duration}</Box>
    </FlexBox>
  );
};
export const Projects: React.FC = () => {
  const { projects } = Config;
  return (
    <FlexBox style={{ flexDirection: "column" }}>
      <Title>Projects</Title>
      <List>
        {projects.map((project) => (
          <ListItem style={{ flexDirection: "column" }} key={project.name}>
            <FlexBox>
              <StarImage />
              <ListHeading val={project.name} />
            </FlexBox>
            <ListContentBox duration={project.duration} />
          </ListItem>
        ))}
      </List>
    </FlexBox>
  );
};
export default Projects;
