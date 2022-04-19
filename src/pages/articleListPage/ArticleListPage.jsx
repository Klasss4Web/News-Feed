import { Box, Flex, Heading } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import ArticlesList from "../../components/ArticleList";
import FullPageLoader from "../../components/full-page-loader";
import MainArticle from "../../components/MainArticle";
// import { UserContext } from "../../App";
import { NewsFeedStore } from "../../store/store";

const ArticleListPage = observer(() => {

  const newsFeed = new NewsFeedStore();
  const [data, setData] = useState([])
  const[loading, setLoading] = useState(true)

  useEffect(() => {
    newsFeed.loadData().then((data) => {
      setData(data?.articles);
      setLoading(false)})
      .catch(e=>{console.log(e?.response);
        setLoading(false)});
    // eslint-disable-next-line
  }, []);

  return loading ? (
    <FullPageLoader />
  ) : (
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
});

export default ArticleListPage;
