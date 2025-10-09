import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import {useForm} from 'react-hook-form'
import { NavLink } from 'react-router-dom';


const Login = () => {
const {register, handleSubmit,reset} = useForm();

const LoginHandler = (data) => {
  console.log(data);
} 
  return (
    <div className='bg-image w-screen h-screen flex justify-center items-center p-10'>

      <div className='w-full h-full bg-black  rounded-lg flex justify-center items-center gap-10 glassmorphism'>
      <div className='w-1/2 h-[90%] flex flex-col justify-center items-center  '>
        <h1 className='text-4xl font-bold mb-8 text-white'>Login</h1>


        <form className='flex flex-col gap-4 w-3/4' onSubmit={handleSubmit(LoginHandler)}>
          <input 
            type="email"
            placeholder="Email"
            className='p-2 rounded-lg border border-gray-300'
            {...register("email", { required: true })}  
          />
          <input 
            type="password"
            placeholder="Password"
            className='p-2 rounded-lg border border-gray-300'
            {...register("password", { required: true })}
          />
          <button 
            type="submit"
            className='bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-300'
          >
            Login
          </button>
        </form> 
        <h3>OR</h3>
        <div className='flex gap-4'>
          <button className='bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 cursor-pointer transition duration-300'>Google</button>
          <button className='bg-blue-800 text-white p-2 rounded-lg hover:bg-blue-900 cursor-pointer transition duration-300'>Facebook</button>
        </div>
      </div>

     <div className= '  w-1/2 h-[90%]   flex flex-col justify-center items-center p-5 gap-5  '>
        <DotLottieReact 
          src="https://lottie.host/a7ed5cd7-b2d2-479f-8b33-993585a284d1/7OzDa816Cc.lottie"
          loop
          autoplay
        />
        <p className='text-center text-white mb-10'>Not A Member? <NavLink to="/register" className='text-blue-500'>Register</NavLink></p>
     </div>
     </div>
    </div>
  )
}

export default Login