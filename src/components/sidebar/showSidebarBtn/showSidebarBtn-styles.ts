import styled from "styled-components";

export const Container = styled.div<{ $sidebarOn: boolean }>`
  width: 56px;
  height: 48px;
  position: fixed;
  left: 0;
  bottom: 5%;
  background: ${(props) => props.theme.buttonsBg.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 50% 50% 0;
  opacity: ${(props) => (props.$sidebarOn ? 0 : 1)};
  visibility: ${(props) => (props.$sidebarOn ? "hidden" : "visible")};
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  @media (min-width: 768px) {
    &:hover {
      background: ${(props) => props.theme.buttonsBg.primaryHover};
    }
  }
`;
export const Icon = styled.svg``;
