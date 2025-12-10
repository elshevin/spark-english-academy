import { Star, Quote } from 'lucide-react';
import testimonial1 from '@/assets/testimonial-1.jpg';
import testimonial2 from '@/assets/testimonial-2.jpg';
import testimonial3 from '@/assets/testimonial-3.jpg';

const testimonials = [
  {
    id: 1,
    name: '李雨萌',
    role: '大学生 | 雅思7.5分',
    image: testimonial1,
    content: '在言果教育学习了三个月，雅思从5.5提升到7.5分！老师针对我的弱项制定了专门的训练计划，尤其是口语和写作进步特别大。感谢言果教育，让我成功拿到了理想院校的offer！',
    rating: 5,
  },
  {
    id: 2,
    name: '张明辉',
    role: '职场人士 | 商务英语',
    image: testimonial2,
    content: '作为一名外企员工，英语一直是我的短板。在言果教育学习商务英语后，现在开会发言、写英文邮件都变得游刃有余。课程内容非常实用，老师的教学方法也很高效。',
    rating: 5,
  },
  {
    id: 3,
    name: '王晓芳',
    role: '学生家长',
    image: testimonial3,
    content: '女儿在言果教育学习英语两年了，从最初对英语没兴趣到现在主动要求学英语，变化太大了！老师们非常有耐心，教学方式也很适合孩子。看到孩子英语成绩稳步提升，我们全家都很满意。',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-muted/50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block bg-spark-orange/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4">
            学员评价
          </span>
          <h2 className="section-title mb-4">
            听听他们<span className="gradient-text">怎么说</span>
          </h2>
          <p className="section-subtitle">
            来自真实学员的学习心得与反馈，见证言果教育的教学成果
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-card rounded-3xl p-8 card-hover animate-fade-up relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote className="w-10 h-10 text-spark-orange/20" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-spark-amber fill-current"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <div className="font-display font-bold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-60">
          <div className="text-center">
            <div className="font-display font-bold text-4xl text-primary">50,000+</div>
            <div className="text-muted-foreground">学员选择</div>
          </div>
          <div className="w-px h-12 bg-border hidden md:block" />
          <div className="text-center">
            <div className="font-display font-bold text-4xl text-primary">98%</div>
            <div className="text-muted-foreground">学员满意度</div>
          </div>
          <div className="w-px h-12 bg-border hidden md:block" />
          <div className="text-center">
            <div className="font-display font-bold text-4xl text-primary">4.9</div>
            <div className="text-muted-foreground">平均评分</div>
          </div>
          <div className="w-px h-12 bg-border hidden md:block" />
          <div className="text-center">
            <div className="font-display font-bold text-4xl text-primary">15年</div>
            <div className="text-muted-foreground">教学经验</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
