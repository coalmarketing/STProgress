import MainMenu from "./MainMenu/MainMenu";
import Footer from "./Footer/Footer";
import { ReactNode } from "react";

import {
    Container,
    ContainerProps,
    Flex,
} from "@chakra-ui/react";

interface IProps {
    containerStyles?: ContainerProps;
    children: ReactNode | ReactNode[];
    stretch?: boolean;
}

const AppWrapper = ({ children, containerStyles = {}, stretch = false }: IProps) => {
    return (
        <Flex minH="100vh" direction="column" overflow="auto">
            <MainMenu />
            <Container
                maxW={!stretch ? "1190px" : "100%"}
                w="100%"
                minH="calc(100vh - 90px)"
                mt="90px"
                padding={0}
                marginBottom="-50px"
                bg="white"
                borderRadius="5"
                {...containerStyles}>
                {children}
            </Container>
            <Footer />
        </Flex>
    );
};

export default AppWrapper;