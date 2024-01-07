import styled from "styled-components";

export const Container = styled.div<{ $boardOptionsOn: boolean }>`
  position: absolute;
  top: 68px;
  right: 15px;
  opacity: ${(props) => (props.$boardOptionsOn ? "1" : "0")};
  visibility: ${(props) => (props.$boardOptionsOn ? "vidible" : "hidden")};
  transition: all 0.3s ease-in;
  background: ${(props) => props.theme.backgrounds.main};
  border-radius: 8px;
  padding: 16px;
`;
export const EditText = styled.span`
  display: block;
  font-size: 13px;
  font-weight: 500;
  line-height: 23px;
  width: 160px;
  margin-bottom: 16px;
  color: ${(props) => props.theme.text.secondary};
  cursor: pointer;
`;
export const DeleteText = styled(EditText)`
  margin-bottom: 0;
  color: ${(props) => props.theme.buttonsBg.Destructive};
`;
