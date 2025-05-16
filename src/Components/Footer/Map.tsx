import { Box } from "@chakra-ui/react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
    width: "100%",
    height: "250px"
};

const center = {
    lat: 49.978437836155024,
    lng: 16.421665019142832
};

const Footer = () => {
    return (
        <Box overflow="hidden" position="relative">
            <LoadScript googleMapsApiKey="AIzaSyA_Tjo-Qch1iV60H6-WePnsBTF8UbxNYa8">
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={center}
                    zoom={15}
                    options={{
                        disableDefaultUI: true,
                        styles: [
                            {
                                featureType: "all",
                                elementType: "all",
                                stylers: [
                                    { saturation: -100 },
                                    { lightness: 50 }
                                ]
                            }
                        ]
                    }}
                >
                    <Marker position={center} />
                </GoogleMap>
            </LoadScript>
        </Box>
    );
};

export default Footer;
