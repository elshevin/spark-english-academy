import { Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: '关于我们', href: '#' },
    { name: '课程介绍', href: '#courses' },
    { name: '教学特色', href: '#features' },
    { name: '学员评价', href: '#testimonials' },
    { name: '课程价格', href: '#pricing' },
    { name: '联系我们', href: '#contact' },
  ];

  const courses = [
    '雅思培训',
    '托福培训',
    '商务英语',
    '青少年英语',
    '考研英语',
    '四六级培训',
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-spark-orange to-spark-amber flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-xl">言</span>
              </div>
              <span className="font-display font-bold text-xl">言果教育</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              言果教育专注于个性化英语教学，15年来帮助超过50,000名学员实现英语梦想。
            </p>
            <div className="flex gap-4">
              {['微信', '微博', '抖音'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-spark-orange transition-colors"
                >
                  <span className="text-sm">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">快速链接</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-spark-orange transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">课程分类</h4>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course}>
                  <a
                    href="#courses"
                    className="text-primary-foreground/80 hover:text-spark-orange transition-colors"
                  >
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">联系方式</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-spark-orange flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">zixun@yanguo.com</div>
                  <div className="text-sm text-primary-foreground/60">24小时内回复</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-spark-orange flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">杭州市</div>
                  <div className="text-sm text-primary-foreground/60">欢迎预约参观</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 言果教育. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-spark-orange transition-colors">
                隐私政策
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-spark-orange transition-colors">
                用户协议
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-spark-orange transition-colors">
                网站地图
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;