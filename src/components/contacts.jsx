const Contacts=()=>{
    return( 
        <>
        <section id='contacts'>
        <h3 className='text-blue-800 p-4 font-bold text-center text-xl'>Contacts</h3> 
        <div className="bg-white flex">

        
<div className="flex flex-col p-6">
<i class="fa-solid fa-envelope p-6 "></i>
<i class="fa-brands fa-facebook p-6"></i>
<i class="fa-brands fa-instagram p-6"></i>
</div>
<div className="flex flex-col p-6">
    <p className="text-blue-800 p-6">email</p>
    <p className="text-blue-800 p-5">Facebook</p>
    <p className="text-blue-800 p-5">Instagram</p>
</div>
<div className="flex flex-col p-6">
<p className='text-blue-800 p-6'>x.com</p>
<p className="text-blue-800 p-6"> +250 782829341</p>
</div>
<p className="bg-gray-400  justify-right h-12 flex items-center px-4 mt-6 text-gray-700 pl-6">
        drop your comment
      </p>
     
        </div>
        <div className="border-t border-gray-400 mt-4 pt-4 text-center">
      <p className="text-sm text-gray-600">&copy; 2024 Your Company. All rights reserved.</p>
     
       
      </div>
      </section>
      </>   
    )
}
export default Contacts;