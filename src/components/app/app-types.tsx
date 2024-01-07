export type ColorThemeProps = {
  backgrounds: {
    sidebar: string;
    main: string;
    newColumn: string;
  };
  buttonsBg: {
    primary: string;
    primaryHover: string;
    secondary: string;
    secondaryHover: string;
    Destructive: string;
    DestructiveHover: string;
  };
  formsBg: {
    SubtaskCheckbox: string;
    SubtaskCheckboxHover: string;
    textField: string;
    dropDown: string;
    dropDownList: string;
  };
  buttonClr: {
    primary: string;
    hover: string;
  };
  text: {
    primary: string;
    secondary: string;
  };
};

export const LightColors: ColorThemeProps = {
  backgrounds: {
    sidebar: "rgb(255, 255, 255)",
    main: "rgb(244, 247, 253)",
    newColumn: "rgb(237, 242, 251)",
  },
  buttonsBg: {
    primary: "rgb(99, 95, 199)",
    primaryHover: "rgb(168, 164, 255)",
    secondary: "rgb(239, 239, 249)",
    secondaryHover: "rgb(216, 215, 241)",
    Destructive: "rgb(234, 85, 85)",
    DestructiveHover: "rgb(255, 152, 152)",
  },
  formsBg: {
    SubtaskCheckbox: "rgb(244, 247, 253)",
    SubtaskCheckboxHover: "rgb(216, 215, 241)",
    textField: "rgb(255, 255, 255)",
    dropDown: "rgb(255, 255, 255)",
    dropDownList: "rgb(255, 255, 255)",
  },
  buttonClr: {
    primary: "rgb(255, 255, 255)",
    hover: "rgb(99, 95, 199)",
  },
  text: {
    primary: "rgb(0, 1, 18)",
    secondary: "rgb(130, 143, 163)",
  },
};

export const DarkColors: ColorThemeProps = {
  backgrounds: {
    sidebar: "rgb(43, 44, 55)",
    main: "rgb(32, 33, 44)",
    newColumn: "rgb(34, 35, 46)",
  },
  buttonsBg: {
    primary: "rgb(99, 95, 199)",
    primaryHover: "rgb(168, 164, 255)",
    secondary: "rgb(255, 255, 255)",
    secondaryHover: "rgb(255, 255, 255)",
    Destructive: "rgb(234, 85, 85)",
    DestructiveHover: "rgb(255, 152, 152)",
  },
  formsBg: {
    SubtaskCheckbox: "rgb(32, 33, 44)",
    SubtaskCheckboxHover: "rgb(57, 57, 91)",
    textField: "rgb(43, 44, 55)",
    dropDown: "rgb(43, 44, 55)",
    dropDownList: "rgb(32, 33, 44)",
  },
  buttonClr: {
    primary: "rgb(255, 255, 255)",
    hover: "rgb(99, 95, 199)",
  },
  text: {
    primary: "rgb(255, 255, 255)",
    secondary: "rgb(130, 143, 163)",
  },
};
