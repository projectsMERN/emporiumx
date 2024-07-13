import { useSelector, useDispatch } from 'react-redux';
import { selectError, selectLoggedInUser } from '../authSlice';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { loginUserAsync } from '../authSlice';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const user = useSelector(selectLoggedInUser);
  
  const [val, setVal] = useState(" ");

  const history = useNavigate();

  const change = event => {
    const newValue = event.target.value;
    setVal(newValue); 
  }

  const handleButton = () => {
    history(`/otp-verification?email=${encodeURIComponent(val)}`);

    //http://localhost:3000
    // Initiate Email
    axios.get(`/auth/otp-verification?email=${encodeURIComponent(val)}`)
    .then(users => console.log(" "))
    .catch(err => console.log(" "))

  }

  return (
    <>
      {user && <Navigate to={`/otp-verification`} replace={true}></Navigate>}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-40 w-auto"
            src="/ecommerce.png"
            alt="Your Company"
          />
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-300">
            Log in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <form
            noValidate
            onSubmit={handleSubmit((data) => {
              dispatch(
                loginUserAsync({ email: data.email, password: data.password })
              );
            })}
            className="space-y-6"
          > */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-200"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  type="email"
                  value={val}
                  onChange={change}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />

                <div>
                  <button onClick={handleButton}
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 mt-3 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get OTP
                  </button>
                </div>             
              </div>
            </div>

            <div>
              {/* <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-200"
                >
                  Password
                </label>
                <div className="text-sm">
                  <Link
                    to="/forgot-password"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div> */}
              <div className="mt-2">
                {/* <input
                  id="password"
                  {...register('password', {
                    required: 'password is required',
                  })}
                  type="password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )} */}
              </div>
              {/* {error && <p className="text-red-500">{error || error.message}</p>} */}
            </div>

            
          {/* </form> */}

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <Link
              to="/signup"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Create an Account
            </Link>
          </p>
          <div>
            <p className='mt-20'></p>
          </div>
        </div>
        <div>
            <p className='mt-6'></p>
          </div>
      </div>
      
    </>
  );
}
