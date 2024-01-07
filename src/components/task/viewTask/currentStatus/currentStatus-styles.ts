import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;
export const Title = styled.span`
  display: block;
  font-size: 12px;
  font-weight: 700;
  color: ${(props) => props.theme.text.secondary};
  margin-bottom: 8px;
`;

export const DropDownBox = styled.div<{ $listOn: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 16px;
  padding-block: 8px;
  border: 1px solid
    ${(props) =>
      props.$listOn
        ? props.theme.buttonsBg.primary
        : props.theme.text.secondary};
  border-radius: 4px;
  cursor: pointer;
`;
export const ColumnName = styled.span`
  font-size: 13px;
  font-weight: 500;
  line-height: 23px;
  color: ${(props) => props.theme.text.primary};
`;
export const ArrowDown = styled.svg``;
export const ArrowUp = styled(ArrowDown)``;

export const ColumnList = styled.ul<{ $listOn: boolean; $editTaskOn: boolean }>`
  padding: 16px;
  background: ${(props) => props.theme.backgrounds.sidebar};
  width: 100%;
  border-radius: 8px;
  opacity: ${(props) => (props.$listOn ? "1" : "0")};
  visibility: ${(props) => (props.$listOn ? "visible" : "hidden")};
  position: absolute;
  /* top: ${(props) => (!props.$editTaskOn ? "487px" : "-50px")}; */
  top: 66px;
  left: 0;
  transition: all 0.3s ease-in-out;
  /* height: ${(props) => (props.$listOn ? "auto" : "0px")}; */
`;
export const ListItem = styled.div`
  font-size: 13px;
  font-weight: 500;
  line-height: 23px;
  color: ${(props) => props.theme.text.secondary};
  margin-bottom: 8px;
  padding-block: 3px;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }
`;
