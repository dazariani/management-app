import styled from "styled-components";
export const Container = styled.div`
  background: ${(props) => props.theme.backgrounds.main};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-block: 211px 274px;
  padding-inline: 16px;
`;
export const Content = styled.div`
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 25px;
  color: ${(props) => props.theme.text.secondary};
`;
