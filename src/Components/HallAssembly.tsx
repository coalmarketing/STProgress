import { Text, Flex, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import HeadingImg from "./HeadingImg";
import headerPicture from "../images/photos/webp/header_static.webp";
import hallIcon from "../images/icons/hall.svg";
import clockIcon from "../images/icons/clock.svg";
import lockIcon from "../images/icons/lock.svg";
import ProjectCard from "./SubsitesComponents/ProjectCard";
import ProjectTimeLine from "./SubsitesComponents/ProjectTimeLine";
import KeyFeatures from "./KeyFeatures";
import { projectPropsList } from "./Projects";

import montaz1 from "../images/photos/webp/montaz_01.webp";
import montaz2 from "../images/photos/webp/montaz_02.webp";
import montaz3 from "../images/photos/webp/montaz_03.webp";
import montaz4 from "../images/photos/webp/montaz_04.webp";
import montaz5 from "../images/photos/webp/montaz_05.webp";
import montaz6 from "../images/photos/webp/montaz_06.webp";


const HallAssembly = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedImage, setSelectedImage] = useState("");

    const handleImageClick = (src: string) => {
        setSelectedImage(src);
        onOpen();
    };

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }, 250);
    }, [])

    const features = [
        { icon: hallIcon, text: "Nabízíme moderní stavby a používáme kvalitně zpracované materiály." },
        { icon: clockIcon, text: "Rychlost montáže je pro nás prioritou." },
        { icon: lockIcon, text: "Dohlédneme na projekt od prvotního plánování až k předání klíčů." },
    ];

    const projectSteps = [
        {
            cardTitle: "PŘÍPRAVA",
            cardNumber: "01",
            textChildren: "Zpracujeme projektovou dokumentaci s ohledem na přání investora.",
            cardImage: montaz1
        },
        {
            cardTitle: "KONSTRUKCE SKELETU",
            cardNumber: "02",
            textChildren: "Vyrobíme a smontujeme ocelovou konstrukci včetně tenkostěnných vaznic METSEC.",
            cardImage: montaz2
        },
        {
            cardTitle: "OPLÁŠTĚNÍ SKELETU",
            cardNumber: "03",
            textChildren: "Namontujeme opláštění: sendvičové panely, trapézové plechy nebo skládané plechy.",
            cardImage: montaz3
        },
        {
            cardTitle: "OSAZENÍ SKELETU",
            cardNumber: "04",
            textChildren: "Osadíme okna, dveře a vrata haly.",
            cardImage: montaz4
        },
        {
            cardTitle: "DODATEČNÉ PRVKY",
            cardNumber: "05",
            textChildren: "Namontujeme klempířské prvky dle přání zákazníka.",
            cardImage: montaz5
        },
        {
            cardTitle: "PŘEDÁNÍ",
            cardNumber: "06",
            textChildren: "Stavbu předáváme včas a dle zadání.",
            cardImage: montaz6
        },
    ];

    // Seřadit projekty podle ID (od největšího k nejmenšímu)
    const sortedProjects = [...projectPropsList].sort((a, b) => b.id - a.id);
    
    // Získat nejnovější projekt a dalších 6 projektů pro accordion
    const latestProject = sortedProjects[0];
    const accordionProjects = sortedProjects.slice(1, 7).map(project => ({
        years: project.cardTitle.split(" - ")[0],
        title: project.cardTitle.split(" - ")[1],
        text: "Další z našich úspěšně dokončených projektů.",
        pictures: project.cardImages,
    }));

    return (
        <Flex w="100%" direction="column" alignItems="center">
            <HeadingImg img={headerPicture} titleText="MONTÁŽ HALY" />
            <Flex w="80%" direction="column">
                <KeyFeatures headingText={<Text>NA MONTÁŽ HALY<br></br>JSME TI PRAVÍ...</Text>} features={features} />
                <ProjectCard
                    cardTitle={latestProject.cardTitle}
                    headingText="PŘESVĚDČTE SE SAMI:"
                    zadavatel={latestProject.cardTitle.split(" - ")[1]}
                    dobaZpracovani="6 měsíců"
                    cardImages={latestProject.cardImages[0]}
                    handleImageClick={handleImageClick}
                    selectedImage={selectedImage}
                    isOpen={isOpen}
                    onClose={onClose}
                    accordionData={accordionProjects}
                />
                <ProjectTimeLine steps={projectSteps} />
            </Flex>
        </Flex>
    );
};

export default HallAssembly;
