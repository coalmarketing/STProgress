import { Flex, Heading, Box } from "@chakra-ui/react";

interface IProps {
    img: string;
    titleText: string;
    videoSrc?: {
        webm: string;
        mp4: string;
    };
    gifSrc?: string;
}

const HeadingImg = ({ img, titleText, videoSrc, gifSrc }: IProps) => {
    return (
        <Flex
            w="100%"
            minHeight={{ base: "200px", md: "300px", xl: "400px" }}
            justify="center"
            align="center"
            backgroundImage={!videoSrc && !gifSrc ? `url(${img})` : "none"}
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            backgroundPosition={{ base: "center 0", "2xl": "center -400px" }}
            position="relative"
            py="12"
        >
            {gifSrc ? (
                <img
                    src={gifSrc}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        zIndex: 0
                    }}
                    alt="Background"
                />
            ) : videoSrc ? (
                <video
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        zIndex: 0
                    }}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    poster={img}
                >
                    <source src={videoSrc.webm} type="video/webm" />
                    <source src={videoSrc.mp4} type="video/mp4" />
                    Váš prohlížeč nepodporuje přehrávání videa.
                </video>
            ) : null}
            <Box
                position="absolute"
                top="0"
                left="0"
                w="100%"
                h="100%"
                bg="#111511"
                opacity="0.2"
                zIndex="1"
            />
            
            <Flex w="80%" zIndex="2" py="20px">
                <Heading fontSize={{sm: "40px", md: "60px", lg: "70px", xl: "80px" }} color="white" wordBreak="break-word" whiteSpace="pre-wrap" overflowWrap="break-word">
                    {titleText}
                </Heading>
            </Flex>
        </Flex>
    );
}

export default HeadingImg;
