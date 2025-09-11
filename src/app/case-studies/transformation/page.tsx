import Link from "next/link";

export default function TransformationCaseStudy() {
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
              <li><Link href="/case-studies" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Case Studies</Link></li>
              <li><Link href="/#experience" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Experience</Link></li>
              <li><Link href="/#contact" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-20 pb-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link href="/case-studies" className="hover:text-blue-600">Case Studies</Link>
            <span>/</span>
            <span>Crisis-Driven QA Team Transformation</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Crisis-Driven QA Team Transformation</h1>
          <div className="flex flex-wrap gap-4">
            <span className="bg-blue-600 text-white px-4 py-1 rounded-full font-medium">CloudGeometry</span>
            <span className="text-gray-600">2022-2024</span>
            <span className="text-gray-600">Technology Services</span>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm text-gray-500 mb-2 uppercase tracking-wide">Challenge</h3>
              <p className="text-lg font-semibold text-gray-900">Crisis Management</p>
            </div>
            <div className="text-center bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm text-gray-500 mb-2 uppercase tracking-wide">Team Size</h3>
              <p className="text-lg font-semibold text-gray-900">14 Engineers</p>
            </div>
            <div className="text-center bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm text-gray-500 mb-2 uppercase tracking-wide">Timeline</h3>
              <p className="text-lg font-semibold text-gray-900">6-7 Months</p>
            </div>
            <div className="text-center bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm text-gray-500 mb-2 uppercase tracking-wide">Impact</h3>
              <p className="text-lg font-semibold text-gray-900">Zero Client Impact</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Challenge */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">The Challenge</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              In early 2022, CloudGeometry faced a perfect storm: company relocation from Russia to EU due to geopolitical crisis, 
              requiring complete QA team transformation while maintaining service quality for 5 active product lines.
            </p>
            
            <ul className="space-y-4">
              <li className="border-b border-gray-200 pb-4">
                <strong className="text-gray-900">Team Dissolution:</strong> Near-complete loss of 14-person QA team due to relocation constraints and personal circumstances
              </li>
              <li className="border-b border-gray-200 pb-4">
                <strong className="text-gray-900">Service Continuity:</strong> Zero tolerance for quality degradation during transition period affecting enterprise clients
              </li>
              <li className="border-b border-gray-200 pb-4">
                <strong className="text-gray-900">Geographic Complexity:</strong> Building new team across CIS, EU, and LATAM regions with cultural and timezone challenges
              </li>
              <li className="border-b border-gray-200 pb-4">
                <strong className="text-gray-900">Knowledge Transfer:</strong> Preserving critical domain knowledge and testing procedures across 5 different product lines
              </li>
            </ul>
          </div>

          {/* Approach */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Strategic Approach</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">Crisis Management</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Emergency knowledge documentation sprints</li>
                  <li>• Parallel team building and knowledge transfer</li>
                  <li>• Quality gate reinforcement during transition</li>
                  <li>• Client communication and expectation management</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">Team Rebuilding</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Multi-region recruitment strategy</li>
                  <li>• Accelerated onboarding programs</li>
                  <li>• Mentorship pairing with departing members</li>
                  <li>• Cultural integration workshops</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">Process Optimization</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Streamlined testing procedures</li>
                  <li>• Automation gap analysis and coverage</li>
                  <li>• Cross-training initiatives</li>
                  <li>• Documentation standardization</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">Change Management</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Gradual responsibility transition</li>
                  <li>• Risk assessment and mitigation</li>
                  <li>• Communication plan execution</li>
                  <li>• Performance monitoring and adjustment</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Implementation */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Implementation Timeline</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-xl">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-3 inline-block">Month 1-2</span>
                <h3 className="text-lg font-semibold text-blue-600 mb-2">Emergency Response & Planning</h3>
                <p className="text-gray-600">Conducted comprehensive knowledge capture sessions, created detailed documentation, and initiated multi-region recruitment process while maintaining current operations.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-xl">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-3 inline-block">Month 3-4</span>
                <h3 className="text-lg font-semibold text-blue-600 mb-2">Parallel Team Building</h3>
                <p className="text-gray-600">Onboarded new team members in CIS and EU regions, established mentor-mentee relationships, and began gradual responsibility transfer with shadow testing phases.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-xl">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-3 inline-block">Month 5-6</span>
                <h3 className="text-lg font-semibold text-blue-600 mb-2">Full Transition</h3>
                <p className="text-gray-600">Completed team handover, established LATAM presence, and implemented enhanced automation coverage to support distributed team operations.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-xl">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-3 inline-block">Month 7+</span>
                <h3 className="text-lg font-semibold text-blue-600 mb-2">Optimization & Growth</h3>
                <p className="text-gray-600">Refined processes based on new team feedback, expanded automation coverage, and established performance metrics for continuous improvement.</p>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Results & Impact</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <div className="text-3xl text-green-600 mb-2">📈</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Maintained</h3>
                <p className="text-gray-600">Zero client escalations during 7-month transition period</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <div className="text-3xl text-green-600 mb-2">🌍</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Team</h3>
                <p className="text-gray-600">Successfully established multi-regional QA operations</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <div className="text-3xl text-green-600 mb-2">⚡</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Process Improved</h3>
                <p className="text-gray-600">34% reduction in automation maintenance costs</p>
              </div>
            </div>

            <div className="mt-8 bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Impact</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Client Retention:</strong> 100% client retention during crisis period with zero service degradation</li>
                <li><strong>Cost Optimization:</strong> Achieved 34% reduction in automation expenses through process optimization</li>
                <li><strong>Team Resilience:</strong> Built geographically distributed team resistant to future disruptions</li>
                <li><strong>Knowledge Preservation:</strong> Maintained all critical testing knowledge and procedures across product lines</li>
              </ul>
            </div>
          </div>

          {/* Lessons Learned */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Key Lessons Learned</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">Crisis Preparedness</h3>
                <p className="text-gray-600">Maintaining up-to-date documentation and cross-training is crucial for business continuity during unexpected disruptions.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">Communication Excellence</h3>
                <p className="text-gray-600">Transparent, frequent communication with all stakeholders builds trust and enables successful transformation under pressure.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">Cultural Integration</h3>
                <p className="text-gray-600">Investing in cultural alignment and team building pays dividends in distributed team performance and collaboration.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">Process Resilience</h3>
                <p className="text-gray-600">Building robust, well-documented processes enables teams to maintain quality standards even during significant changes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex justify-between items-center">
            <Link 
              href="/case-studies" 
              className="text-blue-600 font-semibold hover:-translate-x-1 transition-transform inline-flex items-center"
            >
              ← Back to Case Studies
            </Link>
            <div className="flex space-x-4">
              <Link 
                href="/case-studies/automation" 
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Next Case Study →
              </Link>
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