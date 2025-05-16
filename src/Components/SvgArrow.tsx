import { Box } from "@chakra-ui/react";

function SvgArrow() {
  return (
    <Box position="absolute" top={0} left="50%" transform="translateX(-50%)" zIndex={-1}>
      <svg width="2" height="100vh" viewBox="0 0 2 1000" xmlns="http://www.w3.org/2000/svg">
        <line x1="1" y1="0" x2="1" y2="1000" stroke="black" strokeWidth="2" />
        <polygon points="-5,1000 5,1000 0,1020" fill="black" />
      </svg>
    </Box>
  );
}

export default SvgArrow;