import Link from "next/link";

export default function MetricsCaseStudy() {
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
            <span>Strategic Metrics Implementation</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Strategic Metrics Implementation</h1>
          <div className="flex flex-wrap gap-4">
            <span className="bg-blue-600 text-white px-4 py-1 rounded-full font-medium">CloudGeometry</span>
            <span className="text-gray-600">2023-2024</span>
            <span className="text-gray-600">Technology Services</span>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm text-gray-500 mb-2 uppercase tracking-wide">Defect Reduction</h3>
              <p className="text-lg font-semibold text-gray-900">3x</p>
            </div>
            <div className="text-center bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm text-gray-500 mb-2 uppercase tracking-wide">Velocity Increase</h3>
              <p className="text-lg font-semibold text-gray-900">73%</p>
            </div>
            <div className="text-center bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm text-gray-500 mb-2 uppercase tracking-wide">Team Growth</h3>
              <p className="text-lg font-semibold text-gray-900">0%</p>
            </div>
            <div className="text-center bg-gray-50 p-4 rounded-lg">
              <h3 className="text-sm text-gray-500 mb-2 uppercase tracking-wide">ROI</h3>
              <p className="text-lg font-semibold text-gray-900">340%</p>
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
              After successfully rebuilding the QA team, CloudGeometry needed to optimize performance and demonstrate 
              QA value to business stakeholders. The challenge was to create a data-driven culture that would improve 
              both individual and team performance without increasing headcount.
            </p>
            
            <ul className="space-y-4">
              <li className="border-b border-gray-200 pb-4">
                <strong className="text-gray-900">Invisible Impact:</strong> QA contributions were not quantified or visible to business leadership
              </li>
              <li className="border-b border-gray-200 pb-4">
                <strong className="text-gray-900">Performance Gaps:</strong> Inconsistent individual performance across distributed remote team
              </li>
              <li className="border-b border-gray-200 pb-4">
                <strong className="text-gray-900">Resource Constraints:</strong> Need to improve velocity and quality without additional team members
              </li>
              <li className="border-b border-gray-200 pb-4">
                <strong className="text-gray-900">Motivation Issues:</strong> Lack of clear career progression and recognition system for remote team
              </li>
            </ul>
          </div>

          {/* Vision */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Strategic Vision</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">Data-Driven Culture</h3>
                <p className="text-gray-600">Transform QA from cost center to value driver through comprehensive metrics and business impact demonstration.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">Performance Excellence</h3>
                <p className="text-gray-600">Create individual performance tracking system connected to career development and recognition programs.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">Business Alignment</h3>
                <p className="text-gray-600">Connect QA metrics directly to business outcomes and demonstrate ROI of quality investments.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">Continuous Improvement</h3>
                <p className="text-gray-600">Establish feedback loops for ongoing optimization and team performance enhancement.</p>
              </div>
            </div>
          </div>

          {/* Architecture */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Metrics Architecture</h2>
            
            <div className="bg-blue-50 p-6 rounded-xl mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Technology Stack</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Data Collection</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>JIRA API Integration</li>
                    <li>TestRail API</li>
                    <li>GitLab CI/CD Metrics</li>
                    <li>Custom Python Scripts</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Data Processing</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>Apache Airflow</li>
                    <li>DataBricks ETL</li>
                    <li>AWS Lambda Functions</li>
                    <li>PostgreSQL Database</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Visualization</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>AWS QuickSight</li>
                    <li>Custom Dashboards</li>
                    <li>Automated Reporting</li>
                    <li>Slack Integrations</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">Quality Metrics</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Defect density per module</li>
                  <li>• Defect leakage rates</li>
                  <li>• Test coverage trends</li>
                  <li>• Automation coverage</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">Velocity Metrics</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Test execution efficiency</li>
                  <li>• Time to market impact</li>
                  <li>• Release cycle metrics</li>
                  <li>• Feature delivery speed</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">Individual KPIs</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Test case productivity</li>
                  <li>• Defect find rate</li>
                  <li>• Automation contribution</li>
                  <li>• Knowledge sharing score</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Implementation */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Implementation Strategy</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-xl">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-3 inline-block">Phase 1: Foundation</span>
                <h3 className="text-lg font-semibold text-blue-600 mb-2">Data Collection & Infrastructure</h3>
                <p className="text-gray-600">Built comprehensive data collection system integrating with all development tools, established data warehouse, and created initial dashboard prototypes.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-xl">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-3 inline-block">Phase 2: Metrics Definition</span>
                <h3 className="text-lg font-semibold text-blue-600 mb-2">KPI Framework Development</h3>
                <p className="text-gray-600">Collaborated with stakeholders to define meaningful metrics, aligned QA KPIs with business objectives, and established baseline measurements.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-xl">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-3 inline-block">Phase 3: Dashboards & Reporting</span>
                <h3 className="text-lg font-semibold text-blue-600 mb-2">Visualization & Analytics</h3>
                <p className="text-gray-600">Deployed AWS QuickSight dashboards, automated weekly reports, created real-time monitoring alerts, and established data-driven review processes.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-xl">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-3 inline-block">Phase 4: Performance Management</span>
                <h3 className="text-lg font-semibold text-blue-600 mb-2">Individual Development Integration</h3>
                <p className="text-gray-600">Connected metrics to performance reviews, career development paths, and recognition programs. Implemented peer comparison and goal-setting frameworks.</p>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Transformative Results</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <div className="text-3xl text-green-600 mb-2">📈</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Improvement</h3>
                <div className="space-y-2">
                  <div className="text-sm text-gray-500 line-through">8.2% defect rate</div>
                  <div className="text-xl font-semibold text-green-600">2.6% defect rate</div>
                  <p className="text-sm text-gray-600">3x reduction in defects</p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <div className="text-3xl text-green-600 mb-2">⚡</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Velocity Boost</h3>
                <div className="space-y-2">
                  <div className="text-sm text-gray-500 line-through">15 days cycle</div>
                  <div className="text-xl font-semibold text-green-600">4 days cycle</div>
                  <p className="text-sm text-gray-600">73% faster delivery</p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <div className="text-3xl text-green-600 mb-2">💰</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cost Efficiency</h3>
                <div className="space-y-2">
                  <div className="text-xl font-semibold text-green-600">340% ROI</div>
                  <p className="text-sm text-gray-600">Without headcount increase</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Impact</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Executive Visibility:</strong> QA team now presents monthly business impact reports to C-level executives</li>
                <li><strong>Career Development:</strong> 80% of team members received promotions or salary increases based on metrics-driven performance</li>
                <li><strong>Process Optimization:</strong> Identified and eliminated 12 redundant testing processes, saving 240+ hours monthly</li>
                <li><strong>Predictive Analytics:</strong> Implemented forecasting models that predict quality risks 2-3 sprints in advance</li>
              </ul>
            </div>
          </div>

          {/* Innovation */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Key Innovations</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">Predictive Quality Modeling</h3>
                <p className="text-gray-600">Developed ML models using historical data to predict defect-prone areas and optimize testing focus, reducing testing time by 30% while maintaining quality.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">Gamified Performance System</h3>
                <p className="text-gray-600">Created team leaderboards and achievement systems that increased individual productivity by 45% while maintaining collaborative team culture.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">Real-time Quality Gates</h3>
                <p className="text-gray-600">Implemented automated quality scoring that prevented 23 potentially problematic releases from reaching production.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">Cross-functional KPIs</h3>
                <p className="text-gray-600">Established shared metrics between QA, Development, and Product teams that improved collaboration and reduced handoff delays by 60%.</p>
              </div>
            </div>
          </div>

          {/* Lessons Learned */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Change Management Tactics</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">Transparency First</h3>
                <p className="text-gray-600">Made all metrics visible to everyone, eliminating fear and building trust. Transparency actually increased performance rather than creating pressure.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">Individual Recognition</h3>
                <p className="text-gray-600">Connected metrics to personal career advancement, creating intrinsic motivation for improvement rather than relying on external pressure.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">Continuous Iteration</h3>
                <p className="text-gray-600">Regularly refined metrics based on team feedback, ensuring the system remained relevant and fair to all team members.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">Business Storytelling</h3>
                <p className="text-gray-600">Translated technical metrics into business impact stories that resonated with executives and secured additional investment in QA initiatives.</p>
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
              href="/case-studies/automation" 
              className="text-blue-600 font-semibold hover:-translate-x-1 transition-transform inline-flex items-center"
            >
              ← Previous Case Study
            </Link>
            <Link 
              href="/case-studies" 
              className="text-blue-600 font-semibold hover:translate-x-1 transition-transform inline-flex items-center"
            >
              Back to Case Studies →
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