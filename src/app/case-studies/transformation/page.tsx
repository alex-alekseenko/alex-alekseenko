import Link from "next/link";
import { ArrowLeft, Calendar, Building, Users, Target } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function TransformationCaseStudy() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="pt-24 pb-8">
        <div className="container-max">
          <Link href="/#case-studies" className="inline-flex items-center text-primary-text hover:text-primary-dark mb-8">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Case Studies
          </Link>

          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="px-3 py-1 bg-primary-dark text-white text-sm font-medium rounded-full">
                CloudGeometry
              </span>
              <span className="px-3 py-1 bg-background-light-gray text-primary-text text-sm font-medium rounded-full flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                2022-2024
              </span>
              <span className="px-3 py-1 bg-background-light-gray text-primary-text text-sm font-medium rounded-full flex items-center">
                <Users className="mr-2 h-4 w-4" />
                14-person team
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-medium mb-6 text-primary-dark">
              Crisis-Driven QA Team Transformation
            </h1>

            <p className="text-xl text-primary-text leading-relaxed">
              Leading a comprehensive QA transformation during an unprecedented business crisis,
              rebuilding an entire team while maintaining quality standards across five product lines.
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-8 bg-background-light-gray">
        <div className="container-max">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-dark mb-2">6-7 months</div>
              <div className="text-primary-text">Complete team rebuild</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-dark mb-2">100%</div>
              <div className="text-primary-text">Quality standards maintained</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-dark mb-2">Zero</div>
              <div className="text-primary-text">Client impact incidents</div>
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
                  As Head of QA, I led our 14-person quality assurance team through a comprehensive transformation
                  when our company unexpectedly relocated operations to the European Union. Having joined the company
                  just two months prior in January 2022, I needed to rapidly adapt my leadership approach when the
                  relocation was announced in March 2022.
                </p>
                <p>
                  Our team, originally composed entirely of CIS region professionals communicating primarily in Russian,
                  supported five distinct product lines across multiple technical domains, all of which needed continuous
                  quality support during this business-critical transition.
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
                  Beyond the personal shock of this significant change to my own role expectations, we faced an
                  existential business crisis that demanded immediate action while managing near-complete team dissolution.
                  The transition triggered unprecedented attrition, with only one original team member remaining after a year.
                </p>
                <p>
                  We needed to simultaneously:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Maintain service continuity across five product lines</li>
                  <li>Recruit across multiple regions (CIS, EU, LATAM)</li>
                  <li>Establish new communication frameworks across time zones</li>
                  <li>Integrate diverse cultural backgrounds</li>
                  <li>Manage the company&apos;s &quot;fighting for its life&quot; emergency mode</li>
                </ul>
                <p>
                  The compressed timeline eliminated options for formal cultural integration programs, creating a
                  pressure-cooker environment demanding pragmatic crisis management.
                </p>
              </div>
            </div>

            {/* Strategy */}
            <div>
              <h2 className="text-2xl font-semibold text-primary-dark mb-6 flex items-center">
                <Users className="mr-3 h-6 w-6" />
                Strategic Approach
              </h2>
              <div className="prose prose-lg text-primary-text leading-relaxed">
                <p>
                  I implemented a triage-based change management approach prioritizing business continuity
                  alongside targeted people strategies:
                </p>

                <div className="space-y-6 mt-6">
                  <div className="card bg-background-subtle-gray">
                    <h3 className="font-semibold text-primary-dark mb-3">Psychological Safety & Feedback</h3>
                    <p>
                      Established weekly 1:1 cadence with each team member to create psychological safety and
                      gather real-time feedback about transition challenges, project issues, and technical blockers.
                    </p>
                  </div>

                  <div className="card bg-background-subtle-gray">
                    <h3 className="font-semibold text-primary-dark mb-3">SCARF Model Application</h3>
                    <p>
                      Applied the SCARF model—analyzing each person&apos;s potential losses in Status, Certainty,
                      Autonomy, Relatedness, and Fairness—to pinpoint the emotional roots of change resistance.
                      For example, when a QA engineer feared losing autonomy, I reframed it by offering leadership
                      opportunities to mentor junior team members.
                    </p>
                  </div>

                  <div className="card bg-background-subtle-gray">
                    <h3 className="font-semibold text-primary-dark mb-3">Resistance Management</h3>
                    <p>
                      Employed proactive resistance management by strategically engaging influential team members
                      first with change communications—preventing &quot;toxicity spread&quot; by securing buy-in from
                      respected voices before broader announcements.
                    </p>
                  </div>

                  <div className="card bg-background-subtle-gray">
                    <h3 className="font-semibold text-primary-dark mb-3">Cornerstone Model</h3>
                    <p>
                      Created a &quot;cornerstone model&quot; with senior QA experts serving as technical authorities
                      despite the turbulence, providing stability anchors for teams experiencing constant change.
                    </p>
                  </div>

                  <div className="card bg-background-subtle-gray">
                    <h3 className="font-semibold text-primary-dark mb-3">Communication & Growth Focus</h3>
                    <p>
                      Maintained predictable communication schedules and centered communication on personal growth
                      opportunities and career advancement potential in the European market—making meaning from disruption.
                    </p>
                  </div>
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
                  What once seemed like an impossible challenge—rebuilding an entire QA function while keeping
                  five product lines running—transformed into one of our greatest achievements. Within 6-7 months,
                  the team not only survived but emerged stronger, with all quality metrics intact despite the
                  storm we&apos;d weathered.
                </p>
                <p>
                  The moment when client feedback began highlighting our seamless transition—unaware of the
                  behind-the-scenes upheaval—felt like finally reaching solid ground after months at sea. The
                  approach of working through key team members proved invaluable, creating islands of stability
                  that others could cling to during uncertainty.
                </p>
                <p>
                  Most telling was watching team members who once questioned their future begin taking ownership
                  of their new roles, creating a resilient multinational quality organization where language and
                  cultural differences became strengths rather than barriers.
                </p>
              </div>

              <div className="bg-accent-success/10 border-l-4 border-accent-success p-6 mt-8">
                <h3 className="font-semibold text-primary-dark mb-3">Key Lesson</h3>
                <p className="text-primary-text">
                  In crisis lies opportunity—what started as an unwelcome disruption ultimately created a more
                  adaptable, diverse quality team better positioned for future challenges.
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
              Need Help with Team Transformation?
            </h2>
            <p className="text-lg text-primary-text mb-8">
              I specialize in leading teams through challenging transitions while maintaining quality and performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact" className="btn btn-primary">
                Discuss Your Challenge
              </Link>
              <Link href="/#case-studies" className="btn btn-secondary">
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