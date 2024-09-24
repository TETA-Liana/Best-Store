const Home=()=>{
    return(
        <>
        <section id='home'>
        <div className="bg-blue-700 p-12 relative">
           
            <div className=" p-12  font-bold text-3xl text-white relative z-10 ">
                <h2>Best store is the <br></br>
                best store for your <br></br>goods</h2>
                <img src='./face.jpeg' className="absolute right-0 top-1/4 w-48  aspect-square"></img>
            </div>
            <div className="space-x-4"> 
            <button className="text-blue-800 font-medium bg-white p-2"> explore more</button>
            <button className="text-blue-800 font-medium bg-white p-2"> our products</button>
            </div>
            
            </div>
            </section>
            </>
    )
}

export default Home;