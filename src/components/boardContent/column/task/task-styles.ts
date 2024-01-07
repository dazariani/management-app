import styled from "styled-components";

export const Container = styled.div<{ $isDragging: boolean }>`
  width: 280px;
  padding-inline: 16px;
  padding-block: 23px;
  background: ${(props) =>
    props.$isDragging ? "darkgreen" : props.theme.backgrounds.sidebar};
  border-radius: 8px;
  cursor: pointer;
  @media (min-width: 768px) {
    &:hover > h1 {
      color: ${(props) => props.theme.buttonsBg.primary};
      transition: all 0.2s ease-in-out;
    }
  }
`;
export const TaskTitle = styled.h1`
  font-size: 15px;
  font-weight: 700;
  color: ${(props) => props.theme.text.primary};
  margin-bottom: 8px;
  transition: all 0.2s ease-in-out;
`;
export const SubtasksDone = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: ${(props) => props.theme.text.secondary};
`;
