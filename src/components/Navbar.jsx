import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-black text-white relative z-50  border-b-[0.5px] border-white/60">
<div className="flex items-center justify-center min-h-[72px] px-4 md:px-8 lg:px-16 py-4 ">

        <div className="absolute left-6 md:left-12 lg:left-24 ml-1 md:ml-40">
          <img src="Logo.png" alt="Logo" className="h-8 md:h-10" />
        </div>
        <div className="hidden lg:flex items-center justify-center">
          <div className="border border-white/60 rounded-full px-6 py-2">
            <ul className="flex gap-5 xl:gap-6 text-white/60 text-sm">
              {["Home", "Developers", "Company", "Blogs", "ChangeLog"].map(
                (item) => (
                  <li
                    key={item}
                    className="cursor-pointer hover:text-violet-500 transition-colors"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="absolute right-4 md:right-12 lg:right-56 flex items-center gap-2 cur-p">
          <button className="px-4 md:px-6 py-2 rounded-md cursor-pointer bg-violet-500/40 text-white hover:bg-[#7a35e6] transition shadow-[inset_0_0_10px_0_rgba(255,255,255,0.7)] text-xs md:text-sm font-medium">
            Join WaitList
          </button>

          <button
            className="lg:hidden text-white p-2 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden bg-black border-t border-white/20 transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-4 py-4 px-6 text-white/60">
          {["Home", "Developers", "Company", "Blogs", "ChangeLog"].map(
            (item) => (
              <li
                key={item}
                className="cursor-pointer hover:text-violet-500 transition-colors"
              >
                {item}
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
