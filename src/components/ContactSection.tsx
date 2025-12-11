import { useState } from 'react';
import { MapPin, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: Mail,
    title: '电子邮箱',
    content: 'zixun@yanguo.com',
    subtitle: '24小时内回复',
  },
  {
    icon: MapPin,
    title: '校区地址',
    content: '杭州市',
    subtitle: '欢迎预约参观',
  },
  {
    icon: Clock,
    title: '营业时间',
    content: '8:00 - 22:00',
    subtitle: '节假日正常营业',
  },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "已提交",
      description: "我们会尽快与您联系！",
    });
    setFormData({ name: '', phone: '', course: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-muted/50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block bg-spark-orange/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4">
            联系我们
          </span>
          <h2 className="section-title mb-4">
            开启您的<span className="gradient-text">升学之旅</span>
          </h2>
          <p className="section-subtitle">
            填写表单获取免费咨询，专业课程顾问将为您量身定制学习方案
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-3xl p-8 shadow-card animate-fade-up">
            <h3 className="text-2xl font-display font-bold text-foreground mb-6">
              免费预约咨询
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    您的姓名
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                    placeholder="请输入姓名"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    联系电话
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                    placeholder="请输入手机号"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  意向课程
                </label>
                <select
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                >
                  <option value="">请选择课程</option>
                  <option value="kaoyan">考研全程班</option>
                  <option value="daxue">大学学业辅导</option>
                  <option value="ielts">雅思/托福培训</option>
                  <option value="cet">四六级/通用英语</option>
                  <option value="other">其他课程</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  备注信息
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all resize-none"
                  placeholder="请描述您的学习目标或其他需求..."
                />
              </div>
              <Button type="submit" variant="spark" size="lg" className="w-full">
                <Send className="w-5 h-5" />
                提交预约
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-up delay-200">
            <div className="grid sm:grid-cols-1 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 card-hover"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-spark-orange/20 to-spark-amber/20 flex items-center justify-center mb-4">
                    <info.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h4 className="font-display font-bold text-foreground mb-1">
                    {info.title}
                  </h4>
                  <p className="text-lg font-semibold text-primary mb-1">
                    {info.content}
                  </p>
                  <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="mt-6 bg-card rounded-2xl p-6 h-48 flex items-center justify-center border-2 border-dashed border-border">
              <div className="text-center">
                <MapPin className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-muted-foreground">校区位置地图</p>
                <p className="text-sm text-muted-foreground">点击查看详细地址</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;