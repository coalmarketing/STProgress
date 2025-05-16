import { Box, Flex, Text } from "@chakra-ui/react";
import Introduction from "./LandingPageComponents/Introduction";
import ServiceCard from "./LandingPageComponents/ServiceCard";
import { EServiceCard, IAccordion } from "../models/IModels.model";
import { ReactNode, useEffect, useState } from "react";
import img01_1 from "../images/photos/webp/foto_01.webp";
import img01_2 from "../images/photos/webp/foto_02.webp";
import img02_1 from "../images/photos/webp/vyrobek_02.webp";
import img02_2 from "../images/photos/webp/foto_02_back.webp";
import img03_1 from "../images/photos/webp/foto_03_front.webp";
import img03_2 from "../images/photos/webp/foto_03_back.webp";
import img04_2 from "../images/photos/webp/foto_04_uprostred.webp";
import img04_3 from "../images/photos/webp/foto_04_vpravo.webp";
import { projectPropsList } from "./Projects";

interface IServiceCardData {
  alignment: EServiceCard;
  cardNumber: string;
  textChildren: ReactNode | ReactNode[];
  accordionData?: IAccordion[];
  cardTitle: string;
  cardImages: string[];
  applyMaxWidth?: boolean;
  serviceCardTarget?: string;
}

function LandingPage() {
    const [servicesData] = useState<IServiceCardData[]>([
        {
            serviceCardTarget: "montaz-haly",
            alignment: EServiceCard.leftAlign,
            cardNumber: "01",
            cardTitle: "MONTÁŽ HALY",
            applyMaxWidth: true,
            cardImages: [img01_1, img01_2],
            textChildren: (
                <>
                    <Box>
                        <Text>Víme, že ve výrobních a průmyslových halách je kladen důraz na maximální využití prostoru. Proto jsou návrhy nosné ocelové konstrukce vždy navrženy podle potřeb investora.</Text>
                    </Box>
                    <Box>
                        <Text>Na opláštění hal používáme sendvičový panel pro tepelnou izolaci a zároveň i pro požární odolnost. Střechu montovaných hal realizujeme ze sendvičových panelů nebo jako skládaný střešní plášť z trapézového plechu a střešní skladby (EPS, minerální vata) zakončený střešní fólií.</Text>
                    </Box>
                </>
            ),
            accordionData: projectPropsList
                .sort((a, b) => b.id - a.id)
                .slice(0, 3)
                .map(project => ({
                    years: project.cardTitle.split(" - ")[0],
                    title: project.cardTitle.split(" - ")[1],
                    text: project.typ || "",
                    pictures: project.cardImages
                }))
        },
        {
            serviceCardTarget: "zamecnicke-prace",
            alignment: EServiceCard.rightAlign,
            cardNumber: "02",
            cardTitle: "ZÁMEČNICKÉ VÝROBKY",
            applyMaxWidth: false,
            cardImages: [img02_2, img02_1],
            textChildren: (
                <>
                    <Box>
                        <Text>Zkušenosti, které postupně získáváme již od roku 1992, zúročujeme i na zakázkovou sériovou výrobu pro menší i větší zákazníky.</Text>
                    </Box>
                    <Box>
                        <Text>Dokážeme vyrobit dveře, brány, vrata a kovové ploty, požární žebříky, ocelová schodiště i zábradlí a rámy různých rozměrů 
                        nebo výměny pro okna</Text>
                    </Box>
                </>
            ),
        },
        {
            serviceCardTarget: "zamecnicke-prace#paleni-plasmou",
            alignment: EServiceCard.leftAlign,
            cardNumber: "03",
            cardTitle: "PÁLENÍ PLASMOU",
            applyMaxWidth: false,
            cardImages: [img03_2, img03_1],
            textChildren: (
                <>
                    <Box>
                        <Text>Mezi další služby STAVEBNÍ PROGRESS a.s. patří dělení materiálu plasmou na CNC stroji. Podle zadané dokumentace vypalujeme tvary do ocelových plechů z naší výroby i do klientem dodaného materiálu.</Text>
                    </Box>
                </>
            ),
        },
        {
            serviceCardTarget: "zamecnicke-prace#stavebni-bunky",
            alignment: EServiceCard.rightAlign,
            cardNumber: "04",
            cardTitle: "STAVEBNÍ BUŇKY",
            applyMaxWidth: false,
            cardImages: [img04_3, img04_2],
            textChildren: (
                <>
                    <Box>
                        <Text>Bez stavební buňky se neobejde žádná dlouhodobější stavba. Tyto přenosné kanceláře se však stále častěji využívají i jako obytné buňky pro dlouhodobé užívání. Vyrábíme je v základním provedení (šířka 2 m, délka 3 m, výška 2,5 m) s ocelovým rámem a zateplením podlahy, stěn i střechy sendvičovými panely PUR, PIR nebo EPS.</Text>
                    </Box>
                    <Box>
                        <Text>Na přání zákazníka dokážeme upravit rozměry, barvy, střechu, okna i dveře. Nabízíme také možnost zavedení elektrických rozvodů, což zajišťuje maximální funkčnost a komfort při používání.</Text>
                    </Box>
                </>
            ),
        }
    ]);

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }, 250);
    }, [])

  return (
      <Flex direction="column" alignItems="center" gap={0}>
        <Introduction />
        {servicesData.map((service) => (
          <ServiceCard
            serviceCardTarget={service.serviceCardTarget || ""}
            cardImages={service.cardImages}
            cardTitle={service.cardTitle}
            key={service.cardNumber}
            alignment={service.alignment}
            cardNumber={service.cardNumber}
            textChildren={service.textChildren}
            accordionData={service.accordionData}
            applyMaxWidth={service.applyMaxWidth}
          />
        ))}
      </Flex>
  );
}

export default LandingPage;
