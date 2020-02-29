/** @format */

import React from "react";
import {
  List,
  ListBox,
  ListItem,
  FlexBox,
  Box,
  Title,
} from "../../components/components";
import { Config } from "../../config";
import { StarImage, ListHeading } from "../../components/common";

interface IBoxProps {
  level: string;
}
const ListContentBox: React.FC<IBoxProps> = (props) => {
  return (
    <FlexBox style={{ marginLeft: 30, width: "100%" }}>
      <Box>{props.level}</Box>
    </FlexBox>
  );
};
export const Languages: React.FC = () => {
  const { languages } = Config;
  return (
    <ListBox>
      <Title>Languages </Title>
      <List>
        {languages.map((language) => (
          <ListItem key={language.name} style={{ flexDirection: "column" }}>
            <FlexBox>
              <StarImage />
              <ListHeading val={language.name} />
            </FlexBox>
            <ListContentBox level={language.proficiency} />
          </ListItem>
        ))}
      </List>
    </ListBox>
  );
};

export default Languages;
