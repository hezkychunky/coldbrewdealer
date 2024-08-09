import Link from "next/link";


export default function Footer() {
   return (
      <div className="bg-white rounded-lg shadow dark:bg-gray-900 m-4 border-lime-600 border-4">
         <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
                  <Link href="/" className="flex items-center mb-4 sm:mb-0 space-x-3">
                     <span className="self-center text-2xl font-extralight whitespace-nowrap text-lime-600">COLDBREW DEALER</span>
                  </Link>
            </div>
            <hr className="my-6 border-lime-600 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block font-semibold text-lg text-gray-600 sm:text-center">Contact Us: coldbrewdealer@mail.com</span>
         </div>
      </div>
   )
}