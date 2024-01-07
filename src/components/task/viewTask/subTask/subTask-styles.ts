import styled from "styled-components";

export const SubtaskLabel = styled.label<{ $subtaskValue: boolean }>`
  display: flex;
  gap: 16px;
  background: ${(props) => props.theme.backgrounds.main};
  padding-inline: 12px 8px;
  padding-block: 21px;
  margin-bottom: 8px;
  width: 100%;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  color: ${(props) =>
    props.$subtaskValue
      ? props.theme.text.secondary
      : props.theme.text.primary};
  text-decoration: ${(props) =>
    props.$subtaskValue ? "line-through" : "none"};
  transition: all 0.2s ease-in-out;
  @media (min-width: 768px) {
    &:hover {
      background: ${(props) => props.theme.buttonsBg.primaryHover};
    }
  }
  &:last-child {
    margin-bottom: 0;
  }
`;
export const SubtaskInput = styled.input`
  order: -1;
`;
