import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: -8px;
`;
export const QuestionText = styled.h1`
  font-size: 18px;
  font-weight: 700;
  color: ${(props) => props.theme.buttonsBg.Destructive};
  margin-bottom: 24px;
`;
export const Description = styled.p`
  font-size: 13px;
  font-weight: 500;
  line-height: 23px;
  color: ${(props) => props.theme.text.secondary};
  margin-bottom: 24px;
`;
export const DeleteBtn = styled.button<{ $width: number }>`
  width: 100%;
  font-size: 13px;
  font-weight: 700;
  line-height: 23px;
  border: none;
  color: ${(props) => props.theme.buttonClr.primary};
  background: ${(props) => props.theme.buttonsBg.Destructive};
  border-radius: 20px;
  padding-block: 8px;
  margin-bottom: ${(props) => (props.$width > 720 ? "0px" : "16px")};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  @media (min-width: 768px) {
    &:hover {
      background: ${(props) => props.theme.buttonsBg.DestructiveHover};
    }
  }
`;
export const CancelBtn = styled(DeleteBtn)`
  color: ${(props) => props.theme.buttonsBg.primary};
  background: ${(props) => props.theme.buttonsBg.secondary};
  margin-bottom: 0px;
  @media (min-width: 768px) {
    &:hover {
      background: ${(props) => props.theme.buttonsBg.secondaryHover};
    }
  }
`;
export const ButtonsBox = styled.div<{ $width: number }>`
  display: ${(props) => (props.$width > 720 ? "flex" : "block")};
  gap: 16px;
`;
