export default function About() {
  return (
    <section className="relative" id="about">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 md:py-20">
          <div className="mx-auto max-w-4xl">
            <div className="text-center pb-12">
              <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
                <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                  About Us
                </span>
              </div>
              <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
                NajmX Tech Solutions
              </h2>
              <p className="text-lg text-indigo-200/65">
                Our star shines from Cairo, with offices in London and New York. 
                NajmX delivers enterprise telecommunications and IT infrastructure 
                solutions to businesses worldwide.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 pb-12">
              <div className="rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-6 border border-gray-800">
                <h3 className="font-nacelle text-xl font-semibold text-gray-200 mb-4">
                  What We Do
                </h3>
                <ul className="space-y-3 text-indigo-200/65">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500 mt-1">✓</span>
                    <span><strong className="text-gray-200">VoIP & Call Center Solutions</strong> - Premium voice services, intelligent routing, advanced dialers, IVR systems, and real-time analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500 mt-1">✓</span>
                    <span><strong className="text-gray-200">Secure Cloud Fax</strong> - StarSecure™ HIPAA/GDPR compliant solutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500 mt-1">✓</span>
                    <span><strong className="text-gray-200">AI-Agent Integration</strong> - Deploy intelligent conversational voice assistants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500 mt-1">✓</span>
                    <span><strong className="text-gray-200">Network Consultancy</strong> - Infrastructure design and optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500 mt-1">✓</span>
                    <span><strong className="text-gray-200">CRM Integration</strong> - StarSync™ seamless connectivity with your systems</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-6 border border-gray-800">
                <h3 className="font-nacelle text-xl font-semibold text-gray-200 mb-4">
                  Our Approach
                </h3>
                <ul className="space-y-3 text-indigo-200/65">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500 mt-1">✓</span>
                    <span><strong className="text-gray-200">Reliability</strong> - Enterprise-quality infrastructure you can trust</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500 mt-1">✓</span>
                    <span><strong className="text-gray-200">Security</strong> - Bank-level encryption and compliance standards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500 mt-1">✓</span>
                    <span><strong className="text-gray-200">Transparency</strong> - No hidden fees, honest pricing always</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500 mt-1">✓</span>
                    <span><strong className="text-gray-200">Support</strong> - 24/7 multilingual expert assistance across all time zones</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-8 border border-gray-800">
              <p className="text-indigo-200/65 mb-6">
                Founded in 2019, we combine telecommunications expertise with 
                cutting-edge AI technology to help businesses communicate smarter, 
                faster, and more securely.
              </p>
              
              <div className="mb-6">
                <h3 className="font-nacelle text-lg font-semibold text-gray-200 mb-3">
                  Global Offices
                </h3>
                <div className="flex flex-col items-center gap-4 text-indigo-200/65">
                  <div className="flex items-center gap-2">
                    <div className="relative flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                      <div className="absolute inset-0 w-2 h-2 rounded-full bg-green-400 animate-ping"></div>
                    </div>
                    <span>🇪🇬 Cairo, Egypt (Headquarters)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="relative flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                      <div className="absolute inset-0 w-2 h-2 rounded-full bg-blue-400 animate-ping"></div>
                    </div>
                    <span>🇬🇧 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, UK</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="relative flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></div>
                      <div className="absolute inset-0 w-2 h-2 rounded-full bg-indigo-400 animate-ping"></div>
                    </div>
                    <span>🇺🇸 30 N Gould St Ste R, Sheridan, WY 82801, USA</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <a 
                  href="mailto:info@najmx.net" 
                  className="text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  info@najmx.net
                </a>
                <span className="text-gray-700">|</span>
                <a 
                  href="mailto:sales@najmx.net" 
                  className="text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  sales@najmx.net
                </a>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-800">
                <p className="text-gray-400 text-sm">
                  <span className="text-gray-300 font-medium">Founder & CEO:</span> Alaa Hesham
                </p>
                <a 
                  href="mailto:wendyrussalesi@gmail.com" 
                  className="text-indigo-400 hover:text-indigo-300 transition-colors text-sm"
                >
                  wendyrussalesi@gmail.com
                </a>
              </div>

              <p className="text-indigo-200/65 italic mt-6">
                Every client is a star in our constellation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}