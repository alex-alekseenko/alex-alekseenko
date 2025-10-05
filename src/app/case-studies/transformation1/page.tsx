import Link from "next/link";
import { ArrowLeft, Clock, MapPin, Users, Briefcase, CheckCircle, AlertCircle, TrendingUp, ChevronRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function TransformationCaseStudy1() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section - Minimalist with large typography */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-dark to-primary-text">
        <div className="container-max">
          <Link href="/#case-studies" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Case Studies
          </Link>

          <h1 className="text-5xl md:text-7xl font-light text-white mb-8 leading-tight">
            Crisis-Driven<br />
            <span className="font-semibold">QA Team Transformation</span>
          </h1>

          <div className="grid md:grid-cols-4 gap-6 mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <Briefcase className="h-6 w-6 text-white/60 mb-2" />
              <div className="text-2xl font-semibold text-white">CloudGeometry</div>
              <div className="text-white/60 text-sm">Company</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <Clock className="h-6 w-6 text-white/60 mb-2" />
              <div className="text-2xl font-semibold text-white">2022-2024</div>
              <div className="text-white/60 text-sm">Timeline</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <Users className="h-6 w-6 text-white/60 mb-2" />
              <div className="text-2xl font-semibold text-white">14 People</div>
              <div className="text-white/60 text-sm">Team Size</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <MapPin className="h-6 w-6 text-white/60 mb-2" />
              <div className="text-2xl font-semibold text-white">EU Migration</div>
              <div className="text-white/60 text-sm">Challenge</div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Layout */}
      <section className="py-20">
        <div className="container-max">
          <div className="max-w-5xl mx-auto">

            {/* Timeline Item 1 - Situation */}
            <div className="relative flex items-start mb-20">
              <div className="absolute left-8 top-8 bottom-0 w-0.5 bg-gradient-to-b from-primary-dark to-transparent"></div>

              <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-primary-dark rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-lg">1</span>
              </div>

              <div className="ml-12 flex-1">
                <h2 className="text-3xl font-light mb-2 text-primary-dark">Situation</h2>
                <div className="text-sm text-primary-text/60 mb-6">Initial Context</div>

                <div className="bg-background-light-gray rounded-2xl p-8 space-y-4 text-primary-text leading-relaxed">
                  <p>
                    As Head of QA, I led our 14-person quality assurance team through a comprehensive transformation when our company unexpectedly relocated operations to the European Union. Having joined the company just two months prior in January 2022, I needed to rapidly adapt my leadership approach when the relocation was announced in March 2022. Our team, originally composed entirely of CIS region professionals communicating primarily in Russian, supported five distinct product lines across multiple technical domains, all of which needed continuous quality support during this business-critical transition.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline Item 2 - Obstacle */}
            <div className="relative flex items-start mb-20">
              <div className="absolute left-8 top-8 bottom-0 w-0.5 bg-gradient-to-b from-accent-error to-transparent"></div>

              <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-accent-error rounded-full flex items-center justify-center">
                <AlertCircle className="text-white h-8 w-8" />
              </div>

              <div className="ml-12 flex-1">
                <h2 className="text-3xl font-light mb-2 text-primary-dark">Obstacle</h2>
                <div className="text-sm text-primary-text/60 mb-6">Critical Challenges</div>

                <div className="bg-accent-error/5 border-l-4 border-accent-error rounded-r-2xl p-8 space-y-4 text-primary-text leading-relaxed">
                  <p>
                    Beyond the personal shock of this significant change to my own role expectations, we faced an existential business crisis that demanded immediate action while managing near-complete team dissolution. The transition triggered unprecedented attrition, with only one original team member remaining after a year. We needed to simultaneously maintain service continuity, recruit across multiple regions, establish new communication frameworks across time zones, and integrate diverse cultural backgrounds—all while the company was "fighting for its life" in emergency mode. The compressed timeline eliminated options for formal cultural integration programs, creating a pressure-cooker environment demanding pragmatic crisis management.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline Item 3 - Action */}
            <div className="relative flex items-start mb-20">
              <div className="absolute left-8 top-8 bottom-0 w-0.5 bg-gradient-to-b from-accent-warning to-transparent"></div>

              <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-accent-warning rounded-full flex items-center justify-center">
                <TrendingUp className="text-white h-8 w-8" />
              </div>

              <div className="ml-12 flex-1">
                <h2 className="text-3xl font-light mb-2 text-primary-dark">Action</h2>
                <div className="text-sm text-primary-text/60 mb-6">Strategic Implementation</div>

                <div className="space-y-4">
                  <p className="text-primary-text leading-relaxed mb-6">
                    I implemented a triage-based change management approach prioritizing business continuity alongside targeted people strategies:
                  </p>

                  <div className="grid gap-4">
                    {[
                      {
                        title: "Psychological Safety",
                        desc: "Established weekly 1:1 cadence with each team member to create psychological safety and gather real-time feedback about transition challenges, project issues, and technical blockers"
                      },
                      {
                        title: "SCARF Model",
                        desc: "Applied the SCARF model—analyzing each person's potential losses in Status (professional standing), Certainty (predictability), Autonomy (control), Relatedness (belonging), and Fairness (equitable treatment)—to pinpoint the emotional roots of change resistance. For example, when a QA engineer feared losing autonomy in the new structure, I reframed it by offering leadership opportunities to mentor junior team members, converting a perceived loss into a growth pathway"
                      },
                      {
                        title: "Resistance Management",
                        desc: "Employed proactive resistance management by strategically engaging influential team members first with change communications—preventing \"toxicity spread\" by securing buy-in from respected voices before broader announcements"
                      },
                      {
                        title: "Cornerstone Model",
                        desc: "Created a \"cornerstone model\" with senior QA experts serving as technical authorities despite the turbulence, providing stability anchors for teams experiencing constant change"
                      },
                      {
                        title: "Predictable Communication",
                        desc: "Maintained predictable communication schedules and decision points to reduce anxiety despite the high-uncertainty environment"
                      },
                      {
                        title: "Workload Management",
                        desc: "Strategically adjusted workload expectations during critical transition phases to prevent burnout"
                      },
                      {
                        title: "Growth Framing",
                        desc: "Centered communication on personal growth opportunities and career advancement potential in the European market—making meaning from disruption"
                      },
                      {
                        title: "Team Health Monitoring",
                        desc: "Conducted regular \"team health checks\" by moderating and observing team dynamics to identify emerging issues before they became critical"
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl border border-background-light-gray hover:shadow-lg transition-shadow">
                        <ChevronRight className="h-5 w-5 text-accent-warning mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-primary-dark mb-2">{item.title}</h3>
                          <p className="text-primary-text text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline Item 4 - Result */}
            <div className="relative flex items-start">
              <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-accent-success rounded-full flex items-center justify-center">
                <CheckCircle className="text-white h-8 w-8" />
              </div>

              <div className="ml-12 flex-1">
                <h2 className="text-3xl font-light mb-2 text-primary-dark">Result</h2>
                <div className="text-sm text-primary-text/60 mb-6">Transformation Achieved</div>

                <div className="bg-gradient-to-r from-accent-success/10 to-accent-success/5 rounded-2xl p-8 border border-accent-success/20">
                  <p className="text-primary-text leading-relaxed mb-4">
                    What once seemed like an impossible challenge—rebuilding an entire QA function while keeping five product lines running—transformed into one of our greatest achievements. Within 6-7 months, the team not only survived but emerged stronger, with all quality metrics intact despite the storm we'd weathered. The moment when client feedback began highlighting our seamless transition—unaware of the behind-the-scenes upheaval—felt like finally reaching solid ground after months at sea. The approach of working through key team members proved invaluable, creating islands of stability that others could cling to during uncertainty. Most telling was watching team members who once questioned their future begin taking ownership of their new roles, creating a resilient multinational quality organization where language and cultural differences became strengths rather than barriers. Perhaps the most powerful lesson: in crisis lies opportunity—what started as an unwelcome disruption ultimately created a more adaptable, diverse quality team better positioned for future challenges.
                  </p>
                </div>

                {/* Key Metrics */}
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="bg-white rounded-xl p-6 text-center border border-background-light-gray">
                    <div className="text-4xl font-bold text-accent-success mb-2">6-7</div>
                    <div className="text-sm text-primary-text">Months to rebuild</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center border border-background-light-gray">
                    <div className="text-4xl font-bold text-accent-success mb-2">100%</div>
                    <div className="text-sm text-primary-text">Quality maintained</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center border border-background-light-gray">
                    <div className="text-4xl font-bold text-accent-success mb-2">5</div>
                    <div className="text-sm text-primary-text">Product lines supported</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-dark to-primary-text">
        <div className="container-max text-center">
          <h2 className="text-4xl font-light text-white mb-6">
            Ready to Transform Your Team?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Let's discuss how I can help navigate your organization through complex transitions
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/#contact" className="px-8 py-4 bg-white text-primary-dark font-semibold rounded-full hover:bg-white/90 transition-colors">
              Start the Conversation
            </Link>
            <Link href="/#case-studies" className="px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white hover:bg-white/10 transition-colors">
              Explore More Work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}