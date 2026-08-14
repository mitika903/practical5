import React, { useState } from "react";

function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const getStrength = () => {
    if (password.length === 0) return { label: "", width: "w-0", color: "" };
    if (password.length < 6) return { label: "Weak", width: "w-1/3", color: "bg-rose-500 text-rose-400" };
    if (password.length < 10) return { label: "Medium", width: "w-2/3", color: "bg-amber-500 text-amber-400" };
    return { label: "Strong", width: "w-full", color: "bg-emerald-500 text-emerald-400" };
  };

  const strength = getStrength();

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden">
      
    
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-cyan-600/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-md bg-slate-900/90 backdrop-blur-2xl border border-slate-800 rounded-3xl p-8 shadow-2xl">

        <div className="text-center mb-6">
          <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider uppercase bg-slate-800/80 text-cyan-400 rounded-full border border-cyan-500/30 mb-3 shadow-sm">
            🔒 Secure Input
          </span>
          <h2 className="text-2xl font-black text-white tracking-tight">
            Password Verification
          </h2>
        </div>      
        <div className="space-y-4">
          <div>
            <label className="block mb-2 text-xs font-semibold uppercase tracking-wider text-slate-300">
              Password Field
            </label>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative flex items-center bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-inner">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter secure password..."
                  className="w-full bg-transparent px-4 py-3.5 text-slate-100 placeholder-slate-600 focus:outline-none text-sm font-medium tracking-wide pr-16"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 text-xs font-bold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 bg-slate-800/80 hover:bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-700 transition-all duration-200 active:scale-95 shadow-sm"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>
          </div>      
          {password.length > 0 && (
            <div className="pt-2">
              <div className="flex justify-between items-center text-xs mb-1.5 font-medium">
                <span className="text-slate-400">Security Level:</span>
                <span className={`font-bold ${strength.color.split(" ")[1]}`}>
                  {strength.label}
                </span>
              </div>
              <div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                <div className={`h-full transition-all duration-500 rounded-full ${strength.color.split(" ")[0]} ${strength.width}`}></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default PasswordInput;