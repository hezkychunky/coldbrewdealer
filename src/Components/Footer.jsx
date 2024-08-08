import Link from "next/link";


export default function Footer() {
   return (
      <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
         <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
                  <Link href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                     <span className="self-center text-2xl font-extralight whitespace-nowrap text-lime-600">COLDBREW DEALER</span>
                  </Link>
                  <ul className="flex flex-wrap items-center mb-6 text-lg font-light text-black sm:mb-0">
                     <li>
                        <span>Contact us: <br /> coldbrewdealer@mail.com</span>
                     </li>
                  </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="/" className="hover:underline">COLDBREW DEALER</a>. All Rights Reserved.</span>
         </div>
      </footer>
   )
}