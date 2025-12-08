"use client";

import { useEffect, useState } from "react";

export default function HeroHome() {
  const [metrics, setMetrics] = useState({
    uptime: 99.97,
    calls: 24547,
    minutes: 1.24,
    countries: 45
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics({
        uptime: 99.97,
        calls: Math.floor(24000 + Math.random() * 1000),
        minutes: parseFloat((1.2 + Math.random() * 0.1).toFixed(2)),
        countries: 45
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const chartData = [48, 55, 52, 64, 61, 70, 75, 72, 81, 85, 82, 90];

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              Every Client is a Star in Our Constellation
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                NajmX delivers cutting-edge VoIP and FAX solutions that connect businesses across Egypt, UK, and US markets. Let your business shine with our reliable communication technology.
              </p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn group mb-4 w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-lg hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#contact"
                  >
                    <span className="relative inline-flex items-center">
                      Request Demo
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
                <div data-aos="fade-up" data-aos-delay={600}>
                  <a
                    className="btn relative w-full bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 border border-gray-700 hover:bg-[length:100%_150%] hover:border-gray-600 transition-all sm:ml-4 sm:w-auto"
                    href="#products"
                  >
                    View Solutions
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative" data-aos="fade-up" data-aos-delay={800}>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900/90 via-gray-800/50 to-gray-900/90 backdrop-blur-xl border border-white/5 shadow-2xl">
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: 'linear-gradient(rgba(99, 102, 241, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px)',
                backgroundSize: '50px 50px'
              }}></div>

              <div className="relative p-8">
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white">NajmX Platform</h3>
                      <p className="text-xs text-gray-400">Enterprise Communications</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-lg shadow-green-400/50"></div>
                    <span className="text-xs font-medium text-gray-400">Live</span>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4 mb-8">
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/5 backdrop-blur-sm border border-emerald-500/20 p-4 group hover:scale-105 transition-all">
                    <p className="text-2xl font-bold text-emerald-400 mb-1 transition-all duration-500">{metrics.uptime}%</p>
                    <p className="text-xs text-gray-400">Uptime SLA</p>
                  </div>

                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/5 backdrop-blur-sm border border-blue-500/20 p-4 group hover:scale-105 transition-all">
                    <p className="text-2xl font-bold text-blue-400 mb-1 transition-all duration-500">{metrics.calls.toLocaleString()}+</p>
                    <p className="text-xs text-gray-400">Active Calls</p>
                    <div className="absolute top-2 right-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></div>
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/5 backdrop-blur-sm border border-purple-500/20 p-4 group hover:scale-105 transition-all">
                    <p className="text-2xl font-bold text-purple-400 mb-1 transition-all duration-500">{metrics.minutes}M+</p>
                    <p className="text-xs text-gray-400">Daily Minutes</p>
                  </div>

                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/5 backdrop-blur-sm border border-amber-500/20 p-4 group hover:scale-105 transition-all">
                    <p className="text-2xl font-bold text-amber-400 mb-1 transition-all duration-500">{metrics.countries}+</p>
                    <p className="text-xs text-gray-400">Countries</p>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-white/5 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-sm font-semibold text-white">Network Performance</h4>
                    <div className="flex gap-4 text-xs">
                      <span className="flex items-center gap-2 text-gray-400">
                        <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                        Traffic Load
                      </span>
                    </div>
                  </div>
                  
                  <div className="relative h-40 px-4">
                    <svg className="w-full h-full" viewBox="0 0 600 160" preserveAspectRatio="xMidYMid meet">
                      <defs>
                        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#6366F1" />
                          <stop offset="50%" stopColor="#8B5CF6" />
                          <stop offset="100%" stopColor="#A78BFA" />
                        </linearGradient>
                        <filter id="glow">
                          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                          <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                          </feMerge>
                        </filter>
                      </defs>
                      
                      <path
                        d={`M ${chartData.map((val, i) => `${(i / (chartData.length - 1)) * 600} ${160 - val * 1.5}`).join(' L ')}`}
                        fill="none"
                        stroke="url(#lineGrad)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ animation: 'drawLine 2s ease-out forwards' }}
                      />
                      
                      {chartData.map((val, i) => {
                        const x = (i / (chartData.length - 1)) * 600;
                        const y = 160 - val * 1.5;
                        return (
                          <g key={i} className="group cursor-pointer" style={{ animation: `dotFade 0.4s ease-out ${i * 0.08}s both` }}>
                            <circle
                              cx={x}
                              cy={y}
                              r="8"
                              fill="#6366F1"
                              opacity="0.2"
                              filter="url(#glow)"
                              className="group-hover:opacity-40 transition-opacity"
                            >
                              <animate attributeName="r" values="8;10;8" dur="2s" repeatCount="indefinite" />
                            </circle>
                            
                            <circle
                              cx={x}
                              cy={y}
                              r="4"
                              fill="#6366F1"
                              className="group-hover:fill-[#A78BFA] transition-colors"
                            >
                              <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
                            </circle>
                            
                            <circle
                              cx={x}
                              cy={y}
                              r="1.5"
                              fill="white"
                              opacity="0.8"
                            />
                            
                            <g className="opacity-0 group-hover:opacity-100 transition-opacity" pointerEvents="none">
                              <rect
                                x={x - 20}
                                y={y - 35}
                                width="40"
                                height="24"
                                rx="6"
                                fill="#1F2937"
                                stroke="#6366F1"
                                strokeWidth="1"
                                opacity="0.95"
                              />
                              <text
                                x={x}
                                y={y - 18}
                                textAnchor="middle"
                                fill="white"
                                fontSize="11"
                                fontWeight="600"
                              >
                                {val}%
                              </text>
                            </g>
                          </g>
                        );
                      })}
                    </svg>
                  </div>
                  
                  <div className="flex justify-between mt-4 text-xs text-gray-500">
                    <span>Jan</span>
                    <span>Apr</span>
                    <span>Jul</span>
                    <span>Oct</span>
                    <span>Dec</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-6">
                  {[
                    { label: 'VoIP Services', status: 'Operational' },
                    { label: 'FAX Gateway', status: 'Operational' },
                    { label: 'Network Status', status: 'Optimal' },
                  ].map((service, i) => (
                    <div key={i} className="flex items-center justify-between px-4 py-3 rounded-xl bg-gray-800/30 border border-white/5 hover:border-green-500/20 transition-all group">
                      <span className="text-xs font-medium text-gray-300 group-hover:text-white transition-colors">{service.label}</span>
                      <div className="flex items-center gap-2">
                        <div className="relative">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-lg shadow-green-400/50"></div>
                          <div className="absolute inset-0 w-1.5 h-1.5 rounded-full bg-green-400 animate-ping"></div>
                        </div>
                        <span className="text-xs text-green-400">{service.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes drawLine {
          from { stroke-dasharray: 1000; stroke-dashoffset: 1000; }
          to { stroke-dasharray: 1000; stroke-dashoffset: 0; }
        }
        @keyframes dotFade {
          from { opacity: 0; transform: scale(0); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
}