import { Text, Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import HeadingImg from "./HeadingImg";
import headerPicture from "../images/photos/webp/main_header_static.webp";
import cogIcon from "../images/icons/cog.svg";
import gridIcon from "../images/icons/grid.svg";
import sparkIcon from "../images/icons/spark.svg";
import ProjectTimeLine from "./SubsitesComponents/ProjectTimeLine";
import KeyFeatures from "./KeyFeatures";
import Plasma from "./Plasma";
import BuildBlocks from "./BuildBlocks";

import step1 from "../images/photos/webp/vyrobek_01.webp";
import step2 from "../images/photos/webp/vyrobek_02.webp";
import step3 from "../images/photos/webp/vyrobek_03.webp";
import step4 from "../images/photos/webp/vyrobek_04.webp";
import step5 from "../images/photos/webp/vyrobek_05.webp";
import { useLocation } from "react-router-dom";



const LocksmithWork = () => {
    const location = useLocation();
    const headerOffset = 70; // Adjust this value to match the height of your header
  
    useEffect(() => {
        if (location.hash) {
          const scrollToElement = () => {
            const element = document.getElementById(location.hash.replace("#", ""));
            if (element) {
              const elementPosition = element.getBoundingClientRect().top + window.scrollY;
              const offsetPosition = elementPosition - headerOffset;
      
              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
              });
            }
          };
      
          // Use a short timeout to make sure the element is ready to be scrolled to
          setTimeout(scrollToElement, 500);
        } else {
          // Scroll to top if there's no hash
          setTimeout(() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }, 200);
        }
      }, [location]);

    const features = [
        { icon: cogIcon, text: "Nabízíme sériovou i kusovou." },
        { icon: gridIcon, text: "Dokážeme Vám vytvořit i drobné zámečnické výrobky." },
        { icon: sparkIcon, text: "Zajistíme Vám dokonale přesný plasmou pálený výrobek." },
    ];

    const projectSteps = [
        {
            cardTitle: "POŽÁRNÍ ŽEBŘÍK",
            cardNumber: "01",
            cardImage: step1
        },
        {
            cardTitle: "PARKOVACÍ PŘÍSTŘEŠEK",
            cardNumber: "02",
            cardImage: step2
        },
        {
            cardTitle: "STŘECHA",
            cardNumber: "03",
            cardImage: step3
        },
        {
            cardTitle: "OPLOCENÍ",
            cardNumber: "04",
            cardImage: step4
        },
        {
            cardTitle: "KONSTRUKCE",
            cardNumber: "05",
            cardImage: step5
        },
    ];

    return (
        <Flex w="100%" direction="column" alignItems="center">
            <HeadingImg img={headerPicture} titleText="ZÁMEČNICKÉ PRÁCE" />
            <Flex w="80%" direction="column">
                <KeyFeatures headingText={<Text>UDĚLÁME VÁM ZÁMEČNICKÉ<br></br>VÝROBKY NA MÍRU...</Text>} features={features} />
                <ProjectTimeLine steps={projectSteps} />
            </Flex>
            <Plasma/>
            <BuildBlocks />
        </Flex>
    );
};

export default LocksmithWork;
