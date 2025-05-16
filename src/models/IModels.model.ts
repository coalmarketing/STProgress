export enum EButtonStyle {
    primaryLight = "primaryLight",
    primaryDark = "primaryDark",
    secondaryLight= "secondaryLight",
    secondaryDark = "secondaryDark",
    certificate = "certificate",
}

export enum EServiceCard {
    leftAlign = "leftAlign",
    rightAlign = "rightAlign",
}

export interface IAccordion {
    years: string;
    title: string;
    text: string;
    pictures: string[];
}