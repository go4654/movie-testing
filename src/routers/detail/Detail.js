import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { movieApi } from "../../api";
import { Container } from "../../components/Container";
import { Loading } from "../../components/Loading";
import { moStyle, titleStyle } from "../../style/GlobalStyle";

const Wrap = styled.div`
  display: flex;
  margin-top: 100px;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    margin-top: 70px;
  }
`;

const CoverBg = styled.div`
  width: 50%;
  height: 80vh;
  background-size: cover;
  background-position: top;
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 70vh;
  }
`;

const ConWrap = styled.div`
  width: 50%;
  margin: 30px 0 0 50px;
  @media screen and (max-width: 500px) {
    width: 100%;
    margin: 30px 0;
  }
`;

const Title = styled.h3`
  font-size: ${titleStyle.mainFontSize};
  font-weight: ${titleStyle.fontWeight};
  line-height: 1.3em;
  margin-bottom: 50px;
  @media screen and (max-width: 500px) {
    font-size: ${moStyle.mainFontSize};
    margin-bottom: 30px;
  }
`;

const Info = styled.li`
  margin-top: 10px;
  font-size: 18px;
  font-weight: 500;
`;

const Desc = styled.p`
  margin-top: 30px;
  line-height: 2rem;
  opacity: 0.8;
`;

const Button = styled.button`
  padding: 15px 30px;
  border: 1px solid #fff;
  background-color: transparent;
  color: white;
  font-weight: ${titleStyle.fontWeight};
  margin-top: 50px;
  cursor: pointer;
`;

const VideoWrap = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  padding-bottom: 100px;
`;

const Video = styled.iframe`
  width: 100%;
  height: 70vh;
  margin-top: 100px;
`;

export const Detail = () => {
  // const location = useLocation();
  const { id } = useParams();
  const [detailData, setDetailData] = useState();
  const [video, setVideo] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const movieDetail = async () => {
      try {
        const { data: movieData } = await movieApi.detail(id);
        setDetailData(movieData);

        const {
          data: { results: videoData },
        } = await movieApi.video(id);
        setVideo(videoData[0].key);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    movieDetail();
  }, [id]);

  const onClickHandler = () => {
    const videoWrapTop = document.querySelector(".video_wrap").offsetTop;

    window.scrollTo({
      top: videoWrapTop,
      left: 0,
      behavior: "smooth",
    });
  };

  // console.log(detailData);
  // console.log(video);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          {detailData ? (
            <Container>
              <Wrap>
                <CoverBg
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original/${detailData.poster_path})`,
                  }}
                />
                <ConWrap>
                  <Title>{detailData.title}</Title>
                  <Info>{detailData.release_date}</Info>
                  <Info>
                    {detailData.genres.map((genre) => (
                      <span key={genre.id}>{genre.name}, </span>
                    ))}
                  </Info>
                  <Info>{detailData.runtime} 분</Info>
                  <Desc>{detailData.overview}</Desc>
                  <Button onClick={onClickHandler}>예고편 보기 +</Button>
                </ConWrap>
              </Wrap>
              <VideoWrap className="video_wrap">
                <Video
                  src={`https://www.youtube.com/embed/${video}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              </VideoWrap>
            </Container>
          ) : (
            <div>no</div>
          )}
        </div>
      )}
    </div>
  );
};
