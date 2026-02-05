import { useValentineStore } from "../store/valentineStore";

export const LoveLetter: React.FC = () => {
  const { saidYes } = useValentineStore();

  if (!saidYes) return null;

  return (
    <div className="absolute inset-0 flex items-center justify-center z-40 bg-gradient-to-br from-red-900/90 via-pink-900/90 to-purple-900/90 backdrop-blur-sm pointer-events-auto p-4">
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-300/40 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 30 + 15}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 4 + 3}s`,
            }}
          >
            💖
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-br from-white/95 via-pink-50/95 to-rose-100/95 backdrop-blur-md rounded-3xl p-8 md:p-12 w-full max-w-5xl shadow-2xl border-4 border-red-300/60 text-center relative overflow-hidden"
           style={{
             boxShadow: "0 0 80px rgba(255, 0, 68, 0.4), 0 0 120px rgba(255, 8, 68, 0.3), inset 0 0 60px rgba(255, 255, 255, 0.2)",
           }}>
        
        {/* Decorative corners */}
        <div className="absolute top-4 left-4 text-4xl text-red-500 animate-pulse">💕</div>
        <div className="absolute top-4 right-4 text-4xl text-red-500 animate-pulse">💕</div>
        <div className="absolute bottom-4 left-4 text-4xl text-red-500 animate-pulse">💕</div>
        <div className="absolute bottom-4 right-4 text-4xl text-red-500 animate-pulse">💕</div>

        <div className="mb-8">
          <h2
            className="text-5xl md:text-7xl font-bold mb-6 animate-pulse"
            style={{ 
              fontFamily: "Georgia, serif",
              background: "linear-gradient(45deg, #DC143C, #FF1493, #FF69B4, #DC143C)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 40px rgba(220, 20, 60, 0.8)",
            }}
          >
            🎉 You Made Me The Happiest! 🎉
          </h2>
        </div>

        <div className="space-y-8 text-xl md:text-3xl leading-relaxed" style={{ fontFamily: "Georgia, serif" }}>
          <p className="animate-fade-in text-gray-800 font-medium"
             style={{ textShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
            💕 <strong className="text-red-600">Lopamudra, you just made me the happiest person alive!</strong> 💕
          </p>
          
          <p className="animate-fade-in text-gray-700" style={{ animationDelay: "0.5s", textShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
            I am <span className="text-red-500 font-bold">forever grateful</span> that you said yes. You've filled my heart with so much <span className="text-pink-600 font-bold">joy and love</span>.
          </p>
          
          <p className="animate-fade-in text-gray-700" style={{ animationDelay: "1s", textShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
            I promise to always make you <span className="text-red-500 font-bold">happy</span>, to bring <span className="text-pink-600 font-bold">smiles</span> to your face every single day.
          </p>
          
          <p className="animate-fade-in text-gray-700" style={{ animationDelay: "1.5s", textShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
            You're my <span className="text-red-600 font-bold">everything</span>, and I can't wait to create <span className="text-pink-600 font-bold">beautiful memories</span> together.
          </p>
          
          <div className="flex justify-center items-center mt-8 space-x-4">
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-red-400 to-transparent"></div>
            <span className="text-4xl animate-pulse">💖</span>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-red-400 to-transparent"></div>
          </div>
          
          <p className="animate-fade-in text-3xl md:text-4xl font-bold" 
             style={{ 
               animationDelay: "2s",
               background: "linear-gradient(45deg, #DC143C, #FF1493, #FF69B4)",
               WebkitBackgroundClip: "text",
               WebkitTextFillColor: "transparent",
               textShadow: "0 0 30px rgba(220, 20, 60, 0.6)"
             }}>
            ✨ Forever yours, with all my love ✨
          </p>
        </div>

        <div className="mt-10 flex justify-center space-x-6 text-5xl">
          <span className="animate-bounce" style={{ color: "#DC143C" }}>💖</span>
          <span className="animate-bounce" style={{ animationDelay: "0.2s", color: "#FF1493" }}>🌹</span>
          <span className="animate-bounce" style={{ animationDelay: "0.4s", color: "#FF69B4" }}>💕</span>
          <span className="animate-bounce" style={{ animationDelay: "0.6s", color: "#DC143C" }}>💖</span>
        </div>
      </div>
    </div>
  );
};
