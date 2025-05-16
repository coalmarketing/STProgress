import {
  Box,
  Flex,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
  useDisclosure,
  useMediaQuery,
  Collapse,
} from "@chakra-ui/react";
import spLogoDarkLong from "../../images/logos/SP_logo_color-dark_long.svg";
import { useState } from "react";
import CustomBtn from "../CustomBtn";
import { EButtonStyle } from "../../models/IModels.model";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { updatePageMetadata } from '../../utils/seoUtils';

interface ITab {
  name: string;
  target: string;
  isNavigation: boolean;
  mobileHidden?: boolean;
  isSubItem: boolean;
}

const DEFAULT_TABS: ITab[] = [
  {
    name: "Montáž haly",
    isNavigation: true,
    target: "montaz-haly",
    isSubItem: false,
  },
  {
    name: "zam-prace-menu",
    isNavigation: false,
    target: "",
    isSubItem: false,
    mobileHidden: true,
  },
  {
    name: "Zámečnické výrobky",
    isNavigation: true,
    target: "zamecnicke-prace",
    isSubItem: true,
  },
  {
    name: "Pálení plasmou",
    isNavigation: true,
    target: "zamecnicke-prace#paleni-plasmou",
    isSubItem: true,
  },
  {
    name: "Stavební buňky",
    isNavigation: true,
    target: "zamecnicke-prace#stavebni-bunky",
    isSubItem: true,
  },
  {
    name: "Reference",
    isNavigation: true,
    target: "reference",
    isSubItem: false,
  },
];

const MainMenu = () => {
  const [tabs] = useState<ITab[]>(DEFAULT_TABS);
  const navigate = useNavigate();
  const [shrinkMenu] = useMediaQuery("(max-width: 1200px)");
  const { isOpen, onToggle, onClose } = useDisclosure();

  const handleNavigation = (tab: ITab | undefined) => {
    if (!tab) return;
    if (shrinkMenu) {
      onToggle();
    }
    const pagePath = tab.target.split('#')[0] || 'home';
    updatePageMetadata(pagePath);
    navigate("/" + tab.target);
  };

  return (
    <>
      <Flex
        justify="center"
        position="fixed"
        zIndex={100}
        w="100vw"
        bg="white"
        top={0}
      >
        <Flex
          align="center"
          w="80%"
          maxW="1920px"
          h="90px"
          direction="row"
          justify="space-between"
        >
          <Flex direction="row" align="center" w="400px">
            <Link to="/">
              <Image
                loading="lazy"
                cursor="pointer"
                src={spLogoDarkLong}
                w="400px"
                ml="-20px"
              />
            </Link>
          </Flex>
          {!shrinkMenu ? (
            <>
              <Flex direction="row" mt={1} gap={12} align="center">
                {tabs.map((tab, _index) => {
                  if (tab.isSubItem) return null; // Skip subitems here

                  if (tab.name !== "zam-prace-menu") {
                    // Render regular menu items
                    return (
                      <Text
                        key={_index}
                        fontFamily="IBMPlexSans"
                        cursor="pointer"
                        _hover={{ color: "STProgress.red" }}
                        fontSize={{ base: "16px", lg: "16px", xl: "18px" }}
                        fontWeight={800}
                        onClick={() => handleNavigation(tab)}
                      >
                        {tab.name}
                      </Text>
                    );
                  }

                  // Render the "Zámečnické práce" dropdown menu
                  return (
                    <Menu key={_index}>
                      <MenuButton
                        as={Text}
                        fontSize={{ base: "16px", lg: "16px", xl: "18px" }}
                        fontWeight={800}
                        cursor="pointer"
                        fontFamily="IBMPlexSans"
                      >
                        Zámečnické práce
                      </MenuButton>
                      <MenuList>
                        {tabs.map((subTab, _index) => {
                          // Only render subitems under the "Zámečnické práce" dropdown
                          return subTab.isSubItem ? (
                            <MenuItem
                              key={_index}
                              fontFamily="IBMPlexSans"
                              _hover={{ color: "STProgress.red" }}
                              fontSize={{
                                base: "16px",
                                lg: "16px",
                                xl: "18px",
                              }}
                              fontWeight={800}
                              onClick={() => {
                                handleNavigation(subTab); // Navigate to the desired route
                                onClose(); // Explicitly close the menu
                              }}
                            >
                              {subTab.name}
                            </MenuItem>
                          ) : null;
                        })}
                      </MenuList>
                    </Menu>
                  );
                })}

                <CustomBtn
                  text="Kontaktujte nás"
                  to="/kontakt"
                  btnStyle={EButtonStyle.primaryLight}
                />
              </Flex>
            </>
          ) : (
            <>
              <Spacer />
              <Box border="2px solid" borderColor="STProgress.red">
                <IconButton
                  color="STProgress.red"
                  onClick={onToggle}
                  icon={
                    isOpen ? (
                      <CloseIcon w="3" h="3" />
                    ) : (
                      <HamburgerIcon w="6" h="6" />
                    )
                  }
                  variant="ghost"
                  aria-label="Toggle Navigation"
                />
              </Box>
            </>
          )}
        </Flex>
        <Collapse
          in={isOpen && shrinkMenu}
          animateOpacity
          style={{
            width: "100%",
            position: "fixed",
            top: "80px",
            background: "white",
            zIndex: 99,
          }}
        >
          <Flex
            padding="25px"
            w="100%"
            justify="center"
            alignItems="center"
            gap={6}
            direction="column"
            borderBottom="2px solid"
            borderBottomColor="STProgress.red"
            borderTop="2px solid"
            borderTopColor="STProgress.red"
          >
            {tabs.map((tab, _index) => {
              return !tab.mobileHidden ? (
                <Text
                  key={_index}
                  fontFamily="IBMPlexSans"
                  cursor="pointer"
                  _hover={{ color: "STProgress.red" }}
                  fontSize={{ base: "16px", lg: "16px", xl: "18px" }}
                  fontWeight={800}
                  onClick={() => handleNavigation(tab)}
                  textAlign="center"
                >
                  {tab.name}
                </Text>
              ) : null;
            })}
            <Box
              onClick={() => {
                onToggle();
                // Optionally navigate or perform other actions
              }}
              cursor="pointer"
            >
              <CustomBtn
                text="Kontaktujte nás"
                to="/kontakt"
                btnStyle={EButtonStyle.primaryLight}
              />
            </Box>
          </Flex>
        </Collapse>
        {isOpen ? (
          <Box
            position="absolute"
            w="100vw"
            h="100vh"
            onClick={() => onToggle()}
          />
        ) : null}
      </Flex>
    </>
  );
};

export default MainMenu;
