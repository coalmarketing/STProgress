import { Button, ButtonProps } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { EButtonStyle } from "../models/IModels.model";

interface IProps {
    text: string;
    styles?: ButtonProps;
    btnStyle: EButtonStyle;
    to?: string;
    isScroller?: boolean;
    scrollTarget?: string;
    onClick?: () => void; // Přidán onClick
}

const CustomBtn = ({ text, styles, btnStyle, to, isScroller = false, scrollTarget, onClick }: IProps) => {

    const [btnStyleProps, setBtnStyleProps] = useState<ButtonProps>({});

    useEffect(() => {
        if (btnStyle === EButtonStyle.primaryDark) {
            setBtnStyleProps({
                bg: "white",
                color: "STProgress.red",
                borderWidth: "0px",
                _hover: {
                    bg: "STProgress.red",
                    color: "white",
                },
            });
            return;
        }

        if (btnStyle === EButtonStyle.primaryLight) {
            setBtnStyleProps({
                bg: "STProgress.red",
                color: "white",
                _hover: {
                    bg: "STProgress.redHover",
                    color: "white",
                },
            });
            return;
        }

        if (btnStyle === EButtonStyle.secondaryDark) {
            setBtnStyleProps({
                bg: "black",
                color: "white",
                border: "2px solid white",
                _hover: {
                    bg: "white",
                    color: "black",
                    borderColor: "black",
                },
            });
            return;
        }

        if (btnStyle === EButtonStyle.secondaryLight) {
            setBtnStyleProps({
                bg: "white",
                color: "STProgress.red",
                borderColor: "STProgress.red",
                border: "2px solid",
                _hover: {
                    bg: "STProgress.red",
                    color: "white",
                    borderColor: "STProgress.red",
                },
            });
        }

        if (btnStyle === EButtonStyle.certificate) {
            setBtnStyleProps({
                bg: "white",
                color: "STProgress.red",
                border: "2px solid",
                _hover: {
                    bg: "STProgress.red",
                    color: "white",
                    borderColor: "STProgress.white",
                },
            });
        }
    }, [btnStyle]);

    return isScroller ? (
        <LinkScroll to={scrollTarget || ""} smooth offset={-100}>
            <Button
                target="_blank"
                w="170px"
                h="40px"
                borderRadius={0}
                {...styles}
                {...btnStyleProps}
            >
                {text}
            </Button>
        </LinkScroll>
    ) : onClick ? ( // Kontrola, jestli byl předán onClick
        <Button
            onClick={onClick}
            w="170px"
            h="40px"
            borderRadius={0}
            {...styles}
            {...btnStyleProps}
        >
            {text}
        </Button>
    ) : (
        <Button
            as={Link}
            to={to}
            target=""
            w="170px"
            h="40px"
            borderRadius={0}
            {...styles}
            {...btnStyleProps}
        >
            {text}
        </Button>
    );
};

export default CustomBtn;
