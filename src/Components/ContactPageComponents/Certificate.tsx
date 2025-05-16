import { Flex, Text, Image, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { EButtonStyle } from "../../models/IModels.model";
import CustomBtn from "../CustomBtn";
import certificateIcon from "../../images/icons/certification.svg";
import ImgPDF1 from "../../images/certificate/Certifikat1.webp";
import ImgPDF2 from "../../images/certificate/Certifikat2.webp";
import ImgPDF3 from "../../images/certificate/Certifikat3.webp";
import ImgPDF4 from "../../images/certificate/Certifikat4.webp";
import ImgPDF5 from "../../images/certificate/Certifikat5.webp";
import ImgPDF6 from "../../images/certificate/Certifikat6.webp";

import FilePDF1 from "../../images/certificate/Certifikat1.pdf";
import FilePDF2 from "../../images/certificate/Certifikat2.pdf";
import FilePDF3 from "../../images/certificate/Certifikat3.pdf";
import FilePDF4 from "../../images/certificate/Certifikat4.pdf";
import FilePDF5 from "../../images/certificate/Certifikat5.pdf";
import FilePDF6 from "../../images/certificate/Certifikat6.pdf";

// Definice certifikátů v proměnných
const certificates = [
    {
        id: 1,
        image: ImgPDF1,
        file: FilePDF1
    },
    {
        id: 2,
        image: ImgPDF2,
        file: FilePDF2
    },
    {
        id: 3,
        image: ImgPDF3,
        file: FilePDF3
    },
    {
        id: 4,
        image: ImgPDF4,
        file: FilePDF4
    },
    {
        id: 5,
        image: ImgPDF5,
        file: FilePDF5
    },
    {
        id: 6,
        image: ImgPDF6,
        file: FilePDF6
    },
];

const Certificate = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleImageClick = (imageUrl: string) => {
        setSelectedImage(imageUrl);
        onOpen();
    };

    const handleDownload = (fileUrl: string) => {
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = fileUrl.split("/").pop() || "download.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Flex
            w="100%"
            bg="STProgress.red"
            color="white"
            pt={12}
            pb={110}
            direction="column"
            align="left"
        >
            <Flex w="80%" mx="auto" direction="row" gap={10}>
                <Flex direction="column" w="100%">
                    <Text
                        fontSize={{ base: "25px", xl: "30px" }}
                        fontWeight="bold"
                        textAlign="left"
                        mb={8}
                    >
                        STAVEBNÍ PROGRESS a.s. je držitelem několika certifikátů.
                    </Text>
                    <Flex
                        direction="row"
                        wrap="wrap"
                        justify="left"
                        gap={8}
                    >
                        {certificates.map((certificate) => (
                            <Flex
                                key={certificate.id}
                                direction="column"
                                align="center"
                                mx={{ base: "auto", lg: 0 }}
                            >
                                <Image
                                    src={certificate.image}
                                    alt={`Certifikát ${certificate.id}`}
                                    boxSize="auto"
                                    maxH="150px"
                                    mx="auto"
                                    mb={4}
                                    cursor="pointer"
                                    onClick={() => handleImageClick(certificate.image)}
                                />
                                <CustomBtn
                                    onClick={() => handleDownload(certificate.file)}
                                    text="Stáhnout PDF"
                                    btnStyle={EButtonStyle.certificate}
                                />
                            </Flex>
                        ))}
                    </Flex>
                </Flex>
                <Flex display={{ base: "none", lg: "flex" }}>
                <img 
                    src={certificateIcon} 
                    alt="Phone" 
                    width="200px" 
                />
                </Flex>
            </Flex>

            <Modal isOpen={isOpen} onClose={onClose} size="xl">
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody>
                        <Image src={selectedImage || ""} width="100%" objectFit="contain" />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Flex>
    );
};

export default Certificate;
