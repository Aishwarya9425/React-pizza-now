import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="my-10 text-center">
      <h1 className="mb-10 text-center text-2xl text-rose-500 font-bold italic">
        The best pizza🍕
        <br />
        <span className="text-yellow-500 not-italic">
        Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser/>
    </div>
  );
}

export default Home;
