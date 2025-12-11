import { BookOpen, Users, Target, Clock, GraduationCap, Award } from 'lucide-react';

const features = [
  {
    icon: GraduationCap,
    title: '名校师资团队',
    description: '985/211硕博师资，平均教龄8年以上，深谙考研命题规律与学业辅导方法。',
  },
  {
    icon: Target,
    title: '精准备考体系',
    description: '考研政英数全科覆盖，真题解析+考点预测，科学规划备考节奏。',
  },
  {
    icon: Users,
    title: '1对1定制辅导',
    description: '根据学员基础和目标量身定制学习方案，针对性解决薄弱环节。',
  },
  {
    icon: BookOpen,
    title: '大学课业支持',
    description: '高数、线代、概率等核心课程辅导，期末冲刺、绩点提升一站式服务。',
  },
  {
    icon: Clock,
    title: '灵活授课模式',
    description: '线上线下结合，录播直播互补，随时随地高效学习。',
  },
  {
    icon: Award,
    title: '全程督学服务',
    description: '班主任跟踪学习进度，答疑解惑、心理疏导，陪伴式备考更安心。',
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-muted/50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block bg-spark-orange/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4">
            教学优势
          </span>
          <h2 className="section-title mb-4">
            为什么选择<span className="gradient-text">言果教育</span>？
          </h2>
          <p className="section-subtitle">
            十年深耕教育行业，以专业实力和贴心服务助力每一位学员实现升学梦想
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 card-hover animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-spark-orange/20 to-spark-amber/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
