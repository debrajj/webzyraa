import React from "react";

export function SocialMediaCard() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Social Media</h3>
        <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
          </svg>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        Build engaging social media presence with our creative content strategies.
      </p>
      <div className="flex items-center text-sm text-pink-500 font-medium">
        Learn More →
      </div>
    </div>
  );
}