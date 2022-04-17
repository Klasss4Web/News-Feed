import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { useContext } from "react";
import ArticlesList from "../../components/ArticleList";
import MainArticle from "../../components/MainArticle";
// import articles from "./article-content";
import { UserContext } from "../../App";

const ArticleListPage = () => {

  const data = useContext(UserContext);

return (
  <Box position={"relative"} top="100px">
    <Heading textAlign={"center"} borderBottom="2px solid #f2f2f2" my="20px">
      Latest Updates on Tesla
    </Heading>
    <Flex
      my="40px"
      direction={["column-reverse", "column-reverse", "row"]}
      justifyContent={["space-between"]}
    >
      <Box width={["100%", "100%", "25%"]}>
        <ArticlesList articles={data?.slice(6, 15)} />
      </Box>

      <Box width={["100%", "100%", "30%"]}>
        <MainArticle articles={data?.slice(0, 5)} />
      </Box>
      <Box width={["100%", "100%", "30%"]}>
        <MainArticle articles={data?.slice(12, 17)} />
      </Box>
    </Flex>
  </Box>
);
};

export default ArticleListPage;
