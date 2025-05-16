import { Flex, Heading } from "@chakra-ui/react";
import HeadingImg from "./HeadingImg";
import ReferenceCard from "./ReferenceCard";
import headerPicture from "../images/photos/webp/mobelix.webp";
import mikulov1 from "../images/photos/webp/projects/mikulov-1.webp";
import mikulov2 from "../images/photos/webp/projects/mikulov-2.webp";
import toyota1 from "../images/photos/webp/projects/toyota.webp";
import nehvizdy1 from "../images/photos/webp/projects/nehvizdy-1.webp";
import nehvizdy2 from "../images/photos/webp/projects/nehvizdy-2.webp";
import alca1 from "../images/photos/webp/projects/alca-1.webp";
import alca2 from "../images/photos/webp/projects/alca-2.webp";
import uvaly1 from "../images/photos/webp/projects/uvaly-1.webp";
import uvaly2 from "../images/photos/webp/projects/uvaly-2.webp";
import valeo1 from "../images/photos/webp/projects/valeo-1.webp";
import valeo2 from "../images/photos/webp/projects/valeo-2.webp";

import Partners from "./Partners";
import { useEffect } from "react";

export const projectPropsList = [
    {
        id: 1,
        cardTitle: "2022 - VALEO (Žebrák)",
        cardImages: [valeo1, valeo2],
        leftColumnHeight: 400
    },
    {
        id: 2,
        cardTitle: "2022 - ALCA (Břeclav)",
        cardImages: [alca1, alca2],
        leftColumnHeight: 400
    },
    {
        id: 3,
        cardTitle: "2023 - RP Úvaly",
        cardImages: [uvaly1, uvaly2],
        leftColumnHeight: 400
    },
    {
        id: 4,
        cardTitle: "2023 - TZMO (Nehvizdy)",
        cardImages: [nehvizdy1, nehvizdy2],
        leftColumnHeight: 400
    },
    {
        id: 5,
        cardTitle: "2024 - Toyota Ovčáry",
        cardImages: [toyota1],
        leftColumnHeight: 400
    },
    {
        id: 6,
        cardTitle: "2024 - Mikulov",
        typ: "Industriální zóna",
        cardImages: [mikulov1, mikulov2],
        leftColumnHeight: 400
    },
];

const Projects = () => {
    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }, 250);
    }, [])

    // Seřadit projekty podle ID (od největšího k nejmenšímu)
    const sortedProjects = projectPropsList.sort((b, a) => a.id - b.id);

    // Oddělit nejnovější projekt a starší projekty
    const latestProject = sortedProjects[0];
    const olderProjects = sortedProjects.slice(1);

    return (
        <Flex w="100%" direction="column" mb="50px">
            <HeadingImg img={headerPicture} titleText="REFERENCE" />
            <Flex justifyContent="center">
            <Partners />
            </Flex>
            <Flex w="100%" direction="column" mt="50px" mx="auto">
                
                <Flex w="80%" mx="auto">
                <Heading fontSize={{ base: "35px", lg: "58px"}} color="STProgress.red">NEJNOVĚJŠÍ PROJEKT:</Heading>
                </Flex>
                <ReferenceCard key={latestProject.id} {...latestProject} />
                <Flex w="80%" mx="auto">
                <Heading fontSize={{ base: "35px", lg: "58px"}} mt="50px" mb="20px">STARŠÍ PROJEKTY:</Heading>
                </Flex>
                {olderProjects.map((projectProps, index) => (
                    <ReferenceCard
                        key={projectProps.id}
                        {...projectProps}
                        background={index % 4 < 2 ? "#D9D9D9" : "transparent"} // Šedé pozadí pro první dva projekty
                    />
                ))}
            </Flex>
        </Flex>
    );
};

export default Projects;
