import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, MapPin, Linkedin, Github, Cloud, Smartphone, Layers, Zap, Monitor, Users, BarChart3, ExternalLink, Building2, Globe } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Home() {
  const exploringIdeas = [
    {
      title: "Democratize QA for SMBs",
      description: "Making enterprise-grade QA practices accessible and affordable for small and medium businesses",
    },
    {
      title: "AI Adoption for Daily Routine Tasks",
      description: "Integrating AI tools into everyday workflows to automate repetitive tasks and enhance productivity",
    },
    {
      title: "Vibe Coding as Primary Development Way",
      description: "Design a vibe-coding framework that consistently produces reliable, maintainable, and scalable code—ready for enterprise-scale codebases",
    },
    {
      title: "Claude/Anthropic Enthusiast",
      description: "Applying Anthropic patterns and best practices across all use cases, leveraging Claude Code as an agentic system for enhanced business workflows",
    },
    {
      title: "AI-Driven QA Process",
      description: "Inject AI at every QA touchpoint across the SDLC to automate checks and validations, then produce instant, explainable quality reports on each change—including a prioritized defect list with root-cause analysis",
    },
    {
      title: "Lean Remote Team Management",
      description: "Outcome-based, metric-driven management approaches for fully distributed teams with minimal headcount",
    },
  ];

  const workHistory = [
    {
      period: "2022 — Present",
      title: "Head of QA Engineering",
      company: "CloudGeometry",
      location: "Remote",
      logoPath: "/company-logos/cloudgeometry_logo.jpg",
      bgColor: "bg-white"
    },
    {
      period: "2020 — 2022",
      title: "Head of QA Automation",
      company: "SberDevices",
      location: "Remote",
      logoPath: "/company-logos/sberdevices_logo.jpg",
      bgColor: "bg-white"
    },
    {
      period: "2018 — 2020",
      title: "QA Automation Lead",
      company: "WayRay",
      location: "Moscow, Russia",
      logoPath: "/company-logos/wayray.jpg",
      bgColor: "bg-white"
    },
    {
      period: "2017 — 2018",
      title: "Senior QA Automation Engineer",
      company: "Align Technology",
      location: "Moscow, Russia",
      logoPath: "/company-logos/align.jpg",
      bgColor: "bg-white"
    },
    {
      period: "2015 — 2017",
      title: "QA Automation Engineer",
      company: "Axcient",
      location: "Smolensk, Russia",
      logoPath: "/company-logos/axcient_logo.jpg",
      bgColor: "bg-white"
    },
    {
      period: "2010 — 2015",
      title: "Master's Degree in Applied Mathematics & Computer Science",
      company: "Smolensk State University",
      location: "Smolensk, Russia",
      logoPath: "/company-logos/smolgu.jpg",
      bgColor: "bg-white"
    }
  ];

  const recentCaseStudies = [
    {
      title: "Crisis-Driven QA Team Transformation",
      company: "CloudGeometry",
      companyLogo: "/company-logos/cloudgeometry_logo.jpg",
      companyLocation: "Sunnyvale, CA • Remote",
      companyIndustry: "Cloud Solutions & DevOps",
      companySize: "50-200 employees",
      companyDescription: "AWS Advanced Consulting Partner specializing in cloud-native software engineering, DevOps transformation, and SaaS infrastructure optimization.",
      description: "Led 14-person QA team through comprehensive transformation during company relocation to EU, managing near-complete team dissolution while maintaining service continuity across five product lines.",
      problem: "Near-complete team dissolution",
      solution: "SCARF-based change management",
      process: "Weekly 1:1s, strategic resistance management",
      results: [
        "6-7 months full rebuild",
        "100% quality maintained",
        "Seamless client transition"
      ],
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      href: "/case-studies/transformation",
    },
    {
      title: "Enterprise Test Automation Architecture",
      company: "SberDevices",
      companyLogo: "/company-logos/sberdevices_logo.jpg",
      companyLocation: "Moscow, Russia",
      companyIndustry: "Smart Devices & AI",
      companySize: "900+ employees",
      companyDescription: "Innovation division of Sber Bank developing smart home devices, voice assistants, and AI-powered consumer electronics to rival global tech giants.",
      description: "Built test automation from scratch for 900-person startup within regulated banking environment, creating infrastructure for smart devices ecosystem competing with Amazon Alexa.",
      problem: "No automation infrastructure",
      solution: "Multi-framework architecture",
      process: "14-person team, phased rollout",
      results: [
        "95% time reduction",
        "1,670+ test scenarios",
        "90 min regression time"
      ],
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-100",
      href: "/case-studies/automation",
    },
    {
      title: "Strategic Metrics Implementation",
      company: "CloudGeometry",
      companyLogo: "/company-logos/cloudgeometry_logo.jpg",
      companyLocation: "Sunnyvale, CA • Remote",
      companyIndustry: "Cloud Solutions & DevOps",
      companySize: "50-200 employees",
      companyDescription: "AWS Advanced Consulting Partner specializing in cloud-native software engineering, DevOps transformation, and SaaS infrastructure optimization.",
      description: "Transformed remote team performance through data-driven metrics system, connecting KPIs directly to personal development and recognition systems using AWS QuickSight and DataBricks.",
      problem: "Remote team visibility gap",
      solution: "AWS QuickSight + DataBricks",
      process: "Python ETL, stakeholder collaboration",
      results: [
        "3x defect reduction",
        "73% velocity increase",
        "0% headcount growth"
      ],
      bgColor: "bg-gradient-to-br from-purple-50 to-indigo-100",
      href: "/case-studies/metrics",
    },
  ];

  return (
    <div className="min-h-screen bg-background-white">
      <Navigation currentPage="home" />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Left Content */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-primary-dark mb-2 leading-tight">
                Building
                <span className="bg-gradient-to-r from-primary-dark to-accent-link bg-clip-text text-transparent"> Global QA Teams </span>
                & Quality Strategy
              </h1>
              <p className="text-xl text-primary-text mb-4 font-medium">
                A Dubai-based Tech Expert & AI Engineer building GenAI-native systems, agentic QA assistant, and practicing vibe-coding along the way
              </p>
              <p className="text-lg text-primary-text mb-6 leading-relaxed">
                Head of QA Engineering with 10+ years transforming quality operations
                through strategic leadership and technical excellence. I specialize in
                building world-class distributed teams and implementing scalable QA frameworks.
              </p>

              {/* Social Links */}
              <div className="flex items-center justify-center md:justify-start gap-4">
                <a href="mailto:a.alekseenko.personal@gmail.com" className="text-primary-text hover:text-primary-dark transition-colors">
                  <Mail className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/in/alex-alekseenko/" target="_blank" rel="noopener noreferrer" className="text-primary-text hover:text-primary-dark transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <div className="flex items-center text-primary-text">
                  <MapPin className="h-5 w-5 mr-1" />
                  <span className="text-sm">Dubai, UAE</span>
                </div>
              </div>
            </div>

            {/* Right Photo */}
            <div className="flex-shrink-0">
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden bg-gradient-to-br from-primary-dark/10 to-accent-link/10">
                <Image
                  src="/alex-photo.jpg"
                  alt="Alex Alekseenko"
                  fill
                  className="object-cover scale-150"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ideas I'm Exploring */}
      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary-dark mb-8">
            Ideas I&apos;m Actively Exploring
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exploringIdeas.map((idea, index) => (
              <div key={index} className="card bg-background-subtle-gray">
                <h3 className="text-lg font-semibold text-primary-dark mb-3">
                  {idea.title}
                </h3>
                <p className="text-primary-text leading-relaxed">
                  {idea.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Background Section - List View */}
      <section className="px-6 py-12 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            <h2 className="text-2xl font-semibold text-gray-900">
              Background
            </h2>
          </div>
          <div className="space-y-4">
            {workHistory.map((work, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className={`relative w-14 h-14 ${work.bgColor} rounded-lg flex items-center justify-center p-2 border border-gray-200`}>
                    <Image
                      src={work.logoPath}
                      alt={`${work.company} logo`}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <h3 className="text-base font-semibold text-gray-900">
                        {work.company}
                      </h3>
                      <p className="text-sm text-gray-600 mt-0.5">
                        {work.title}
                      </p>
                    </div>
                    <div className="text-sm text-gray-500 mt-1 sm:mt-0 sm:text-right">
                      <div>{work.location && `${work.location}`}</div>
                      <div>{work.period}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* LinkedIn Link */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <a
              href="https://www.linkedin.com/in/alex-alekseenko/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-base text-gray-700 hover:text-gray-900 transition-colors"
            >
              View More on LinkedIn
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>


      {/* Recent Case Studies */}
      <section id="case-studies" className="px-6 py-12 bg-gray-50 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Recent Case Studies
            </h2>
            <p className="text-lg text-gray-600">
              Real-world QA transformations and their measurable impact
            </p>
          </div>

          <div className="grid gap-8 lg:gap-10">
            {recentCaseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border group">
                <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                  {/* Company Info Card - Always on Left */}
                  <div>
                    <div className={`relative ${study.bgColor} rounded-xl p-6 h-full flex items-center justify-center`}>
                      <div className="bg-white rounded-lg w-full p-6 shadow-lg transition-transform duration-300 group-hover:scale-105">
                        {/* Company Header */}
                        <div className="flex items-start gap-3 mb-4">
                          <div className="relative w-16 h-16 bg-white rounded-lg overflow-hidden border border-gray-200 flex-shrink-0">
                            <Image
                              src={study.companyLogo}
                              alt={`${study.company} logo`}
                              width={64}
                              height={64}
                              className="object-contain p-2"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900 mb-1">
                              {study.company}
                            </h3>
                            <p className="text-sm text-gray-600 font-medium">
                              {study.companyIndustry}
                            </p>
                          </div>
                        </div>

                        {/* Company Details */}
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{study.companyLocation}</span>
                          </div>

                          <div className="flex items-center gap-3">
                            <Users className="w-4 h-4 text-gray-400 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{study.companySize}</span>
                          </div>

                          <div className="flex items-start gap-3">
                            <Building2 className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-gray-600 leading-relaxed">
                              {study.companyDescription}
                            </p>
                          </div>
                        </div>

                        {/* Project Context */}
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <div className="flex items-center gap-2 mb-3">
                            <Globe className="w-4 h-4 text-gray-400" />
                            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Project Context</span>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <p className="text-xs text-gray-500 mb-1">Team Size</p>
                              <p className="text-sm font-semibold text-gray-900">14 engineers</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500 mb-1">Duration</p>
                              <p className="text-sm font-semibold text-gray-900">
                                {study.company === "SberDevices" ? "2 years" : "18 months"}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Side - Always on Right */}
                  <div>
                    <div className="mb-4">
                      <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                        {study.company}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-4">
                        {study.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {study.description}
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Problem</h4>
                        <p className="text-sm text-gray-600">{study.problem}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Process</h4>
                        <p className="text-sm text-gray-600">{study.process}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                        <p className="text-sm text-gray-600">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Result</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {study.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-center">
                              <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <Link href={study.href} className="inline-flex items-center px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors">
                      View Case Study
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="px-6 py-12 bg-background-light-gray">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-primary-dark mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-lg text-primary-text mb-8 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your QA operations and build world-class quality teams?
            I&apos;d love to discuss how we can work together.
          </p>
          <a
            href="mailto:a.alekseenko.personal@gmail.com"
            className="inline-flex items-center px-6 py-3 bg-primary-dark text-white font-medium rounded-lg hover:bg-opacity-90 transition-all"
          >
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}