import start from '../../assets/start.png'

const ForgotPassword = () => {
  return (
	<div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md py-10 sm:px-8 px-4  rounded-lg md:shadow sm:border sm:border-gray-300">
		<img src={start} className="w-20 mb-8" />
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Forgot Password ?</h2>
        <p className="text-sm font-medium text-blue-900">We sent a code to you. Check you email</p>
        <form className="mt-8 space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm underline text-blue-500 text-right font-normal"
            >
              Enter your email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-3 py-2 mt-1 border-2 border-black sm:text-sm"
            />
          </div>
		  <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-lg mb-10 mt-5 font-normal text-white bg-black border border-transparent"
            >
              Send Code
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword
