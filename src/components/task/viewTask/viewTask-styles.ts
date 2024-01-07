import styled from "styled-components";

export const Container = styled.div<{
  $editTaskOn: boolean;
  $deleteOn: boolean;
  $editBoardOn: boolean;
}>`
  width: 100%;
  position: relative;
  display: ${(props) =>
    props.$editTaskOn || props.$deleteOn || props.$editBoardOn
      ? "none"
      : "block"};
  /* visibility: ${(props) =>
    props.$editTaskOn || props.$deleteOn || props.$editBoardOn
      ? "hidden"
      : "visible"};
  height: ${(props) =>
    props.$editTaskOn || props.$deleteOn || props.$editBoardOn
      ? "0"
      : "auto"}; */
`;
export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;
export const Title = styled.h1`
  font-size: 18px;
  font-weight: 700;
  color: ${(props) => props.theme.text.primary};
`;
export const DotsBox = styled.div`
  padding-inline: 8px;
  cursor: pointer;
`;
export const Dots = styled.svg``;

export const Description = styled.p`
  font-size: 13px;
  font-weight: 500;
  line-height: 23px;
  color: ${(props) => props.theme.text.secondary};
  margin-bottom: 24px;
`;
export const SubtasksBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 24px;
`;
export const SubtaskCount = styled.span`
  display: block;
  font-size: 12px;
  font-weight: 700;
  color: ${(props) => props.theme.text.secondary};
  margin-bottom: 16px;
`;
export const EditDeleteBox = styled.div<{ $optionsOn: boolean }>`
  width: 192px;
  position: absolute;
  top: 35px;
  right: -80px;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.backgrounds.main};
  padding: 16px;
  border-radius: 8px;
  opacity: ${(props) => (props.$optionsOn ? "1" : "0")};
  visibility: ${(props) => (props.$optionsOn ? "visible" : "hidden")};
  transition: opacity 0.3s ease-in;
`;
export const EditText = styled.span`
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 23px;
  color: ${(props) => props.theme.text.secondary};
  margin-bottom: 16px;
  cursor: pointer;
`;
export const DeleteText = styled(EditText)`
  color: ${(props) => props.theme.buttonsBg.Destructive};
  margin-bottom: 0px;
`;
