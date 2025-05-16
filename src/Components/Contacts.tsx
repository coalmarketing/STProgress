import { Text, Flex, Heading } from "@chakra-ui/react";
import HeadingImg from "./HeadingImg";
import headerPicture from "../images/photos/webp/header.webp";
import CustomBtn from "./CustomBtn";
import { EButtonStyle } from "./../models/IModels.model";
import ContactsImages from "./ContactPageComponents/ContactsImages";
import TextCard from "./ContactPageComponents/TextCard";
import Map from "./Footer/Map";
import Certifikate from "./ContactPageComponents/Certificate";
import KeyFeatures from "./KeyFeatures";
import sealIcon from "../images/icons/seal.svg";
import clockIcon from "../images/icons/clock.svg";
import checkIcon from "../images/icons/check.svg";
import text1 from "../images/photos/webp/foto_hala1.webp";
import text2 from "../images/photos/webp/foto_hala2.webp";
import { useEffect } from "react";


const Contacts = () => {
    const imagePairs = [
        {
            heading: "Ing. LADISLAV NOVÁK",
            position: "Ředitel společnosti, předseda představenstva",
            phone: "+420 602 175 426",
            mail: "novak@stprogress.cz",
            section: 1
        },
        {
            heading: "LENKA STEJSKALOVÁ",
            position: "Asistentka ředitele",
            phone: "+420 733 486 859",
            mail: "stejskalova@stprogress.cz",
            section: 1
        },
        {
            heading: "RADOMÍR SMOLA",
            position: "Technický ředitel, místopředseda představenstva",
            phone: "+420 724 238 344",
            mail: "smola@stprogress.cz",
            section: 1
        },
        {
            heading: "ROMAN KOSTROŇ",
            position: "Projektový manažer",
            phone: "+420 724 161 668",
            mail: "kostron@stprogress.cz",
            section: 1
        },
        {
            heading: "Ing. DENISA SMOLOVÁ PELECHOVÁ",
            position: "Projektová manažerka",
            phone: "+420 702 053 133",
            mail: "pelechova@stprogress.cz",
            section: 1
        },
        {
            heading: "Bc. VÁCLAV CHALOUPKA",
            position: "Projektový manažer",
            phone: "+420 725 970 855",
            mail: "chaloupka@stprogress.cz",
            section: 1
        },
        {
            heading: "JAN VAŠÁTKO",
            position: "Technik, doprava",
            phone: "+420 725 529 279",
            mail: "vasatko@stprogress.cz",
            section: 1
        },
        {
            heading: "Ing. JAN NOVÁK",
            position: "Obchodní ředitel, místopředseda představenstva",
            phone: "+420 604 631 561",
            mail: "jannovak@stprogress.cz",
            section: 2
        },
        {
            heading: "ALEŠ VÁPENKA",
            position: "Obchodní manažer",
            phone: "+420 721 311 685",
            mail: "vapenka@stprogress.cz",
            section: 2
        },
        {
            heading: "LUKÁŠ NOVÁK",
            position: "Ředitel výroby, člen představenstva",
            phone: "+420 737 607 854",
            mail: "lukasnovak@stprogress.cz",
            section: 3
        },
        {
            heading: "Ing. MARCELA ŠALDOVÁ",
            position: "Ekonomka společnosti",
            phone: "+420 602 572 016",
            mail: "saldova@stprogress.cz",
            section: 4
        },
    ];

    const features = [
        { icon: sealIcon, text: "Jsme zajetá a spolehlivá firma, která Vás nezklame." },
        { icon: clockIcon, text: "Dodržování stanovených termínů je pro nás prioritou." },
        { icon: checkIcon, text: "Dbáme na profesionálním zpracování veškerých zakázek." },
    ];

    const data = [
        {
            text1: "Tři nahoře zmíněné body máme pevně zakořeněné ve firemní kultuře a nesou se s firmou STAVEBNÍ PROGRESS a.s. již od začátků v roce 1992. Tehdy jsme jako téměř jediní v Československu začali s dodávkami a montážemi sendvičových panelů. Častokrát bylo nutné architekty, projektanty a investory doslova přesvědčovat o výhodách moderních staveb.",
            text2: "A podařilo se. Díky tomu bylo možné zakoupit výrobní technologické zařízení na výrobu těchto panelů a během roku 1994 vyjel z linky první TECHPANEL. Od té doby jsme se dali nejenom do větších stavebních projektů, ale i do projektu nejdůležitějšího – a to do výchovy techniků, výcviku šéfmontérů a dalších potřebných profesí, které v té době jednoduše nebyly. Již od počátku firmy si jsme totiž vědomi toho, že to pravé bohatství tkví ve spokojených a kvalitních zaměstnancích.",
            imageSrc: text1,
            leftAlign: true
        },
        {
            text1: "Aktuálně realizujeme průměrně 50 staveb ročně a služby rozšiřujeme o kompletní dodávky ocelových nosných konstrukcí a pomocných konstrukcí, včetně projekčního, statického a požárního servisu. Abychom stále dodávali a realizovali včas, máme 5 profesionálních montážních skupin, dostatek techniků, přípravářů a dalších kolegů, kteří zajišťují růst firmy i našich lidí.",
            text2: "A kam až to poroste? My pokrok přímo vyhledáváme a tak u nás vždy najdete nejmodernější způsoby montáže, kotvící, spojovací a vratové systémy, systémy střešního prosvětlení a mnoho dalších kroků, které nás vedou neustále dopředu.",
           imageSrc: text2,
           leftAlign: false
        }
    ];

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }, 250);
    }, [])


    return (
        <Flex w="100%" direction="column">
            <HeadingImg img={headerPicture} titleText="KONTAKTY" />
            <Flex w="80%" direction="column" gap="20px" mt="50px" mx="auto">
                <Heading fontSize={{ base: "35px", lg: "55px" }}>
                    NEVÁHEJTE A SPOJTE SE<br></br>S NÁMI.
                </Heading>
                <Text w={{ base: "100%", lg: "40%"}}>
                    Náš tým Vám je k dispozici ve standartních pracovních hodinách. Volejte pouze s neodkladnými dotazy nebo naléhavými připomínkami. Pro nacenění poptávky a jiné požadavky používejte pro co nejrychlejší odpověď poptávkový formulář.
                </Text>
                <CustomBtn scrollTarget="contact-form" isScroller={true} text="K formuláři" btnStyle={EButtonStyle.primaryLight}
                />
            </Flex>
            <Flex w="80%" mt="50px" mx="auto">
                <ContactsImages images={imagePairs} />
            </Flex>
            <Flex direction="column" gap="50px" w="80%" mt="50px" mx="auto">
                <Flex w="100%" justify="center">
                    <Flex w="100%" justify="space-between" direction={{ base: "column", xl: "row"}} gap={10}>
                        <Flex direction="column" w="100%" gap="20px">
                            <Heading fontSize={{ base: "35px", lg: "58px"}}>SÍDLO FIRMY</Heading>
                            <Flex direction="column">
                                <Flex direction={{ base: "column", xl: "row"}} w={{ base: "100%", xl: "80%"}} gap={{ base: 5, xl: 0}}>
                                    <Flex direction="column" w="100%" gap="10px">
                                        <Text fontSize="20px" fontWeight="bold">
                                            Kanceláře:
                                        </Text>
                                        <Text>
                                            STAVEBNÍ PROGRESS a.s.
                                            <br />
                                            Olšanská 2643/1a
                                            <br />
                                            13000 Praha 3, Žižkov
                                            <br />
                                            IČO: 28616537
                                            <br />
                                            DIČ: CZ28616537
                                        </Text>
                                    </Flex>
                                    <Flex direction="column" w="100%" gap="10px">
                                        <Text fontSize="20px" fontWeight="bold">
                                            Provozovna<br/>(Areál letiště v ÚnO)
                                        </Text>
                                        <Text>
                                            Oldřichovice 163
                                            <br />
                                            56201 Ústí nad Orlicí
                                        </Text>
                                    </Flex>
                                    <Flex direction="column" w="100%" gap="10px">
                                        <Text fontSize="20px" fontWeight="bold">
                                            Chata Diana
                                        </Text>
                                        <Text>
                                            Rejhotice 145
                                            <br />
                                            Loučná nad Desnou 788 11
                                        </Text>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Flex>

                        <Flex direction="column" w={{ base: "100%", xl: "50%"}} maxH="400px" justify="flex-start">
                            <Map />
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <Flex w="80%" mt="50px" mx="auto">
                <KeyFeatures headingText={<Text>NAŠI ZÁKAZNÍCI ODCHÁZEJÍ<br></br>SPOKOJENÍ A S RADOSTÍ SE VRACÍ.</Text>} features={features} />
            </Flex>
            
            <Flex w="80%" mt="50px" mx="auto" direction="column">
                <Heading fontSize={{ base: "35px", lg: "58px"}}>JSME JEDNI Z PRVNÍCH<br/>V ČESKU</Heading>
                {data.map((item, index) => (
                    <TextCard key={index} text1={item.text1} text2={item.text2} imageSrc={item.imageSrc} leftAlign={item.leftAlign} />
                ))}       
            </Flex>

            <Flex w="100%" mt="50px">
                <Certifikate />
            </Flex>
       



        </Flex>
    );
};

export default Contacts;
