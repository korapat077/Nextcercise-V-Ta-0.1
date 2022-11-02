import { Transition } from '@headlessui/react'
import { useEffect, useState } from 'react'
const menuItemUnlogin = [
  { name: 'Home' },
  { name: 'Leaderboard' },
  { name: 'Register' },
  { name: 'Login' },
]
const menuItemIslogin = {
  name: [
    { name: 'Home' },
    { name: 'Leaderboard' },
    { name: 'My score' },
  ],
  Profile: [
    { name: 'My score' },
    { name: 'Edit Profile' },
    { name: 'Logout' },
  ]
}
const checkIsLogin = async (setIstoken: any) => {
  let checkIslogin = await window.localStorage.getItem("token")
  if (checkIslogin === null) {
    setIstoken(false)
  } else {
    setIstoken(true)
  }
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isToken, setIstoken] = useState(false);
  useEffect(() => {
    checkIsLogin(setIstoken)
  }, [isToken])
  return (
    <div className='select-none'>
      <nav className="bg-[#f84d3a] border-[#f84d3a] px-2 sm:px-4 py-2.5  dark:bg-[#f84d3a]">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="/" className="flex items-center ">
            <img src="/images/logo.png" className="mr-3 h-6 sm:h-9 animate-spin-slow" alt="My Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Exercise</span>
          </a>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 bg-[#be3829] rounded-lg border 
            border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0
            md:bg-[#be3829] dark:bg-[#be3829] md:dark:bg-[#be3829] dark:border-[#be3829]">
              {isToken ? (
                <>
                  {menuItemIslogin.name.map((r, k) => {
                    return (
                      <li key={k}>
                        <a href="#"
                          className="text-white hover:bg-[#9c3b30] hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                          {r.name}
                        </a>
                      </li>
                    )
                  })}
                  <ul>
                    <a
                      className="relative text-white  hover:text-white px-3 py-2  rounded-md text-sm font-medium">
                      <button onClick={() => setIsOpenMenu(!isOpenMenu)}>
                        USER NAME
                      </button>
                      <li className={`absolute left-0 border-0 rounded-b-2xl py-1 w-[7.35rem] bg-[#be3829] text-black ${isOpenMenu ? "block" : "hidden"}`}>
                        {menuItemIslogin.Profile.map((r, k) => {
                          return (
                            <div key={k} className="mt-2 mb-2">
                              <div className="text-white hover:bg-[#9c3b30] py-1 hover:text-white px-4 rounded-md text-sm font-medium">
                                {r.name}
                              </div>
                            </div>
                          )
                        })}
                      </li>
                    </a>
                  </ul>
                </>
              ) : (
                <>
                  {menuItemUnlogin.map((r, k) => {
                    return (
                      <li key={k}>
                        <a href="#"
                          className="text-white hover:bg-[#9c3b30] hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                          {r.name}
                        </a>
                      </li>
                    )
                  })}
                </>
              )}
            </ul>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-[#9c3b30] inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-[#9c3b30] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white "
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {
                isToken ? (
                  <>
                    {menuItemIslogin.name.map((r, k) => {
                      return (
                        <a href="#"
                          key={k}
                          className="text-white  block px-3 py-2 rounded-md text-base font-medium">
                          {r.name}
                        </a>
                      )
                    })}
                    <div>
                      <a href="#"
                        className="text-white  block px-3 py-2 rounded-md text-base font-medium">
                        <button onClick={() => setIsOpenMenu(!isOpenMenu)}>
                          USER NAME
                        </button>
                      </a>
                    </div>
                    {menuItemIslogin.Profile.map((r, k) => {
                      return (
                        <a href="#"
                          key={k}
                          className={`text-white hover:bg-[#9c3b30] ml-4 hover:text-white block px-3 py-2 rounded-md text-sm font-normal ${isOpenMenu ? "block" : "hidden"}`}>
                          {r.name}
                        </a>
                      )
                    })}
                  </>
                ) : (
                  <>
                    {menuItemUnlogin.map((r, k) => {
                      return (
                        <a href="#"
                          key={k}
                          className="text-white hover:bg-[#9c3b30] hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                          {r.name}
                        </a>
                      )
                    })}
                  </>
                )}
            </div>
          </div>
        </Transition>
      </nav>

    </div>
  )
}

export default Navbar