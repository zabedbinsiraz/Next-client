import HomeComponent from "../components/Home/Home";

const Home = () => {
  return (
    <>
      <HomeComponent />
    </>
  );
};

// Home.getInitialProps = async (ctx: NextPageContext,store) => {
//   const { data }: any = await serverApi(ctx, `/`);
//   return {
//     data: data,
//     store:store,
//   };
// };

export default Home;
