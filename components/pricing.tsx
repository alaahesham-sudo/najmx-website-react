"use client";

import { useState, useEffect } from "react";

export default function Pricing() {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);
  const [glowIntensity, setGlowIntensity] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlowIntensity(prev => (prev + 0.02) % 1);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const plans = [
    {
      name: "Starter",
      constellation: "Starter",
      icon: "single-star",
      description: "Perfect for small businesses getting started",
      features: [
        "Up to 50 concurrent calls",
        "Basic IVR & call routing",
        "Standard support (business hours)",
        "Email-to-fax included",
        "Basic analytics dashboard",
      ],
      color: "from-emerald-500/20 to-emerald-600/10",
      borderColor: "border-emerald-500/30",
      textColor: "text-emerald-400",
      buttonColor: "from-emerald-600 to-emerald-500",
    },
    {
      name: "Pro",
      constellation: "Pro",
      icon: "orion-belt",
      description: "Ideal for growing businesses with advanced needs",
      features: [
        "Up to 500 concurrent calls",
        "Advanced IVR & intelligent routing",
        "Priority support (24/7)",
        "Full fax suite with API",
        "Advanced analytics & reporting",
        "CRM integration (StarSync™)",
        "NajmAgent integration",
      ],
      color: "from-indigo-500/20 to-indigo-600/10",
      borderColor: "border-indigo-500/30",
      textColor: "text-indigo-400",
      buttonColor: "from-indigo-600 to-indigo-500",
      popular: true,
    },
    {
      name: "Enterprise",
      constellation: "Enterprise",
      icon: "spiral-galaxy",
      description: "For large organizations requiring maximum capabilities",
      features: [
        "Unlimited concurrent calls",
        "Custom IVR & routing logic",
        "Dedicated account manager",
        "Enterprise fax with compliance",
        "Custom analytics & dashboards",
        "Full CRM & system integration",
        "Advanced NajmAgent suite",
        "Custom SLA & guarantees",
      ],
      color: "from-purple-500/20 to-purple-600/10",
      borderColor: "border-purple-500/30",
      textColor: "text-purple-400",
      buttonColor: "from-purple-600 to-purple-500",
    },
  ];

  const BigDipperIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Big Dipper - 7 stars forming a dipper shape */}
      <circle cx="8" cy="6" r="2" fill="url(#bigDipperGrad)" />
      <circle cx="12" cy="8" r="2.5" fill="url(#bigDipperGrad)" />
      <circle cx="16" cy="10" r="2" fill="url(#bigDipperGrad)" />
      <circle cx="14" cy="14" r="2" fill="url(#bigDipperGrad)" />
      <circle cx="10" cy="16" r="2" fill="url(#bigDipperGrad)" />
      <circle cx="6" cy="14" r="1.5" fill="url(#bigDipperGrad)" />
      <circle cx="4" cy="12" r="1.5" fill="url(#bigDipperGrad)" />
      {/* Connecting lines */}
      <line x1="8" y1="6" x2="12" y2="8" stroke="url(#bigDipperStroke)" strokeWidth="1" opacity="0.4" />
      <line x1="12" y1="8" x2="16" y2="10" stroke="url(#bigDipperStroke)" strokeWidth="1" opacity="0.4" />
      <line x1="16" y1="10" x2="14" y2="14" stroke="url(#bigDipperStroke)" strokeWidth="1" opacity="0.4" />
      <line x1="14" y1="14" x2="10" y2="16" stroke="url(#bigDipperStroke)" strokeWidth="1" opacity="0.4" />
      <line x1="10" y1="16" x2="6" y2="14" stroke="url(#bigDipperStroke)" strokeWidth="1" opacity="0.4" />
      <line x1="6" y1="14" x2="4" y2="12" stroke="url(#bigDipperStroke)" strokeWidth="1" opacity="0.4" />
      <defs>
        <linearGradient id="bigDipperGrad" x1="12" y1="6" x2="12" y2="16">
          <stop offset="0%" stopColor="#FFD700"/>
          <stop offset="100%" stopColor="#FFA500"/>
        </linearGradient>
        <linearGradient id="bigDipperStroke" x1="8" y1="6" x2="4" y2="12">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.6"/>
          <stop offset="100%" stopColor="#FFA500" stopOpacity="0.3"/>
        </linearGradient>
      </defs>
    </svg>
  );

  const OrionIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Orion's Belt - three stars in a line */}
      <circle cx="8" cy="12" r="2" fill="url(#orionGrad)" />
      <circle cx="12" cy="12" r="2.5" fill="url(#orionGrad)" />
      <circle cx="16" cy="12" r="2" fill="url(#orionGrad)" />
      {/* Additional constellation points */}
      <circle cx="10" cy="8" r="1.5" fill="url(#orionGrad)" opacity="0.7" />
      <circle cx="14" cy="8" r="1.5" fill="url(#orionGrad)" opacity="0.7" />
      <circle cx="12" cy="16" r="1.5" fill="url(#orionGrad)" opacity="0.7" />
      {/* Connecting lines */}
      <line x1="8" y1="12" x2="12" y2="12" stroke="url(#orionLine)" strokeWidth="0.5" opacity="0.4" />
      <line x1="12" y1="12" x2="16" y2="12" stroke="url(#orionLine)" strokeWidth="0.5" opacity="0.4" />
      <defs>
        <linearGradient id="orionGrad" x1="12" y1="8" x2="12" y2="16">
          <stop offset="0%" stopColor="#6366F1"/>
          <stop offset="50%" stopColor="#8B5CF6"/>
          <stop offset="100%" stopColor="#A78BFA"/>
        </linearGradient>
        <linearGradient id="orionLine" x1="8" y1="12" x2="16" y2="12">
          <stop offset="0%" stopColor="#6366F1" stopOpacity="0.5"/>
          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3"/>
        </linearGradient>
      </defs>
    </svg>
  );

  const CassiopeiaIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Cassiopeia - W-shaped constellation */}
      <circle cx="8" cy="8" r="2.5" fill="url(#cassiopeiaGrad)" />
      <circle cx="12" cy="6" r="2.5" fill="url(#cassiopeiaGrad)" />
      <circle cx="16" cy="8" r="2.5" fill="url(#cassiopeiaGrad)" />
      <circle cx="14" cy="12" r="2" fill="url(#cassiopeiaGrad)" />
      <circle cx="10" cy="14" r="2" fill="url(#cassiopeiaGrad)" />
      {/* Connecting lines forming W shape */}
      <line x1="8" y1="8" x2="12" y2="6" stroke="url(#cassiopeiaStroke)" strokeWidth="1.5" opacity="0.5" />
      <line x1="12" y1="6" x2="16" y2="8" stroke="url(#cassiopeiaStroke)" strokeWidth="1.5" opacity="0.5" />
      <line x1="16" y1="8" x2="14" y2="12" stroke="url(#cassiopeiaStroke)" strokeWidth="1.5" opacity="0.5" />
      <line x1="14" y1="12" x2="10" y2="14" stroke="url(#cassiopeiaStroke)" strokeWidth="1.5" opacity="0.5" />
      <defs>
        <linearGradient id="cassiopeiaGrad" x1="12" y1="6" x2="12" y2="14">
          <stop offset="0%" stopColor="#C084FC"/>
          <stop offset="100%" stopColor="#8B5CF6"/>
        </linearGradient>
        <linearGradient id="cassiopeiaStroke" x1="8" y1="6" x2="10" y2="14">
          <stop offset="0%" stopColor="#C084FC" stopOpacity="0.7"/>
          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.4"/>
        </linearGradient>
      </defs>
    </svg>
  );

  const getIcon = (iconType: string, className: string) => {
    switch (iconType) {
      case "single-star":
        return <BigDipperIcon className={className} />;
      case "orion-belt":
        return <OrionIcon className={className} />;
      case "spiral-galaxy":
        return <CassiopeiaIcon className={className} />;
      default:
        return <BigDipperIcon className={className} />;
    }
  };

  return (
    <section className="relative" id="pricing">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 md:py-20">
          <div className="mx-auto max-w-4xl text-center mb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Pricing
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Choose Your Constellation
            </h2>
            <p className="text-lg text-indigo-200/65">
              Every business is a star. Find your perfect constellation in our galaxy of solutions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl bg-gradient-to-br ${plan.color} p-8 border ${plan.borderColor} transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  plan.popular 
                    ? `ring-2 ring-indigo-500/60 shadow-xl shadow-indigo-500/20 hover:shadow-indigo-500/30` 
                    : "hover:shadow-indigo-500/20"
                }`}
                onMouseEnter={() => setHoveredPlan(plan.name)}
                onMouseLeave={() => setHoveredPlan(null)}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                style={plan.popular ? {
                  boxShadow: `0 0 ${20 + Math.sin(glowIntensity * Math.PI * 2) * 5}px rgba(99, 102, 241, ${0.25 + Math.sin(glowIntensity * Math.PI * 2) * 0.1})`,
                  zIndex: 10
                } : {}}
              >
                {plan.popular && (
                  <>
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
                      <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-2 text-sm font-bold text-white shadow-xl">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        Most Popular
                      </span>
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/5 to-purple-500/5 pointer-events-none z-0"></div>
                  </>
                )}

                <div className="text-center mb-6 relative z-10">
                  <div className="flex justify-center mb-3">
                    <div className={`transition-transform duration-300 ${hoveredPlan === plan.name ? 'scale-110' : ''}`}>
                      {getIcon(plan.icon, "w-16 h-16")}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-200 mb-4 -mt-2">{plan.name}</h3>
                  <p className="text-sm text-indigo-200/65">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8 relative z-10">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${plan.color} border ${plan.borderColor} flex items-center justify-center mt-0.5`}>
                        <svg className={`w-3 h-3 ${plan.textColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-indigo-200/65">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <a
                    href="/contact"
                    className={`block w-full text-center rounded-lg bg-gradient-to-t ${plan.buttonColor} px-6 py-3 text-white font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105 relative z-10 ${
                      plan.popular ? 'ring-2 ring-indigo-400/50' : ''
                    }`}
                  >
                    Request Quote
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-8 border border-gray-800">
              <h3 className="font-nacelle text-xl font-semibold text-gray-200 mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-indigo-200/65 mb-6">
                We offer tailored packages for businesses with specific requirements. Contact our team to discuss your needs and get a personalized quote.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-t from-indigo-600 to-indigo-500 px-8 py-4 text-white font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Contact Sales Team
                <span className="text-white/50">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
