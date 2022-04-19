import { Avatar, Box, Divider, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const MainArticle = ({ articles }) => (
  <Box width="100%">
    {articles.map((article, key) => (
      <Box   key={key}>
        <Link
          className="article-list-linkstyle"
          key={key}
          to={`/article/${article?.source?.name.toLowerCase()}`}
        >
          <Box width="100%">
            <Image boxSize={"100%"} src={article?.urlToImage} />
          </Box>
          <Text lineHeight={1.2} fontWeight={"bold"} my="10px">{article?.title}</Text>
          <Text fontSize={"16px"} my="10px">
            {article?.description?.substr(0, 150)}...<span>Read More</span>
          </Text>
        </Link>
        <Flex alignItems={"center"}>
          <Avatar src={""} name={article?.author} alt={`Picture of ${article?.author}`} />
          <Text size="sm" ml="10px" color="cyan.500" fontSize="14px">
            Author: {article?.author?.split(",")[0] || "Anonymous"}
          </Text>
        </Flex>
        <Divider my="10px" />
      </Box>
    ))}
  </Box>
);

export default MainArticle;
