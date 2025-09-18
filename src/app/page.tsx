import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, MapPin, Linkedin, Github, Cloud, Smartphone, Layers, Zap, Monitor, Users, BarChart3, ExternalLink, Building2, Globe } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Home() {
  const exploringIdeas = [
    {
      title: "AI-Driven QA Automation",
      description: "Exploring how machine learning can revolutionize test case generation and defect prediction",
    },
    {
      title: "Remote Team Excellence",
      description: "Developing frameworks for building high-performing distributed QA teams across time zones",
    },
    {
      title: "Quality Metrics Evolution",
      description: "Creating next-generation KPIs that align quality outcomes with business value",
    },
    {
      title: "DevOps & Quality Integration",
      description: "Seamlessly integrating quality practices into CI/CD pipelines and deployment workflows",
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
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold text-primary-dark mb-6 leading-tight">
                Building
                <span className="bg-gradient-to-r from-primary-dark to-accent-link bg-clip-text text-transparent"> Global QA Teams </span>
                & Quality Strategy
              </h1>
              <p className="text-xl text-primary-text mb-8 leading-relaxed">
                Head of QA Engineering with 10+ years transforming quality operations
                through strategic leadership and technical excellence. I specialize in
                building world-class distributed teams and implementing scalable QA frameworks.
              </p>

              {/* Social Links */}
              <div className="flex items-center justify-center md:justify-start gap-4 mb-8">
                <a href="mailto:a.alekseenko.personal@gmail.com" className="text-primary-text hover:text-primary-dark transition-colors">
                  <Mail className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/in/alexalekseenko" target="_blank" rel="noopener noreferrer" className="text-primary-text hover:text-primary-dark transition-colors">
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
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-gradient-to-br from-primary-dark/10 to-accent-link/10">
                <Image
                  src="/alex-photo.jpg"
                  alt="Alex Alekseenko"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ideas I'm Exploring */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-dark mb-12">
            Ideas I&apos;m Actively Exploring
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {exploringIdeas.map((idea, index) => (
              <div key={index} className="bg-background-subtle-gray p-6 rounded-xl hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-primary-dark mb-3">
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
      <section className="px-6 py-20 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            <h2 className="text-2xl font-semibold text-gray-900">
              Background
            </h2>
          </div>
          <div className="space-y-6">
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
          <div className="mt-12 pt-8 border-t border-gray-200">
            <a
              href="https://www.linkedin.com/in/alexalekseenko"
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

      {/* Experience Timeline - Ladder Style */}
      <section className="px-6 py-20 bg-gray-50 overflow-x-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Professional Journey
            </h2>
            <p className="text-lg text-gray-600">
              10+ years building and leading QA teams across global tech companies
            </p>
          </div>

          {/* Desktop Ladder Timeline */}
          <div className="hidden lg:block relative min-w-max">
            <div className="relative px-20">
              {/* Ladder Rails */}
              <div className="absolute top-24 left-20 right-20 h-px bg-gray-400"></div>
              <div className="absolute bottom-24 left-20 right-20 h-px bg-gray-400"></div>

              {/* Ladder Steps */}
              <div className="flex justify-between items-center h-64">
                {workHistory.slice().reverse().map((work, index) => (
                  <div key={index} className="relative flex flex-col items-center">
                    {/* Vertical Step Line */}
                    <div className="absolute top-0 bottom-0 w-px bg-gray-400"></div>

                    {/* Step Content - Alternating top/bottom */}
                    <div className={`absolute ${index % 2 === 0 ? 'bottom-full mb-8' : 'top-full mt-8'} w-48`}>
                      {/* Company Card */}
                      <div className="bg-white rounded-lg p-4 shadow-lg border border-gray-200 hover:shadow-xl transition-all transform hover:-translate-y-1">
                        <div className="flex justify-center mb-3">
                          <div className="relative w-14 h-14 bg-white rounded-lg overflow-hidden border-2 border-gray-200">
                            <Image
                              src={work.logoPath}
                              alt={`${work.company} logo`}
                              width={56}
                              height={56}
                              className="object-contain p-2"
                            />
                          </div>
                        </div>
                        <h3 className="text-sm font-bold text-gray-900 text-center mb-1">
                          {work.company}
                        </h3>
                        <p className="text-xs text-gray-600 text-center mb-2 leading-tight">
                          {work.title}
                        </p>
                        <p className="text-xs text-gray-500 text-center mb-2">
                          {work.location}
                        </p>
                        <div className="text-center">
                          <span className="inline-block px-2 py-1 bg-gray-100 text-xs font-semibold text-gray-700 rounded-full">
                            {work.period}
                          </span>
                        </div>
                      </div>

                      {/* Connector Line */}
                      <div className={`absolute left-1/2 transform -translate-x-1/2 w-px h-8 bg-gray-300 ${index % 2 === 0 ? 'top-full' : 'bottom-full'}`}></div>
                    </div>

                    {/* Step Node */}
                    <div className="relative z-20 w-4 h-4 bg-white border-2 border-gray-600 rounded-full"></div>
                  </div>
                ))}
              </div>

              {/* Progress Arrow */}
              <div className="absolute top-1/2 right-12 transform -translate-y-1/2">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>

              {/* Start Label */}
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
                <span className="text-sm font-semibold text-gray-500">Start</span>
              </div>

              {/* Current Label */}
              <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
                <span className="text-sm font-semibold text-gray-900">Present</span>
              </div>
            </div>
          </div>

          {/* Mobile Timeline - Vertical Ladder */}
          <div className="lg:hidden">
            <div className="relative">
              {/* Ladder Rails */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-400"></div>
              <div className="absolute right-8 top-0 bottom-0 w-px bg-gray-400"></div>

              {/* Timeline Items */}
              <div className="space-y-0">
                {workHistory.slice().reverse().map((work, index) => (
                  <div key={index} className="relative">
                    {/* Horizontal Step */}
                    <div className="absolute top-1/2 left-8 right-8 h-px bg-gray-400 transform -translate-y-1/2"></div>

                    {/* Company Card */}
                    <div className="relative py-6 px-16">
                      <div className="bg-white rounded-lg p-4 shadow-lg border border-gray-200">
                        <div className="flex items-start gap-3">
                          <div className="relative w-12 h-12 bg-white rounded-lg overflow-hidden border-2 border-gray-200 flex-shrink-0">
                            <Image
                              src={work.logoPath}
                              alt={`${work.company} logo`}
                              width={48}
                              height={48}
                              className="object-contain p-1"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-sm font-bold text-gray-900">
                              {work.company}
                            </h3>
                            <p className="text-xs text-gray-600 mt-1">
                              {work.title}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              {work.location}
                            </p>
                            <span className="inline-block mt-2 px-2 py-1 bg-gray-100 text-xs font-semibold text-gray-700 rounded-full">
                              {work.period}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Progress Arrow */}
              <div className="text-center mt-4">
                <svg className="w-6 h-6 text-gray-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>

          {/* Career Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">10+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">4</div>
              <div className="text-sm text-gray-600">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-sm text-gray-600">Team Members Led</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">3</div>
              <div className="text-sm text-gray-600">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Case Studies */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Recent Case Studies
            </h2>
            <p className="text-lg text-gray-600">
              Real-world QA transformations and their measurable impact
            </p>
          </div>

          <div className="grid gap-12 lg:gap-16">
            {recentCaseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Company Info Card */}
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className={`relative ${study.bgColor} rounded-2xl p-8 h-full flex items-center justify-center`}>
                      <div className="bg-white rounded-xl w-full p-8 shadow-lg">
                        {/* Company Header */}
                        <div className="flex items-start gap-4 mb-6">
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
                        <div className="mt-6 pt-6 border-t border-gray-200">
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

                  {/* Content Side */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="mb-6">
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

                    <div className="grid sm:grid-cols-2 gap-6 mb-8">
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

          <div className="text-center mt-16">
            <Link href="/case-studies" className="inline-flex items-center px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-full font-medium hover:bg-gray-900 hover:text-white transition-all">
              View All Case Studies
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="px-6 py-20 bg-background-light-gray">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary-dark mb-6">
            Let&apos;s Connect
          </h2>
          <p className="text-xl text-primary-text mb-12 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your QA operations and build world-class quality teams?
            I&apos;d love to discuss how we can work together.
          </p>
          <a
            href="mailto:a.alekseenko.personal@gmail.com"
            className="inline-flex items-center px-8 py-4 bg-primary-dark text-white font-medium rounded-lg hover:bg-opacity-90 transition-all"
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