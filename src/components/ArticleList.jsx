import { Avatar, Box, Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const ArticlesList = ({ articles }) => {
return (
  <Box width="100%">
    {articles?.map((article, key) => (
      <Box key={key}>
        <Link
          className="article-list-linkstyle"
          to={`/article/${article?.source?.name}`}
        >
          <Text fontWeight={"bold"} lineHeight={1.2}>
            {article?.title}
          </Text>
          <Text fontSize={"16px"}>
            {article.description?.substr(0, 175)}...<span>Read More</span>
          </Text>
        </Link>
        <Flex alignItems={"center"}>
          <Avatar
            src={""}
            name={article?.author}
            alt={`Picture of ${article?.author}`}
          />
          <Text size="sm" ml="10px" color="cyan.500" fontSize="14px">
            Author: {article?.author?.split(",")[0] || "Anonymous"}
          </Text>
        </Flex>
        <Divider my="10px" />
      </Box>
    ))}
  </Box>
);
    }

export default ArticlesList;
