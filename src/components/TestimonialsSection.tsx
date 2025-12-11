import { Star, Quote } from 'lucide-react';
import testimonial1 from '@/assets/testimonial-1.jpg';
import testimonial2 from '@/assets/testimonial-2.jpg';
import testimonial3 from '@/assets/testimonial-3.jpg';

const testimonials = [
  {
    id: 1,
    name: '陈思远',
    role: '2024届考研 | 上岸浙江大学',
    image: testimonial1,
    content: '在言果教育学习了8个月，从二本逆袭上岸浙大！老师们对考研命题规律把握非常准，政治和英语的押题几乎全中。班主任全程督学，让我在备考路上不孤单。感谢言果教育，圆了我的名校梦！',
    rating: 5,
  },
  {
    id: 2,
    name: '王嘉琪',
    role: '大三学生 | 绩点提升3.2→3.8',
    image: testimonial2,
    content: '大二时高数和线代挂科，找到言果教育补习后，不仅顺利补考通过，后续课程也都拿了高分。老师讲解很有耐心，把复杂的知识点拆解得很清楚。现在GPA达到3.8，顺利保研！',
    rating: 5,
  },
  {
    id: 3,
    name: '李泽涵',
    role: '雅思学员 | 首考7.0分',
    image: testimonial3,
    content: '原本只想考四六级，后来决定出国留学。在言果教育学习雅思三个月，首考就拿到7.0分。课程体系很完善，听说读写都有专项训练。老师还帮我规划了申请时间线，非常专业！',
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
            学员心声
          </span>
          <h2 className="section-title mb-4">
            听听他们<span className="gradient-text">怎么说</span>
          </h2>
          <p className="section-subtitle">
            真实学员的学习经历与反馈，见证言果教育的教学成果
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
            <div className="font-display font-bold text-4xl text-primary">30,000+</div>
            <div className="text-muted-foreground">学员选择</div>
          </div>
          <div className="w-px h-12 bg-border hidden md:block" />
          <div className="text-center">
            <div className="font-display font-bold text-4xl text-primary">89%</div>
            <div className="text-muted-foreground">考研上岸率</div>
          </div>
          <div className="w-px h-12 bg-border hidden md:block" />
          <div className="text-center">
            <div className="font-display font-bold text-4xl text-primary">4.9</div>
            <div className="text-muted-foreground">平均评分</div>
          </div>
          <div className="w-px h-12 bg-border hidden md:block" />
          <div className="text-center">
            <div className="font-display font-bold text-4xl text-primary">10年</div>
            <div className="text-muted-foreground">教学经验</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
