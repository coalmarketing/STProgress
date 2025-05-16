import { Flex, Heading, Image, Text } from "@chakra-ui/react"

interface IFeature {
    icon: string;
    text: string;
}

interface IProps {
    features: IFeature[];
    headingText: React.ReactNode;
}

const KeyFeatures = ({ features, headingText }: IProps) => {

    return (
        <Flex direction="column" gap="50px" mt="50px">
            <Heading fontSize={{ base: "35px", lg: "58px"}} whiteSpace="pre-line">
                {headingText}
           </Heading>
            <Flex w={{ base: "100%", lg: "unset" }} justify="space-between" direction={{ base: "column", lg: "row" }} gap="20px">
                {features.map(feature => (
                    <Flex w="100%" key={feature.text} justifyContent={{ base: "center", lg: "unset" }} textAlign={{ base: "center", lg: "unset"}}>
                        <Flex direction={{ base: "column", lg: "row" }} gap={2} alignItems="center" ml={{ base: "unset", lg: "-25px"}}>
                            <Image src={feature.icon} alt={feature.text} width={{base: "110px", lg: "130px", xl: "160px" }}/>
                            <Flex w="70%">
                                <Text fontSize={{base: "22px", xl: "16px" }} fontWeight="semi-bold">{feature.text}</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                ))}
            </Flex>
        </Flex> 
    )
}

export default KeyFeatures;
