const Loginas=()=>{

    return (
        <div className="flex items-center justify-center min-h-screen bg-white relative">
          <div className="absolute inset-0 bg-yellow-600 clip-path-custom"></div>
          <div className="relative z-10 text-center text-white p-8 rounded-lg">
            <h2 className="mb-5">login as :</h2>
            <button className="block w-48 mx-auto my-2 py-2 bg-white text-black rounded">buyer</button>
            <button className="block w-48 mx-auto my-2 py-2 bg-white text-black rounded">seller</button>
            <button className="block w-48 mx-auto my-2 py-2 bg-white text-black rounded"><a href ='/login'>login</a></button>
            <a href="#" className="block mt-5 text-gray-300 hover:underline">forgot password ?</a>
          </div>
        </div>
      );

}
export default Loginas;