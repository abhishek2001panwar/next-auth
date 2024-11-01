import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-300 to-indigo-400 text-white">
      <div className="absolute inset-0 bg-opacity-30 bg-black"></div> {/* Background overlay */}

      <div className="relative z-10 flex flex-col items-center p-8 sm:p-16 rounded-lg shadow-lg bg-white text-gray-800 max-w-lg">
        <h1 className="text-5xl font-light text-center">Welcome to Our Authentication System</h1>
        <p className="text-center text-sm mt-4">
          Secure your account and manage your profile with ease. 
          Log in or sign up to get started.
        </p>

        <div className="flex flex-col gap-4 mt-6 sm:flex-row">
          <Link
            className="flex items-center justify-center h-12 w-full sm:w-48 rounded-full border border-transparent bg-blue-600 text-white font-semibold transition duration-200 hover:bg-blue-700 shadow-md transform hover:scale-105"
            href="/login"
          >
            Log In
          </Link>
          <Link
            className="flex items-center justify-center h-12 w-full sm:w-48 rounded-full border border-transparent bg-gray-200 text-gray-800 font-semibold transition duration-200 hover:bg-gray-300 shadow-md transform hover:scale-105"
            href="/signup"
          >
            Sign Up
          </Link>
        </div>
      </div>

      <footer className="mt-8 text-sm text-gray-300 z-10">
        <Link className="mx-2 hover:underline" href="/help">Help</Link>
        <Link className="mx-2 hover:underline" href="/about">About Us</Link>
        <Link className="mx-2 hover:underline" href="/contact">Contact Us</Link>
      </footer>
    </div>
  );
}
