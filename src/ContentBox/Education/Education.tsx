/** @format */

import React, { Fragment, useState } from "react";
import {
  FlexBox,
  List,
  ListBox,
  ListItem,
  StyledListDiv,
  Title,
  Box,
} from "../../components/components";
import { Config } from "../../config";
import { StarImage, ListHeading } from "../../components/common";

interface IBoxType {
  qualification: string;
  specialization: string;
  percentage: number;
  years: string;
  location: string;
}
interface IBoxProps {
  vals: IBoxType;
}
const ListContentBox: React.FC<IBoxProps> = (props) => {
  const { vals } = props;
  return (
    <FlexBox style={{ flexDirection: "column" }}>
      <FlexBox style={{ marginLeft: 30, marginBottom: 5, marginTop: 5 }}>
        {vals.qualification}{" "}
        {vals.specialization.length > 0 && `( ${vals.specialization} )`}{" "}
        {`, Grade : ${parseFloat(vals.percentage.toString()).toFixed(2)}%`}
      </FlexBox>
      <Box style={{ marginLeft: 30 }}>{vals.years}</Box>
      <Box style={{ marginLeft: 30 }}>{`${vals.location}.`}</Box>
    </FlexBox>
  );
};

interface ICollapseProps {
  val: string;
  onCollapseClick: (index?: number) => void;
}

const CollapseLink: React.FC<ICollapseProps> = (props) => {
  return (
    <div
      style={{
        color: "blue",
        cursor: "pointer",
        textDecoration: "underline",
        marginLeft: /Less/gi.test(props.val) ? "78%" : "70%",
      }}
      onClick={(e: any) => props.onCollapseClick(e)}>
      {props.val}
    </div>
  );
};

interface IEduDetail {
  name: string;
  qualification: string;
  specialization: string;
  location: string;
  percentage: number;
  years: string;
}
interface IEducation {
  [k: string]: IEduDetail;
}

const Education: React.FC = () => {
  const [showMore, setShowMore] = useState(false);
  const education = Config.education as IEducation;
  const levels = Object.keys(education);
  const { name, ...rest } = education[levels[0]];
  const onCollapseClick = () => setShowMore(!showMore);
  return (
    <Fragment>
      <ListBox style={{ marginLeft: "8%", width: "100%" }}>
        <Title>Education</Title>
        {!showMore && (
          <List>
            <ListItem key={name} style={{ flexDirection: "column" }}>
              <StyledListDiv style={{ display: "flex" }}>
                <StarImage />
                <ListHeading val={name} />
              </StyledListDiv>
              <ListContentBox vals={rest} />
            </ListItem>
          </List>
        )}
        {showMore && (
          <List>
            {levels.map((level: string) => {
              const { name, ...rest } = education[level];
              return (
                <Fragment key={level}>
                  <ListItem style={{ flexDirection: "column" }} key={level}>
                    <FlexBox>
                      <StarImage />
                      <ListHeading val={name} />
                    </FlexBox>
                    <ListContentBox vals={rest} />
                  </ListItem>
                </Fragment>
              );
            })}
          </List>
        )}
        {showMore && (
          <CollapseLink
            onCollapseClick={onCollapseClick}
            val={" - Show Less "}
          />
        )}
        {!showMore && (
          <CollapseLink
            onCollapseClick={onCollapseClick}
            val={" + Show More "}
          />
        )}
      </ListBox>
    </Fragment>
  );
};

export default Education;
