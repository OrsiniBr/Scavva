import React from "react";
import Link from "next/link";
// import { useTheme } from "next-themes";

const HomePage = () => {
  // const { resolvedTheme } = useTheme();
  // const isDarkMode = resolvedTheme === "dark";

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#32BAC4] to-[#8a45fc] bg-clip-text text-transparent">
          Welcome to Scavva
        </h1>
        <p className="text-lg md:text-xl mb-10 text-gray-600 dark:text-gray-300">
          Redeem confidence to continue building in our decentralized ecosystem
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link href="/projects">
            <button className="px-8 py-3 bg-base-100 border border-[#32BAC4] text-[#32BAC4] hover:bg-[#32BAC4] hover:text-white font-semibold rounded-lg shadow-md transition duration-300 transform hover:scale-105">
              View Enlisted Projects
            </button>
          </Link>
          
          <Link href="/create-project">
            <button className="px-8 py-3 bg-base-100 border border-[#8a45fc] text-[#8a45fc] hover:bg-[#8a45fc] hover:text-white font-semibold rounded-lg shadow-md transition duration-300 transform hover:scale-105">
              Create Your Project
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;