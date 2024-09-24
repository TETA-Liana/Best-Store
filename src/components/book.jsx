const Book = () => {
    return (
        <section id='book'>
      <div className="bg-gray-400 p-6">
        <div className="flex justify-between items-center p-6">
          <img src='./trade2.jpeg' alt='trade 1' className="rounded-full w-1/3 h-32 object-cover" />
          
          <div className="flex flex-col items-center">
            <p className="text-blue-800 font-medium p-4">book an item</p>
            <p className="font-semibold p-4 bg-white mt-4 text-blue-800">order now</p>
            <p className="font-semibold p-4 bg-white mt-4 text-blue-800">submit</p>
          </div>
  
          <img src='./trade1.jpeg' alt='trade 1' className="rounded-full w-1/3 h-32 object-cover" />
        </div>
      </div>
      </section>
    );
  };
  
  export default Book;
  