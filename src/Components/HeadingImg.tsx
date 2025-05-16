import { Flex, Heading, Box } from "@chakra-ui/react";

interface IProps {
    img: string;
    titleText: string;
}

const HeadingImg = ({ img, titleText }: IProps) => {
    return (
        <Flex
            w="100%"
            minHeight="200px"
            justify="center"
            align="center"
            backgroundImage={`url(${img})`}
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            backgroundPosition={{ base: "center 0", "2xl": "center -400px" }}
            position="relative"
            py="12"
        >
            <Box
                position="absolute"
                top="0"
                left="0"
                w="100%"
                h="100%"
                bg="#111511"
                opacity="0.5"
                zIndex="1"
            />
            <Flex w="80%" zIndex="2" py="20px">
                <Flex w={{ base: "100%", lg: "75%" }}>
                    <Heading fontSize={{sm: "40px", md: "60px", lg: "70px", xl: "80px" }} color="white" wordBreak="break-word" whiteSpace="pre-wrap" overflowWrap="break-word">
                        {titleText}
                    </Heading>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default HeadingImg;
