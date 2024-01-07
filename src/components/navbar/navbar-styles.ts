import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.backgrounds.sidebar};
  padding-inline: 16px;
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 16px;
`;

export const LogoBox = styled.div`
  display: flex;
`;
export const Logo = styled.svg``;

export const BoardNameBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 9px;
  cursor: pointer;
`;
export const BoardName = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: ${(props) => props.theme.text.primary};
`;
export const ChevronIconDown = styled.svg``;
export const ChevronIconUp = styled.svg``;

export const AddTaskBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
export const AddBtn = styled.button`
  border-radius: 24px;
  font-size: 15px;
  font-weight: 700;
  background-color: ${(props) => props.theme.buttonsBg.primary};
  color: ${(props) => props.theme.buttonClr.primary};
  padding-inline: 18px;
  padding-block: 13px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  @media (min-width: 768px) {
    &:hover {
      background: ${(props) => props.theme.buttonsBg.primaryHover};
    }
  }
`;
export const AddIcon = styled.svg``;
export const ThreeDotsBox = styled.div`
  padding-inline: 8px;
  cursor: pointer;
`;
export const ThreeDotsIcon = styled.svg``;
export const LogoBoardNameWrapper = styled.div`
  display: flex;
  gap: 16px;
`;
