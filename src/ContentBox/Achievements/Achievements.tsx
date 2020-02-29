/** @format */

import React, { Fragment } from "react";
import { BulletList, ListBox, Title } from "../../components/components";
import { Config } from "../../config";

export const Achievements: React.FC = () => {
  const { achievements } = Config;
  return (
    <Fragment>
      <Title>Achievements</Title>
      <ListBox>
        <BulletList>
          {achievements.map((achievement) => (
            <li
              style={{ width: "100%", textAlign: "left", padding: 5 }}
              key={achievement}>
              {achievement}
            </li>
          ))}
        </BulletList>
      </ListBox>
    </Fragment>
  );
};

export default Achievements;
