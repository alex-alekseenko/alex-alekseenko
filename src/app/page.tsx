import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold text-gray-900">Alex Alekseenko</div>
            <ul className="hidden md:flex space-x-8">
              <li><a href="#home" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Home</a></li>
              <li><a href="#expertise" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Expertise</a></li>
              <li><Link href="/case-studies" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Case Studies</Link></li>
              <li><a href="#experience" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Experience</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
              Building Global QA Teams<br />& Quality Strategy
            </h1>
            <p className="text-2xl text-gray-600 mb-6">Head of QA Engineering | Solution Architect</p>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              QA Leadership is not just about controlling quality — it&apos;s about enabling growth, 
              stability, and velocity through the right people, processes, and strategy.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600">10+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600">14</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">Team Size Managed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600">5</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">Product Lines</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600">&lt;2.6%</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">Defect Leakage</div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/case-studies" 
                className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                View Case Studies
              </Link>
              <a 
                href="#contact" 
                className="border-2 border-blue-700 text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Core Expertise</h2>
          <p className="text-xl text-gray-600 text-center mb-16">Transforming QA operations through strategic leadership and technical excellence</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Strategic QA Leadership</h3>
              <p className="text-gray-600">Design and implement scalable QA strategies from day one, aligning engineering efforts with business outcomes</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-2">Global Team Building</h3>
              <p className="text-gray-600">Lead and grow multicultural, remote-first teams across CIS, EU, and LATAM regions</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2">Metrics & KPIs</h3>
              <p className="text-gray-600">Define and track KPIs that align engineering efforts with business outcomes using data-driven approaches</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-2">Smart Automation</h3>
              <p className="text-gray-600">Introduce intelligent automation without overengineering or bottlenecks, optimizing for ROI</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold mb-2">Change Management</h3>
              <p className="text-gray-600">Guide teams through architectural and organizational transformations with minimal disruption</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2">Cross-functional Partnership</h3>
              <p className="text-gray-600">Act as a strategic partner to product and engineering leadership, not just a QA owner</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-semibold mb-6">Technical Domains</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {['SaaS', 'Fintech', 'HealthTech', 'AI/ML', 'AR/VR', 'IoT', 'Mobile (iOS/Android)'].map((tag) => (
                <span key={tag} className="bg-white border border-gray-200 px-4 py-2 rounded-full text-gray-700 hover:border-blue-600 hover:text-blue-600 transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section id="case-studies" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Featured Case Studies</h2>
          <p className="text-xl text-gray-600 text-center mb-16">Real-world transformations delivering measurable business impact</p>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Crisis-Driven QA Team Transformation</h3>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">CloudGeometry</span>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Led 14-person QA team through comprehensive transformation during company relocation to EU, 
                managing near-complete team dissolution while maintaining service continuity.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-gray-100 px-3 py-1 rounded-md text-sm font-medium">6-7 months rebuild</span>
                <span className="bg-gray-100 px-3 py-1 rounded-md text-sm font-medium">100% quality maintained</span>
                <span className="bg-gray-100 px-3 py-1 rounded-md text-sm font-medium">Zero client impact</span>
              </div>
              <Link 
                href="/case-studies/transformation" 
                className="text-blue-600 font-semibold hover:translate-x-1 transition-transform inline-flex items-center"
              >
                Read Full Case Study →
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Enterprise Test Automation Architecture</h3>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">SberDevices</span>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Built test automation from scratch for 900-person startup within regulated banking environment, 
                creating infrastructure for smart devices ecosystem competing with Amazon Alexa.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-gray-100 px-3 py-1 rounded-md text-sm font-medium">95% time reduction</span>
                <span className="bg-gray-100 px-3 py-1 rounded-md text-sm font-medium">1,670+ test scenarios</span>
                <span className="bg-gray-100 px-3 py-1 rounded-md text-sm font-medium">14-person team built</span>
              </div>
              <Link 
                href="/case-studies/automation" 
                className="text-blue-600 font-semibold hover:translate-x-1 transition-transform inline-flex items-center"
              >
                Read Full Case Study →
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Strategic Metrics Implementation</h3>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">CloudGeometry</span>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Transformed remote team performance through data-driven metrics system, 
                connecting KPIs directly to personal development and recognition systems.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-gray-100 px-3 py-1 rounded-md text-sm font-medium">3x defect reduction</span>
                <span className="bg-gray-100 px-3 py-1 rounded-md text-sm font-medium">73% velocity increase</span>
                <span className="bg-gray-100 px-3 py-1 rounded-md text-sm font-medium">Zero headcount growth</span>
              </div>
              <Link 
                href="/case-studies/metrics" 
                className="text-blue-600 font-semibold hover:translate-x-1 transition-transform inline-flex items-center"
              >
                Read Full Case Study →
              </Link>
            </div>
          </div>
          
          <div className="text-center">
            <Link 
              href="/case-studies" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Professional Journey</h2>
          <p className="text-xl text-gray-600 text-center mb-16">Building and scaling QA organizations across diverse industries</p>
          
          <div className="relative pl-8">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-300"></div>
            
            <div className="relative mb-12">
              <div className="absolute -left-3 top-0 w-3 h-3 bg-blue-600 rounded-full border-2 border-white shadow-lg"></div>
              <div className="text-sm text-gray-500 font-semibold mb-2">2022 - Present</div>
              <h3 className="text-2xl font-semibold mb-1">Head of QA Engineering</h3>
              <div className="text-blue-600 font-semibold mb-4">CloudGeometry</div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Rebuilt QA organization from single-region to multi-regional team (CIS, EU, LATAM). 
                Led transformation during crisis, achieved &lt;2.6% defect leakage, reduced automation expenses by 34%.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 border border-gray-200 px-3 py-1 rounded text-sm text-gray-700">AWS QuickSight</span>
                <span className="bg-gray-100 border border-gray-200 px-3 py-1 rounded text-sm text-gray-700">Python</span>
                <span className="bg-gray-100 border border-gray-200 px-3 py-1 rounded text-sm text-gray-700">DataBricks</span>
                <span className="bg-gray-100 border border-gray-200 px-3 py-1 rounded text-sm text-gray-700">AI/ML Tools</span>
              </div>
            </div>

            <div className="relative mb-12">
              <div className="absolute -left-3 top-0 w-3 h-3 bg-blue-600 rounded-full border-2 border-white shadow-lg"></div>
              <div className="text-sm text-gray-500 font-semibold mb-2">2020 - 2022</div>
              <h3 className="text-2xl font-semibold mb-1">Head of QA Automation</h3>
              <div className="text-blue-600 font-semibold mb-4">SberDevices</div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Built QA Automation department from scratch, scaling to 14 engineers. 
                Implemented enterprise-level automation strategy for smart devices ecosystem competing with Amazon Alexa.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 border border-gray-200 px-3 py-1 rounded text-sm text-gray-700">Java</span>
                <span className="bg-gray-100 border border-gray-200 px-3 py-1 rounded text-sm text-gray-700">Kotlin</span>
                <span className="bg-gray-100 border border-gray-200 px-3 py-1 rounded text-sm text-gray-700">Voice Assistants</span>
                <span className="bg-gray-100 border border-gray-200 px-3 py-1 rounded text-sm text-gray-700">IoT</span>
              </div>
            </div>

            <div className="relative mb-12">
              <div className="absolute -left-3 top-0 w-3 h-3 bg-blue-600 rounded-full border-2 border-white shadow-lg"></div>
              <div className="text-sm text-gray-500 font-semibold mb-2">2018 - 2020</div>
              <h3 className="text-2xl font-semibold mb-1">QA Automation Lead</h3>
              <div className="text-blue-600 font-semibold mb-4">WayRay</div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Led QA automation for next-gen AR/VR systems. Built VR auto-testing framework from scratch, 
                integrated backend and VR testing into unified pipelines.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 border border-gray-200 px-3 py-1 rounded text-sm text-gray-700">AR/VR</span>
                <span className="bg-gray-100 border border-gray-200 px-3 py-1 rounded text-sm text-gray-700">Python</span>
                <span className="bg-gray-100 border border-gray-200 px-3 py-1 rounded text-sm text-gray-700">CI/CD</span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-3 top-0 w-3 h-3 bg-blue-600 rounded-full border-2 border-white shadow-lg"></div>
              <div className="text-sm text-gray-500 font-semibold mb-2">2017 - 2018</div>
              <h3 className="text-2xl font-semibold mb-1">Senior QA Automation Engineer</h3>
              <div className="text-blue-600 font-semibold mb-4">Align Technology</div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Automated 100% test coverage for backend storage layer. 
                Increased auto-diagnosis algorithm efficiency from 18% to 34%.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 border border-gray-200 px-3 py-1 rounded text-sm text-gray-700">HealthTech</span>
                <span className="bg-gray-100 border border-gray-200 px-3 py-1 rounded text-sm text-gray-700">Data Pipelines</span>
                <span className="bg-gray-100 border border-gray-200 px-3 py-1 rounded text-sm text-gray-700">BI Analytics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Let&apos;s Connect</h2>
          <p className="text-xl text-gray-600 text-center mb-16">Ready to transform your QA operations and build world-class quality teams?</p>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <div className="text-sm text-gray-500 uppercase tracking-wide mb-1">Email</div>
                <a href="mailto:a.alekseenko.personal@gmail.com" className="text-blue-600 font-medium hover:underline">
                  a.alekseenko.personal@gmail.com
                </a>
              </div>
              <div>
                <div className="text-sm text-gray-500 uppercase tracking-wide mb-1">LinkedIn</div>
                <a 
                  href="https://www.linkedin.com/in/alexalekseenko" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 font-medium hover:underline"
                >
                  linkedin.com/in/alexalekseenko
                </a>
              </div>
              <div>
                <div className="text-sm text-gray-500 uppercase tracking-wide mb-1">Location</div>
                <span className="text-gray-900">Dubai, United Arab Emirates</span>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center">
              <p className="text-gray-600 mb-6 leading-relaxed">
                I help companies design and implement scalable QA strategies, build resilient globally distributed teams, 
                and drive quality transformation that enables business growth.
              </p>
              <a 
                href="mailto:a.alekseenko.personal@gmail.com" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get In Touch
              </a>
            </div>
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