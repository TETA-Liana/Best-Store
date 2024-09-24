const About=()=>{
    return(
        <section id="about">
        <div className="bg-white">
            <h3 className='text-blue-800 p-4 font-bold text-center text-xl'>About us</h3>
         <div className="space-x-4 p-4 flex text-white justify-between">
            <div className="bg-blue-800 p-6 border border-blue-400 rounded-lg w-64 h-64">
            <i class="fa-solid fa-cart-shopping bg-white rounded-full text-blue-800 p-4"></i>
            <p className="pt-6">Buy one get<br></br>one free is a<br></br>promotion for goods</p>
            </div>
           <div className="bg-blue-800 p-6 border border-blue-400 rounded-lg w-64 h-64">
            <i class="fa-solid fa-bag-shopping bg-white rounded-full text-blue-800 p-4"></i>
         <p className="pt-6">Attract more<br></br>investors by<br></br>using BestStore</p>
          </div>
           <div className="bg-blue-800 p-6 border border-blue-400 rounded-lg w-64 h-64">
            <i class="fa-solid fa-layer-group bg-white rounded-full text-blue-800 p-4"></i>
           <p className="pt-6">Buy one get<br></br>one free is a<br></br>promotion for goods</p>
        </div>


            </div>
            

        </div>
        </section>
    )
}
export default About;