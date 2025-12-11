import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    id: 1,
    name: '基础班',
    subtitle: '适合自学能力较强学员',
    price: '3,980',
    period: '/月',
    features: [
      '每周4节1对1课程',
      '专属学习计划制定',
      '课后作业批改反馈',
      '学习资料电子版',
      '微信群答疑服务',
    ],
    popular: false,
    buttonVariant: 'outline' as const,
  },
  {
    id: 2,
    name: '精品班',
    subtitle: '最受欢迎选择',
    price: '6,980',
    period: '/月',
    features: [
      '每周8节1对1课程',
      '985/211名校师资授课',
      '全程学习跟踪服务',
      '真题模拟测试+精讲',
      '专属班主任督学',
      '学习资料纸质+电子版',
      '24小时答疑服务',
    ],
    popular: true,
    buttonVariant: 'spark' as const,
  },
  {
    id: 3,
    name: 'VIP班',
    subtitle: '高端定制冲刺',
    price: '12,980',
    period: '/月',
    features: [
      '不限次数1对1课程',
      '顶级名师团队授课',
      '私人学习助理服务',
      '专属自习室使用',
      '全真模拟考试+复盘',
      '考研/升学规划咨询',
      '终身学习资料更新',
      'VIP专属讲座邀请',
    ],
    popular: false,
    buttonVariant: 'default' as const,
  },
];

const PricingSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            课程价格
          </span>
          <h2 className="section-title mb-4">
            选择适合您的<span className="gradient-text">学习方案</span>
          </h2>
          <p className="section-subtitle">
            灵活的价格方案，满足不同学员的学习需求和预算
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className={`relative bg-card rounded-3xl p-8 card-hover animate-fade-up ${
                plan.popular ? 'ring-2 ring-secondary shadow-glow' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-spark-orange to-spark-amber text-secondary-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    最受欢迎
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-xl font-display font-bold text-foreground mb-1">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm">{plan.subtitle}</p>
                <div className="mt-4">
                  <span className="text-4xl font-display font-bold text-primary">
                    ¥{plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-spark-orange/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-secondary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button 
                variant={plan.buttonVariant} 
                className="w-full" 
                size="lg"
                onClick={scrollToContact}
              >
                立即报名
              </Button>
            </div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            🎯 7天无理由退款保障
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;