"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronRight, Users, Target, Shield, Zap, Trophy, Calendar, MapPin, Building, BarChart3, Globe, Clock, AlertTriangle, CheckCircle2, Layers, Brain, Heart, Sparkles } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function TransformationCaseStudy3() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [hoveredMetric, setHoveredMetric] = useState<string | null>(null);

  const metrics = [
    { id: "team", value: "14", label: "Team Members", icon: Users, detail: "Originally 100% CIS region professionals" },
    { id: "timeline", value: "6-7", label: "Months", icon: Clock, detail: "Complete team rebuild timeline" },
    { id: "products", value: "5", label: "Product Lines", icon: Layers, detail: "Maintained continuous quality support" },
    { id: "retention", value: "1", label: "Original Member", icon: Heart, detail: "Only one team member remained after a year" }
  ];

  const strategies = [
    {
      id: "safety",
      title: "Psychological Safety",
      icon: Shield,
      color: "from-blue-500 to-blue-600",
      description: "Weekly 1:1 Cadence",
      fullContent: "Established weekly 1:1 cadence with each team member to create psychological safety and gather real-time feedback about transition challenges, project issues, and technical blockers"
    },
    {
      id: "scarf",
      title: "SCARF Model",
      icon: Brain,
      color: "from-purple-500 to-purple-600",
      description: "Emotional Intelligence Framework",
      fullContent: "Applied the SCARF model—analyzing each person's potential losses in Status (professional standing), Certainty (predictability), Autonomy (control), Relatedness (belonging), and Fairness (equitable treatment)—to pinpoint the emotional roots of change resistance. For example, when a QA engineer feared losing autonomy in the new structure, I reframed it by offering leadership opportunities to mentor junior team members, converting a perceived loss into a growth pathway"
    },
    {
      id: "resistance",
      title: "Resistance Management",
      icon: Zap,
      color: "from-orange-500 to-orange-600",
      description: "Proactive Engagement",
      fullContent: "Employed proactive resistance management by strategically engaging influential team members first with change communications—preventing \"toxicity spread\" by securing buy-in from respected voices before broader announcements"
    },
    {
      id: "cornerstone",
      title: "Cornerstone Model",
      icon: Building,
      color: "from-green-500 to-green-600",
      description: "Stability Anchors",
      fullContent: "Created a \"cornerstone model\" with senior QA experts serving as technical authorities despite the turbulence, providing stability anchors for teams experiencing constant change"
    },
    {
      id: "communication",
      title: "Predictable Communication",
      icon: Calendar,
      color: "from-indigo-500 to-indigo-600",
      description: "Structured Schedules",
      fullContent: "Maintained predictable communication schedules and decision points to reduce anxiety despite the high-uncertainty environment"
    },
    {
      id: "workload",
      title: "Workload Management",
      icon: BarChart3,
      color: "from-teal-500 to-teal-600",
      description: "Strategic Adjustments",
      fullContent: "Strategically adjusted workload expectations during critical transition phases to prevent burnout"
    },
    {
      id: "growth",
      title: "Growth Framing",
      icon: Sparkles,
      color: "from-pink-500 to-pink-600",
      description: "Opportunity Focus",
      fullContent: "Centered communication on personal growth opportunities and career advancement potential in the European market—making meaning from disruption"
    },
    {
      id: "health",
      title: "Team Health Checks",
      icon: Heart,
      color: "from-red-500 to-red-600",
      description: "Regular Monitoring",
      fullContent: "Conducted regular \"team health checks\" by moderating and observing team dynamics to identify emerging issues before they became critical"
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
                CloudGeometry
              </span>
              <span className="px-4 py-2 bg-white border border-background-light-gray rounded-lg flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                2022-2024
              </span>
              <span className="px-4 py-2 bg-white border border-background-light-gray rounded-lg flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                EU Migration
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary-dark to-primary-text bg-clip-text text-transparent mb-8">
              Crisis-Driven<br />QA Team Transformation
            </h1>

            <p className="text-xl text-primary-text/80 max-w-3xl leading-relaxed font-light italic">
              "What once seemed like an impossible challenge transformed into one of our greatest achievements"
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Metrics Cards */}
      <section className="py-8">
        <div className="container-max">
          <div className="grid md:grid-cols-4 gap-6">
            {metrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <div
                  key={metric.id}
                  onMouseEnter={() => setHoveredMetric(metric.id)}
                  onMouseLeave={() => setHoveredMetric(null)}
                  className="relative group cursor-pointer"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <Icon className="h-8 w-8 text-primary-dark mb-4 group-hover:scale-110 transition-transform" />
                    <div className="text-4xl font-bold text-primary-dark mb-2">{metric.value}</div>
                    <div className="text-sm text-primary-text/60 uppercase tracking-wider">{metric.label}</div>

                    {hoveredMetric === metric.id && (
                      <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-primary-dark text-white rounded-lg text-sm z-20 animate-fade-in">
                        {metric.detail}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Sections with Cards */}
      <section className="py-16">
        <div className="container-max">
          <div className="max-w-6xl mx-auto">

            {/* Situation Card */}
            <div className="mb-12">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-primary-dark to-primary-text p-8">
                  <div className="flex items-center gap-4">
                    <Target className="h-10 w-10 text-white" />
                    <h2 className="text-3xl font-bold text-white">The Situation</h2>
                  </div>
                </div>
                <div className="p-10">
                  <p className="text-lg text-primary-text leading-relaxed mb-6">
                    As Head of QA, I led our 14-person quality assurance team through a comprehensive transformation when our company unexpectedly relocated operations to the European Union. Having joined the company just two months prior in January 2022, I needed to rapidly adapt my leadership approach when the relocation was announced in March 2022.
                  </p>
                  <p className="text-lg text-primary-text leading-relaxed">
                    Our team, originally composed entirely of CIS region professionals communicating primarily in Russian, supported five distinct product lines across multiple technical domains, all of which needed continuous quality support during this business-critical transition.
                  </p>

                  <div className="grid md:grid-cols-3 gap-4 mt-8">
                    <div className="bg-background-subtle-gray rounded-xl p-4">
                      <Globe className="h-6 w-6 text-primary-dark mb-2" />
                      <div className="font-semibold text-primary-dark">100% CIS Region</div>
                      <div className="text-sm text-primary-text/60">Original team composition</div>
                    </div>
                    <div className="bg-background-subtle-gray rounded-xl p-4">
                      <Clock className="h-6 w-6 text-primary-dark mb-2" />
                      <div className="font-semibold text-primary-dark">2 Months</div>
                      <div className="text-sm text-primary-text/60">Time in role before crisis</div>
                    </div>
                    <div className="bg-background-subtle-gray rounded-xl p-4">
                      <Layers className="h-6 w-6 text-primary-dark mb-2" />
                      <div className="font-semibold text-primary-dark">5 Products</div>
                      <div className="text-sm text-primary-text/60">Continuous support needed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Obstacle Card */}
            <div className="mb-12">
              <div className="bg-gradient-to-r from-accent-error/10 to-accent-error/5 rounded-3xl p-10 border-2 border-accent-error/20">
                <div className="flex items-center gap-4 mb-6">
                  <AlertTriangle className="h-10 w-10 text-accent-error" />
                  <h2 className="text-3xl font-bold text-primary-dark">The Obstacle</h2>
                </div>

                <p className="text-lg text-primary-text leading-relaxed mb-6">
                  Beyond the personal shock of this significant change to my own role expectations, we faced an existential business crisis that demanded immediate action while managing near-complete team dissolution. The transition triggered unprecedented attrition, with only one original team member remaining after a year.
                </p>

                <div className="bg-white rounded-2xl p-6 mb-6">
                  <h3 className="font-semibold text-primary-dark mb-4">Critical Challenges:</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <ChevronRight className="h-5 w-5 text-accent-error mt-0.5 flex-shrink-0" />
                      <span className="text-primary-text">Maintain service continuity across all product lines</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <ChevronRight className="h-5 w-5 text-accent-error mt-0.5 flex-shrink-0" />
                      <span className="text-primary-text">Recruit across multiple regions (CIS, EU, LATAM)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <ChevronRight className="h-5 w-5 text-accent-error mt-0.5 flex-shrink-0" />
                      <span className="text-primary-text">Establish new communication frameworks</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <ChevronRight className="h-5 w-5 text-accent-error mt-0.5 flex-shrink-0" />
                      <span className="text-primary-text">Integrate diverse cultural backgrounds</span>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-primary-text leading-relaxed">
                  We needed to simultaneously maintain service continuity, recruit across multiple regions, establish new communication frameworks across time zones, and integrate diverse cultural backgrounds—all while the company was "fighting for its life" in emergency mode. The compressed timeline eliminated options for formal cultural integration programs, creating a pressure-cooker environment demanding pragmatic crisis management.
                </p>
              </div>
            </div>

            {/* Action - Interactive Strategy Cards */}
            <div className="mb-12">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-4 mb-4">
                  <Zap className="h-10 w-10 text-accent-warning" />
                  <h2 className="text-3xl font-bold text-primary-dark">Strategic Action Plan</h2>
                </div>
                <p className="text-lg text-primary-text/80">
                  Click each strategy to explore the implementation details
                </p>
              </div>

              <p className="text-lg text-primary-text leading-relaxed mb-8 max-w-4xl mx-auto">
                I implemented a triage-based change management approach prioritizing business continuity alongside targeted people strategies:
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {strategies.map((strategy) => {
                  const Icon = strategy.icon;
                  const isExpanded = expandedCard === strategy.id;

                  return (
                    <div
                      key={strategy.id}
                      className={`relative ${isExpanded ? 'md:col-span-2 lg:col-span-2' : ''}`}
                    >
                      <div
                        onClick={() => setExpandedCard(isExpanded ? null : strategy.id)}
                        className={`
                          bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl
                          transition-all duration-500 cursor-pointer
                          ${isExpanded ? 'scale-105' : 'hover:scale-105'}
                        `}
                      >
                        <div className={`w-full h-2 bg-gradient-to-r ${strategy.color} rounded-full mb-6`}></div>

                        <Icon className="h-8 w-8 text-primary-dark mb-4" />
                        <h3 className="text-lg font-semibold text-primary-dark mb-2">{strategy.title}</h3>
                        <p className="text-sm text-primary-text/60 mb-4">{strategy.description}</p>

                        {isExpanded && (
                          <div className="animate-fade-in">
                            <div className="h-px bg-background-light-gray my-4"></div>
                            <p className="text-primary-text leading-relaxed">
                              {strategy.fullContent}
                            </p>
                          </div>
                        )}

                        <button className="text-sm mt-4 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors">
                          {isExpanded ? 'Click to collapse' : 'Click to expand'}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Result Card */}
            <div className="mb-12">
              <div className="bg-gradient-to-br from-accent-success/20 via-accent-success/10 to-white rounded-3xl shadow-xl overflow-hidden">
                <div className="p-10">
                  <div className="flex items-center gap-4 mb-8">
                    <Trophy className="h-12 w-12 text-accent-success" />
                    <h2 className="text-3xl font-bold text-primary-dark">The Result</h2>
                  </div>

                  <div className="space-y-6 text-lg text-primary-text leading-relaxed">
                    <p>
                      What once seemed like an impossible challenge—rebuilding an entire QA function while keeping five product lines running—transformed into one of our greatest achievements. Within 6-7 months, the team not only survived but emerged stronger, with all quality metrics intact despite the storm we'd weathered.
                    </p>
                    <p>
                      The moment when client feedback began highlighting our seamless transition—unaware of the behind-the-scenes upheaval—felt like finally reaching solid ground after months at sea. The approach of working through key team members proved invaluable, creating islands of stability that others could cling to during uncertainty.
                    </p>
                    <p>
                      Most telling was watching team members who once questioned their future begin taking ownership of their new roles, creating a resilient multinational quality organization where language and cultural differences became strengths rather than barriers.
                    </p>
                  </div>

                  <div className="bg-primary-dark text-white rounded-2xl p-8 mt-8">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                      <Sparkles className="h-6 w-6" />
                      Key Insight
                    </h3>
                    <p className="text-lg leading-relaxed">
                      Perhaps the most powerful lesson: in crisis lies opportunity—what started as an unwelcome disruption ultimately created a more adaptable, diverse quality team better positioned for future challenges.
                    </p>
                  </div>

                  {/* Success Metrics */}
                  <div className="grid md:grid-cols-4 gap-4 mt-8">
                    <div className="bg-white rounded-xl p-4 text-center border-2 border-accent-success">
                      <CheckCircle2 className="h-8 w-8 text-accent-success mx-auto mb-2" />
                      <div className="text-2xl font-bold text-primary-dark">100%</div>
                      <div className="text-sm text-primary-text/60">Quality Maintained</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 text-center border-2 border-accent-success">
                      <CheckCircle2 className="h-8 w-8 text-accent-success mx-auto mb-2" />
                      <div className="text-2xl font-bold text-primary-dark">Zero</div>
                      <div className="text-sm text-primary-text/60">Client Incidents</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 text-center border-2 border-accent-success">
                      <CheckCircle2 className="h-8 w-8 text-accent-success mx-auto mb-2" />
                      <div className="text-2xl font-bold text-primary-dark">5</div>
                      <div className="text-sm text-primary-text/60">Products Supported</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 text-center border-2 border-accent-success">
                      <CheckCircle2 className="h-8 w-8 text-accent-success mx-auto mb-2" />
                      <div className="text-2xl font-bold text-primary-dark">Global</div>
                      <div className="text-sm text-primary-text/60">Team Diversity</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-dark via-primary-text to-primary-dark">
        <div className="container-max text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your QA Organization?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Let's discuss how strategic leadership can guide your team through challenging transitions
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/#contact" className="group px-8 py-4 bg-white text-primary-dark font-semibold rounded-xl hover:shadow-2xl transition-all">
              <span className="flex items-center gap-2">
                Get Started
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/#case-studies" className="px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white/50 hover:border-white hover:bg-white/10 transition-all">
              Explore More Success Stories
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}