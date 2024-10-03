const About=()=>{
    return(
        <section id="about">
            <div className="bg-blue-200">
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
        <div className="bg-blue-200">
            <h3 className='text-blue-500 p-4 font-bold text-center text-xl'>About us</h3>
         <div className="space-x-4 p-4 flex text-white justify-between">
            <div className="bg-blue-500 p-6 border border-blue-400 rounded-lg w-64 h-64">
            <i class="fa-solid fa-cart-shopping bg-white rounded-full text-blue-500 p-4"></i>
            <p className="pt-6">Buy one get<br></br>one free is a<br></br>promotion for goods</p>
            </div>
           <div className="bg-blue-500 p-6 border border-blue-400 rounded-lg w-64 h-64">
            <i class="fa-solid fa-bag-shopping bg-white rounded-full text-blue-500 p-4"></i>
         <p className="pt-6">Attract more<br></br>investors by<br></br>using BestStore</p>
          </div>
           <div className="bg-blue-500 p-6 border border-blue-400 rounded-lg w-64 h-64">
            <i class="fa-solid fa-layer-group bg-white rounded-full text-blue-500 p-4"></i>
           <p className="pt-6">Buy one get<br></br>one free is a<br></br>promotion for goods</p>
        </div>


            </div>
            

        </div>
        </section>
    )
}
export default About;