import React from "react";
import styled from "styled-components";

const NovaDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export default function MyDiv(props) {
  let _justifyContent = "space-between";
  if (props.justifyContent) _justifyContent = props.justifyContent;
  
  return (
    <NovaDiv className="MyDiv" style={{ justifyContent: _justifyContent}}>
      <div>{props.children}</div>
    </NovaDiv>
  );
}
