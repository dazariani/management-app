import styled from "styled-components";

export const Mask = styled.div<{
  $boardListOn: boolean;
  $modalOn: boolean;
}>`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  visibility: ${(props) =>
    props.$boardListOn || props.$modalOn ? "visible" : "hidden"};
  opacity: ${(props) => (props.$boardListOn || props.$modalOn ? 1 : 0)};
  transition: all 0.6s ease-in-out;
`;
