import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding-inline: 24px;
  padding-top: 24px;
  background: ${(props) => props.theme.backgrounds.main};
  padding-bottom: 88px;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const Container = styled.div`
  width: 2000px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 280px));
  gap: 24px;
  background: ${(props) => props.theme.backgrounds.main};
  min-height: 100vh;
`;
