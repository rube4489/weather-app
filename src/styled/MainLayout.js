import styled from "styled-components";

export const MainLayout = styled.div`
  display: flex;
  justify-content: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background: linear-gradient(
    180deg,
    rgba(42, 34, 195, 1) 0%,
    rgba(45, 157, 253, 1) 100%
  );
  height: 100%;
  @media screen and (max-width: 375px) {
    padding: 0 20px;
  }
  @media screen and (max-width: 414px) {
    padding: 0 10px;
  }
  @media screen and (min-width: 768px) {
    height: 100vh;
    padding: 0 20px;
  }

  @media screen and (min-width: 912px) {
    height: 100vh;
  }
  @media screen and (min-width: 1280px) {
    height: 100%;
  }
  @media screen and (min-width: 1366px) {
    height: 100%;
  }
  @media screen and (min-width: 1920px) {
    height: 100%;
  }
`;
