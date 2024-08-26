import { useState, useEffect } from "react";

export default function Home() {
  return (
    <div className="bg-slate-900 text-white flex">
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-6">Active Achievements</h1>
          
          <div className="grid grid-cols-3 gap-4 mb-6">
            {[1, 2, 3].map((index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg">
                <div className="w-8 h-8 bg-yellow-500 rounded-full mr-2"></div>
                <h2 className="font-semibold mt-2">Points Card</h2>
                <p className="text-sm text-gray-400 mb-2">Lorem ipsum is a default filler text that is used by anyone who doesn't need focus on text.</p>
                <div className="flex justify-between">
                  <p className="text-sm">
                    <span className="text-green-400">+4pts</span> / dollar 
                  </p>
                  <span className="text-gray-400">per day</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-800 rounded-lg overflow-hidden mb-6">
            <div className="flex justify-between items-center p-4 border-b border-gray-700 text-gray-400">
              <div className="flex items-center">
                <span className="text-gray-400 mr-2">🏆</span>
                <span className="font-semibold">15,422</span>
              </div>
                <span>LP</span>
                <span>Trade</span>
                <span>Referral</span>
                <span>Total</span>
            </div>
            
            <div className="divide-y divide-gray-700">
              {[...Array(10)].map((_, index) => (
                <div key={index} className="flex items-center py-3 px-4">
                  <span className="w-8 text-gray-400 text-sm">{index + 1}</span>
                  <div className="flex justify-between items-center w-full">
                    <span className="text-sm">HAPD..23EF</span>
                    <span className="w-12 text-gray-400 text-right text-sm"><span className="text-yellow-400">✦</span> {index < 6 ? '100' : '200'}</span>
                    <span className="w-12 text-gray-400 text-right text-sm"><span className="text-yellow-400">✦</span> {index < 6 ? '100' : '200'}</span>
                    <span className="w-12 text-gray-400 text-right text-sm"><span className="text-yellow-400">✦</span> {index < 6 ? '100' : '200'}</span>
                    <span className="w-12 text-gray-400 text-right text-sm"><span className="text-yellow-400">✦</span> {index < 6 ? '100' : '200'}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex space-x-4 mb-4">
            <span className="text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
              </svg>
            </span>
            <span className="text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </span>
            <span className="text-orange-400">System Status</span>
            <span className="text-green-400">Privacy Policy</span>
            <span className="text-yellow-400">Disclosures</span>
          </div>

          <div className="text-sm text-gray-400">
            <p>Trading digital currency entails significant risk and is not appropriate for all users. Digital currency values are not static and fluctuate due to market changes. Parcl does not provide financial advice or accept liability for any loss or damages.</p>
            <p className="mt-2">For legal information, view our <span className="text-green-400">Privacy Policy</span> and <span className="text-green-400">Terms of Use</span>.</p>
          </div>
        </div>

      <div className="w-80 space-y-4 mt-8 mr-2">
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-2">My Points</h2>
        <hr className="border-gray-700" />
        <div className="flex items-baseline mt-4">
          <span className="text-yellow-400 mr-2">⭐</span>
          <span className="text-2xl font-bold">100,000,000,000</span>
          <span className="text-sm ml-1">pts</span>
          <span className="ml-4 text-2xl">🎁</span>
        </div>
      </div>

      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-4 border border-green-500">
        <div className="flex items-center mb-2">
          <div className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-white text-xs font-bold px-2 py-1 rounded">
            <span className="bg-white text-black text-xs font-bold px-1 rounded">+5%</span>
            <span className="ml-2 font-semibold">TENSORIANS</span>
          </div>
          <span className="ml-auto text-green-500">✓</span>
        </div>
        <p className="text-sm text-gray-400 mb-2">
          Bonus active for an active TENSORIANS NFT in your active wallet. If the NFT is not present, you will not receive a boost for historical activity.
        </p>
        <p className="text-sm font-semibold">Trades • LP</p>
      </div>

      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-4">
        <div className="flex items-center mb-2">
          <div className="bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
          <span className="bg-white text-black text-xs font-bold px-1 rounded">+10%</span>
          <span className="ml-2 font-semibold">SNAPSHOT 2.0+</span>
          </div>
          <span className="ml-auto text-green-500">✓</span>
        </div>
        <p className="text-sm text-gray-400 mb-2">
          On &lt;snapshot_date&gt;, earned by anyone who has maintained or added funds to their LP Deposits or Trading Accounts & held an HOA NFT in accordance with Parcl Points Terms & Conditions.
        </p>
        <p className="text-sm font-semibold">Trades • LP</p>
      </div>
    </div>
    </div>
  );
}