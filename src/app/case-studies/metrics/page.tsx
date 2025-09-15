import Link from "next/link";
import { ArrowLeft, Calendar, Users, BarChart3, Database, Target } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function MetricsCaseStudy() {
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
                CloudGeometry
              </span>
              <span className="px-3 py-1 bg-background-light-gray text-primary-text text-sm font-medium rounded-full flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                2023-2024
              </span>
              <span className="px-3 py-1 bg-background-light-gray text-primary-text text-sm font-medium rounded-full flex items-center">
                <Users className="mr-2 h-4 w-4" />
                14-person distributed team
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-medium mb-6 text-primary-dark">
              Strategic Metrics Implementation
            </h1>

            <p className="text-xl text-primary-text leading-relaxed">
              Transforming remote team performance through a comprehensive data-driven metrics system,
              connecting KPIs directly to personal development and business outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-8 bg-background-light-gray">
        <div className="container-max">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-dark mb-2">3x</div>
              <div className="text-primary-text">Defect reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-dark mb-2">73%</div>
              <div className="text-primary-text">Velocity increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-dark mb-2">0%</div>
              <div className="text-primary-text">Headcount growth needed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-dark mb-2">7%</div>
              <div className="text-primary-text">Release postponements</div>
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
                <Users className="mr-3 h-6 w-6" />
                The Situation
              </h2>
              <div className="prose prose-lg text-primary-text leading-relaxed">
                <p>
                  As Head of QA, I led a remote-based team of 14 engineers working across multiple time zones and
                  continents, supporting five distinct projects with varying roadmaps and requirements. The team
                  existed in a management &quot;gray zone&quot;—with only rudimentary metrics like total test case
                  counts available, stakeholders had limited visibility into actual workload, performance, or value delivery.
                </p>
                <p>
                  As an outsourcing company, we faced increasing pressure from clients questioning whether our QA
                  resources were optimally allocated and utilized. Without meaningful performance indicators, it was
                  increasingly difficult to differentiate between engineers delivering substantive contributions versus
                  those creating surface-level artifacts like empty test cases or claiming to validate features they
                  hadn&apos;t thoroughly tested.
                </p>
                <p>
                  This lack of visibility contributed to inconsistent quality, missed defects reaching production,
                  and growing customer dissatisfaction.
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
                  Implementing a comprehensive metrics framework faced multiple, interconnected challenges:
                </p>

                <div className="space-y-4 my-6">
                  <div className="card bg-red-50 border-l-4 border-red-400">
                    <h3 className="font-semibold text-primary-dark mb-2">Cultural Resistance</h3>
                    <p className="text-primary-text">
                      The fundamental shift toward data-driven management represented a cultural departure from established
                      practices, triggering resistance—particularly from those benefiting from the previous lack of visibility.
                    </p>
                  </div>

                  <div className="card bg-yellow-50 border-l-4 border-yellow-400">
                    <h3 className="font-semibold text-primary-dark mb-2">Remote Management Challenge</h3>
                    <p className="text-primary-text">
                      As a manager of a fully distributed team, I needed to establish a clear system for tracking and
                      managing remote workers—the metrics initiative was my strategic response to this critical challenge.
                    </p>
                  </div>

                  <div className="card bg-blue-50 border-l-4 border-blue-400">
                    <h3 className="font-semibold text-primary-dark mb-2">Technical Infrastructure Gap</h3>
                    <p className="text-primary-text">
                      We had no dedicated analytics platform, relying solely on manually updated Excel spreadsheets for
                      reporting, making real-time insights impossible and data collection error-prone.
                    </p>
                  </div>
                </div>

                <p>
                  Creating a sophisticated measurement system would require not just process changes but building an
                  entire technical infrastructure from scratch without dedicated BI resources or established data pipelines.
                </p>
              </div>
            </div>

            {/* Technical Solution */}
            <div>
              <h2 className="text-2xl font-semibold text-primary-dark mb-6 flex items-center">
                <Database className="mr-3 h-6 w-6" />
                Technical Implementation
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-primary-text">
                  I implemented a comprehensive technical and strategic approach, taking full end-to-end ownership
                  from conception to implementation:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="card bg-background-white border border-background-light-gray">
                    <h3 className="font-semibold text-primary-dark mb-3 flex items-center">
                      <BarChart3 className="mr-2 h-5 w-5" />
                      AWS QuickSight Platform
                    </h3>
                    <p className="text-primary-text">
                      Selected AWS QuickSight as visualization platform to avoid lengthy corporate procurement
                      while leveraging existing AWS infrastructure
                    </p>
                  </div>

                  <div className="card bg-background-white border border-background-light-gray">
                    <h3 className="font-semibold text-primary-dark mb-3 flex items-center">
                      <Database className="mr-2 h-5 w-5" />
                      Custom Data Pipeline
                    </h3>
                    <p className="text-primary-text">
                      Developed custom Python scripts to extract and transform data from Jira and TestRail sources
                    </p>
                  </div>

                  <div className="card bg-background-white border border-background-light-gray">
                    <h3 className="font-semibold text-primary-dark mb-3">ETL Architecture</h3>
                    <p className="text-primary-text">
                      Implemented ETL architecture ensuring clean, reliable data for reporting with automated processing
                    </p>
                  </div>

                  <div className="card bg-background-white border border-background-light-gray">
                    <h3 className="font-semibold text-primary-dark mb-3">Multi-dimensional Dashboards</h3>
                    <p className="text-primary-text">
                      Designed dashboards with different visualization types tailored to specific stakeholder needs
                    </p>
                  </div>
                </div>

                <div className="bg-accent-success/10 border-l-4 border-accent-success p-6">
                  <h3 className="font-semibold text-primary-dark mb-3">Advanced Implementation</h3>
                  <p className="text-primary-text">
                    Later obtained DataBricks certification to migrate the solution to an enterprise platform,
                    implementing a modern multi-hop architecture and ELT approach to enhance scalability and maintainability.
                  </p>
                </div>
              </div>
            </div>

            {/* Strategic Approach */}
            <div>
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                Strategic Framework
              </h2>
              <div className="space-y-6">
                <div className="card bg-background-subtle-gray">
                  <h3 className="font-semibold text-primary-dark mb-3">Business Alignment</h3>
                  <p className="text-primary-text">
                    Collaborated directly with business stakeholders to identify key expectations and success indicators,
                    ensuring our metrics framework aligned with business priorities rather than simply measuring QA activities.
                  </p>
                </div>

                <div className="card bg-background-subtle-gray">
                  <h3 className="font-semibold text-primary-dark mb-3">Individual Accountability</h3>
                  <p className="text-primary-text">
                    Established clear connections between individual responsibilities and team outcomes by decomposing
                    high-level quality metrics into specific actions each QA engineer could directly influence.
                  </p>
                </div>

                <div className="card bg-background-subtle-gray">
                  <h3 className="font-semibold text-primary-dark mb-3">Transparent Visibility</h3>
                  <p className="text-primary-text">
                    Created transparent visibility by making the dashboard accessible to all stakeholders, managers,
                    and team members, eliminating information asymmetry.
                  </p>
                </div>

                <div className="card bg-background-subtle-gray">
                  <h3 className="font-semibold text-primary-dark mb-3">Career Development Integration</h3>
                  <p className="text-primary-text">
                    Tied measurement to personal development by connecting metrics directly to growth opportunities
                    and recognition systems, making career advancement objective and predictable.
                  </p>
                </div>
              </div>
            </div>

            {/* Results */}
            <div>
              <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                Transformational Impact
              </h2>
              <div className="prose prose-lg text-primary-text leading-relaxed">
                <p>
                  The metrics transformation delivered remarkable business impact across multiple dimensions:
                </p>

                <div className="grid md:grid-cols-2 gap-8 my-8">
                  <div>
                    <h3 className="font-semibold text-primary-dark mb-4">Quantitative Results</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-accent-success rounded-full mr-3"></div>
                        <span>Defect leakage decreased by 3x (down to 3.1%)</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-accent-success rounded-full mr-3"></div>
                        <span>73% increase in development velocity supported</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-accent-success rounded-full mr-3"></div>
                        <span>33% growth in development team accommodated</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-accent-success rounded-full mr-3"></div>
                        <span>Zero QA headcount expansion needed</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-accent-success rounded-full mr-3"></div>
                        <span>Only 7% of releases faced postponement</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-primary-dark mb-4">Qualitative Transformation</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary-dark rounded-full mr-3"></div>
                        <span>Client conversations shifted to data-driven discussions</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary-dark rounded-full mr-3"></div>
                        <span>High performers recognized based on real results</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary-dark rounded-full mr-3"></div>
                        <span>Balanced workload distribution reduced burnout</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary-dark rounded-full mr-3"></div>
                        <span>Increased autonomy and predictability</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary-dark rounded-full mr-3"></div>
                        <span>Improved team satisfaction and engagement</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <p>
                  Beyond the numbers, the initiative fundamentally changed stakeholder dynamics. Client conversations
                  shifted from subjective debates about resource utilization to data-driven discussions about quality
                  outcomes and strategic investments.
                </p>

                <p>
                  Within the team, performance visibility created a culture where actual contributions determined
                  recognition and rewards, allowing high performers to finally shine based on real results rather
                  than perception, while underperformers could no longer hide.
                </p>
              </div>

              <div className="bg-accent-success/10 border-l-4 border-accent-success p-6 mt-8">
                <h3 className="font-semibold text-primary-dark mb-3">Critical Success Factor</h3>
                <p className="text-primary-text">
                  Most critically, the framework proved invaluable in managing our remote, multinational team,
                  providing objective insight into engagement and results regardless of physical location or time zone.
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
              Need Data-Driven QA Management?
            </h2>
            <p className="text-lg text-primary-text mb-8">
              I specialize in building comprehensive metrics frameworks that connect individual performance to business outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact" className="btn btn-primary">
                Discuss Your Metrics Strategy
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