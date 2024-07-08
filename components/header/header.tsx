export default function Header() {
  return (
    <div className="fixed top-0 justify-between sm:h-10 md:justify-center border-r-4 z-50 w-full ">
      <nav className="relative mx-4  shadow-lg mt-4 bg-blue-50 bg-opacity-85  flex items-center justify-between sm:h-5 md:justify-center py-0 sm:py-8  px-6 ">
        <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
          <div className="flex items-center justify-between w-full md:w-auto">
            <a href="" aria-label="Home">
              <img src="/logo.png" height="" width="200" />
            </a>
            <div className="-mr-2 flex items-center md:hidden">
              <button
                type="button"
                id="main-menu"
                aria-label="Main menu"
                aria-haspopup="true"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="hidden md:flex md:space-x-10">
          <a
            href="/"
            className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
          >
            Home
          </a>
          <a
            href="services"
            className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
          >
            Services
          </a>
          <a
            href="projects"
            className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
          >
            Projects
          </a>
          <a
            href="faq"
            className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
          >
            Faq
          </a>
          
        </div>
        <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
          
          <span className="inline-flex rounded-md shadow ml-2 mr-3">
            <a
              href="/signup"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 transition duration-150 ease-in-out"
            >
              Contact Us
            </a>
          </span>
        </div>
      </nav>
    </div>
  );
}
