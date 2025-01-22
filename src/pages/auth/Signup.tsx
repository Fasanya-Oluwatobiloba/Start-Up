import { Link } from "react-router";
import start from '../../assets/start.png'
import google from  '../../assets/google.png'

function Signup() {
	return (
	  <div className="flex items-center justify-center min-h-screen">
		<div className="w-full max-w-lg py-10 sm:px-8 px-4 bg-white rounded-lg md:shadow sm:border sm:border-gray-300">
		<img src={start} className="w-20 mb-8" />
		  <h2 className="text-2xl font-normal text-gray-900">Create an Account</h2>
		  <p className="text-base mt-8 mb-10 font-normal">
			Have an account?{' '}
			<Link to="/login" className="text-blue-500 underline">Sign In</Link>
		  </p>
		  <form className="mt-8 space-y-6">
			<div>
			  <label
				htmlFor="email"
				className="block text-sm underline text-blue-500 text-right font-normal"
			  >
				Use email
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
			  <label
				htmlFor="password"
				className="block text-sm underline text-blue-500 text-right font-normal"
			  >
				Password
			  </label>
			  <input
				id="password"
				name="password"
				type="password"
				required
				className="w-full px-3 py-2 mt-1 border-2 border-black sm:text-sm"
			  />
			</div>
			<div className="flex items-center justify-between">
			  <div className="flex items-center">
				<input
				  id="remember_me"
				  name="remember_me"
				  type="checkbox"
				  className="w-4 h-4 text-blue-600 border-gray-300 rounded"
				/>
				<label
				  htmlFor="remember_me"
				  className="block ml-2 font-normal text-lg text-gray-900"
				>
				  Keep me signed in on this device
				</label>
			  </div>
			</div>
			<div>
			  <button
				type="submit"
				className="w-full px-4 py-2 text-lg font-normal text-white bg-black border border-transparent"
			  >
				Sign up
			  </button>
			</div>
			<img src={google} className="w-20 mx-auto my-12" />
		  </form>
		</div>
	  </div>
	);
  }

  export default Signup;
