/** @format */

import React, { Fragment, useState } from "react";
import { CollapseLink, ListHeading, StarImage } from "../../components/common";
import {
  Box,
  BulletList,
  FlexBox,
  List,
  ListBox,
  ListItem,
  Title,
} from "../../components/components";
import { Config } from "../../config";

interface IBoxType {
  doj: string;
  dol: string;
  role: string;
  location: string;
  responsibilites: string[];
}

interface IBoxProps {
  vals: IBoxType;
  showResp: boolean;
}
const ListContentBox: React.FC<IBoxProps> = (props) => {
  const { vals, showResp } = props;
  return (
    <FlexBox style={{ flexDirection: "column" }}>
      <Box
        style={{
          marginLeft: 30,
          fontWeight: 600,
          marginBottom: 5,
          marginTop: 5,
        }}>
        {vals.role}
      </Box>
      <Box style={{ marginLeft: 30 }}>
        {vals.doj} - {vals.dol}
      </Box>
      <Box style={{ marginLeft: 30 }}>{vals.location}.</Box>
      {showResp && (
        <FlexBox
          style={{ flexDirection: "column", marginLeft: 30, width: "80%" }}>
          <Box style={{ fontWeight: "bold" }}>Responsibilites</Box>
          <Fragment>
            <BulletList>
              {vals.responsibilites.map((resp) => (
                <li
                  key={resp}
                  style={{ padding: 5, fontSize: 14, width: "100%" }}>
                  {resp}
                </li>
              ))}
            </BulletList>
          </Fragment>
        </FlexBox>
      )}
    </FlexBox>
  );
};

const Experience: React.FC = () => {
  const [showResp, setShowResp] = useState([false, false, false]);
  const experience = Config.experience;
  const onCollapseClick = (index: number) => {
    const prevResp = { ...showResp };
    prevResp[index] = !prevResp[index];
    setShowResp(prevResp);
  };
  return (
    <Fragment>
      <ListBox style={{ width: "100%", marginLeft: "8%" }}>
        <Title> Experience </Title>
        <List>
          {experience.map((exp, index) => {
            const { organization, ...rest } = exp;
            return (
              <ListItem style={{ flexDirection: "column" }} key={index}>
                <FlexBox>
                  <StarImage />
                  <ListHeading val={organization} />
                </FlexBox>
                <ListContentBox vals={rest} showResp={showResp[index]} />
                {showResp[index] && (
                  <CollapseLink
                    onCollapseClick={(e: any) => onCollapseClick(index)}
                    val={" - Hide"}
                  />
                )}
                {!showResp[index] && (
                  <CollapseLink
                    onCollapseClick={(e: any) => onCollapseClick(index)}
                    val={" + View More "}
                  />
                )}
              </ListItem>
            );
          })}
        </List>
      </ListBox>
    </Fragment>
  );
};

export default Experience;
