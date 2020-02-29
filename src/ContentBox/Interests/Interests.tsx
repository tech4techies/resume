/** @format */

import React, { Fragment } from "react";
import {
  ListBox,
  ListItem,
  List,
  Title,
  FlexBox,
} from "../../components/components";
import { Config } from "../../config";
import { StarImage } from "../../components/common";

export const Interests: React.FC = () => {
  const { interests } = Config;
  return (
    <Fragment>
      <ListBox>
        <Title> Interests </Title>
        <List>
          {interests.map((interest) => (
            <ListItem key={interest}>
              <FlexBox>
                <StarImage />
                {interest}
              </FlexBox>
            </ListItem>
          ))}
        </List>
      </ListBox>
    </Fragment>
  );
};

export default Interests;
