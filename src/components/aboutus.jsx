const About=()=>{
    return(
        <div className="bg-yellow-600">
        <section id="about"className="mb-8">
            <div className="bg-yellow-600">
                <div className="p-6">
                    <p className="p-12">Meet the most beautiful items</p>
                    <p className="font-bold text-3xl pl-12">Best store is here for you to connect you<br></br>
                    with the most successful goods and <br></br>satisfying clients</p>
<p className="p-12
">Meet your market without going far<br></br>
away to such for your goods or clients.</p>
                </div>
                <img
              src="./shop.svg"
              className="absolute right-32 top-20 w-96 h-96 aspect-square pl-6"
            />

            </div>
        <div className="bg-yellow-600">
            <h3 className='text-black p-4 font-bold text-center text-3xl'>About us</h3>
         <div className="space-x-4 pl-12 flex text-black justify-between">
            <div className=" p-6 border border-black rounded-lg w-64 h-64">
            <i class="fa-solid fa-cart-shopping bg-white rounded-full text-black p-4"></i>
            <p className="pt-6">Buy one get<br></br>one free is a<br></br>promotion for goods</p>
            </div>
           <div className=" p-6 border border-black rounded-lg w-64 h-64">
            <i class="fa-solid fa-bag-shopping bg-white rounded-full text-black p-4"></i>
         <p className="pt-6">Attract more<br></br>investors by<br></br>using BestStore</p>
          </div>
          <div className="pr-12">
           <div className=" p-6 border border-black rounded-lg w-64 h-64">
            <i class="fa-solid fa-layer-group bg-white rounded-full text-black p-4"></i>
           <p className="pt-6 pb-6">Buy one get<br></br>one free is a<br></br>promotion for goods</p>
        </div>
        </div>


            </div>
            

        </div>
        </section>
        </div>
    )
}
export default About;