import { ArrowRight, GraduationCap, BookOpen, Globe, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';

const mainCourses = [
  {
    id: 1,
    title: '考研全程班',
    subtitle: '考研培训',
    description: '涵盖政治、英语、数学及专业课全科辅导，名师授课+真题精讲+模拟冲刺，助您一战成硕。',
    duration: '6-12个月',
    students: '8,000+',
    level: '适合所有考研学员',
    color: 'from-primary to-navy-light',
    icon: GraduationCap,
    featured: true,
  },
  {
    id: 2,
    title: '大学学业辅导',
    subtitle: '课业提升',
    description: '英语写作、论文优化、高等数学、大学物理等核心课程辅导，帮助学员夯实基础、提升绩点。',
    duration: '按学期定制',
    students: '12,000+',
    level: '适合在校大学生',
    color: 'from-spark-orange to-spark-amber',
    icon: BookOpen,
    featured: true,
  },
];

const secondaryCourses = [
  {
    id: 3,
    title: '雅思/托福培训',
    subtitle: '出国留学',
    description: '针对雅思、托福考试系统备考，听说读写专项突破，真题模拟冲刺高分。',
    duration: '2-6个月',
    students: '3,500+',
    level: '出国留学备考',
    color: 'from-spark-amber to-accent',
    icon: Globe,
  },
  {
    id: 4,
    title: '四六级/通用英语',
    subtitle: '英语能力',
    description: '大学英语四六级考试培训，商务英语、日常口语等通用英语课程，全面提升英语综合能力。',
    duration: '1-3个月',
    students: '6,000+',
    level: '在校生及职场人士',
    color: 'from-secondary to-spark-orange',
    icon: Languages,
  },
];

const CoursesSection = () => {
  return (
    <section id="courses" className="py-24 bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            课程体系
          </span>
          <h2 className="section-title mb-4">
            选择适合您的<span className="gradient-text">学习方案</span>
          </h2>
          <p className="section-subtitle">
            专注考研培训与学业辅导，同时提供优质英语课程，满足多元化学习需求
          </p>
        </div>

        {/* Main Courses - Featured */}
        <div className="mb-12">
          <h3 className="text-xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-gradient-to-b from-spark-orange to-spark-amber rounded-full"></span>
            核心课程
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {mainCourses.map((course, index) => (
              <div
                key={course.id}
                className="group bg-card rounded-3xl overflow-hidden card-hover animate-fade-up border-2 border-spark-orange/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Course Header */}
                <div className={`bg-gradient-to-r ${course.color} p-6`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-secondary-foreground/80 text-sm font-medium">
                        {course.subtitle}
                      </span>
                      <h4 className="text-2xl font-display font-bold text-secondary-foreground mt-1">
                        {course.title}
                      </h4>
                    </div>
                    <course.icon className="w-12 h-12 text-secondary-foreground/30" />
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Course Info */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="bg-muted px-4 py-2 rounded-lg">
                      <span className="text-xs text-muted-foreground">课程周期</span>
                      <div className="font-semibold text-foreground">{course.duration}</div>
                    </div>
                    <div className="bg-muted px-4 py-2 rounded-lg">
                      <span className="text-xs text-muted-foreground">已学学员</span>
                      <div className="font-semibold text-foreground">{course.students}</div>
                    </div>
                    <div className="bg-muted px-4 py-2 rounded-lg">
                      <span className="text-xs text-muted-foreground">适合人群</span>
                      <div className="font-semibold text-foreground">{course.level}</div>
                    </div>
                  </div>

                  {/* CTA */}
                  <Button variant="spark" className="w-full group/btn">
                    了解课程详情
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Secondary Courses */}
        <div>
          <h3 className="text-xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-gradient-to-b from-muted-foreground to-muted rounded-full"></span>
            英语课程
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {secondaryCourses.map((course, index) => (
              <div
                key={course.id}
                className="group bg-card rounded-3xl overflow-hidden card-hover animate-fade-up"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                {/* Course Header */}
                <div className={`bg-gradient-to-r ${course.color} p-5`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-secondary-foreground/80 text-sm font-medium">
                        {course.subtitle}
                      </span>
                      <h4 className="text-xl font-display font-bold text-secondary-foreground mt-1">
                        {course.title}
                      </h4>
                    </div>
                    <course.icon className="w-10 h-10 text-secondary-foreground/30" />
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-5">
                  <p className="text-muted-foreground mb-5 leading-relaxed text-sm">
                    {course.description}
                  </p>

                  {/* Course Info */}
                  <div className="flex flex-wrap gap-3 mb-5">
                    <div className="bg-muted px-3 py-1.5 rounded-lg">
                      <span className="text-xs text-muted-foreground">周期: </span>
                      <span className="text-sm font-medium text-foreground">{course.duration}</span>
                    </div>
                    <div className="bg-muted px-3 py-1.5 rounded-lg">
                      <span className="text-xs text-muted-foreground">学员: </span>
                      <span className="text-sm font-medium text-foreground">{course.students}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Button variant="outline" className="w-full group/btn">
                    了解详情
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="spark" size="lg">
            查看全部课程
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
