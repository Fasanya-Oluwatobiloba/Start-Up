import react from '../../assets/react.svg'

const ForgotPassword = () => {
  return (
	<div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md py-10 sm:px-8 px-4  rounded-lg md:shadow sm:border sm:border-gray-300">
		<img src={react} className="w-20 mb-8" />
        <h2 className="text-2xl font-semibold text-gray-900">Forgot Password ?</h2>
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
              className="w-full px-4 py-2 text-lg font-normal text-white bg-black border border-transparent"
            >
              Enter
            </button>
          </div>
          <p className="font-bold p-2 border-2 border-black w-14 mx-auto text-2xl text-center">
            G
          </p>
          <p className="text-center text-base text-black font-semibold">Sign in with your google account</p>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword
