import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function CaseStudies() {
  const caseStudies = [
    {
      id: "transformation",
      title: "Crisis-Driven QA Team Transformation",
      company: "CloudGeometry",
      period: "2022-2024",
      description: "Led 14-person QA team through comprehensive transformation during company relocation to EU, managing near-complete team dissolution while maintaining service continuity across five product lines.",
      metrics: [
        { value: "6-7 months", label: "Full team rebuild" },
        { value: "100%", label: "Quality maintained" },
        { value: "Seamless", label: "Client transition" },
      ],
      tags: ["Change Management", "Team Building", "Crisis Leadership"],
      href: "/case-studies/transformation",
    },
    {
      id: "automation",
      title: "Enterprise Test Automation Architecture",
      company: "SberDevices",
      period: "2020-2022",
      description: "Built test automation from scratch for 900-person startup within regulated banking environment, creating infrastructure for smart devices ecosystem competing with Amazon Alexa.",
      metrics: [
        { value: "95%", label: "Time reduction" },
        { value: "1,670+", label: "Test scenarios" },
        { value: "90 min", label: "Regression time" },
      ],
      tags: ["Test Automation", "IoT", "Voice Assistants"],
      href: "/case-studies/automation",
    },
    {
      id: "metrics",
      title: "Strategic Metrics Implementation",
      company: "CloudGeometry",
      period: "2023-2024",
      description: "Transformed remote team performance through data-driven metrics system, connecting KPIs directly to personal development and recognition systems using AWS QuickSight and DataBricks.",
      metrics: [
        { value: "3x", label: "Defect reduction" },
        { value: "73%", label: "Velocity increase" },
        { value: "0%", label: "Headcount growth" },
      ],
      tags: ["Data Analytics", "KPIs", "Performance Management"],
      href: "/case-studies/metrics",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation currentPage="case-studies" />

      {/* Header */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-primary-dark mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-primary-text max-w-2xl leading-relaxed">
            Real-world transformations delivering measurable business impact through
            strategic QA leadership and technical excellence.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {caseStudies.map((study, index) => (
              <Link key={study.id} href={study.href} className="block group">
                <div className="bg-background-subtle-gray p-8 rounded-xl hover:shadow-md transition-all group-hover:bg-background-light-gray">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-primary-dark text-white text-sm font-medium rounded-full">
                      {study.company}
                    </span>
                    <span className="text-sm text-primary-text">
                      {study.period}
                    </span>
                    <span className="text-sm text-primary-text">
                      •
                    </span>
                    <span className="text-sm text-primary-text">
                      12 min read
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-primary-dark mb-4 group-hover:text-accent-link transition-colors">
                    {study.title}
                  </h2>

                  <p className="text-lg text-primary-text mb-6 leading-relaxed">
                    {study.description}
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    {study.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="text-center bg-background-white p-4 rounded-lg">
                        <div className="text-2xl font-bold text-primary-dark mb-1">
                          {metric.value}
                        </div>
                        <div className="text-sm text-primary-text">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-background-white text-primary-text text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-background-light-gray">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary-dark mb-6">
            Ready to Transform Your QA Operations?
          </h2>
          <p className="text-xl text-primary-text mb-8 max-w-2xl mx-auto leading-relaxed">
            Let&apos;s discuss how I can help your organization build world-class quality teams and processes.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center px-8 py-4 bg-primary-dark text-white font-medium rounded-lg hover:bg-opacity-90 transition-all"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}