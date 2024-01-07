import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
  color: ${(props) => props.theme.text.secondary};
  background: ${(props) => props.theme.backgrounds.newColumn};
  margin-top: 34px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  @media (min-width: 768px) {
    &:hover {
      color: ${(props) => props.theme.buttonsBg.primary};
    }
  }
`;
