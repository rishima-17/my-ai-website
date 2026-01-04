import { motion } from "framer-motion";
import { FileText, Brain, Users, Rocket, MessageSquare, Eye } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Post a Challenge",
    description: "Organizations or individuals post real-world problems in sustainable tech, healthcare AI, cybersecurity, and more.",
    color: "primary",
  },
  {
    icon: Brain,
    title: "AI Matchmaking",
    description: "Our AI analyzes your skills and interests to connect you with the perfect teammates and complementary ideas.",
    color: "accent",
  },
  {
    icon: Users,
    title: "Smart Collaboration",
    description: "Use integrated tools for document sharing, virtual brainstorming, and real-time collaboration.",
    color: "primary",
  },
  {
    icon: MessageSquare,
    title: "AI Idea Enhancement",
    description: "Get AI-powered suggestions to improve your ideas, predict feasibility, and generate mock UI screens.",
    color: "accent",
  },
  {
    icon: Eye,
    title: "Public Showcase",
    description: "Share your prototypes on the Innovation Wall for community feedback and open collaboration.",
    color: "primary",
  },
  {
    icon: Rocket,
    title: "Launch & Impact",
    description: "Turn your ideas into reality with the support of the community and AI-powered insights.",
    color: "accent",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-medium mb-4 block">THE PROCESS</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            How <span className="text-gradient">AI CollabHub</span> Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From challenge to solution, our AI-powered platform guides you through every step of the innovation journey.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass rounded-2xl p-8 h-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10">
                {/* Step Number */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`relative p-3 rounded-xl ${step.color === "primary" ? "bg-primary/10" : "bg-accent/10"}`}>
                    <step.icon className={`w-6 h-6 ${step.color === "primary" ? "text-primary" : "text-accent"}`} />
                    <div className={`absolute inset-0 ${step.color === "primary" ? "bg-primary/20" : "bg-accent/20"} rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity`} />
                  </div>
                  <span className="text-muted-foreground font-mono text-sm">Step {index + 1}</span>
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground group-hover:text-gradient transition-all">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Connection Lines (Desktop) */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none">
            <path
              d="M200 200 L400 200 L600 200 L800 200 L1000 200"
              stroke="url(#gradient-line)"
              strokeWidth="2"
              strokeDasharray="8 4"
              opacity="0.3"
            />
            <defs>
              <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--accent))" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
