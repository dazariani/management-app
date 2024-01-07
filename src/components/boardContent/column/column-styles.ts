import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
`;
export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
export const Circle = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
`;
export const Title = styled.span`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2.4px;
  color: ${(props) => props.theme.text.secondary};
`;
export const TaskList = styled.div<{ $isDraggingOver: boolean }>`
  min-height: 100px;
  min-width: 280px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${(props) =>
    props.$isDraggingOver ? props.theme.buttonsBg.primaryHover : "unset"};
  transition: background-color 0.2s ease;
  border-radius: 8px;
`;
