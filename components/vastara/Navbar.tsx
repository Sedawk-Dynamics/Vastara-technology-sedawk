"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Investment", href: "/#investment" },
]

const servicesLinks = [
  
  {
    label: "Architecture, Civil & Interior Works",
    href: "/services/architectural",
  },
   {
    label: "Farmhouse Planning & Development",
    href: "/services/farmhouse",
  },
  {
    label: "Ground Execution & Excavation",
    href: "/services/execution",
  },
 
]

const verticalLinks = [
  {
    label: "Farmhouse Planning & Development",
    href: "/vertical/farmhouse",
  },

  {
    label: "Real Estate Investment Opportunities",
    href: "/vertical/investment",
  },
  {
    label: "Industrial Land Readiness & Setup",
    href: "/vertical/industrial",
  },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isVerticalOpen, setIsVerticalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60)
    }

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    })

    return () =>
      window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeAllMenus = () => {
    setIsMenuOpen(false)
    setIsServicesOpen(false)
    setIsVerticalOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? "bg-white shadow-md py-3"
          : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0"
            onClick={closeAllMenus}
          >
            <Image
              src="/header-logo.png"
              alt="Vastara International Properties"
              width={300}
              height={80}
              priority
              className={`h-16 w-auto transition-all duration-300 ${isScrolled ? "" : "brightness-0 invert"
                }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-8 flex-1 justify-center px-6">

            {/* Main Nav Links */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[16px] font-semibold transition-colors duration-200 hover:text-[#C9A84C] ${isScrolled
                    ? "text-[#1E1E1E]"
                    : "text-white"
                  }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative group">
              <div
                className={`flex items-center gap-1 text-[16px] font-semibold cursor-pointer ${isScrolled
                    ? "text-[#1E1E1E]"
                    : "text-white"
                  }`}
              >
                Services

                <ChevronDown
                  size={18}
                  className="group-hover:rotate-180 transition-transform duration-300"
                />
              </div>

              <div className="absolute left-0 mt-3 w-80 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden z-50 border border-[#E8E0D0]">
                {servicesLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={closeAllMenus}
                    className="block px-5 py-4 text-[#1E1E1E] text-sm hover:bg-[#F8F5EF] hover:text-[#C9A84C] transition-all"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Verticals Dropdown */}
            <div className="relative group">
              <div
                className={`flex items-center gap-1 text-[16px] font-semibold cursor-pointer ${isScrolled
                    ? "text-[#1E1E1E]"
                    : "text-white"
                  }`}
              >
                Verticals

                <ChevronDown
                  size={18}
                  className="group-hover:rotate-180 transition-transform duration-300"
                />
              </div>

              <div className="absolute left-0 mt-3 w-80 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden z-50 border border-[#E8E0D0]">
                {verticalLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={closeAllMenus}
                    className="block px-5 py-4 text-[#1E1E1E] text-sm hover:bg-[#F8F5EF] hover:text-[#C9A84C] transition-all"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Us */}
            <Link
              href="/#contact"
              className={`text-[16px] font-semibold transition-colors duration-200 hover:text-[#C9A84C] ${isScrolled
                  ? "text-[#1E1E1E]"
                  : "text-white"
                }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`xl:hidden ${isScrolled ? "text-black" : "text-white"
              }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`xl:hidden overflow-hidden transition-all duration-300 ${isMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0"
          } bg-white shadow-2xl`}
      >
        <nav className="px-6 py-6 flex flex-col gap-5">

          {/* Main Nav Links */}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeAllMenus}
              className="text-[#1E1E1E] text-lg font-medium border-b border-gray-200 pb-3 hover:text-[#C9A84C] transition-colors"
            >
              {link.label}
            </Link>
          ))}

          {/* Services Mobile */}
          <div>
            <button
              onClick={() =>
                setIsServicesOpen(!isServicesOpen)
              }
              className="w-full flex justify-between items-center border-b border-gray-200 pb-3 text-[#1E1E1E] text-lg font-medium"
            >
              Services

              <ChevronDown
                size={20}
                className={`transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""
                  }`}
              />
            </button>

            {isServicesOpen && (
              <div className="ml-4 mt-3 flex flex-col gap-3">
                {servicesLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={closeAllMenus}
                    className="text-sm text-[#4A4A4A] hover:text-[#C9A84C] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Verticals Mobile */}
          <div>
            <button
              onClick={() =>
                setIsVerticalOpen(!isVerticalOpen)
              }
              className="w-full flex justify-between items-center border-b border-gray-200 pb-3 text-[#1E1E1E] text-lg font-medium"
            >
              Verticals

              <ChevronDown
                size={20}
                className={`transition-transform duration-300 ${isVerticalOpen ? "rotate-180" : ""
                  }`}
              />
            </button>

            {isVerticalOpen && (
              <div className="ml-4 mt-3 flex flex-col gap-3">
                {verticalLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={closeAllMenus}
                    className="text-sm text-[#4A4A4A] hover:text-[#C9A84C] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Contact */}
          <Link
            href="/#contact"
            onClick={closeAllMenus}
            className="text-[#1E1E1E] text-lg font-medium border-b border-gray-200 pb-3 hover:text-[#C9A84C] transition-colors"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  )
}








// "use client"

// import { useState, useEffect } from "react"
// import Link from "next/link"
// import Image from "next/image"
// import { Menu, X, ChevronDown } from "lucide-react"

// const navLinks = [
//   { label: "Home", href: "/" },
//   { label: "About Us", href: "/#about" },
//   { label: "Investment", href: "/#investment" },
// ]

// const servicesLinks = [
//   {
//     label: "Architectural Planning & Coordination",
//     href: "/services/architectural",
//   },
//   {
//     label: "Land Development",
//     href: "/services/land-development",
//   },
//   {
//     label: "Ground Execution & Excavation",
//     href: "/services/execution",
//   },
// ]

// const verticalLinks = [
//   {
//     label: "Farmhouse Planning & Development",
//     href: "/vertical/farmhouse",
//   },
//   {
//     label: "Real Estate Investment Opportunities",
//     href: "/vertical/investment",
//   },
//   {
//     label: "Industrial Land Readiness & Setup",
//     href: "/vertical/industrial",
//   },
// ]

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [isServicesOpen, setIsServicesOpen] = useState(false)
//   const [isVerticalOpen, setIsVerticalOpen] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 60)
//     }

//     window.addEventListener("scroll", handleScroll, { passive: true })

//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   const closeAllMenus = () => {
//     setIsMenuOpen(false)
//     setIsServicesOpen(false)
//     setIsVerticalOpen(false)
//   }

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
//         ? "bg-white shadow-md py-3"
//         : "bg-transparent py-5"
//         }`}
//     >
//       <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between">

//           {/* Logo */}
//           <Link href="/" className="flex-shrink-0" onClick={closeAllMenus}>
//             <Image
//               src="/header-logo.png"
//               alt="Vastara International Properties"
//               width={300}
//               height={80}
//               className={`h-16 w-auto transition-all duration-300 ${isScrolled ? "" : "brightness-0 invert"
//                 }`}
//               priority
//             />
//           </Link>

//           {/* Desktop Nav */}
//           <nav className="hidden xl:flex items-center gap-8 flex-1 justify-center px-6">

//             {navLinks.map((link) => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 className={`text-[16px] font-semibold transition-colors duration-200 hover:text-[#C9A84C] ${isScrolled ? "text-[#1E1E1E]" : "text-white"
//                   }`}
//               >
//                 {link.label}
//               </Link>
//             ))}

//             {/* Services Dropdown */}
//             <div className="relative group">
//               <button
//                 className={`flex items-center gap-1 text-[16px] font-semibold hover:text-[#C9A84C] transition-colors ${isScrolled ? "text-[#1E1E1E]" : "text-white"
//                   }`}
//               >
//                 Services
//                 <ChevronDown
//                   size={18}
//                   className="group-hover:rotate-180 transition-transform duration-300"
//                 />
//               </button>

//               <div className="absolute left-0 mt-3 w-80 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden z-50 border border-[#E8E0D0]">
//                 {servicesLinks.map((link) => (
//                   <Link
//                     key={link.href}
//                     href={link.href}
//                     onClick={closeAllMenus}
//                     className="block px-5 py-4 text-[#1E1E1E] text-sm hover:bg-[#F8F5EF] hover:text-[#C9A84C] transition-all"
//                   >
//                     {link.label}
//                   </Link>
//                 ))}
//               </div>
//             </div>

//             {/* Verticals Dropdown */}
//             <div className="relative group">
//               <button
//                 className={`flex items-center gap-1 text-[16px] font-semibold hover:text-[#C9A84C] transition-colors ${isScrolled ? "text-[#1E1E1E]" : "text-white"
//                   }`}
//               >
//                 Verticals
//                 <ChevronDown
//                   size={18}
//                   className="group-hover:rotate-180 transition-transform duration-300"
//                 />
//               </button>

//               <div className="absolute left-0 mt-3 w-80 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden z-50 border border-[#E8E0D0]">
//                 {verticalLinks.map((link) => (
//                   <Link
//                     key={link.href}
//                     href={link.href}
//                     onClick={closeAllMenus}
//                     className="block px-5 py-4 text-[#1E1E1E] text-sm hover:bg-[#F8F5EF] hover:text-[#C9A84C] transition-all"
//                   >
//                     {link.label}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </nav>

//           {/* CTA + Mobile Menu */}
//           <div className="flex items-center gap-4">

//             {/* Contact Button */}
//             <Link
//               href="/#contact"
//               className="hidden lg:inline-flex items-center justify-center px-7 py-3 bg-black text-white text-base font-semibold rounded-lg hover:bg-[#1E1E1E] transition-all duration-300 shadow-md"
//             >
//               Contact Us
//             </Link>

//             {/* Mobile Toggle */}
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className={`xl:hidden p-2 transition-colors ${isScrolled ? "text-[#1E1E1E]" : "text-white"
//                 }`}
//             >
//               {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`xl:hidden transition-all duration-300 overflow-hidden ${isMenuOpen
//           ? "max-h-screen opacity-100"
//           : "max-h-0 opacity-0"
//           } bg-white shadow-2xl`}
//       >
//         <nav className="px-6 py-6 flex flex-col gap-5">

//           {/* Nav Links */}
//           {navLinks.map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               onClick={closeAllMenus}
//               className="text-[#1E1E1E] text-lg font-medium border-b border-gray-200 pb-3 hover:text-[#C9A84C] transition-colors"
//             >
//               {link.label}
//             </Link>
//           ))}

//           {/* Services */}
//           <div>
//             <button
//               onClick={() => setIsServicesOpen(!isServicesOpen)}
//               className="w-full flex justify-between items-center border-b border-gray-200 pb-3 text-[#1E1E1E] text-lg font-medium"
//             >
//               Services

//               <ChevronDown
//                 size={20}
//                 className={`transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""
//                   }`}
//               />
//             </button>

//             {isServicesOpen && (
//               <div className="ml-4 mt-3 flex flex-col gap-3">
//                 {servicesLinks.map((link) => (
//                   <Link
//                     key={link.href}
//                     href={link.href}
//                     onClick={closeAllMenus}
//                     className="text-sm text-[#4A4A4A] hover:text-[#C9A84C] transition-colors"
//                   >
//                     {link.label}
//                   </Link>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Verticals */}
//           <div>
//             <button
//               onClick={() => setIsVerticalOpen(!isVerticalOpen)}
//               className="w-full flex justify-between items-center border-b border-gray-200 pb-3 text-[#1E1E1E] text-lg font-medium"
//             >
//               Verticals

//               <ChevronDown
//                 size={20}
//                 className={`transition-transform duration-300 ${isVerticalOpen ? "rotate-180" : ""
//                   }`}
//               />
//             </button>

//             {isVerticalOpen && (
//               <div className="ml-4 mt-3 flex flex-col gap-3">
//                 {verticalLinks.map((link) => (
//                   <Link
//                     key={link.href}
//                     href={link.href}
//                     onClick={closeAllMenus}
//                     className="text-sm text-[#4A4A4A] hover:text-[#C9A84C] transition-colors"
//                   >
//                     {link.label}
//                   </Link>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Mobile Contact Button */}
//           <Link
//             href="/#contact"
//             onClick={closeAllMenus}
//             className="mt-4 flex items-center justify-center px-6 py-3 bg-black text-white text-base font-semibold rounded-lg hover:bg-[#1E1E1E] transition-all duration-300"
//           >
//             Contact Us
//           </Link>
//         </nav>
//       </div>
//     </header>
//   )
// }