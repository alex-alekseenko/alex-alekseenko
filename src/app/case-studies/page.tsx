import Link from "next/link";

export default function CaseStudies() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold text-gray-900">Alex Alekseenko</div>
            <ul className="hidden md:flex space-x-8">
              <li><Link href="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Home</Link></li>
              <li><Link href="/#expertise" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Expertise</Link></li>
              <li><Link href="/case-studies" className="text-blue-600 font-semibold">Case Studies</Link></li>
              <li><Link href="/#experience" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Experience</Link></li>
              <li><Link href="/#contact" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Case Studies</h1>
          <p className="text-xl text-gray-600">Real-world transformations delivering measurable business impact</p>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-8">
            {/* Case Study 1 - Transformation */}
            <article className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="flex justify-between items-center mb-4">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">CloudGeometry</span>
                <span className="text-gray-500 text-sm">2022-2024</span>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Crisis-Driven QA Team Transformation</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Led 14-person QA team through comprehensive transformation during company relocation to EU, 
                managing near-complete team dissolution while maintaining service continuity across five product lines.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <span className="block text-2xl font-semibold text-blue-600 mb-1">6-7 months</span>
                  <span className="text-sm text-gray-600">Full team rebuild</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <span className="block text-2xl font-semibold text-blue-600 mb-1">100%</span>
                  <span className="text-sm text-gray-600">Quality maintained</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <span className="block text-2xl font-semibold text-blue-600 mb-1">Seamless</span>
                  <span className="text-sm text-gray-600">Client transition</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Change Management</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Team Building</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Crisis Leadership</span>
              </div>
              <Link 
                href="/case-studies/transformation" 
                className="inline-flex items-center text-blue-600 font-semibold hover:gap-2 transition-all"
              >
                Read Full Case Study
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="ml-1">
                  <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </article>

            {/* Case Study 2 - Automation */}
            <article className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="flex justify-between items-center mb-4">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">SberDevices</span>
                <span className="text-gray-500 text-sm">2020-2022</span>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Enterprise Test Automation Architecture</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Built test automation from scratch for 900-person startup within regulated banking environment, 
                creating infrastructure for smart devices ecosystem competing with Amazon Alexa.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <span className="block text-2xl font-semibold text-blue-600 mb-1">95%</span>
                  <span className="text-sm text-gray-600">Time reduction</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <span className="block text-2xl font-semibold text-blue-600 mb-1">1,670+</span>
                  <span className="text-sm text-gray-600">Test scenarios</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <span className="block text-2xl font-semibold text-blue-600 mb-1">90 min</span>
                  <span className="text-sm text-gray-600">Regression time</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Test Automation</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">IoT</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Voice Assistants</span>
              </div>
              <Link 
                href="/case-studies/automation" 
                className="inline-flex items-center text-blue-600 font-semibold hover:gap-2 transition-all"
              >
                Read Full Case Study
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="ml-1">
                  <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </article>

            {/* Case Study 3 - Metrics */}
            <article className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="flex justify-between items-center mb-4">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">CloudGeometry</span>
                <span className="text-gray-500 text-sm">2023-2024</span>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Strategic Metrics Implementation</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Transformed remote team performance through data-driven metrics system, connecting KPIs directly 
                to personal development and recognition systems using AWS QuickSight and DataBricks.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <span className="block text-2xl font-semibold text-blue-600 mb-1">3x</span>
                  <span className="text-sm text-gray-600">Defect reduction</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <span className="block text-2xl font-semibold text-blue-600 mb-1">73%</span>
                  <span className="text-sm text-gray-600">Velocity increase</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <span className="block text-2xl font-semibold text-blue-600 mb-1">0%</span>
                  <span className="text-sm text-gray-600">Headcount growth</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Data Analytics</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">KPIs</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Performance Management</span>
              </div>
              <Link 
                href="/case-studies/metrics" 
                className="inline-flex items-center text-blue-600 font-semibold hover:gap-2 transition-all"
              >
                Read Full Case Study
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="ml-1">
                  <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Ready to Transform Your QA Operations?</h2>
            <p className="text-lg text-gray-600 mb-8">Let&apos;s discuss how I can help your organization build world-class quality teams and processes.</p>
            <Link 
              href="/#contact" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>&copy; 2025 Alex Alekseenko. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}