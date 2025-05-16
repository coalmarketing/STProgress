import { Image } from "@chakra-ui/react";
import { useMemo } from "react";
import rightArrow from "../../images/icons/accordion/blackArrow-right.svg";
import upArrow from "../../images/icons/accordion/redArrow-up.svg";
import rightArrowWhite from "../../images/icons/accordion/whiteArrow-right.svg";

interface IProps {
    leftAlignment: boolean;
    isExpanded: boolean;
}

const CustomAccordionIcon = ({ leftAlignment, isExpanded }: IProps) => {
    const properIcon = useMemo(() => {
        if (isExpanded) return upArrow;
        if (!leftAlignment) return rightArrowWhite;
        return rightArrow;
    }, [leftAlignment, isExpanded]);
    
    return (
        <Image 
            w={isExpanded ? "20px" : "15px"}
            height="auto"
            src={properIcon}  // Update the icon source based on the left alignment and accordion state
        />
    );
}

export default CustomAccordionIcon;
