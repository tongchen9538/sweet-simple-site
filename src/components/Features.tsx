import { motion } from "framer-motion";
import { Sparkles, Layers, Zap } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "精致设计",
    description: "每一个细节都经过精心打磨，追求视觉与功能的完美平衡。",
  },
  {
    icon: Layers,
    title: "灵活架构",
    description: "模块化的组件设计，让您可以轻松扩展和定制各种功能。",
  },
  {
    icon: Zap,
    title: "高效性能",
    description: "优化的代码结构确保流畅的用户体验和快速的加载速度。",
  },
];

const Features = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-medium mb-4">
            核心特色
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            我们专注于打造简洁而强大的解决方案
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-hover transition-all duration-500"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 text-primary rounded-xl mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-medium mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
