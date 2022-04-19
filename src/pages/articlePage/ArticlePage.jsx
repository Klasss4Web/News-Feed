import { Avatar, Box, Button, Divider, Flex, Heading, Image, Text, Textarea } from "@chakra-ui/react";
import dayjs from "dayjs";
import { observer } from "mobx-react-lite";
import React, { useState, useEffect } from "react";
import ArticleList from "../../components/ArticleList";
import FullPageLoader from "../../components/full-page-loader";
import { NewsFeedStore } from "../../store/store";
import { getComments, postComments } from "../articleListPage/service";

const ArticlePage = observer(({ match }) => {

  const newsFeed = new NewsFeedStore();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    newsFeed.loadData().then((data) => setArticles(data?.articles));
    // eslint-disable-next-line
  }, []);

  const name = match.params.name;
  const articleContents = articles.find(
    (article) => article?.source?.name?.toLowerCase() === name.toLowerCase()
  );

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState("");
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    const payload = {
      cartName: name,
      item: { name: name, title: comment, user: "Anonymous" },
    };
    postComments(payload).then(() => setRefresh(true));
    getComments(name, setComments);
    setLoading(false);
    setComment("");
  };

  useEffect(() => {
    getComments(name, setComments, setLoading);
  }, [name, refresh]);

  const otherArticles = articles.filter((article) => article.name !== name);

  if (!articleContents)
    return (
      <Heading textAlign={"center"} fontWeight="semibold">
        No article with the name "{name}" in our archive
      </Heading>
    );

  return loading ? (
    <FullPageLoader />
  ) : (
    <Box px={["20px", "30px", "50px", "160px"]} mt="100px">
      <Text
        fontSize={["20px", "20px", "26px"]}
        mt="10px"
        fontWeight={"semibold"}
      >
        {articleContents?.title}
      </Text>
      <Text fontSize="14px" mt="10px">
        by: {articleContents?.author}
      </Text>
      <Text fontSize="14px" mb="10px">
        {dayjs(articleContents?.publishedAt).format("ddd mm YYYY")}
        {", "}
        {dayjs(articleContents?.publishedAt).format("hh:mm:a")}
      </Text>
      <Box width={"100%"}>
        <Image
          boxSize={"100%"}
          height={["300px", "300px", "350px"]}
          src={articleContents?.urlToImage}
        />
      </Box>
      <Text mt="5px">{articleContents?.content}</Text>

      <Box my="20px">
        <Text>Comment: </Text>
        <Textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          mb="10px"
        />
        <Button
          bg="lightblue"
          color="#fff"
          width="200px"
          onClick={() => handleSubmit()}
          isDisabled={comment === ""}
          isLoading={loading}
        >
          Send
        </Button>
      </Box>
      {comments?.data?.map((comments, i) => {
        return (
          <Box key={i}>
            <Flex alignItems={"center"}>
              <Avatar
                size="sm"
                src={articleContents?.name}
                name={comments?.user}
                alt=""
              />
              <Text ml="8px" fontSize={"14px"}>
                {comments?.user}
              </Text>
            </Flex>
            <Text ml="40px" fontSize={"15px"} mb="5px">
              {comments?.title}
            </Text>
            <Divider mb="5px" />
          </Box>
        );
      })}
      <Text mt="60px" fontSize="26px">
        Related Articles
      </Text>
      <ArticleList articles={otherArticles} />
    </Box>
  );
});

export default ArticlePage;
