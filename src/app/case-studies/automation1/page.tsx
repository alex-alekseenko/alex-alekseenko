"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronRight, Users, Target, Shield, Zap, Trophy, Calendar, MapPin, Building, BarChart3, Globe, Clock, AlertTriangle, CheckCircle2, Layers, Brain, Heart, Sparkles, Code, Server, Smartphone, Rocket } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function AutomationCaseStudy1() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [hoveredMetric, setHoveredMetric] = useState<string | null>(null);

  const metrics = [
    { id: "company", value: "SberDevices", label: "Company", icon: Building, detail: "900-person innovation startup within major bank" },
    { id: "timeline", value: "2020-2022", label: "Timeline", icon: Calendar, detail: "2-year transformation period" },
    { id: "team", value: "14", label: "Team Built", icon: Users, detail: "Built automation team from scratch" },
    { id: "startup", value: "900", label: "Startup Size", icon: Globe, detail: "Large-scale innovation department" }
  ];

  const strategies = [
    {
      id: "web",
      title: "Web UI Framework",
      icon: Globe,
      color: "from-blue-500 to-blue-600",
      description: "Java-based Selenium",
      fullContent: "Developed Java-based framework with optimized Selenium implementation for comprehensive web application testing across multiple product lines"
    },
    {
      id: "api",
      title: "API Integration",
      icon: Server,
      color: "from-green-500 to-green-600",
      description: "Configurable Mocks",
      fullContent: "Created dedicated API/integration framework with configurable mock server using JSON schema for flexible backend testing"
    },
    {
      id: "android",
      title: "Android Framework",
      icon: Smartphone,
      color: "from-purple-500 to-purple-600",
      description: "Kotlin E2E Testing",
      fullContent: "Built Kotlin-based Android UI E2E testing framework aligned with native app development practices and tools"
    },
    {
      id: "execution",
      title: "Parallel Execution",
      icon: Zap,
      color: "from-orange-500 to-orange-600",
      description: "40 Concurrent Threads",
      fullContent: "Implemented scalable execution architectures supporting 40 concurrent test threads for maximum throughput and efficiency"
    },
    {
      id: "team",
      title: "Team Structure",
      icon: Users,
      color: "from-teal-500 to-teal-600",
      description: "Balanced Specialization",
      fullContent: "Built 14-person automation team with balanced specialization and cross-training—each engineer owned a specific domain while contributing to core framework"
    },
    {
      id: "rollout",
      title: "Phased Rollout",
      icon: Rocket,
      color: "from-pink-500 to-pink-600",
      description: "Strategic Adoption",
      fullContent: "Implemented strategic rollout working with one development team at a time, starting with web applications to build trust and demonstrate value"
    },
    {
      id: "positioning",
      title: "Support-First",
      icon: Target,
      color: "from-indigo-500 to-indigo-600",
      description: "Partnership Approach",
      fullContent: "Positioned automation as support function rather than oversight, emphasizing role in 'taking headaches away' from development teams"
    },
    {
      id: "prioritization",
      title: "Risk-Based Priority",
      icon: AlertTriangle,
      color: "from-red-500 to-red-600",
      description: "Business Focus",
      fullContent: "Prioritized automation based on business risk and release schedules, focusing on high-value regression scenarios first"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-background-subtle-gray">
      <Navigation />

      {/* Animated Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-50 to-blue-200"></div>

        <div className="container-max relative z-10">
          <Link href="/#case-studies" className="inline-flex items-center text-primary-text hover:text-primary-dark mb-8 group">
            <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-2 transition-transform" />
            <span>Back to Portfolio</span>
          </Link>

          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-primary-dark text-white rounded-lg flex items-center gap-2">
                <Building className="h-4 w-4" />
                SberDevices
              </span>
              <span className="px-4 py-2 bg-white border border-background-light-gray rounded-lg flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                2020-2022
              </span>
              <span className="px-4 py-2 bg-white border border-background-light-gray rounded-lg flex items-center gap-2">
                <Rocket className="h-4 w-4" />
                Go-to-Market Startup
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary-dark to-primary-text bg-clip-text text-transparent mb-8">
              Enterprise Test Automation<br />Architecture for Smart Devices
            </h1>

            <p className="text-xl text-primary-dark max-w-3xl leading-relaxed font-semibold italic mb-8">
              "Building automation excellence in a regulated banking environment while racing against market pressures"
            </p>

            {/* Compact Metrics Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {metrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <div key={metric.id} className="relative group">
                  <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex items-start gap-3">
                    <Icon className="h-8 w-8 text-primary-dark group-hover:scale-110 transition-transform flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-3xl font-bold text-primary-dark leading-none">{metric.value}</div>
                      <div className="text-xs text-primary-text/60 uppercase tracking-wider leading-tight mt-1">{metric.label}</div>
                    </div>
                  </div>
                </div>
              );
            })}
            </div>
          </div>
        </div>
      </section>

      {/* Story Sections with Cards */}
      <section className="py-16">
        <div className="container-max">
          <div className="max-w-6xl mx-auto">

            {/* Situation Section */}
            <div className="mb-12">
              <div className="bg-white rounded-3xl shadow-xl p-10">
                <div className="flex items-center gap-4 mb-6">
                  <Target className="h-10 w-10 text-primary-dark" />
                  <h2 className="text-3xl font-bold text-primary-dark">The Situation</h2>
                </div>

                <div className="space-y-6 text-lg text-primary-text leading-relaxed">
                  <p>
                    I joined a major Russian bank's new innovation department focused on developing smart devices and voice assistants, essentially a <mark className="marker-highlight">900-person startup operating within a regulated banking environment</mark>. The department was tasked with creating a competitive product to rival Amazon Alexa, targeting both consumer markets and specialized hotel solutions.
                  </p>
                  <p>
                    When I arrived, testing was <mark className="marker-highlight">entirely fragmented</mark>—developers performed ad-hoc testing based on individual preferences, with no standardized approach or reusable assets. Manual QA teams were overwhelmed by growing regression needs, with each incremental change requiring significant validation effort.
                  </p>
                  <p>
                    The initiative was barely a year old with <mark className="marker-highlight">no production release yet</mark>, but faced aggressive go-to-market timelines and high executive visibility as a flagship innovation project for the bank.
                  </p>
                </div>

                {/* Context Metrics */}
                <div className="grid md:grid-cols-3 gap-4 mt-8">
                  <div className="bg-background-subtle-gray rounded-xl p-4">
                    <Globe className="h-6 w-6 text-primary-dark mb-2" />
                    <div className="font-semibold text-primary-dark">Ad-hoc Testing</div>
                    <div className="text-sm text-primary-text/60">No standardized approach</div>
                  </div>
                  <div className="bg-background-subtle-gray rounded-xl p-4">
                    <Rocket className="h-6 w-6 text-primary-dark mb-2" />
                    <div className="font-semibold text-primary-dark">No Production Release</div>
                    <div className="text-sm text-primary-text/60">Aggressive timeline pressure</div>
                  </div>
                  <div className="bg-background-subtle-gray rounded-xl p-4">
                    <Target className="h-6 w-6 text-primary-dark mb-2" />
                    <div className="font-semibold text-primary-dark">High Visibility</div>
                    <div className="text-sm text-primary-text/60">Flagship innovation project</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Obstacle Section */}
            <div className="mb-12">
              <div className="bg-white rounded-3xl shadow-xl p-10">
                <div className="flex items-center gap-4 mb-6">
                  <AlertTriangle className="h-10 w-10 text-primary-dark" />
                  <h2 className="text-3xl font-bold text-primary-dark">The Obstacle</h2>
                </div>

                <div className="space-y-6 text-lg text-primary-text leading-relaxed mb-8">
                  <p>
                    I faced <mark className="marker-highlight">multilayered challenges</mark> requiring both technical and organizational solutions to build an <mark className="marker-highlight">enterprise test automation architecture from the ground up</mark>.
                  </p>
                </div>

                {/* Critical Challenges */}
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                  <div className="bg-background-subtle-gray rounded-xl p-4">
                    <AlertTriangle className="h-6 w-6 text-accent-error mb-2" />
                    <div className="font-semibold text-primary-dark">Regulatory Constraints</div>
                    <div className="text-sm text-primary-text/60">Weeks for access approvals</div>
                  </div>
                  <div className="bg-background-subtle-gray rounded-xl p-4">
                    <Code className="h-6 w-6 text-accent-error mb-2" />
                    <div className="font-semibold text-primary-dark">Greenfield Build</div>
                    <div className="text-sm text-primary-text/60">No existing infrastructure</div>
                  </div>
                  <div className="bg-background-subtle-gray rounded-xl p-4">
                    <Layers className="h-6 w-6 text-accent-error mb-2" />
                    <div className="font-semibold text-primary-dark">Tech Diversity</div>
                    <div className="text-sm text-primary-text/60">Web, Android, NLP, APIs</div>
                  </div>
                  <div className="bg-background-subtle-gray rounded-xl p-4">
                    <Users className="h-6 w-6 text-accent-error mb-2" />
                    <div className="font-semibold text-primary-dark">Cultural Resistance</div>
                    <div className="text-sm text-primary-text/60">Dev teams' own practices</div>
                  </div>
                  <div className="bg-background-subtle-gray rounded-xl p-4">
                    <Zap className="h-6 w-6 text-accent-error mb-2" />
                    <div className="font-semibold text-primary-dark">Aggressive Timelines</div>
                    <div className="text-sm text-primary-text/60">Market share pressure</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Section */}
            <div className="mb-12">
              <div className="bg-white rounded-3xl shadow-xl p-10">
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Rocket className="h-10 w-10 text-primary-dark" />
                    <h2 className="text-3xl font-bold text-primary-dark">Strategic Action Plan</h2>
                  </div>
                  <p className="text-primary-text/60">Click each strategy to explore the implementation details</p>
                </div>

                <p className="text-lg text-primary-text leading-relaxed mb-8">
                  I developed a comprehensive multi-framework architecture with purpose-built solutions and strategic implementation approach:
                </p>

                {/* Strategic Action Plan - Expandable Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {strategies.map((strategy) => {
                    const Icon = strategy.icon;
                    const isExpanded = expandedCard === strategy.id;

                    return (
                      <div key={strategy.id} className="relative">
                        {isExpanded && (
                          <div
                            className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-500"
                            onClick={() => setExpandedCard(null)}
                          />
                        )}
                        <div
                          onClick={() => setExpandedCard(isExpanded ? null : strategy.id)}
                          className={`
                            bg-white rounded-xl p-6 shadow-lg cursor-pointer
                            transition-all duration-500 ease-in-out
                            ${isExpanded ? 'fixed z-50 max-w-2xl max-h-[80vh] overflow-y-auto' : 'hover:scale-105 hover:shadow-xl'}
                          `}
                          style={isExpanded ? {
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%) scale(1.2)',
                            width: '640px'
                          } : {}}
                        >
                          <div className={`h-12 w-12 bg-gradient-to-br ${strategy.color} rounded-lg flex items-center justify-center mb-4`}>
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-lg font-bold text-primary-dark mb-2">{strategy.title}</h3>
                          <p className="text-sm text-primary-text/60 mb-4">{strategy.description}</p>
                          {isExpanded && (
                            <div className="mt-4 pt-4 border-t border-background-light-gray">
                              <p className="text-base text-primary-text leading-relaxed">{strategy.fullContent}</p>
                            </div>
                          )}
                          {!isExpanded && (
                            <div className="text-xs text-primary-text/40 mt-2">Click to expand</div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Result Section */}
            <div className="mb-12">
              <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-3xl shadow-xl p-10">
                <div className="flex items-center gap-4 mb-6">
                  <Trophy className="h-10 w-10 text-primary-dark" />
                  <h2 className="text-3xl font-bold text-primary-dark">The Result</h2>
                </div>

                {/* White content box */}
                <div className="bg-white rounded-2xl p-8 shadow-md mb-8">
                  <div className="space-y-6 text-lg text-primary-text leading-relaxed">
                    <p>
                      The framework we built transformed testing capabilities across the entire smart devices division, delivering measurable business impact. We achieved <mark className="marker-highlight">100% automation of voice assistant testing (1,670+ scenarios)</mark>, complete web-based testing automation (1,200+ scenarios), 56% API/integration testing coverage, and 80% Android UI testing automation (190 scenarios).
                    </p>
                    <p>
                      The automation framework became fundamental to maintaining release cadence and enabling monthly stakeholder demonstrations. <mark className="marker-highlight">Executives were amazed</mark> by areas where automation was complete while pushing for acceleration in areas still in progress.
                    </p>
                    <p>
                      Most importantly, the framework consistently caught critical issues before release—from broken voice assistant skills to mid-flow Android UI failures and backward compatibility breaks—proving its value in a startup environment where rapid changes often introduced unexpected defects across the technology stack.
                    </p>
                  </div>

                  <div className="mt-6 pt-6 border-t border-background-light-gray">
                    <div className="flex items-center gap-3 mb-3">
                      <Sparkles className="h-6 w-6 text-primary-dark" />
                      <h3 className="text-xl font-semibold text-primary-dark">Key Insight</h3>
                    </div>
                    <p className="text-lg text-primary-text leading-relaxed">
                      Building enterprise test automation in a regulated environment requires balancing technical excellence with organizational change management—securing stakeholder buy-in through demonstrable value delivery.
                    </p>
                  </div>
                </div>

                {/* Success Metrics */}
                <div className="grid md:grid-cols-5 gap-4">
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <CheckCircle2 className="h-6 w-6 text-primary-dark mb-2" />
                    <div className="font-semibold text-primary-dark">95%</div>
                    <div className="text-sm text-primary-text/60">Time Reduction</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <CheckCircle2 className="h-6 w-6 text-primary-dark mb-2" />
                    <div className="font-semibold text-primary-dark">1,670+</div>
                    <div className="text-sm text-primary-text/60">Scenarios Automated</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <CheckCircle2 className="h-6 w-6 text-primary-dark mb-2" />
                    <div className="font-semibold text-primary-dark">90 min</div>
                    <div className="text-sm text-primary-text/60">Regression Cycle</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <CheckCircle2 className="h-6 w-6 text-primary-dark mb-2" />
                    <div className="font-semibold text-primary-dark">40</div>
                    <div className="text-sm text-primary-text/60">Concurrent Threads</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <CheckCircle2 className="h-6 w-6 text-primary-dark mb-2" />
                    <div className="font-semibold text-primary-dark">14</div>
                    <div className="text-sm text-primary-text/60">Team Members</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-dark via-primary-text to-primary-dark">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Test Automation?
            </h2>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              Let's discuss how strategic automation architecture can accelerate your quality engineering
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/#contact" className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-primary-dark font-semibold rounded-full hover:bg-white/90 transition-all hover:gap-4">
                <span>Get Started</span>
                <ChevronRight className="h-5 w-5" />
              </Link>
              <Link href="/#case-studies" className="px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white hover:bg-white/10 transition-colors">
                Explore More Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
