import { BookOpen, Users, Target, Clock, Headphones, Award } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: '1对1个性化教学',
    description: '根据每位学员的水平和目标，量身定制专属学习计划，确保高效学习。',
  },
  {
    icon: Target,
    title: '考试冲刺培训',
    description: '雅思、托福、四六级、考研英语等专项辅导，助您取得理想成绩。',
  },
  {
    icon: BookOpen,
    title: '口语实战训练',
    description: '沉浸式口语练习，外教对话练习，让您自信开口说英语。',
  },
  {
    icon: Clock,
    title: '灵活上课时间',
    description: '线上线下结合，自由选择上课时间，学习工作两不误。',
  },
  {
    icon: Headphones,
    title: '听力专项突破',
    description: '精选真题听力材料，循序渐进提升听力理解能力。',
  },
  {
    icon: Award,
    title: '名师团队授课',
    description: '海归硕博师资，平均教龄8年以上，教学经验丰富。',
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-muted/50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block bg-spark-orange/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4">
            教学特色
          </span>
          <h2 className="section-title mb-4">
            为什么选择<span className="gradient-text">言果教育</span>？
          </h2>
          <p className="section-subtitle">
            我们致力于提供最优质的英语教育服务，让每一位学员都能在轻松愉快的氛围中提升英语能力
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
