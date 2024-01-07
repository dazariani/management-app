import styled from "styled-components";

export const Container = styled.div<{ $boardListOn: boolean }>`
  height: inherit;
  overflow: hidden;
  width: 100%;
  background-color: ${(props) => props.theme.backgrounds.sidebar};
  color: ${(props) => props.theme.text.secondary};
  padding-block: 16px;
  border-radius: 8px;
`;
export const Title = styled.span`
  display: block;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2.4px;
  padding-left: 24px;
  margin-bottom: 19px;
`;

export const ListBox = styled.div`
  padding-right: 24px;
`;
export const ListItemBox = styled.div<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 12px;
  padding-left: 24px;
  padding-block: 15px;
  border-radius: 0px 100px 100px 0px;
  background: ${(props) =>
    props.$isActive ? props.theme.buttonsBg.primary : "none"};
  cursor: pointer;
`;
export const BoardLogo = styled.svg``;
export const BoardName = styled.span<{ $isActive: boolean }>`
  color: ${(props) => props.$isActive && props.theme.buttonClr.primary};
  font-size: 15px;
  font-weight: 700;
`;

export const AddNewBox = styled(ListItemBox)`
  color: ${(props) => props.theme.buttonsBg.primary};
  & > svg > path {
    color: ${(props) => props.theme.buttonsBg.primary};
  }
`;
export const ThemeToogleBox = styled.div`
  padding-inline: 24px;
  margin-top: 8px;
`;
export const ThemeIconsBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-block: 15px;
  gap: 25px;
  background: ${(props) => props.theme.backgrounds.main};
  border-radius: 8px;
`;
export const SwitchBox = styled.div`
  width: 55px;
  height: 25px;
  background: ${(props) => props.theme.buttonsBg.primary};
  border-radius: 34px;
  position: relative;
  cursor: pointer;
`;
export const SwitchCircle = styled.div<{ $appTheme: string }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  left: 5%;
  top: 2px;
  background: ${(props) => props.theme.buttonsBg.secondary};
  transition: all 0.3s ease-in-out;
  transform: translateX(
    ${(props) => (props.$appTheme === "bright" ? "5%" : "139%")}
  );
`;
export const LightIcon = styled.svg`
  cursor: pointer;
`;
export const DarkIcon = styled(LightIcon)``;
