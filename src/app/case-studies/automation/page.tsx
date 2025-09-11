import Link from "next/link";

export default function AutomationCaseStudy() {
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
            <span>Enterprise Test Automation Architecture</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Enterprise Test Automation Architecture</h1>
          <div className="flex flex-wrap gap-4">
            <span className="bg-blue-600 text-white px-4 py-1 rounded-full font-medium">SberDevices</span>
            <span className="text-gray-600">2020-2022</span>
            <span className="text-gray-600">Banking / Smart Devices</span>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm text-gray-500 mb-2 uppercase tracking-wide">Company Size</h3>
              <p className="text-lg font-semibold text-gray-900">900 People</p>
            </div>
            <div className="text-center bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm text-gray-500 mb-2 uppercase tracking-wide">Test Scenarios</h3>
              <p className="text-lg font-semibold text-gray-900">1,670+</p>
            </div>
            <div className="text-center bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm text-gray-500 mb-2 uppercase tracking-wide">Time Reduction</h3>
              <p className="text-lg font-semibold text-gray-900">95%</p>
            </div>
            <div className="text-center bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm text-gray-500 mb-2 uppercase tracking-wide">Team Built</h3>
              <p className="text-lg font-semibold text-gray-900">14 Engineers</p>
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
              SberDevices, a 900-person startup within Russia&apos;s largest bank, was building a smart device ecosystem 
              to compete with Amazon Alexa. As Head of QA Automation, I needed to build enterprise-level test automation 
              from scratch within a regulated banking environment.
            </p>
            
            <ul className="space-y-4">
              <li className="border-b border-gray-200 pb-4">
                <strong className="text-gray-900">Greenfield Challenge:</strong> No existing automation infrastructure for complex IoT and voice assistant testing
              </li>
              <li className="border-b border-gray-200 pb-4">
                <strong className="text-gray-900">Regulatory Compliance:</strong> Banking industry requirements for security, audit trails, and controlled environments
              </li>
              <li className="border-b border-gray-200 pb-4">
                <strong className="text-gray-900">Technology Complexity:</strong> Testing voice interactions, IoT devices, mobile apps, and cloud services in an integrated ecosystem
              </li>
              <li className="border-b border-gray-200 pb-4">
                <strong className="text-gray-900">Scale Requirements:</strong> Support for rapid product development cycles and multiple device types simultaneously
              </li>
            </ul>
          </div>

          {/* Approach */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Technical Architecture</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">Voice Testing Framework</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Speech-to-text accuracy validation</li>
                  <li>• Intent recognition testing</li>
                  <li>• Multi-language voice command validation</li>
                  <li>• Audio quality and noise filtering tests</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">IoT Device Testing</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Hardware-in-the-loop testing setup</li>
                  <li>• Device firmware validation</li>
                  <li>• Connectivity and protocol testing</li>
                  <li>• Performance under various conditions</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">Integration Testing</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• End-to-end ecosystem validation</li>
                  <li>• API integration testing</li>
                  <li>• Cross-platform compatibility</li>
                  <li>• Security and data flow validation</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">CI/CD Integration</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Automated build validation</li>
                  <li>• Regression test execution</li>
                  <li>• Environment provisioning</li>
                  <li>• Deployment verification</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Technology Stack</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Core Technologies</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>Java & Kotlin</li>
                    <li>Selenium WebDriver</li>
                    <li>TestNG & JUnit</li>
                    <li>REST Assured</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Voice & IoT</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>Speech Recognition APIs</li>
                    <li>MQTT Protocol Testing</li>
                    <li>Device Simulators</li>
                    <li>Audio Processing Tools</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Infrastructure</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>Jenkins CI/CD</li>
                    <li>Docker Containers</li>
                    <li>TestRail Management</li>
                    <li>Allure Reporting</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Implementation */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Implementation Phases</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-xl">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-3 inline-block">Phase 1: Foundation</span>
                <h3 className="text-lg font-semibold text-blue-600 mb-2">Infrastructure & Team Building</h3>
                <p className="text-gray-600">Established core automation framework, hired and trained initial team of 6 engineers, set up development and testing environments within banking security constraints.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-xl">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-3 inline-block">Phase 2: Core Testing</span>
                <h3 className="text-lg font-semibold text-blue-600 mb-2">Voice & Device Automation</h3>
                <p className="text-gray-600">Developed specialized testing frameworks for voice recognition, built hardware-in-the-loop testing setup, created device simulation environment for various smart home devices.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-xl">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-3 inline-block">Phase 3: Integration</span>
                <h3 className="text-lg font-semibold text-blue-600 mb-2">End-to-End Ecosystem Testing</h3>
                <p className="text-gray-600">Integrated all testing components into unified pipeline, expanded team to 14 engineers, achieved 1,670+ automated test scenarios covering the complete product ecosystem.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-xl">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-3 inline-block">Phase 4: Optimization</span>
                <h3 className="text-lg font-semibold text-blue-600 mb-2">Performance & Scalability</h3>
                <p className="text-gray-600">Optimized test execution to 90-minute regression cycles, implemented parallel testing strategies, established comprehensive reporting and analytics system.</p>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Results & Impact</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <div className="text-3xl text-green-600 mb-2">⚡</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">95% Time Reduction</h3>
                <p className="text-gray-600">From 18 hours to 90 minutes for full regression testing</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <div className="text-3xl text-green-600 mb-2">🎯</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">1,670+ Scenarios</h3>
                <p className="text-gray-600">Comprehensive test coverage across all product lines</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <div className="text-3xl text-green-600 mb-2">👥</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Team of 14</h3>
                <p className="text-gray-600">Built and scaled high-performing automation team</p>
              </div>
            </div>

            <div className="mt-8 bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Impact</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Release Velocity:</strong> Enabled daily releases with confidence through comprehensive automated validation</li>
                <li><strong>Quality Assurance:</strong> Achieved consistent quality across complex IoT ecosystem competing with market leaders</li>
                <li><strong>Cost Efficiency:</strong> Reduced testing costs by 95% while increasing coverage and reliability</li>
                <li><strong>Market Readiness:</strong> Supported successful product launch competing directly with Amazon Alexa in Russian market</li>
              </ul>
            </div>
          </div>

          {/* Technical Innovation */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Technical Innovations</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">Voice Testing Breakthrough</h3>
                <p className="text-gray-600">Developed industry-first automated voice command testing framework that could validate speech recognition accuracy, intent parsing, and response generation in multiple languages simultaneously.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">Hardware Integration</h3>
                <p className="text-gray-600">Created hardware-in-the-loop testing system that could simulate various IoT devices and test real-world scenarios including network interruptions and device failures.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">Parallel Execution</h3>
                <p className="text-gray-600">Implemented intelligent test parallelization that reduced execution time from 18 hours to 90 minutes while maintaining test reliability and comprehensive coverage.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">Banking Compliance</h3>
                <p className="text-gray-600">Designed automation architecture that met stringent banking security requirements including audit trails, data encryption, and controlled environment testing.</p>
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
              href="/case-studies/transformation" 
              className="text-blue-600 font-semibold hover:-translate-x-1 transition-transform inline-flex items-center"
            >
              ← Previous Case Study
            </Link>
            <div className="flex space-x-4">
              <Link 
                href="/case-studies/metrics" 
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