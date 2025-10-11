import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'

const Login = () => {
  const { register, handleSubmit } = useForm()

  const LoginHandler = (user) => {
    console.log(user)
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-800 flex justify-center items-center px-4">
      <div className="glassmorphism w-full max-w-5xl h-[90vh] rounded-3xl flex overflow-hidden shadow-2xl border border-gray-800">
        
        {/* Left Section */}
        <div className="w-1/2 bg-black/30 backdrop-blur-lg flex flex-col justify-center items-center px-10">
          <h1 className="text-4xl font-bold text-white mb-6 tracking-wide">Welcome Back</h1>
          <p className="text-gray-400 mb-8">Login to continue your journey</p>

          <form onSubmit={handleSubmit(LoginHandler)} className="w-full flex flex-col gap-5">
            <input
              type="email"
              placeholder="Email Address"
              className="p-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 outline-none focus:border-blue-500 transition"
              {...register("email", { required: true })}
            />

            <input
              type="password"
              placeholder="Password"
              className="p-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 outline-none focus:border-blue-500 transition"
              {...register("password", { required: true })}
            />

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg shadow-lg transition">
              Login
            </button>
          </form>

          <div className="flex items-center justify-center gap-4 mt-6 text-gray-400">
            <span className="h-[1px] w-20 bg-gray-700"></span> OR <span className="h-[1px] w-20 bg-gray-700"></span>
          </div>

          <div className="flex gap-4 mt-4">
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold transition">
              Google
            </button>
            <button className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold transition">
              Facebook
            </button>
          </div>

        </div>

        {/* Right Section */}
        <div className="w-1/2 flex flex-col justify-center items-center bg-gradient-to-br from-blue-900 to-purple-800 text-white">
          <DotLottieReact
            src="https://lottie.host/a7ed5cd7-b2d2-479f-8b33-993585a284d1/7OzDa816Cc.lottie"
            loop
            autoplay
            className="w-80"
          />
          <p className="mt-6 text-lg">New here?</p>
          <NavLink to="/register" className="text-blue-300 font-semibold hover:text-white underline transition">
            Create an Account
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Login;
