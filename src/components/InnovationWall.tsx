import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2, ArrowRight, TrendingUp } from "lucide-react";

const ideas = [
  {
    title: "AI-Powered Healthcare Diagnosis",
    author: "Sarah Chen",
    category: "Healthcare AI",
    likes: 234,
    comments: 45,
    status: "Trending",
    avatar: "SC",
    gradient: "from-primary to-cyan-400",
  },
  {
    title: "Sustainable Energy Grid Optimizer",
    author: "Marcus Johnson",
    category: "Clean Tech",
    likes: 189,
    comments: 32,
    status: "New",
    avatar: "MJ",
    gradient: "from-accent to-pink-400",
  },
  {
    title: "Blockchain-Based Supply Chain",
    author: "Elena Rodriguez",
    category: "Cybersecurity",
    likes: 312,
    comments: 67,
    status: "Hot",
    avatar: "ER",
    gradient: "from-cyan-400 to-primary",
  },
  {
    title: "AR Educational Platform",
    author: "James Wu",
    category: "EdTech",
    likes: 156,
    comments: 28,
    status: "Featured",
    avatar: "JW",
    gradient: "from-pink-400 to-accent",
  },
];

const InnovationWall = () => {
  return (
    <section id="innovation-wall" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-transparent to-secondary/30" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">SHOWCASE</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Innovation <span className="text-gradient">Wall</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover groundbreaking ideas from our community. Vote, comment, and collaborate on the next big thing.
          </p>
        </motion.div>

        {/* Ideas Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {ideas.map((idea, index) => (
            <motion.div
              key={idea.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass rounded-2xl p-6 h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${idea.gradient} flex items-center justify-center text-primary-foreground font-semibold text-sm`}>
                      {idea.avatar}
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{idea.author}</div>
                      <div className="text-sm text-muted-foreground">{idea.category}</div>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    idea.status === "Trending" ? "bg-primary/20 text-primary" :
                    idea.status === "Hot" ? "bg-destructive/20 text-destructive" :
                    idea.status === "Featured" ? "bg-accent/20 text-accent" :
                    "bg-secondary text-secondary-foreground"
                  }`}>
                    {idea.status === "Trending" && <TrendingUp className="w-3 h-3 inline mr-1" />}
                    {idea.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-semibold mb-4 text-foreground group-hover:text-gradient transition-all">
                  {idea.title}
                </h3>

                {/* Actions */}
                <div className="flex items-center gap-6 text-muted-foreground">
                  <button className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Heart className="w-4 h-4" />
                    <span className="text-sm">{idea.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 hover:text-primary transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-sm">{idea.comments}</span>
                  </button>
                  <button className="flex items-center gap-2 hover:text-primary transition-colors ml-auto">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button variant="hero-outline" size="lg" className="group">
            View All Ideas
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default InnovationWall;
