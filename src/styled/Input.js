import styled from "styled-components";

export const Select = styled.select`
  width: 250px;
  height: 34px;
  background-color: rgba(0, 0, 0, 0.15);
  border-radius: 0.25em;
  font-size: 12px;
  border-color: rgba(0, 0, 0, 0.15);
  color: #fff;
  padding-left: 15px;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px white;
  }
  option {
    color: #fff;
    background: #2422a8;
    font-weight: small;
    display: flex;
    white-space: pre;
    font-size: 12px;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;
