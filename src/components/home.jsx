const Home = () => {
    return (
      <>
        <section id="home">
          <div className="bg-blue-400 w-full h-screen p-12 relative">
            {/* Text Section */}
            <div className="p-12 font-bold text-3xl text-white relative z-10" style={{ marginTop: '10%' }}>
              <h2>
                Best store is the <br />
                best store for your <br /> goods
              </h2>
            </div>
  
            {/* Image (remains in place) */}
            <img
              src="./face.jpeg"
              className="absolute right-32 top-1/4 w-96 h-96 aspect-square pl-6"
            />
  
            {/* Buttons */}
            <div className="space-x-4 mt-4">
              <button className="text-blue-800 font-medium bg-white p-2">
                explore more
              </button>
              <button className="text-blue-800 font-medium bg-white p-2">
                our products
              </button>
            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default Home;
  