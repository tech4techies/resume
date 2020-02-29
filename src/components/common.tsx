/** @format */

import React from "react";
import { StyledListDiv } from "./components";
export const StarImage: React.FC = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='18'
      height='18'
      style={{ marginTop: 1 }}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='feather feather-star'>
      <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'></polygon>
    </svg>
  );
};

interface IListProps {
  val: string;
}

export const ListHeading: React.FC<IListProps> = (props) => {
  const { val } = props;
  return (
    <StyledListDiv
      style={{ marginTop: 1, fontSize: 18, fontWeight: 600, marginLeft: 3 }}>
      {val}
    </StyledListDiv>
  );
};

interface ICollapseProps {
  val: string;
  onCollapseClick: (index?: number) => void;
}

export const CollapseLink: React.FC<ICollapseProps> = (props) => {
  const val = /Show/.test(props.val) ? "66%" : "70%";
  return (
    <div
      style={{
        color: "blue",
        cursor: "pointer",
        textDecoration: "underline",
        marginLeft: val,
      }}
      onClick={(e: any) => props.onCollapseClick(e)}>
      {props.val}
    </div>
  );
};
