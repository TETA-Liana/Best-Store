const Home = () => {
    return (
      <>
        <section id="home">
          <div className="bg-yellow-600 w-full h-screen p-12 relative">
            {/* Text Section */}
            <div className="p-12 font-bold text-3xl text-black relative z-10" style={{ marginTop: '10%' }}>
              <h2>
                Best store is the <br />
                best store for your <br /> goods
              </h2>
            </div>
  
            {/* Image (remains in place) */}
            <img
              src="./transact.webp"
              className="absolute right-32 top-1/4 w-96 h-96  pl-6 rounded-md"
            />
  
            {/* Buttons */}
            <div className="space-x-4 mt-4 p-12">
              <button className="text-black-800 font-medium bg-white p-2 rounded-xl">
                explore more
              </button>
              <button className="text-black-800 font-medium bg-white p-2 rounded-xl">
                our products
              </button>
            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default Home;
  