import { ArrowRight, Play, Star, Users, Award, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-students.jpg';
const HeroSection = () => {
  const stats = [{
    icon: Users,
    value: '30,000+',
    label: '学员信赖'
  }, {
    icon: GraduationCap,
    value: '89%',
    label: '考研上岸率'
  }, {
    icon: Award,
    value: '10年',
    label: '教学经验'
  }];
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-spark-orange-light via-background to-muted" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-spark-orange/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-soft mb-6">
              <span className="w-2 h-2 bg-spark-orange rounded-full animate-pulse" />
              <span className="text-sm font-medium text-muted-foreground">
                专业考研&学业辅导品牌
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary leading-tight mb-6">
              助力升学梦想
              <span className="gradient-text block mt-2">成就精彩未来</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">言果教育专注于考研培训与大学学业辅导，同时提供雅思、托福、四六级等英语课程。 成立五年深耕教育行业，帮助数万学员圆梦名校、提升学业。</p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="spark" size="lg" className="group" onClick={scrollToContact}>
                免费预约咨询
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Play className="w-5 h-5" />
                了解课程体系
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              {stats.map((stat, index) => <div key={index} className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-spark-orange/20 to-spark-amber/20 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-2xl text-primary">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </div>)}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-up delay-200">
            <div className="relative rounded-3xl overflow-hidden shadow-card">
              <img src={heroImage} alt="言果教育学员在课堂学习" className="w-full h-auto object-cover" />
              {/* Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-card/90 backdrop-blur-md rounded-2xl p-4 shadow-card">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map(i => <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-spark-orange to-spark-amber border-2 border-card" />)}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">本周已有 86 人报名</div>
                    <div className="text-sm text-muted-foreground">加入我们，开启升学之旅</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-card rounded-2xl p-4 shadow-card animate-float">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-spark-orange to-spark-amber flex items-center justify-center">
                  <Star className="w-5 h-5 text-secondary-foreground fill-current" />
                </div>
                <div>
                  <div className="font-bold text-foreground">4.9/5.0</div>
                  <div className="text-xs text-muted-foreground">学员评分</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;