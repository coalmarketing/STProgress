import { Flex, Heading, Box, useMediaQuery } from "@chakra-ui/react";
import { useState, useEffect } from "react";

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
    const [isVideoVisible, setIsVideoVisible] = useState(false);
    const [isMobile] = useMediaQuery("(max-width: 768px)");

    useEffect(() => {
        if (videoSrc && !isMobile) {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setIsVideoVisible(true);
                            observer.disconnect();
                        }
                    });
                },
                { threshold: 0.1 }
            );

            const element = document.getElementById('video-container');
            if (element) {
                observer.observe(element);
            }

            return () => observer.disconnect();
        }
    }, [videoSrc, isMobile]);

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
            id="video-container"
        >
            {gifSrc ? (
                <img
                    src={gifSrc}
                    loading="lazy"
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
            ) : videoSrc && isVideoVisible && !isMobile ? (
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
                    preload="none"
                    poster={img}
                    disablePictureInPicture
                    disableRemotePlayback
                >
                    <source src={videoSrc.webm} type="video/webm" />
                    <source src={videoSrc.mp4} type="video/mp4" />
                    Váš prohlížeč nepodporuje přehrávání videa.
                </video>
            ) : videoSrc && isMobile ? (
                <img
                    src={img}
                    loading="lazy"
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
