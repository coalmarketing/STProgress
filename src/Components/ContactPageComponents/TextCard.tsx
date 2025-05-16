import { Flex, Text, Image } from "@chakra-ui/react";

// Definice typu pro props
interface TextCardProps {
    text1: string;
    text2: string;
    imageSrc: string;
    leftAlign: boolean;
}

const TextCard: React.FC<TextCardProps> = ({ text1, text2, imageSrc, leftAlign }) => {

    return (
        <Flex direction="column" gap="50px" w="100%" my={10}>
            <Flex w="100%" justify="center">
                <Flex
                    w="100%"
                    justify="space-between"
                    gap={{ base: "20px", lg: "120px" }}
                    direction={{ base: leftAlign ? "column" : "column-reverse" , lg: "row" }}
                >
                    <Flex
                        direction="column"
                        w={{ base: "100%", lg: "50%" }}
                        order={leftAlign ? 1 : 2}
                        textAlign={{ base: "left", lg: leftAlign ? "right" : "left" }}
                    >
                        <Flex direction="column" gap="20px">
                            <Text>{text1}</Text>
                            <Text>{text2}</Text>
                        </Flex>
                    </Flex>

                    <Flex
                        direction="column"
                        w={{ base: "100%", lg: "50%" }}
                        justify="flex-start"
                        order={leftAlign ? 2 : 1}
                    >
                        <Image
                            src={imageSrc}
                            alt="Obrázek"
                            height="400px"
                            objectFit="cover"
                            w="100%"
                        />
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default TextCard;
