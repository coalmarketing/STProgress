import { Accordion, AccordionItem, AccordionButton, AccordionPanel, Box, Text, Flex, Image } from "@chakra-ui/react";
import CustomAccordionIcon from "./CustomAccordionIcon";
import { IAccordion } from "../../models/IModels.model";

interface IProps {
    leftAlignment: boolean;
    handleImageClick: (value: string) => void;
    data: IAccordion[];
    fullWidth?: boolean;
    fullHeight?: boolean;
}

const CustomAccordion = ({ leftAlignment, handleImageClick, data, fullHeight = true }: IProps) => {
    
    return (
        <Accordion minH={ fullHeight ? "200px" : "0px" } allowToggle color={leftAlignment ? "black" : "white"}>
            {
                data.map((ac, index) => (
                    <AccordionItem key={`accordion-item-${index}`}>
                        {({ isExpanded }) => (
                            <>
                                <Text>
                                    <AccordionButton>
                                        <Box as="span" flex="1" textAlign="left">
                                            <Flex gap="5px">
                                            <Text w="50px" fontWeight="bold">{ac.years}</Text>
                                            <Text>{ac.title}</Text>
                                            </Flex>
                                        </Box>
                                        <CustomAccordionIcon isExpanded={isExpanded} leftAlignment={leftAlignment} />
                                    </AccordionButton>
                                </Text>
                                <AccordionPanel pb={4}>
                                    <Text fontSize={{ sm: "16px" }}>
                                        {ac.text}
                                    </Text>
                                    <Flex mt={3} gap={2}>
                                        {ac.pictures.map((pict, pictIndex) => (
                                            <Image 
                                                key={`accordion-image-${index}-${pictIndex}`}
                                                src={pict} 
                                                boxSize={{ md: "35%", base: "50%" }} 
                                                objectFit="cover" 
                                                h="120px" 
                                                onClick={() => handleImageClick(pict)} 
                                                cursor="pointer" 
                                            />
                                        ))}
                                    </Flex>
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>
                ))
            }
        </Accordion>
    );
};

export default CustomAccordion;

