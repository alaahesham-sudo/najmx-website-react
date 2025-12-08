"use client";

export default function Pricing() {
  return (
    <section className="relative" id="pricing">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                <svg className="inline-block mr-2" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="url(#starGradient)" stroke="url(#starGradient)" strokeWidth="1"/>
                  <defs>
                    <linearGradient id="starGradient" x1="2" y1="2" x2="22" y2="21">
                      <stop offset="0%" stopColor="#FFD700"/>
                      <stop offset="50%" stopColor="#FFA500"/>
                      <stop offset="100%" stopColor="#FF8C00"/>
                    </linearGradient>
                  </defs>
                </svg>
                Pricing
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Custom Solutions for Every Business
            </h2>

            <div className="rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-8 border border-gray-800 mt-8">
              <p className="text-lg text-gray-200 mb-8">
                NajmX offers flexible packages tailored to your needs:
              </p>
              
              <div className="flex flex-wrap justify-center gap-12 mb-10">
                <div className="flex flex-col items-center gap-2">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="url(#starGold1)" stroke="url(#starStroke1)" strokeWidth="0.5"/>
                    <defs>
                      <linearGradient id="starGold1" x1="12" y1="2" x2="12" y2="21">
                        <stop offset="0%" stopColor="#FFD700"/>
                        <stop offset="50%" stopColor="#FFC850"/>
                        <stop offset="100%" stopColor="#FFB020"/>
                      </linearGradient>
                      <linearGradient id="starStroke1" x1="12" y1="2" x2="12" y2="21">
                        <stop offset="0%" stopColor="#FFA500"/>
                        <stop offset="100%" stopColor="#FF8C00"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="text-xl font-semibold text-gray-200">Starter</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <div className="flex gap-1">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="url(#starGold2)" stroke="url(#starStroke2)" strokeWidth="0.5"/>
                      <defs>
                        <linearGradient id="starGold2" x1="12" y1="2" x2="12" y2="21">
                          <stop offset="0%" stopColor="#FFD700"/>
                          <stop offset="50%" stopColor="#FFC850"/>
                          <stop offset="100%" stopColor="#FFB020"/>
                        </linearGradient>
                        <linearGradient id="starStroke2" x1="12" y1="2" x2="12" y2="21">
                          <stop offset="0%" stopColor="#FFA500"/>
                          <stop offset="100%" stopColor="#FF8C00"/>
                        </linearGradient>
                      </defs>
                    </svg>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="url(#starGold3)" stroke="url(#starStroke3)" strokeWidth="0.5"/>
                      <defs>
                        <linearGradient id="starGold3" x1="12" y1="2" x2="12" y2="21">
                          <stop offset="0%" stopColor="#FFD700"/>
                          <stop offset="50%" stopColor="#FFC850"/>
                          <stop offset="100%" stopColor="#FFB020"/>
                        </linearGradient>
                        <linearGradient id="starStroke3" x1="12" y1="2" x2="12" y2="21">
                          <stop offset="0%" stopColor="#FFA500"/>
                          <stop offset="100%" stopColor="#FF8C00"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <span className="text-xl font-semibold text-gray-200">Pro</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <div className="flex gap-1">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="url(#starGold4)" stroke="url(#starStroke4)" strokeWidth="0.5"/>
                      <defs>
                        <linearGradient id="starGold4" x1="12" y1="2" x2="12" y2="21">
                          <stop offset="0%" stopColor="#FFD700"/>
                          <stop offset="50%" stopColor="#FFC850"/>
                          <stop offset="100%" stopColor="#FFB020"/>
                        </linearGradient>
                        <linearGradient id="starStroke4" x1="12" y1="2" x2="12" y2="21">
                          <stop offset="0%" stopColor="#FFA500"/>
                          <stop offset="100%" stopColor="#FF8C00"/>
                        </linearGradient>
                      </defs>
                    </svg>
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="url(#starGold5)" stroke="url(#starStroke5)" strokeWidth="0.5"/>
                      <defs>
                        <linearGradient id="starGold5" x1="12" y1="2" x2="12" y2="21">
                          <stop offset="0%" stopColor="#FFD700"/>
                          <stop offset="50%" stopColor="#FFC850"/>
                          <stop offset="100%" stopColor="#FFB020"/>
                        </linearGradient>
                        <linearGradient id="starStroke5" x1="12" y1="2" x2="12" y2="21">
                          <stop offset="0%" stopColor="#FFA500"/>
                          <stop offset="100%" stopColor="#FF8C00"/>
                        </linearGradient>
                      </defs>
                    </svg>
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="url(#starGold6)" stroke="url(#starStroke6)" strokeWidth="0.5"/>
                      <defs>
                        <linearGradient id="starGold6" x1="12" y1="2" x2="12" y2="21">
                          <stop offset="0%" stopColor="#FFD700"/>
                          <stop offset="50%" stopColor="#FFC850"/>
                          <stop offset="100%" stopColor="#FFB020"/>
                        </linearGradient>
                        <linearGradient id="starStroke6" x1="12" y1="2" x2="12" y2="21">
                          <stop offset="0%" stopColor="#FFA500"/>
                          <stop offset="100%" stopColor="#FF8C00"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <span className="text-xl font-semibold text-gray-200">Enterprise</span>
                </div>
              </div>

              <p className="text-indigo-200/65 mb-6">
                Contact our team for a personalized quote
              </p>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-t from-indigo-600 to-indigo-500 px-6 py-3 text-white font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Request Pricing Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}