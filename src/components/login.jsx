const Login =()=>{
return(
    <div className="bg-white justify-center">
<div className="bg-blue-800 border p-6 rounded-md w-64 h-64">
    <h1 className="text-white font-bold border-b-blue-50 p-6 text-center">Login</h1>
    </div>
    <form>
        <label htmlFor='email' className="text-white font-thin">Email</label>
        <input type='email'  id='email'className="pb-6 "></input>
        <label htmlFor='password' className="text-white font-thin">Password</label>
        <input type='password' id='password'className="pb-6"></input>
        <input type='submit' className='text-blue-800 font-semibold rounded-md'value='Login' ></input>
    </form>
    <p className="text-white"> forgot password?</p>
    </div>
)
}

export default Login;