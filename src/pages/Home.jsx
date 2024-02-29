import Main from "../components/Main";
import Row from "../components/Row";
import request from "../request";

const Home = () => {
  return (
    <div className="text-white">
      <Main />
      <Row rowId={"1"} fetchUrl={request.requestUpcoming} title="Up Coming" />
      <Row rowId={"2"} fetchUrl={request.requestPopular} title="Popular" />
      <Row rowId={"3"} fetchUrl={request.requestTopRated} title="Top Rated" />
      <Row rowId={"4"} fetchUrl={request.requestTrending} title="Trending" />
      <Row rowId={"5"} fetchUrl={request.requestHorror} title="Horror" />
    </div>
  );
};

export default Home;
