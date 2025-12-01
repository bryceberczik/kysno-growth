import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Target,
  Users,
  TrendingUp,
  PieChart,
  CheckCircle2,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";
import heroBg from "@assets/generated_images/minimalist_abstract_gradient_background_for_saas_landing_page.png";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden selection:bg-primary/10 selection:text-primary">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md border-b border-border/50 py-4 shadow-sm"
            : "bg-transparent py-6"
        }`}
        data-testid="navbar"
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a
            onClick={() => scrollToSection("home".toLowerCase())}
            className="text-2xl font-display font-bold tracking-tighter text-foreground cursor-pointer"
            data-testid="link-logo"
          >
            Kysno
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {["Services", "Pricing", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                data-testid={`nav-item-${item.toLowerCase()}`}
              >
                {item}
              </button>
            ))}
            <button
              onClick={() =>
                window.open(
                  "https://calendly.com/bryceberczik-dev/30min",
                  "_blank"
                )
              }
              className="bg-foreground text-background px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer"
              data-testid="button-nav-cta"
            >
              Book a Call
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-border absolute w-full"
          >
            <div className="px-6 py-4 space-y-4 flex flex-col">
              {["Services", "Pricing", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-left text-base font-medium text-foreground py-2"
                >
                  {item}
                </button>
              ))}
              <button
                className="w-full bg-foreground text-background py-3 rounded-lg font-medium"
                onClick={() =>
                  window.open(
                    "https://calendly.com/bryceberczik-dev/30min",
                    "_blank"
                  )
                }
              >
                Book a Call
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-b from-white/50 via-white/20 to-white z-10"></div>
          <img
            src={heroBg}
            alt="Abstract Background"
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              variants={fadeIn}
              className="inline-flex items-center space-x-2 bg-secondary/50 border border-border/50 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm"
            >
              <span className="flex h-2 w-2 rounded-full bg-primary"></span>
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Growth Partner for B2B
              </span>
            </motion.div>

            <motion.h1
              variants={fadeIn}
              className="text-5xl md:text-7xl font-display font-bold text-foreground leading-[1.1] mb-6"
              data-testid="text-hero-headline"
            >
              Growth That Actually <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-foreground to-foreground/70">
                Moves the Needle.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
              data-testid="text-hero-subheadline"
            >
              Kysno helps businesses grow with data-driven marketing, customer
              acquisition systems, and monthly revenue optimization. Stop
              guessing, start scaling.
            </motion.p>

            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button
                onClick={() =>
                  window.open(
                    "https://calendly.com/bryceberczik-dev/30min",
                    "_blank"
                  )
                }
                className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-primary/25 cursor-pointer"
                data-testid="button-hero-cta-primary"
              >
                Book a Free Call <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="w-full sm:w-auto bg-white border border-border text-foreground px-8 py-4 rounded-full font-medium hover:bg-secondary transition-all duration-300 cursor-pointer"
                data-testid="button-hero-cta-secondary"
              >
                View Pricing
              </button>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto border-t border-border/40 pt-8"
            >
              {[
                { label: "Lead Increase", value: "30–50%" },
                { label: "Time Saved Monthly", value: "10–20 hrs" },
                { label: "Response + Follow-Up", value: "Faster" },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-2xl md:text-3xl font-display font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-3xl md:text-4xl font-display font-bold mb-6 text-foreground"
                data-testid="text-problem-headline"
              >
                The "Growth Plateau" is Real. <br />
                <span className="text-muted-foreground">
                  Here's why you're stuck.
                </span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Most B2B companies have a great product but lack a predictable
                system for acquiring and retaining customers. You rely on
                referrals, inconsistent ads, or "hope marketing."
              </p>
            </motion.div>

            <div className="grid gap-6">
              {[
                {
                  icon: BarChart3,
                  title: "Inconsistent Lead Flow",
                  desc: "Feast or famine months that make planning impossible.",
                },
                {
                  icon: Users,
                  title: "Poor Customer Retention",
                  desc: "Losing clients faster than you can replace them.",
                },
                {
                  icon: Target,
                  title: "No Marketing System",
                  desc: "Random acts of marketing instead of a cohesive strategy.",
                },
                {
                  icon: TrendingUp,
                  title: "Plateauing Revenue",
                  desc: "Stuck at the same MRR despite working harder.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-6 rounded-xl border border-border shadow-sm flex items-start gap-4"
                  data-testid={`card-problem-${i}`}
                >
                  <div className="bg-primary/10 p-3 rounded-lg text-primary shrink-0">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution / Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2
              className="text-3xl md:text-4xl font-display font-bold mb-4"
              data-testid="text-services-headline"
            >
              We Build Growth Engines
            </h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive solutions to acquire, retain, and monetize your
              ideal customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Customer Acquisition",
                desc: "Paid ads, social media, and SEO basics to drive high-intent traffic.",
              },
              {
                icon: BarChart3,
                title: "Lead Generation Systems",
                desc: "Automated funnels that nurture prospects into qualified sales calls.",
              },
              {
                icon: Users,
                title: "Customer Retention",
                desc: "Lifecycle management strategies to increase LTV and reduce churn.",
              },
              {
                icon: PieChart,
                title: "Revenue Optimization",
                desc: "Data-driven tweaks to your funnel to maximize every dollar spent.",
              },
              {
                icon: Users,
                title: "Social Media Management",
                desc: "Consistent, high-quality content that builds authority and trust.",
              },
              {
                icon: TrendingUp,
                title: "Monthly Growth Management",
                desc: "Ongoing reporting, strategy adjustments, and performance reviews.",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-2xl border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 bg-white"
                data-testid={`card-service-${i}`}
              >
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-foreground mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini Case Study / Proof */}
      <section className="py-24 bg-foreground text-white overflow-hidden relative">
        {/* Abstract circles */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Predictable Outcomes, Realistic Expectations
              </h2>
              <p className="text-white/60 max-w-xl text-lg">
                We apply proven growth systems used across modern businesses.
                These are baseline improvements businesses achieve when
                consistent marketing and retention frameworks are implemented.
              </p>
            </div>
            <button
              className="text-white border-b border-primary pb-1 hover:text-primary transition-colors flex items-center gap-2 cursor-pointer"
              onClick={() =>
                window.open(
                  "https://calendly.com/bryceberczik-dev/30min",
                  "_blank"
                )
              }
            >
              Book a free consultation <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                metric: "15–50%",
                label: "Increase in Lead Flow",
                desc: "Common uplift for local businesses after structured outreach and content systems.",
              },
              {
                metric: "2–3.5x",
                label: "Improved Conversion Efficiency",
                desc: "Based on industry benchmarks for optimized landing pages and follow-up workflows.",
              },
              {
                metric: "20–40%",
                label: "Higher Customer Retention",
                desc: "Typical gains when businesses implement consistent email, messaging, and loyalty flows.",
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors"
                data-testid={`card-stat-${i}`}
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="p-3 bg-primary/20 rounded-lg text-primary-foreground">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-5xl font-display font-bold text-white mb-2">
                  {stat.metric}
                </h3>
                <p className="text-lg font-medium text-white mb-2">
                  {stat.label}
                </p>
                <p className="text-white/50 text-sm">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2
              className="text-3xl md:text-4xl font-display font-bold mb-4"
              data-testid="text-pricing-headline"
            >
              Simple, Transparent Pricing
            </h2>
            <p className="text-muted-foreground text-lg">
              Choose the plan that fits your current growth stage.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Starter",
                price: "$500",
                desc: "Essential growth foundation for early-stage businesses.",
                features: [
                  "Acquisition Management",
                  "Basic Lead Gen Funnel Setup",
                  "Basic Retention System",
                  "Monthly Analytics",
                  "Email Support",
                ],
              },
              {
                name: "Standard",
                price: "$750",
                isPopular: true,
                desc: "Accelerated growth execution for scaling teams.",
                features: [
                  "Everything in Starter",
                  "Advanced Lead Gen Automation",
                  "Advanced Retention Flows",
                  "Monthly Social Media Scheduling",
                  "Growth Recommendations",
                  "Priority Support",
                  "A/B Testing",
                ],
              },
              {
                name: "Growth",
                price: "$1,200",
                desc: "Full-service growth partnership for serious operators.",
                features: [
                  "Everything in Standard",
                  "Revenue Optimization",
                  "Weekly Strategy Calls",
                  "Dedicated Account Manager",
                  "Full Social Media Management",
                  "Custom Integrations",
                ],
              },
            ].map((plan, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className={`relative bg-white p-8 rounded-2xl border ${
                  plan.isPopular
                    ? "border-primary shadow-2xl shadow-primary/10 ring-1 ring-primary"
                    : "border-border shadow-sm"
                } flex flex-col`}
                data-testid={`card-pricing-${plan.name.toLowerCase()}`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-display font-bold">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-muted-foreground text-sm mt-4">
                    {plan.desc}
                  </p>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <CheckCircle2
                        className={`w-5 h-5 ${
                          plan.isPopular
                            ? "text-primary"
                            : "text-muted-foreground"
                        }`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div
            className="text-center mt-12 text-muted-foreground text-sm"
            data-testid="text-pricing-setup-fee"
          >
            <p>
              One-time setup fee:{" "}
              <span className="font-medium text-foreground">
                $1,500 – $2,000
              </span>{" "}
              depending on scope.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto bg-foreground text-white rounded-3xl p-12 md:p-20 shadow-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ready to Grow?
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
              Test our work before you commit.{" "}
              <span className="text-primary font-semibold">
                Start your 1–3 month performance trial
              </span>{" "}
              and let us prove we can grow your business.
            </p>

            <button
              className="bg-white text-foreground px-10 py-4 rounded-full font-bold text-lg hover:bg-primary hover:text-white transition-all duration-300 shadow-lg cursor-pointer"
              onClick={() =>
                window.open(
                  "https://calendly.com/bryceberczik-dev/30min",
                  "_blank"
                )
              }
              data-testid="button-footer-cta"
            >
              Book a Free Call
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <a
                onClick={() => scrollToSection("Home".toLowerCase())}
                className="text-2xl font-display font-bold tracking-tighter text-foreground cursor-pointer"
              >
                Kysno
              </a>
              <p className="text-sm text-muted-foreground mt-2">
                © {new Date().getFullYear()} Kysno Growth Agency. All rights
                reserved.
              </p>
            </div>

            <div className="flex items-center space-x-8">
              {["Home", "Services", "Pricing", "Contact"].map((item) => (
                <a
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
