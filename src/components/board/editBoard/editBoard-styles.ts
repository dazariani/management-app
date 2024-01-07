import styled from "styled-components";

export const Container = styled.div``;
export const Title = styled.h1`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 24px;
  color: ${(props) => props.theme.text.primary};
`;

export const Form = styled.form``;
export const LabelInputBox = styled.div`
  margin-bottom: 24px;
`;
export const Label = styled.label`
  display: block;
  font-size: 12px;
  font-weight: 700;
  color: ${(props) => props.theme.text.secondary};
  margin-bottom: 8px;
`;
export const NameInputBox = styled.div``;
export const NameInput = styled.input`
  width: 100%;
  font-size: 13px;
  font-weight: 500;
  line-height: 23px;
  color: ${(props) => props.theme.text.primary};
  padding-inline: 16px;
  padding-block: 8px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.text.secondary};
  background: ${(props) => props.theme.formsBg.textField};
  transition: all 0.2s ease-in-out;
  @media (min-width: 768px) {
    &:hover {
      border-color: ${(props) => props.theme.buttonsBg.primary};
    }
  }
`;

export const ColumnsSection = styled.section``;
export const ColumnListBox = styled.ul``;

export const InputIconBox = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 12px;
`;
export const ColumnInputBox = styled.div`
  width: 100%;
`;
export const ColumnInput = styled.input`
  width: 100%;
  font-size: 13px;
  font-weight: 500;
  line-height: 23px;
  padding-inline: 16px;
  padding-block: 8px;
  border-radius: 4px;
  color: ${(props) => props.theme.text.primary};
  border: 1px solid ${(props) => props.theme.text.secondary};
  background: ${(props) => props.theme.formsBg.textField};
`;
export const DeleteIcon = styled.svg`
  @media (min-width: 768px) {
    & > g {
      transition: all 0.2s ease-in-out;
    }
    &:hover > g {
      fill: ${(props) => props.theme.buttonsBg.Destructive};
    }
  }
`;
export const AddNewBtn = styled.button`
  width: 100%;
  font-size: 13px;
  font-weight: 700;
  line-height: 23px;
  border: none;
  color: ${(props) => props.theme.buttonsBg.primary};
  background: ${(props) => props.theme.buttonsBg.secondary};
  padding-block: 8px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  @media (min-width: 768px) {
    &:hover {
      background: ${(props) => props.theme.buttonsBg.secondaryHover};
    }
  }
`;
export const SaveBtn = styled.input`
  width: 100%;
  font-size: 13px;
  font-weight: 700;
  line-height: 23px;
  border: none;
  color: ${(props) => props.theme.buttonClr.primary};
  background: ${(props) => props.theme.buttonsBg.primary};
  padding-block: 8px;
  border-radius: 20px;
  margin-top: 24px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  @media (min-width: 768px) {
    &:hover {
      background: ${(props) => props.theme.buttonsBg.primaryHover};
    }
  }
`;
export const ColumnInputWrapper = styled.div<{
  $first: boolean;
  $second: boolean;
  $colError: string | undefined;
}>`
  width: 100%;
  position: relative;
  &::after {
    content: "${(props) =>
      props.$first || props.$second
        ? "duplicate name"
        : props.$colError
        ? props.$colError
        : ""}";
    /*  */
     {
    }
    /*  */
    position: absolute;
    top: 8px;
    right: 10px;
    font-size: 13px;
    color: ${(props) => props.theme.buttonsBg.Destructive};
    font-weight: 500;
    line-height: 23px;
  }
`;
