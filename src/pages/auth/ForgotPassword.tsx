import { useState } from "react"
import NavAuth from "../../components/NavAuth"


const ForgotPassword = () => {
    const [sign, isSign] = useState(false)
  return (
	<div className="flex transition-all duration-150 items-center dark:text-white text-dark dark:bg-[#141414] justify-center min-h-screen flex-wrap">
    <NavAuth call={sign} set={isSign}/>
      <div className="w-full h-[89dvh] raleway flex justify-center items-center">
        <div className="w-full glass max-w-md py-10 sm:px-8 px-4  rounded-lg sm:border sm:border-gray-300">
          <h2 className="text-2xl font-semibold mb-2">Forgot Password ?</h2>
          <p className="text-sm font-medium text-green-500">We sent a code to you. Check you email</p>
          <form className="mt-8 space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-normal"
              >
                Enter your email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-md px-3 py-2 mt-1 border-2 outline-none sm:text-sm"
              />
            </div>
              <div>
              <button
                type="submit"
                className="w-full px-4 py-2 rounded-md text-lg mb-10 mt-5 font-normal text-white bg-indigo-900 border border-transparent"
              >
                Send Code
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
