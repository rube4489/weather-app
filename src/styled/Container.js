import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  ${(props) => props.position && `flex-position:${props.position};`}
  ${(props) => props.flexD && `flex-direction:${props.flexD};`}
  ${(props) => props.justify && `justify-content:${props.justify};`}
  ${(props) => props.align && `align-items:${props.align};`}
  ${(props) => props.width && `width:${props.width};`}
  ${(props) => props.mg && `margin:${props.mg};`}
  ${(props) => props.mt && `margin-top:${props.mt};`}
  ${(props) => props.mb && `margin-bottom:${props.mb};`}
  ${(props) => props.pb && `padding-bottom:${props.pb};`}
  ${(props) => props.wrap && `flex-wrap:${props.wrap};`}
  ${(props) => props.order && `order:${props.order};`}
  ${(props) => props.height && `height:${props.height};`}
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px #fff;
    border-radius: 0.25em;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
  @media screen and (max-width: 375px) {
    justify-content: center;
    align-items: center;
    ::-webkit-scrollbar {
      display: none;
    }
  }
  @media screen and (max-width: 414px) {
    justify-content: center;
    align-items: center;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const Card = styled(Container)`
  padding: 0.8em 0;
  ${(props) => props.padding && `padding:${props.padding};`};
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.15);
  font-size: 1.125em;
  text-align: center;
  ${(props) => props.flexShrink && `flex-shrink:${props.flexShrink};`};
  @media screen and (max-width: 375px) {
    flex-shrink: 0;
  }
  @media screen and (max-width: 414px) {
    flex-shrink: 1;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

export const Col = styled.div`
  display: flex;
  flex: 50%;
  ${(props) => props.borderL && `border-left:${props.borderL};`}
  ${(props) => props.flexD && `flex-direction:${props.flexD};`}
  ${(props) => props.justify && `justify-content:${props.justify};`}
  ${(props) => props.align && `align-items:${props.align};`}
  @media screen and (max-width: 375px) {
    justify-content: center;
    margin-top: 10px;
    border-left: none;
  }
  @media screen and (max-width: 414px) {
    justify-content: center;
    margin-top: 10px;
    border-left: none;
  }
`;

export const WrapperImg = styled.img`
  ${(props) => props.width && `width:${props.width};`}
  ${(props) => props.heigth && `heigth:${props.heigth};`}
`;
