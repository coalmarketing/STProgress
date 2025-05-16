import {
    Flex,
    Heading,
    Text,
    Image,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    ModalBody
} from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
import { EButtonStyle } from "../../models/IModels.model";
import CustomBtn from "../CustomBtn";
import CustomAccordion from "../LandingPageComponents/CustomAccordion";

interface IAccordionData {
    years: string;
    title: string;
    text: string;
    pictures: string[];
}

interface IProps {
    leftAlignment?: boolean;
    cardTitle: string;
    headingText: string;
    textChildren?: React.ReactNode;
    zadavatel: string;
    dobaZpracovani: string;
    cardImages: string;
    handleImageClick: (src: string) => void;
    selectedImage: string;
    isOpen: boolean;
    onClose: () => void;
    accordionData?: IAccordionData[];
    btnTarget?: string;
}

const ProjectCard = ({
    leftAlignment = true,
    cardTitle,
    headingText,
    textChildren,
    zadavatel,
    dobaZpracovani,
    cardImages,
    handleImageClick,
    selectedImage,
    isOpen,
    onClose,
    accordionData
}: IProps) => {
    const [leftColumnHeight, setLeftColumnHeight] = useState<number>(0);
    const leftColumnRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (leftColumnRef.current) {
            setLeftColumnHeight(leftColumnRef.current.clientHeight);
        }
    }, [textChildren, cardTitle, zadavatel, dobaZpracovani]);

    // Rozdělení accordionData do dvou sloupců, pokud je definováno
    const midIndex = accordionData ? Math.ceil(accordionData.length / 2) : 0;
    const leftColumnData = accordionData?.slice(0, midIndex) || [];
    const rightColumnData = accordionData?.slice(midIndex) || [];

    return (
        <Flex direction="column" gap="50px" mt="80px">
            <Heading fontSize={{ base: "35px", lg: "58px" }}>{headingText}</Heading>
            <Flex w="100%" justify="center">
                <Flex justifyContent="center" w="100%" direction={{ base: "column", lg: "row"}} gap={{ base: 6, lg: "unset" }}>
                    <Flex direction="column" w="100%" pr={{ base: "unset", lg: "140px" }} gap="20px" alignItems={leftAlignment ? "start" : "end"} ref={leftColumnRef}>
                        <Text fontSize="30px" lineHeight="1" fontWeight="bold">{cardTitle}</Text>
                        <Text fontSize="17px" fontWeight="medium">{textChildren}</Text>
                        <Flex direction="column" gap="2px">
                            <Text fontSize="14px" fontWeight="bold">Zadavatel: {zadavatel}</Text>
                            <Text fontSize="14px" fontWeight="bold">Doba zpracování: {dobaZpracovani}</Text>
                        </Flex>
                        <CustomBtn to="/reference" text="Více..." btnStyle={EButtonStyle.primaryLight} />
                    </Flex>
                    <Flex w={{base: "100%", lg: "80%" }} maxH={`${leftColumnHeight}px`} alignItems={leftAlignment ? "start" : "end"}>
                        <Image src={cardImages} objectFit="cover" width="100%" height="100%" maxH={`${leftColumnHeight}px`} />
                    </Flex>
                </Flex>
            </Flex>

            {accordionData && accordionData.length > 0 && (
                <Flex direction="column" pt="10px">
                    <Flex direction={{base: "column", lg: "row"}} w="100%" gap={{ base: "unset", lg: "100px" }}>
                        <Flex  direction="column" flex="1">
                            <CustomAccordion fullHeight={false} leftAlignment={leftAlignment} data={leftColumnData} handleImageClick={handleImageClick} />
                        </Flex>
                        <Flex direction="column" flex="1">
                            <CustomAccordion fullHeight={false} leftAlignment={leftAlignment} data={rightColumnData} handleImageClick={handleImageClick} />
                        </Flex>
                    </Flex>
                </Flex>
            )}

            <Modal isOpen={isOpen} onClose={onClose} size="xl">
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody>
                        <Image src={selectedImage} width="100%" objectFit="contain" />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Flex>
    );
};

export default ProjectCard;
