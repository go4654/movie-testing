// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { Link } from "react-router-dom";
// import styled from "styled-components";
// import { movieApi } from "../../api";
// import { Container } from "../../components/Container";
// import { Loading } from "../../components/Loading";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { movieApi } from "../../api";
import { Container } from "../../components/Container";
import { Loading } from "../../components/Loading";
import { PageNotFound } from "../../components/PageNotFound";

// const Form = styled.form`
//   margin-top: 100px;
// `;

// const Input = styled.input`
//   all: unset;
//   width: 100%;
//   height: 50px;
//   border: 1px solid #333;
//   padding: 0 20px;
//   box-sizing: border-box;
// `;

// const ConWrap = styled.div`
//   display: grid;
//   grid-template-columns: repeat(5, 1fr);
//   margin-top: 50px;
//   column-gap: 30px;
//   row-gap: 50px;
// `;

// const Con = styled.div``;

// const ConBg = styled.div`
//   background-size: cover;
//   background-position: center;
//   height: 180px;
// `;

// const Title = styled.div`
//   margin-top: 10px;
// `;

// export const Search = () => {
//   const [search, setSearch] = useState();
//   const [loading, setLoading] = useState();
//   const [noSearch, setNoSearch] = useState("");
//   const { register, getValues, handleSubmit } = useForm({
//     mode: "onChange",
//   });

//   const onSubmit = async () => {
//     const { term } = getValues();
//     setLoading(true);
//     try {
//       const {
//         data: { results },
//       } = await movieApi.search(term);
//       console.log(results);

//       if (results.length <= 0) {
//         setNoSearch("검색결과가 없습니다 🤔");
//         console.log(123);
//       } else {
//         setNoSearch("");
//         setSearch(results);
//       }

//       setLoading(false);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div>
//       <Container>
//         <Form onSubmit={handleSubmit(onSubmit)}>
//           <Input
//             {...register("term", {
//               required: true,
//             })}
//             type="text"
//             placeholder="검색하기.."
//           />
//         </Form>

//         {loading ? (
//           <Loading />
//         ) : (
//           <div>
//             {noSearch === "" ? (
//               <div>
//                 {search && (
//                   <ConWrap>
//                     {search.map((data) => (
//                       <Link key={data.id} to={`/detail/${data.id}`}>
//                         <Con>
//                           <ConBg
//                             style={{
//                               backgroundImage: `url(${
//                                 data.backdrop_path
//                                   ? ` https://image.tmdb.org/t/p/original/${data.backdrop_path}`
//                                   : "https://tohoku365.com/desk/wp/wp-content/themes/dp-voyageur/img/post_thumbnail/noimage.png"
//                               })`,
//                             }}
//                           />
//                           <Title>{data.title}</Title>
//                         </Con>
//                       </Link>
//                     ))}
//                   </ConWrap>
//                 )}
//               </div>
//             ) : (
//               <h3>{noSearch}</h3>
//             )}
//           </div>
//         )}
//       </Container>
//     </div>
//   );
// };

const Form = styled.form`
  margin-top: 100px;
`;

const Input = styled.input`
  all: unset;
  width: 100%;
  height: 50px;
  padding: 0 20px;
  box-sizing: border-box;
  border: 1px solid #555;
`;

const ConWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 30px;
  row-gap: 30px;
  margin-top: 50px;
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Con = styled.div``;

const ConBg = styled.div`
  height: 180px;
`;

const Title = styled.h3`
  margin-top: 10px;
`;

export const Search = () => {
  const [error, setError] = useState(false);
  const [noSearch, setNoSearch] = useState("");
  const [loading, setLoading] = useState();
  const [search, setSearch] = useState();

  const { register, getValues, handleSubmit } = useForm();

  const onSubmit = async () => {
    const { term } = getValues();

    setLoading(true);

    try {
      const {
        data: { results },
      } = await movieApi.search(term);

      if (results.length <= 0) {
        setNoSearch("검색결과가 없습니다..! 🤔");
      } else {
        setNoSearch("");
        setSearch(results);
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  console.log(search);

  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register("term", {
              required: true,
            })}
            type="text"
            placeholder="검색..."
          />
        </Form>

        {error ? (
          <PageNotFound />
        ) : (
          <>
            {loading ? (
              <Loading />
            ) : (
              <ConWrap>
                {noSearch === "" ? (
                  <>
                    {search &&
                      search.map((data) => (
                        <Link key={data.id} to={`/detail/${data.id}`}>
                          <Con>
                            <ConBg
                              style={{
                                background: `url(${
                                  data.backdrop_path
                                    ? `https://image.tmdb.org/t/p/original/${data.backdrop_path}`
                                    : "https://tohoku365.com/desk/wp/wp-content/themes/dp-voyageur/img/post_thumbnail/noimage.png"
                                }) center / cover`,
                              }}
                            />
                            <Title>{data.title}</Title>
                          </Con>
                        </Link>
                      ))}
                  </>
                ) : (
                  <h3>{noSearch}</h3>
                )}
              </ConWrap>
            )}
          </>
        )}
      </Container>
    </div>
  );
};
