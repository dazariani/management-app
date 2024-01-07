import styled from "styled-components";

export const Container = styled.div`
  max-width: 343px;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  background: ${(props) => props.theme.backgrounds.sidebar};
  padding-inline: 24px;
  padding-block: 24px 32px;
  border-radius: 8px;
  overflow-x: visible;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 768px) {
    max-width: 480px;
  }
`;
