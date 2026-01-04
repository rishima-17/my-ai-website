import { motion } from "framer-motion";
import { Sparkles, Shield, Zap, Globe, Cloud, MessageCircle } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Matching",
    description: "Intelligent algorithms connect you with innovators who complement your skills and vision.",
    gradient: "from-primary to-cyan-400",
  },
  {
    icon: MessageCircle,
    title: "Smart Idea Enhancement",
    description: "Get AI suggestions to refine ideas, predict market feasibility, and generate prototypes.",
    gradient: "from-accent to-pink-400",
  },
  {
    icon: Cloud,
    title: "Cloud Collaboration",
    description: "Seamlessly share documents, hold virtual meetings, and store submissions securely.",
    gradient: "from-cyan-400 to-primary",
  },
  {
    icon: Globe,
    title: "Global Innovation Wall",
    description: "Showcase your ideas publicly, get feedback, and inspire the global community.",
    gradient: "from-pink-400 to-accent",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Enterprise-grade security protects your intellectual property and team data.",
    gradient: "from-primary to-accent",
  },
  {
    icon: Zap,
    title: "Real-time Updates",
    description: "Stay synchronized with live updates, notifications, and collaborative editing.",
    gradient: "from-accent to-primary",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-32 relative">
      {/* Background Accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-accent font-medium mb-4 block">FEATURES</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Built for <span className="text-gradient">Innovators</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Powerful tools designed to accelerate your innovation journey from concept to reality.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="glass rounded-2xl p-8 h-full relative overflow-hidden transition-all duration-500 hover:scale-[1.02]">
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.gradient} mb-6`}>
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Glow */}
                <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
