import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useReducer } from "react";
import { Link } from "react-router-dom";
import { DotsLoader } from "components";
export function Login({ formik, guestLogin, isAuthenticationPending }) {
  const [showPassword, toggleShowPassword] = useReducer(
    (state) => !state,
    false
  );
  return (
    <div className="flex min-h-screen items-center justify-center bg-primary p-4  md:p-16">
      <div className="rounded-2xl bg-light-100 dark:bg-dark-100 lg:flex">
        <div className=" md:rounded-r-0 rounded-2xl bg-light-200 p-8 dark:bg-dark-200 md:rounded-l-2xl">
          <div className=" bg-light-200 dark:bg-dark-200 md:px-4 lg:px-12 ">
            <h2
              className="xl:text-bold text-center font-display text-4xl font-semibold text-primary lg:text-left
              xl:text-5xl"
            >
              Log in
            </h2>
            <div className="mt-12">
              <form onSubmit={formik.handleSubmit}>
                <div>
                  <label className="text-sm font-bold tracking-wide text-gray-700 dark:text-gray-200">
                    Username
                  </label>
                  <input
                    className={`w-full rounded-2xl border-2 border-transparent py-2 px-4 
                                text-lg focus:border-primary focus:outline-none
                                dark:bg-gray-800
                                dark:text-gray-200
                                dark:placeholder:text-gray-600
                                ${
                                  formik.errors.username &&
                                  formik.touched.username &&
                                  "border-error focus:border-error"
                                }
                              `}
                    placeholder="user@123"
                    {...formik.getFieldProps("username")}
                  />
                  <span className="text-error">
                    {formik.touched.username && formik.errors.username}
                  </span>
                </div>
                <div className="mt-8">
                  <label className="text-sm font-bold tracking-wide text-gray-700 dark:text-gray-200">
                    Password
                  </label>
                  <div
                    className={`flex w-full gap-2 rounded-2xl border-2 border-transparent py-2 px-4 text-lg 
                                focus:border-primary focus:outline-none
                                focus-visible:border-none focus-visible:outline-none
                                dark:bg-gray-800
                                dark:text-gray-200
                                dark:placeholder:text-gray-600
                                ${
                                  formik.errors.password &&
                                  formik.touched.password &&
                                  "border-error focus:border-error"
                                }
                              `}
                  >
                    <input
                      className="w-full bg-transparent"
                      {...formik.getFieldProps("password")}
                      type={showPassword ? "text" : "password"}
                      placeholder="*********"
                    />
                    <button type="button" onClick={toggleShowPassword}>
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                  <span className="text-error">
                    {formik.touched.password && formik.errors.password}
                  </span>
                </div>
                <div className="mt-10">
                  {isAuthenticationPending ? (
                    <button
                      type="button"
                      className="focus:shadow-outline w-full rounded-full bg-dark-200 p-4 font-display font-semibold
                          tracking-wide text-primary shadow-lg focus:outline-none
                          dark:bg-dark-100"
                    >
                      <DotsLoader size="md" />
                    </button>
                  ) : (
                    <button
                      className="focus:shadow-outline w-full rounded-full bg-dark-200 p-4 font-display font-semibold
                          tracking-wide text-primary shadow-lg focus:outline-none
                          dark:bg-dark-100"
                      type="submit"
                    >
                      Log In
                    </button>
                  )}
                  <button
                    className="group relative mt-2 w-full text-sm font-medium text-primary focus:outline-none focus:ring "
                    onClick={guestLogin}
                    type="submit"
                  >
                    <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 rounded-2xl bg-primary transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>
                    <span className="relative block rounded-2xl border border-current bg-dark-200 px-8 py-3">
                      Login as a guest
                    </span>
                  </button>
                </div>
              </form>
              <div className="mt-12 text-center font-display text-sm font-semibold text-gray-600 dark:text-gray-200">
                Don't have an account ?{" "}
                <Link
                  to="/auth/signup"
                  className="cursor-pointer text-primary hover:text-primary/75"
                  type="button"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
