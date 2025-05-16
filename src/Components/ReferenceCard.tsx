import { Flex, Text, Image } from "@chakra-ui/react";
import { useRef } from "react";

interface ProjectCardProps {
    cardTitle: string;
    zadavatel?: string;
    dobaZpracovani?: string;
    typ?: string;
    realizace?: string;
    cardImages: string[];
    background?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    cardTitle,
    zadavatel,
    dobaZpracovani,
    typ,
    realizace,
    cardImages,
    background
}) => {
    const leftColumnRef = useRef<HTMLDivElement>(null);
    // const [imageHeight, setImageHeight] = useState<number>(0);

    // useEffect(() => {
    //     if (leftColumnRef.current) {
    //         setImageHeight(leftColumnRef.current.offsetHeight);
    //     }
    // }, [leftColumnHeight]);

    return (
        <Flex direction="column" gap="0px">
            <Flex w="100%" justify="center" bg={background} py="50px">
                <Flex justifyContent="center" w="80%" direction="column" gap="20px">
                    {/* Informační část */}
                    <Flex
                        direction="column"
                        w="100%"
                        gap="20px"
                        alignItems="start"
                        ref={leftColumnRef}
                    >
                        <Text fontSize="30px" lineHeight="1.3" fontWeight="bold">
                            {cardTitle}
                        </Text>
                        {/* *
                        <Text fontSize="17px" fontWeight="medium">
                            {textChildren}
                        </Text>
                            */}
                        <Flex direction="column" gap={3}>
                            {zadavatel && (
                                <Flex fontSize="14px" gap={2}>
                                    <Text fontWeight="bold">Zadavatel:</Text> <Text>{zadavatel}</Text>
                                </Flex>
                            )}
                            {dobaZpracovani && (
                                <Flex fontSize="14px" gap={2}>
                                    <Text fontWeight="bold">Doba zpracování:</Text> <Text>{dobaZpracovani}</Text>
                                </Flex>
                            )}
                            {typ && (
                                <Flex fontSize="14px" gap={2}>
                                    <Text fontWeight="bold">Typ:</Text> <Text>{typ}</Text>
                                </Flex>
                            )}
                            {realizace && (
                                <Flex fontSize="14px" gap={2}>
                                    <Text fontWeight="bold">Realizace:</Text> <Text>{realizace}</Text>
                                </Flex>
                            )}
                        </Flex>
                    </Flex>

                    {/* Obrázková část */}
                    <Flex gap="20px" direction={{ base: "column", md: "row" }}>
                        {cardImages.map((image, index) => (
                            <Flex
                                key={index}
                                flex="1"
                                width="100%"
                                mx={cardImages.length === 1 ? "auto" : "0"}
                            >
                                <Image
                                    src={image}
                                    objectFit="cover"
                                    width="100%"
                                    height={{ base: "250px", md: "350px" }}
                                />
                            </Flex>
                        ))}
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default ProjectCard;
