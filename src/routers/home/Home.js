import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { movieApi } from "../../api";
import { Container } from "../../components/Container";
// import { DarkMode } from "../../components/DarkMode";
import { Loading } from "../../components/Loading";

import { MainBanner } from "./MainBanner";
import { MovieSection } from "./MovieSection";

const Wrap = styled.div`
  height: 400vh;
`;

const Section = styled.section`
  margin-top: 80px;
`;

export const Home = () => {
  const [nowPlay, setNowPlay] = useState();
  const [pop, setPop] = useState();
  const [loading, setLoading] = useState(true);
  const movieNum = 0;

  useEffect(() => {
    const movieData = async () => {
      try {
        const {
          data: { results: nowPlaying },
        } = await movieApi.nowPlaying();
        setNowPlay(nowPlaying);

        const {
          data: { results: popular },
        } = await movieApi.popular();
        setPop(popular);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    movieData();
  }, []);

  // console.log(pop);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Wrap>
          {nowPlay && (
            <>
              <MainBanner
                bg={nowPlay[`${movieNum}`].backdrop_path}
                title={nowPlay[`${movieNum}`].title}
                desc={nowPlay[`${movieNum}`].overview}
              />

              <Section>
                <Container>
                  <MovieSection movieData={nowPlay} title="현재 상영 영화" />
                  <MovieSection movieData={pop} title="인기 영화" />
                </Container>
              </Section>

              {/* <DarkMode /> */}
            </>
          )}
        </Wrap>
      )}
    </>
  );
};
