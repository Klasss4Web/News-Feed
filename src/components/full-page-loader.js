import { Flex, Spinner } from "@chakra-ui/react";

export default function FullPageLoader({ bg, h }) {
  return (
    <Flex
      bg={bg ? bg : "#E5E5E5"}
      justifyContent="center"
      alignItems="center"
      height={h ? h : "100vh"}
      width="100%"
    >
      <Spinner color="#E54242" w="50px" h="50px" speed="0.65s" />
    </Flex>
  );
}
