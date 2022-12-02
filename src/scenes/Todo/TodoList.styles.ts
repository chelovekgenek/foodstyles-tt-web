import styled from "@emotion/styled";

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;
export const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-top: 14px;
  font-family: "Mark Pro";
  font-size: 16px;
`;

export const ListAction = styled.img`
  margin-left: auto;
  cursor: pointer;
  :hover {
    opacity: 90%;
  }
`;
