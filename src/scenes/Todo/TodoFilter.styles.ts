import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
`;

export const Label = styled.span`
  font-size: 14px;
  color: rgba(31, 42, 75, 0.59);
  margin-right: 16px;
`;

export const OptionsContainer = styled.div``;

export const Option = styled.span<{ checked?: boolean }>(
  (props) => `
    font-size: 14px;
    color: ${props.checked ? "#1f2a4b" : "#4a77e5"};
    margin-right: 10px;
    cursor: pointer;
    text-decoration: ${props.checked ? "none" : "underline"};
`
);
