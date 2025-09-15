import Link from "next/link";
import { ArrowLeft, Calendar, Building, Code, Zap, Target } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function AutomationCaseStudy() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="pt-24 pb-8">
        <div className="container-max">
          <Link href="/case-studies" className="inline-flex items-center text-primary-text hover:text-primary-dark mb-8">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Case Studies
          </Link>

          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="px-3 py-1 bg-primary-dark text-white text-sm font-medium rounded-full">
                SberDevices
              </span>
              <span className="px-3 py-1 bg-background-light-gray text-primary-text text-sm font-medium rounded-full flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                2020-2022
              </span>
              <span className="px-3 py-1 bg-background-light-gray text-primary-text text-sm font-medium rounded-full flex items-center">
                <Building className="mr-2 h-4 w-4" />
                900-person startup
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-medium mb-6 text-primary-dark">
              Enterprise Test Automation Architecture for Smart Devices
            </h1>

            <p className="text-xl text-primary-text leading-relaxed">
              Building comprehensive test automation from scratch for a major banking innovation department
              developing smart devices to compete with Amazon Alexa.
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-8 bg-background-light-gray">
        <div className="container-max">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-dark mb-2">95%</div>
              <div className="text-primary-text">Time reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-dark mb-2">1,670+</div>
              <div className="text-primary-text">Test scenarios automated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-dark mb-2">90 min</div>
              <div className="text-primary-text">Regression cycle time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-dark mb-2">14</div>
              <div className="text-primary-text">Team members built</div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto space-y-12">

            {/* Situation */}
            <div>
              <h2 className="text-2xl font-semibold text-primary-dark mb-6 flex items-center">
                <Building className="mr-3 h-6 w-6" />
                The Situation
              </h2>
              <div className="prose prose-lg text-primary-text leading-relaxed">
                <p>
                  I joined a major Russian bank&apos;s new innovation department focused on developing smart devices
                  and voice assistants, essentially a 900-person startup operating within a regulated banking environment.
                  The department was tasked with creating a competitive product to rival Amazon Alexa, targeting both
                  consumer markets and specialized hotel solutions.
                </p>
                <p>
                  When I arrived, testing was entirely fragmented—developers performed ad-hoc testing based on individual
                  preferences, with no standardized approach or reusable assets. Manual QA teams were overwhelmed by growing
                  regression needs, with each incremental change requiring significant validation effort.
                </p>
                <p>
                  The initiative was barely a year old with no production release yet, but faced aggressive go-to-market
                  timelines and high executive visibility as a flagship innovation project for the bank.
                </p>
              </div>
            </div>

            {/* Challenge */}
            <div>
              <h2 className="text-2xl font-semibold text-primary-dark mb-6 flex items-center">
                <Target className="mr-3 h-6 w-6" />
                The Challenge
              </h2>
              <div className="prose prose-lg text-primary-text leading-relaxed">
                <p>
                  I faced multilayered challenges requiring both technical and organizational solutions:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Regulatory constraints:</strong> Enterprise banking environment where every access request required weeks of compliance reviews</li>
                  <li><strong>Greenfield build:</strong> No existing test automation team or infrastructure to build upon</li>
                  <li><strong>Technology diversity:</strong> Web applications, Android devices, voice assistants with NLP, complex backend integrations</li>
                  <li><strong>Cultural resistance:</strong> Development teams accustomed to their own testing approaches</li>
                  <li><strong>Aggressive timelines:</strong> Pressure to capture market share before competitors</li>
                </ul>
                <p>
                  The solution needed to cover disparate technologies while building trust with development teams and
                  establishing a new centralized automation function from scratch.
                </p>
              </div>
            </div>

            {/* Technical Architecture */}
            <div>
              <h2 className="text-2xl font-semibold text-primary-dark mb-6 flex items-center">
                <Code className="mr-3 h-6 w-6" />
                Technical Architecture
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-primary-text">
                  I developed a comprehensive multi-framework architecture with purpose-built solutions for each testing domain:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="card bg-background-subtle-gray">
                    <h3 className="font-semibold text-primary-dark mb-3 flex items-center">
                      <Code className="mr-2 h-5 w-5" />
                      Web UI Framework
                    </h3>
                    <p className="text-primary-text">
                      Java-based framework with optimized Selenium implementation for web application testing
                    </p>
                  </div>

                  <div className="card bg-background-subtle-gray">
                    <h3 className="font-semibold text-primary-dark mb-3 flex items-center">
                      <Zap className="mr-2 h-5 w-5" />
                      API Integration
                    </h3>
                    <p className="text-primary-text">
                      Dedicated API/integration framework with configurable mock server using JSON schema
                    </p>
                  </div>

                  <div className="card bg-background-subtle-gray">
                    <h3 className="font-semibold text-primary-dark mb-3 flex items-center">
                      <Code className="mr-2 h-5 w-5" />
                      Android Framework
                    </h3>
                    <p className="text-primary-text">
                      Kotlin-based Android UI E2E testing framework aligned with native app development
                    </p>
                  </div>

                  <div className="card bg-background-subtle-gray">
                    <h3 className="font-semibold text-primary-dark mb-3 flex items-center">
                      <Zap className="mr-2 h-5 w-5" />
                      Parallel Execution
                    </h3>
                    <p className="text-primary-text">
                      Scalable execution architectures supporting 40 concurrent test threads for maximum throughput
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Strategy */}
            <div>
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                Implementation Strategy
              </h2>
              <div className="space-y-6">
                <div className="card bg-background-white border border-background-light-gray">
                  <h3 className="font-semibold text-primary-dark mb-3">Team Structure</h3>
                  <p className="text-primary-text">
                    Built and led a 14-person automation team structured to balance specialization with cross-training—each
                    engineer owned a specific domain area (web, Android, API integration, NLP) while contributing to core
                    framework development.
                  </p>
                </div>

                <div className="card bg-background-white border border-background-light-gray">
                  <h3 className="font-semibold text-primary-dark mb-3">Phased Rollout</h3>
                  <p className="text-primary-text">
                    Implemented strategic rollout approach, working with one development team at a time, starting with
                    web applications as the foundation to build trust and demonstrate value.
                  </p>
                </div>

                <div className="card bg-background-white border border-background-light-gray">
                  <h3 className="font-semibold text-primary-dark mb-3">Support-First Positioning</h3>
                  <p className="text-primary-text">
                    Positioned the automation initiative as a support function rather than oversight mechanism, emphasizing
                    our role in &quot;taking headaches away&quot; from development teams.
                  </p>
                </div>

                <div className="card bg-background-white border border-background-light-gray">
                  <h3 className="font-semibold text-primary-dark mb-3">Risk-Based Prioritization</h3>
                  <p className="text-primary-text">
                    Prioritized automation efforts based on business risk and release schedule requirements, focusing on
                    high-value regression scenarios first.
                  </p>
                </div>
              </div>
            </div>

            {/* Results */}
            <div>
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                Transformational Results
              </h2>
              <div className="prose prose-lg text-primary-text leading-relaxed">
                <p>
                  The framework we built transformed testing capabilities across the entire smart devices division,
                  delivering measurable business impact:
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="card bg-accent-success/10 border-l-4 border-accent-success">
                    <h3 className="font-semibold text-primary-dark mb-3">Coverage Achievements</h3>
                    <ul className="space-y-2 text-primary-text">
                      <li>• 100% automation of voice assistant testing (1,670+ scenarios)</li>
                      <li>• Complete web-based testing automation (1,200+ scenarios)</li>
                      <li>• 56% API/integration testing coverage</li>
                      <li>• 80% Android UI testing automation (190 scenarios)</li>
                    </ul>
                  </div>

                  <div className="card bg-accent-success/10 border-l-4 border-accent-success">
                    <h3 className="font-semibold text-primary-dark mb-3">Efficiency Gains</h3>
                    <ul className="space-y-2 text-primary-text">
                      <li>• 95% reduction in regression testing time (2 days → 90 minutes)</li>
                      <li>• 40 concurrent test threads execution</li>
                      <li>• Monthly stakeholder demonstrations enabled</li>
                      <li>• Critical release blockers consistently caught pre-release</li>
                    </ul>
                  </div>
                </div>

                <p>
                  The automation framework became fundamental to maintaining release cadence and enabling monthly
                  stakeholder demonstrations. Executives were amazed by areas where automation was complete while
                  pushing for acceleration in areas still in progress.
                </p>

                <p>
                  Most importantly, the framework consistently caught critical issues before release—from broken
                  voice assistant skills to mid-flow Android UI failures and backward compatibility breaks—proving
                  its value in a startup environment where rapid changes often introduced unexpected defects across
                  the technology stack.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background-light-gray">
        <div className="container-max">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-medium mb-6 text-primary-dark">
              Need Enterprise Test Automation?
            </h2>
            <p className="text-lg text-primary-text mb-8">
              I specialize in building scalable test automation architectures from the ground up for complex technology stacks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact" className="btn btn-primary">
                Discuss Your Architecture
              </Link>
              <Link href="/case-studies" className="btn btn-secondary">
                View More Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}