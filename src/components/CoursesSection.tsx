import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const courses = [
  {
    id: 1,
    title: '雅思高分冲刺班',
    subtitle: 'IELTS Preparation',
    description: '针对雅思考试听说读写四项全面提升，真题模拟+技巧讲解，助您达到目标分数。',
    duration: '3-6个月',
    students: '2,500+',
    level: '适合基础较好学员',
    color: 'from-spark-orange to-spark-amber',
  },
  {
    id: 2,
    title: '托福突破训练营',
    subtitle: 'TOEFL Intensive',
    description: '美国ETS官方教材，资深托福名师授课，听力口语专项突破，写作逻辑训练。',
    duration: '2-4个月',
    students: '1,800+',
    level: '适合留学备考学员',
    color: 'from-primary to-navy-light',
  },
  {
    id: 3,
    title: '商务英语精英班',
    subtitle: 'Business English',
    description: '职场英语沟通、商务谈判、邮件写作、会议演讲，全方位提升职场竞争力。',
    duration: '2-3个月',
    students: '3,200+',
    level: '适合职场人士',
    color: 'from-spark-amber to-accent',
  },
  {
    id: 4,
    title: '青少年英语培优班',
    subtitle: 'Youth English',
    description: '趣味互动教学，培养英语兴趣，听说读写全面发展，为升学打下坚实基础。',
    duration: '长期课程',
    students: '5,000+',
    level: '适合6-18岁学员',
    color: 'from-secondary to-spark-orange',
  },
];

const CoursesSection = () => {
  return (
    <section id="courses" className="py-24 bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            精品课程
          </span>
          <h2 className="section-title mb-4">
            选择适合您的<span className="gradient-text">学习课程</span>
          </h2>
          <p className="section-subtitle">
            我们提供多种专业课程，满足不同学员的学习需求和目标
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className="group bg-card rounded-3xl overflow-hidden card-hover animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Course Header */}
              <div className={`bg-gradient-to-r ${course.color} p-6`}>
                <span className="text-secondary-foreground/80 text-sm font-medium">
                  {course.subtitle}
                </span>
                <h3 className="text-2xl font-display font-bold text-secondary-foreground mt-1">
                  {course.title}
                </h3>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {course.description}
                </p>

                {/* Course Info */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="bg-muted px-4 py-2 rounded-lg">
                    <span className="text-xs text-muted-foreground">课程时长</span>
                    <div className="font-semibold text-foreground">{course.duration}</div>
                  </div>
                  <div className="bg-muted px-4 py-2 rounded-lg">
                    <span className="text-xs text-muted-foreground">已学学员</span>
                    <div className="font-semibold text-foreground">{course.students}</div>
                  </div>
                  <div className="bg-muted px-4 py-2 rounded-lg">
                    <span className="text-xs text-muted-foreground">难度等级</span>
                    <div className="font-semibold text-foreground">{course.level}</div>
                  </div>
                </div>

                {/* CTA */}
                <Button variant="outline" className="w-full group/btn">
                  了解课程详情
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
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
