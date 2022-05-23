import styled from "styled-components";

export const H1 = styled.h1`
  font-size: 2em;
  color: white;
  margin: 0;
  font-weight: 600;
  @media screen and (max-width: 375px) {
    font-size: 24px;
  }
`;

export const H2 = styled.h2`
  font-size: 1.1em;
  font-weight: 500;
  color: white;
  margin: 10px 0;
`;

export const Label = styled.label`
  ${(props) => props.fontS && `font-size:${props.fontS};`}
  ${(props) => props.weight && `font-weight:${props.Weight};`}
  ${(props) => (props.color ? `color:${props.color};` : "color:#fff;")}
  ${(props) => props.mt && `margin-top:${props.mt};`}
  ${(props) => props.mb && `margin-bottom:${props.mb};`}
`;
