const Products = () => {
  return (
    <section id='products'>
      <div className="bg-yellow-600 w-full h-screen p-12">
        <h3 className="text-black p-4 font-bold text-center text-3xl">Products</h3>
        <div className="grid grid-cols-4 gap-4 justify-items-center">
          <div className="flex flex-col items-center">
            <img src='./dress.jpeg' alt='dress' className="rounded-full w-32 h-32 object-cover" />
            <p className="text-center mt-2 text-black font-medium">Dress</p>
          </div>
          <div className="flex flex-col items-center">
            <img src='./shoes.jpeg' alt='shoes' className="rounded-full w-32 h-32 object-cover" />
            <p className="text-center mt-2 text-black font-medium">Shoes</p>
          </div>
          <div className="flex flex-col items-center">
            <img src='./watch.jpeg' alt='watch' className="rounded-full w-32 h-32 object-cover" />
            <p className="text-center mt-2 text-black font-medium">Watch</p>
          </div>
          <div className="flex flex-col items-center">
            <img src='./perfume.jpeg' alt='perfume' className="rounded-full w-32 h-32 object-cover" />
            <p className="text-center mt-2 text-black font-medium">Perfume</p>
          </div>
          <div className="flex flex-col items-center">
            <img src='./necklace.jpeg' alt='necklace' className="rounded-full w-32 h-32 object-cover" />
            <p className="text-center mt-2 text-black font-medium">Necklace</p>
          </div>
          <div className="flex flex-col items-center">
            <img src='./food.jpeg' alt='food' className="rounded-full w-32 h-32 object-cover" />
            <p className="text-center mt-2 text-black font-medium">Food</p>
          </div>
          <div className="flex flex-col items-center">
            <img src='./car.jpeg' alt='car' className="rounded-full w-32 h-32 object-cover" />
            <p className="text-center mt-2 text-black font-medium">Car</p>
          </div>
          <div className="flex flex-col items-center">
            <img src='./phone.jpeg' alt='phone' className="rounded-full w-32 h-32 object-cover" />
            <p className="text-center mt-2 text-black font-medium">Phone</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
