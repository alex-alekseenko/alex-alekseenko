"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Quote, Calendar, Building, Users, Target, Lightbulb, Shield, TrendingUp, Award } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function TransformationCaseStudy2() {
  const [activeSection, setActiveSection] = useState("situation");

  const sections = [
    { id: "situation", label: "The Challenge", icon: Target },
    { id: "obstacle", label: "Breaking Point", icon: Shield },
    { id: "action", label: "Strategic Response", icon: TrendingUp },
    { id: "result", label: "Transformation", icon: Award }
  ];

  return (
    <div className="min-h-screen bg-background-subtle-gray">
      <Navigation />

      {/* Magazine-style Hero */}
      <section className="pt-24 pb-16 bg-white">
        <div className="container-max">
          <Link href="/#case-studies" className="inline-flex items-center text-primary-text/60 hover:text-primary-dark mb-8 transition-all group">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm uppercase tracking-wider">Case Studies</span>
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px bg-primary-dark flex-1"></div>
                <span className="text-sm uppercase tracking-wider text-primary-text/60">CloudGeometry • 2022-2024</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-serif mb-8 text-primary-dark leading-tight">
                Crisis-Driven <br/>
                <span className="italic font-light">QA Team</span><br/>
                Transformation
              </h1>

              <p className="text-xl text-primary-text/80 leading-relaxed font-light italic">
                "What once seemed like an impossible challenge transformed into one of our greatest achievements"
              </p>

              <div className="flex gap-8 mt-12">
                <div>
                  <div className="text-3xl font-bold text-primary-dark">14</div>
                  <div className="text-sm text-primary-text/60 uppercase tracking-wider">Team Members</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-dark">5</div>
                  <div className="text-sm text-primary-text/60 uppercase tracking-wider">Product Lines</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-dark">6-7</div>
                  <div className="text-sm text-primary-text/60 uppercase tracking-wider">Months</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-primary-dark via-primary-text to-accent-warning rounded-lg opacity-10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-6">
                  <div className="text-9xl font-serif text-primary-dark/20">QA</div>
                  <div className="text-sm uppercase tracking-[0.3em] text-primary-text/40">Leadership Through Crisis</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="sticky top-0 z-40 bg-white border-y border-background-light-gray">
        <div className="container-max">
          <div className="flex gap-8 overflow-x-auto py-4">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`
                    flex items-center gap-3 px-6 py-3 rounded-full whitespace-nowrap transition-all
                    ${activeSection === section.id
                      ? 'bg-primary-dark text-white'
                      : 'text-primary-text hover:bg-background-light-gray'
                    }
                  `}
                >
                  <Icon className="h-4 w-4" />
                  <span className="font-medium">{section.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="container-max">
          <div className="max-w-5xl mx-auto">

            {/* Situation Section */}
            {activeSection === "situation" && (
              <div className="animate-fade-in">
                <div className="grid lg:grid-cols-3 gap-12">
                  <div className="lg:col-span-2 space-y-8">
                    <div className="bg-white rounded-2xl p-10">
                      <div className="flex items-start gap-4 mb-6">
                        <Quote className="h-8 w-8 text-primary-dark/20 flex-shrink-0 rotate-180" />
                        <h2 className="text-3xl font-serif text-primary-dark">The Perfect Storm</h2>
                      </div>

                      <div className="prose prose-lg max-w-none text-primary-text">
                        <p className="first-letter:text-6xl first-letter:font-serif first-letter:text-primary-dark first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                          As Head of QA, I led our 14-person quality assurance team through a comprehensive transformation when our company unexpectedly relocated operations to the European Union. Having joined the company just two months prior in January 2022, I needed to rapidly adapt my leadership approach when the relocation was announced in March 2022.
                        </p>
                        <p>
                          Our team, originally composed entirely of CIS region professionals communicating primarily in Russian, supported five distinct product lines across multiple technical domains, all of which needed continuous quality support during this business-critical transition.
                        </p>
                      </div>
                    </div>

                    <div className="bg-primary-dark text-white rounded-2xl p-10">
                      <h3 className="text-2xl font-serif mb-6">Context & Timeline</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center py-3 border-b border-white/20">
                          <span className="text-white/80">Joined Company</span>
                          <span className="font-semibold">January 2022</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-white/20">
                          <span className="text-white/80">Relocation Announced</span>
                          <span className="font-semibold">March 2022</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-white/20">
                          <span className="text-white/80">Original Team Size</span>
                          <span className="font-semibold">14 Members</span>
                        </div>
                        <div className="flex justify-between items-center py-3">
                          <span className="text-white/80">Product Lines</span>
                          <span className="font-semibold">5 Active</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-accent-warning/10 rounded-2xl p-8 border-2 border-accent-warning/30">
                      <Lightbulb className="h-8 w-8 text-accent-warning mb-4" />
                      <h4 className="font-semibold text-primary-dark mb-3">Key Insight</h4>
                      <p className="text-sm text-primary-text leading-relaxed">
                        Two months into a new role, faced with completely restructuring approach and team composition
                      </p>
                    </div>

                    <div className="bg-white rounded-2xl p-8">
                      <h4 className="text-sm uppercase tracking-wider text-primary-text/60 mb-4">Team Composition</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-primary-text">CIS Region</span>
                          <div className="w-32 bg-background-light-gray rounded-full h-2">
                            <div className="bg-primary-dark h-2 rounded-full" style={{width: '100%'}}></div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-primary-text">Russian-speaking</span>
                          <div className="w-32 bg-background-light-gray rounded-full h-2">
                            <div className="bg-primary-dark h-2 rounded-full" style={{width: '100%'}}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Obstacle Section */}
            {activeSection === "obstacle" && (
              <div className="animate-fade-in">
                <div className="bg-white rounded-3xl p-12">
                  <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl font-serif text-primary-dark mb-8 text-center">The Breaking Point</h2>

                    <div className="bg-accent-error/5 border-l-8 border-accent-error rounded-r-xl p-8 mb-8">
                      <p className="text-lg text-primary-text leading-relaxed font-medium">
                        "The company was fighting for its life"
                      </p>
                    </div>

                    <div className="space-y-6 text-primary-text">
                      <p className="text-lg leading-relaxed">
                        Beyond the personal shock of this significant change to my own role expectations, we faced an existential business crisis that demanded immediate action while managing near-complete team dissolution. The transition triggered unprecedented attrition, with only one original team member remaining after a year.
                      </p>

                      <p className="text-lg leading-relaxed">
                        We needed to simultaneously maintain service continuity, recruit across multiple regions, establish new communication frameworks across time zones, and integrate diverse cultural backgrounds—all while the company was "fighting for its life" in emergency mode. The compressed timeline eliminated options for formal cultural integration programs, creating a pressure-cooker environment demanding pragmatic crisis management.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mt-12">
                      <div className="bg-background-subtle-gray rounded-xl p-6">
                        <div className="text-3xl font-bold text-accent-error mb-2">1</div>
                        <div className="text-sm text-primary-text">Team member remaining after 1 year</div>
                      </div>
                      <div className="bg-background-subtle-gray rounded-xl p-6">
                        <div className="text-3xl font-bold text-accent-error mb-2">93%</div>
                        <div className="text-sm text-primary-text">Team attrition rate</div>
                      </div>
                    </div>

                    <div className="mt-12 p-8 bg-gradient-to-r from-accent-error/10 to-accent-warning/10 rounded-2xl">
                      <h3 className="text-xl font-semibold text-primary-dark mb-4">Critical Challenges</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-accent-error rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-primary-text">Maintain service continuity across five product lines</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-accent-error rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-primary-text">Recruit across multiple regions (CIS, EU, LATAM)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-accent-error rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-primary-text">Establish new communication frameworks across time zones</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-accent-error rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-primary-text">Integrate diverse cultural backgrounds</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Action Section */}
            {activeSection === "action" && (
              <div className="animate-fade-in">
                <div className="space-y-8">
                  <div className="text-center mb-12">
                    <h2 className="text-4xl font-serif text-primary-dark mb-4">Strategic Response</h2>
                    <p className="text-xl text-primary-text/80">
                      A triage-based change management approach prioritizing business continuity
                    </p>
                  </div>

                  <div className="bg-white rounded-3xl p-12">
                    <p className="text-lg text-primary-text leading-relaxed mb-10">
                      I implemented a triage-based change management approach prioritizing business continuity alongside targeted people strategies:
                    </p>

                    <div className="grid gap-6">
                      {[
                        {
                          title: "Weekly 1:1 Psychological Safety Sessions",
                          content: "Established weekly 1:1 cadence with each team member to create psychological safety and gather real-time feedback about transition challenges, project issues, and technical blockers",
                          color: "blue"
                        },
                        {
                          title: "SCARF Model Implementation",
                          content: "Applied the SCARF model—analyzing each person's potential losses in Status (professional standing), Certainty (predictability), Autonomy (control), Relatedness (belonging), and Fairness (equitable treatment)—to pinpoint the emotional roots of change resistance. For example, when a QA engineer feared losing autonomy in the new structure, I reframed it by offering leadership opportunities to mentor junior team members, converting a perceived loss into a growth pathway",
                          color: "green"
                        },
                        {
                          title: "Proactive Resistance Management",
                          content: "Employed proactive resistance management by strategically engaging influential team members first with change communications—preventing \"toxicity spread\" by securing buy-in from respected voices before broader announcements",
                          color: "yellow"
                        },
                        {
                          title: "Cornerstone Model Architecture",
                          content: "Created a \"cornerstone model\" with senior QA experts serving as technical authorities despite the turbulence, providing stability anchors for teams experiencing constant change",
                          color: "purple"
                        },
                        {
                          title: "Predictable Communication Rhythms",
                          content: "Maintained predictable communication schedules and decision points to reduce anxiety despite the high-uncertainty environment",
                          color: "blue"
                        },
                        {
                          title: "Strategic Workload Management",
                          content: "Strategically adjusted workload expectations during critical transition phases to prevent burnout",
                          color: "green"
                        },
                        {
                          title: "Growth-Centered Messaging",
                          content: "Centered communication on personal growth opportunities and career advancement potential in the European market—making meaning from disruption",
                          color: "yellow"
                        },
                        {
                          title: "Regular Team Health Checks",
                          content: "Conducted regular \"team health checks\" by moderating and observing team dynamics to identify emerging issues before they became critical",
                          color: "purple"
                        }
                      ].map((strategy, index) => (
                        <div key={index} className="group">
                          <div className={`
                            p-8 rounded-2xl border-2 transition-all hover:shadow-xl
                            ${strategy.color === 'blue' ? 'border-blue-200 hover:border-blue-400 bg-blue-50/50' : ''}
                            ${strategy.color === 'green' ? 'border-green-200 hover:border-green-400 bg-green-50/50' : ''}
                            ${strategy.color === 'yellow' ? 'border-yellow-200 hover:border-yellow-400 bg-yellow-50/50' : ''}
                            ${strategy.color === 'purple' ? 'border-purple-200 hover:border-purple-400 bg-purple-50/50' : ''}
                          `}>
                            <h3 className="text-xl font-semibold text-primary-dark mb-4 flex items-center gap-3">
                              <span className={`
                                w-8 h-8 rounded-full flex items-center justify-center text-white font-bold
                                ${strategy.color === 'blue' ? 'bg-blue-500' : ''}
                                ${strategy.color === 'green' ? 'bg-green-500' : ''}
                                ${strategy.color === 'yellow' ? 'bg-yellow-500' : ''}
                                ${strategy.color === 'purple' ? 'bg-purple-500' : ''}
                              `}>
                                {index + 1}
                              </span>
                              {strategy.title}
                            </h3>
                            <p className="text-primary-text leading-relaxed">
                              {strategy.content}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Result Section */}
            {activeSection === "result" && (
              <div className="animate-fade-in">
                <div className="bg-gradient-to-br from-accent-success/10 to-accent-success/5 rounded-3xl p-12">
                  <div className="text-center mb-12">
                    <Award className="h-16 w-16 text-accent-success mx-auto mb-6" />
                    <h2 className="text-4xl font-serif text-primary-dark mb-4">The Transformation</h2>
                    <p className="text-xl text-primary-text/80 italic">
                      "In crisis lies opportunity"
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-10 shadow-lg">
                    <div className="prose prose-lg max-w-none text-primary-text">
                      <p className="text-lg leading-relaxed mb-6">
                        What once seemed like an impossible challenge—rebuilding an entire QA function while keeping five product lines running—transformed into one of our greatest achievements. Within 6-7 months, the team not only survived but emerged stronger, with all quality metrics intact despite the storm we'd weathered.
                      </p>
                      <p className="text-lg leading-relaxed mb-6">
                        The moment when client feedback began highlighting our seamless transition—unaware of the behind-the-scenes upheaval—felt like finally reaching solid ground after months at sea. The approach of working through key team members proved invaluable, creating islands of stability that others could cling to during uncertainty.
                      </p>
                      <p className="text-lg leading-relaxed mb-6">
                        Most telling was watching team members who once questioned their future begin taking ownership of their new roles, creating a resilient multinational quality organization where language and cultural differences became strengths rather than barriers.
                      </p>
                      <p className="text-lg leading-relaxed font-medium">
                        Perhaps the most powerful lesson: in crisis lies opportunity—what started as an unwelcome disruption ultimately created a more adaptable, diverse quality team better positioned for future challenges.
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-4 gap-6 mt-12">
                    <div className="bg-white rounded-xl p-6 text-center">
                      <div className="text-3xl font-bold text-accent-success mb-2">6-7</div>
                      <div className="text-sm text-primary-text">Months to rebuild</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 text-center">
                      <div className="text-3xl font-bold text-accent-success mb-2">100%</div>
                      <div className="text-sm text-primary-text">Quality maintained</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 text-center">
                      <div className="text-3xl font-bold text-accent-success mb-2">5</div>
                      <div className="text-sm text-primary-text">Product lines</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 text-center">
                      <div className="text-3xl font-bold text-accent-success mb-2">0</div>
                      <div className="text-sm text-primary-text">Client incidents</div>
                    </div>
                  </div>

                  <div className="mt-12 p-8 bg-primary-dark text-white rounded-2xl">
                    <Quote className="h-8 w-8 mb-4 opacity-50" />
                    <p className="text-lg italic leading-relaxed">
                      "The seamless transition highlighted in client feedback—unaware of the behind-the-scenes upheaval—felt like finally reaching solid ground after months at sea."
                    </p>
                    <div className="mt-4 text-white/60">
                      — Alex Alekseenko, Head of QA
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-max text-center">
          <h2 className="text-4xl font-serif text-primary-dark mb-6">
            Let's Transform Together
          </h2>
          <p className="text-xl text-primary-text/80 mb-10 max-w-2xl mx-auto">
            Ready to navigate your organization through complex transitions with proven leadership strategies?
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/#contact" className="px-8 py-4 bg-primary-dark text-white font-semibold rounded-lg hover:bg-primary-text transition-colors">
              Schedule a Consultation
            </Link>
            <Link href="/#case-studies" className="px-8 py-4 bg-background-light-gray text-primary-dark font-semibold rounded-lg hover:bg-background-subtle-gray transition-colors">
              View More Case Studies
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}