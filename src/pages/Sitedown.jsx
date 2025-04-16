import { useState, useEffect } from 'react';
import { FaExclamationTriangle, FaLock } from 'react-icons/fa';

export default function SiteDownPage() {
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    const dueTime = localStorage.getItem("dueTime");
  
    if (!dueTime) {
      const now = Date.now();
      localStorage.setItem("dueTime", now);
      setTimeElapsed(0);
    } else {
      const elapsed = Math.floor((Date.now() - parseInt(dueTime)) / 1000);
      setTimeElapsed(elapsed);
    }
  
    const interval = setInterval(() => {
      setTimeElapsed(prev => prev + 1);
    }, 1000);
  
    return () => clearInterval(interval);
  }, []);
  

  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${days}d ${hours}h ${minutes}m ${secs}s`;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-950 text-white px-4 py-6">
      
      {/* Top Red Banner */}
      <div className="fixed top-0 left-0 right-0 bg-red-700 text-white py-3 shadow-md z-50 flex items-center justify-center">
        <FaExclamationTriangle className="mr-2 text-yellow-300 animate-pulse" size={22} />
        <span className="font-bold uppercase tracking-wide text-lg sm:text-xl">
          Service Suspended — Developer Unpaid
        </span>
      </div>

      {/* Main Card */}
      <div className="w-full max-w-2xl bg-zinc-900 mt-10 rounded-2xl shadow-lg p-8 border border-red-700">
        <div className="flex justify-center mb-6">
          <FaLock size={80} className="text-red-600 animate-pulse" />
        </div>

        <h1 className="text-3xl sm:text-4xl text-center font-bold text-red-500 mb-6">
          Website Temporarily Unavailable
        </h1>

        <div className="bg-zinc-800 border border-red-500 rounded-xl p-4 text-center mb-6">
          <p className="text-lg mb-2 text-gray-300">Time elapsed since payment was due:</p>
          <span className="text-3xl font-mono font-semibold text-red-500">{formatTime(timeElapsed)}</span>
        </div>

        <p className="text-md sm:text-lg text-center text-red-400 mb-6 font-medium">
          This website has been <span className="font-bold text-red-500">suspended</span> because the developer has <span className="font-bold text-red-500">not received payment</span> for their services.
        </p>

        <div className="bg-zinc-800 border border-red-600 p-5 rounded-xl mb-8">
          <h3 className="text-lg font-semibold text-red-400 mb-3">Service will resume when:</h3>
          <ul className="list-disc list-inside text-red-300 space-y-2 text-sm sm:text-base">
            <li>All outstanding invoices are cleared</li>
            <li>Payment is verified</li>
            <li>The developer reinstates the service</li>
          </ul>
        </div>

        <div className="flex justify-center">
          <a
            href="mailto:aurpitaurpit@gmail.com"
            className="bg-red-600 hover:bg-red-700 transition-colors font-semibold py-3 px-6 rounded-lg text-white shadow-md"
          >
            📩 Contact Developer
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-10 text-center text-sm text-red-400">
        <p>This site was designed and developed by a professional who deserves to be paid for their work.</p>
        <p className="mt-2 font-semibold">&copy; {new Date().getFullYear()} — All rights reserved</p>
      </footer>
    </div>
  );
}
