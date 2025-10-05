"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronRight, Users, Target, Shield, Zap, Trophy, Calendar, Building, BarChart3, Globe, AlertTriangle, CheckCircle2, Database, Activity, Award, Sparkles, TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function MetricsCaseStudy1() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [hoveredMetric, setHoveredMetric] = useState<string | null>(null);

  const metrics = [
    { id: "framework", value: "End-to-End", label: "Metrics Framework", icon: TrendingUp, detail: "Complete data-driven system" },
    { id: "team", value: "14", label: "Team Members", icon: Users, detail: "Distributed remote team" },
    { id: "projects", value: "5", label: "Product Lines", icon: BarChart3, detail: "Comprehensive coverage" }
  ];

  const strategies = [
    {
      id: "quicksight",
      title: "AWS QuickSight",
      icon: Database,
      color: "from-blue-500 to-blue-600",
      description: "Visualization Platform",
      fullContent: "Selected AWS QuickSight as visualization platform to avoid lengthy corporate procurement while leveraging existing AWS infrastructure for rapid deployment"
    },
    {
      id: "pipeline",
      title: "Custom Data Pipeline",
      icon: Activity,
      color: "from-green-500 to-green-600",
      description: "Python ETL Scripts",
      fullContent: "Developed custom Python scripts to extract and transform data from Jira and TestRail sources, implementing ETL architecture for clean, reliable reporting data"
    },
    {
      id: "alignment",
      title: "Business Alignment",
      icon: Target,
      color: "from-purple-500 to-purple-600",
      description: "Stakeholder Goals",
      fullContent: "Collaborated directly with business stakeholders to identify key expectations and success indicators, ensuring metrics aligned with business priorities rather than just measuring QA activities"
    },
    {
      id: "accountability",
      title: "Individual Accountability",
      icon: Award,
      color: "from-orange-500 to-orange-600",
      description: "Action Mapping",
      fullContent: "Established clear connections between individual responsibilities and team outcomes by decomposing high-level quality metrics into specific actions each QA engineer could directly influence"
    },
    {
      id: "transparency",
      title: "Transparent Visibility",
      icon: Shield,
      color: "from-indigo-500 to-indigo-600",
      description: "Open Dashboards",
      fullContent: "Created transparent visibility by making the dashboard accessible to all stakeholders, managers, and team members, eliminating information asymmetry"
    },
    {
      id: "development",
      title: "Career Integration",
      icon: Sparkles,
      color: "from-pink-500 to-pink-600",
      description: "Growth Connection",
      fullContent: "Tied measurement to personal development by connecting metrics directly to growth opportunities and recognition systems, making career advancement objective and predictable"
    },
    {
      id: "databricks",
      title: "Enterprise Migration",
      icon: Database,
      color: "from-teal-500 to-teal-600",
      description: "DataBricks Platform",
      fullContent: "Obtained DataBricks certification to migrate the solution to an enterprise platform, implementing modern multi-hop architecture and ELT approach for enhanced scalability"
    },
    {
      id: "dashboards",
      title: "Multi-dimensional Views",
      icon: BarChart3,
      color: "from-red-500 to-red-600",
      description: "Stakeholder-Specific",
      fullContent: "Designed dashboards with different visualization types tailored to specific stakeholder needs, from executive summaries to detailed engineer performance views"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-background-subtle-gray">
      <Navigation />

      {/* Animated Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-indigo-100"></div>

        <div className="container-max relative z-10">
          <Link href="/#case-studies" className="inline-flex items-center text-primary-text hover:text-primary-dark mb-8 group">
            <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-2 transition-transform" />
            <span>Back to Portfolio</span>
          </Link>

          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-primary-dark text-white rounded-lg flex items-center gap-2">
                <Building className="h-4 w-4" />
                CloudGeometry
              </span>
              <span className="px-4 py-2 bg-white border border-background-light-gray rounded-lg flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                2023-2024
              </span>
              <span className="px-4 py-2 bg-white border border-background-light-gray rounded-lg flex items-center gap-2">
                <Globe className="h-4 w-4" />
                Remote-First Team
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary-dark to-primary-text bg-clip-text text-transparent mb-8">
              Strategic<br />Metrics Implementation
            </h1>

            <p className="text-xl text-primary-dark max-w-3xl leading-relaxed font-semibold italic mb-8">
              "Transforming remote team performance through comprehensive data-driven metrics, connecting KPIs to personal development"
            </p>

            {/* Compact Metrics Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
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
                    As Head of QA, I led a <mark className="marker-highlight">remote-based team of 14 engineers</mark> working across multiple time zones and continents, supporting five distinct projects with varying roadmaps and requirements. The team existed in a management "gray zone"—with only rudimentary metrics like total test case counts available, stakeholders had limited visibility into actual workload, performance, or value delivery.
                  </p>
                  <p>
                    As an outsourcing company, we faced increasing pressure from clients questioning whether our QA resources were optimally allocated and utilized. Without meaningful performance indicators, it was <mark className="marker-highlight">increasingly difficult to differentiate</mark> between engineers delivering substantive contributions versus those creating surface-level artifacts like empty test cases or claiming to validate features they hadn't thoroughly tested.
                  </p>
                  <p>
                    This lack of visibility contributed to inconsistent quality, missed defects reaching production, and growing customer dissatisfaction.
                  </p>
                </div>

                {/* Context Metrics */}
                <div className="grid md:grid-cols-3 gap-4 mt-8">
                  <div className="bg-background-subtle-gray rounded-xl p-4">
                    <Globe className="h-6 w-6 text-primary-dark mb-2" />
                    <div className="font-semibold text-primary-dark">Visibility Gap</div>
                    <div className="text-sm text-primary-text/60">Rudimentary metrics only</div>
                  </div>
                  <div className="bg-background-subtle-gray rounded-xl p-4">
                    <Users className="h-6 w-6 text-primary-dark mb-2" />
                    <div className="font-semibold text-primary-dark">Remote Team</div>
                    <div className="text-sm text-primary-text/60">Multiple time zones</div>
                  </div>
                  <div className="bg-background-subtle-gray rounded-xl p-4">
                    <BarChart3 className="h-6 w-6 text-primary-dark mb-2" />
                    <div className="font-semibold text-primary-dark">Client Pressure</div>
                    <div className="text-sm text-primary-text/60">Resource allocation questions</div>
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
                    Implementing a comprehensive metrics framework faced multiple, interconnected challenges. The fundamental shift toward data-driven management represented a <mark className="marker-highlight">cultural departure from the team's established practices</mark>, triggering resistance—particularly from those benefiting from the previous lack of visibility.
                  </p>
                  <p>
                    As a manager of a fully distributed team, I needed to establish a clear system for tracking and managing remote workers—the <mark className="marker-highlight">metrics initiative was my strategic response</mark> to this critical challenge of remote oversight.
                  </p>
                  <p>
                    Additionally, technical barriers created significant hurdles—we had <mark className="marker-highlight">no dedicated analytics platform</mark>, relying solely on manually updated Excel spreadsheets for reporting, which made real-time insights impossible and data collection error-prone. Creating a sophisticated measurement system would require not just process changes but building an entire technical infrastructure from scratch without the luxury of dedicated BI resources or established data pipelines.
                  </p>
                </div>

                {/* Critical Challenges */}
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                  <div className="bg-background-subtle-gray rounded-xl p-4">
                    <AlertTriangle className="h-6 w-6 text-accent-error mb-2" />
                    <div className="font-semibold text-primary-dark">Cultural Resistance</div>
                    <div className="text-sm text-primary-text/60">Fear of measurement</div>
                  </div>
                  <div className="bg-background-subtle-gray rounded-xl p-4">
                    <Globe className="h-6 w-6 text-accent-error mb-2" />
                    <div className="font-semibold text-primary-dark">Remote Management</div>
                    <div className="text-sm text-primary-text/60">Distributed team tracking</div>
                  </div>
                  <div className="bg-background-subtle-gray rounded-xl p-4">
                    <Database className="h-6 w-6 text-accent-error mb-2" />
                    <div className="font-semibold text-primary-dark">Infrastructure Gap</div>
                    <div className="text-sm text-primary-text/60">Manual Excel only</div>
                  </div>
                  <div className="bg-background-subtle-gray rounded-xl p-4">
                    <Target className="h-6 w-6 text-accent-error mb-2" />
                    <div className="font-semibold text-primary-dark">Right Metrics</div>
                    <div className="text-sm text-primary-text/60">Avoid perverse incentives</div>
                  </div>
                  <div className="bg-background-subtle-gray rounded-xl p-4">
                    <Users className="h-6 w-6 text-accent-error mb-2" />
                    <div className="font-semibold text-primary-dark">Stakeholder Alignment</div>
                    <div className="text-sm text-primary-text/60">Business priorities</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Section */}
            <div className="mb-12">
              <div className="bg-white rounded-3xl shadow-xl p-10">
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <TrendingUp className="h-10 w-10 text-primary-dark" />
                    <h2 className="text-3xl font-bold text-primary-dark">Strategic Action Plan</h2>
                  </div>
                  <p className="text-primary-text/60">Click each strategy to explore the implementation details</p>
                </div>

                <p className="text-lg text-primary-text leading-relaxed mb-8">
                  I implemented a comprehensive technical and strategic approach, taking full end-to-end ownership from conception to implementation:
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
                          <h3 className="text-lg font-bold text-primary-dark mb-2 whitespace-nowrap">{strategy.title}</h3>
                          <p className="text-sm text-primary-text/60 mb-4 whitespace-nowrap">{strategy.description}</p>
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
                      The metrics transformation delivered remarkable business impact: defect leakage decreased by <mark className="marker-highlight">3x (down to just 3.1%)</mark> while simultaneously supporting a 73% increase in development velocity and accommodating 33% growth in the development team—all without expanding QA headcount. Only 7% of planned releases faced postponement.
                    </p>
                    <p>
                      Beyond the numbers, the initiative fundamentally changed stakeholder dynamics. <mark className="marker-highlight">Client conversations shifted from subjective debates</mark> about resource utilization to data-driven discussions about quality outcomes and strategic investments.
                    </p>
                    <p>
                      Within the team, performance visibility created a culture where actual contributions determined recognition and rewards, allowing <mark className="marker-highlight">high performers to finally shine based on real results</mark> rather than perception, while underperformers could no longer hide. The balanced workload distribution significantly reduced burnout and overwork, while increased autonomy and predictability improved overall team satisfaction.
                    </p>
                  </div>

                  <div className="mt-6 pt-6 border-t border-background-light-gray">
                    <div className="flex items-center gap-3 mb-3">
                      <Sparkles className="h-6 w-6 text-primary-dark" />
                      <h3 className="text-xl font-semibold text-primary-dark">Key Insight</h3>
                    </div>
                    <p className="text-lg text-primary-text leading-relaxed">
                      Most critically, the framework proved invaluable in managing our remote, multinational team, providing objective insight into engagement and results regardless of physical location or time zone.
                    </p>
                  </div>
                </div>

                {/* Success Metrics */}
                <div className="grid md:grid-cols-5 gap-4">
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <CheckCircle2 className="h-6 w-6 text-primary-dark mb-2" />
                    <div className="font-semibold text-primary-dark">3x</div>
                    <div className="text-sm text-primary-text/60">Defect Reduction</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <CheckCircle2 className="h-6 w-6 text-primary-dark mb-2" />
                    <div className="font-semibold text-primary-dark">73%</div>
                    <div className="text-sm text-primary-text/60">Velocity Increase</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <CheckCircle2 className="h-6 w-6 text-primary-dark mb-2" />
                    <div className="font-semibold text-primary-dark">0%</div>
                    <div className="text-sm text-primary-text/60">Headcount Growth</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <CheckCircle2 className="h-6 w-6 text-primary-dark mb-2" />
                    <div className="font-semibold text-primary-dark">7%</div>
                    <div className="text-sm text-primary-text/60">Release Delays</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <CheckCircle2 className="h-6 w-6 text-primary-dark mb-2" />
                    <div className="font-semibold text-primary-dark">33%</div>
                    <div className="text-sm text-primary-text/60">Dev Team Growth</div>
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
              Ready to Transform Your QA Metrics?
            </h2>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              Let's discuss how strategic metrics implementation can elevate your quality engineering
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
