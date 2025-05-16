import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useEffect } from 'react';

const Gdpr = () => {

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }, 250);
    }, [])

    return (
        <Flex w="80%" direction="column" my="50px" mx="auto" p="4">
            <Heading as="h1" size="2xl" mb="4">ZÁSADY OCHRANY OSOBNÍCH ÚDAJŮ (GDPR)</Heading>

            <Box mb="8">
                <Heading as="h2" size="lg" mb="2">Kontaktní údaje správce</Heading>
                <Text>Název organizace: STAVEBNÍ PROGRESS a.s.</Text>
                <Text>Adresa sídla: Olšanská 2643/1a, 130 00 Praha 3 – Žižkov</Text>
                <Text>IČO: 28616537, DIČ: CZ28616537</Text>
                <Text>E-mail: <a href="mailto:novak@stprogress.cz">novak@stprogress.cz</a></Text>
                <Text>Telefon: <a href="tel:+420602175426">+420 602 175 426</a></Text>
            </Box>

            <Box mb="8">
                <Text>
                    Zpracování osobních údajů probíhá v souladu s Nařízením Evropského parlamentu a Rady (EU) 2016/679
                    ze dne 27. 4. 2016 o ochraně fyzických osob v souvislosti se zpracováním osobních údajů a o
                    volném pohybu těchto údajů a o zrušení směrnice 95/46/ES (dále jen „Nařízení“), zákona o zpracování
                    osobních údajů a zákona č. 480/2004 Sb., o některých službách informační společnosti, ve znění
                    pozdějších předpisů.
                </Text>
            </Box>

            <Box mb="8">
                <Heading as="h2" size="lg" mb="2">1. Pojmy</Heading>
                <Text><strong>Subjekt údajů:</strong> Fyzická osoba (spotřebitel i osoba samostatně výdělečně činná), k níž se osobní údaje vztahují.</Text>
                <Text><strong>Osobní údaj:</strong> Veškeré informace o identifikovaném nebo identifikovatelném zákazníkovi.</Text>
                <Text><strong>Správce:</strong> Subjekt, který určuje účel a prostředky zpracování osobních údajů. Správcem osobních údajů je STAVEBNÍ PROGRESS a.s.</Text>
                <Text><strong>Zpracovatel:</strong> Subjekt, který na základě zákona nebo z pověření správce zpracovává osobní údaje pro správce.</Text>
                <Text><strong>Cookies:</strong> Krátké textové soubory, které si ukládá Váš webový nebo mobilní prohlížeč.</Text>
            </Box>

            <Box mb="8">
                <Heading as="h2" size="lg" mb="2">2. Jaké osobní údaje jsou zpracovávány?</Heading>
                <Text>
                    Zpracováváme následující osobní údaje:
                    <ul>
                        <li>Identifikační a adresní údaje</li>
                        <li>Elektronické kontaktní údaje</li>
                        <li>Další osobní údaje spojené se smluvním vztahem</li>
                    </ul>
                </Text>
            </Box>

            <Box mb="8">
                <Heading as="h2" size="lg" mb="2">3. Jaký je původ osobních údajů</Heading>
                <Text>Osobní údaje jsou získávány přímo od zákazníků (např. při objednávce nebo registraci) a automaticky během prohlížení webových stránek.</Text>
            </Box>

            <Box mb="8">
                <Heading as="h2" size="lg" mb="2">4. Proč jsou osobní údaje zpracovávány?</Heading>
                <Text>Vaše osobní údaje mohou být zpracovávány pro účely jako komunikace se zákazníky, zasílání obchodních sdělení a analýza návštěvnosti webu.</Text>
            </Box>

            <Box mb="8">
                <Heading as="h2" size="lg" mb="2">5. Jak dlouho jsou osobní údaje zpracovávány?</Heading>
                <Text>Osobní údaje jsou zpracovávány po dobu nezbytnou k plnění právních povinností, smluvních vztahů a dalších účelů zpracování.</Text>
            </Box>

            <Box mb="8">
                <Heading as="h2" size="lg" mb="2">6. Komu jsou osobní údaje zpřístupněny?</Heading>
                <Text>Osobní údaje mohou být zpřístupněny našim partnerům, jako jsou poskytovatelé analytických služeb nebo právní služby.</Text>
            </Box>

            <Box mb="8">
                <Heading as="h2" size="lg" mb="2">7. Jakým způsobem jsou osobní údaje zpracovávány?</Heading>
                <Text>Osobní údaje jsou zpracovávány jak manuálně, tak automatizovaně v souladu s právními předpisy a v rámci našich interních procesů.</Text>
            </Box>

            <Box mb="8">
                <Heading as="h2" size="lg" mb="2">8. Jaká jsou práva subjektů údajů?</Heading>
                <Text>Máte právo na přístup k osobním údajům, jejich opravu, výmaz a další práva v souladu s GDPR.</Text>
            </Box>

            <Box mb="8">
                <Heading as="h2" size="lg" mb="2">9. Jak jsou zpracovávány soubory cookie?</Heading>
                <Text>Cookies jsou používány k zajištění funkčnosti webových stránek a analýze návštěvnosti. Více informací naleznete v naší politice cookies.</Text>
            </Box>

            <Box mb="8">
                <Heading as="h2" size="lg" mb="2">10. Závěr</Heading>
                <Text>Právní předpisy se mohou měnit. Jakékoliv změny budou publikovány na těchto stránkách.</Text>
            </Box>
        </Flex>
    );
};

export default Gdpr;
