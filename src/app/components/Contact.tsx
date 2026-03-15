import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

const contactLinks = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    value: "hastein96@gmail.com",
    href: "mailto:hastein96@gmail.com",
    gradient: "from-[#027DFD]/18 to-[#54C5F8]/12",
    iconColor: "text-[#027DFD] bg-[#027DFD]/15",
  },
  {
    icon: <Github className="w-6 h-6" />,
    title: "GitHub",
    value: "@hiharim",
    href: "https://github.com/hiharim",
    gradient: "from-[#027DFD]/14 to-[#54C5F8]/8",
    iconColor: "text-[#0288D1] bg-[#0288D1]/12",
  },
  {
    icon: <Linkedin className="w-6 h-6" />,
    title: "LinkedIn",
    value: "Harim Cho",
    href: "https://www.linkedin.com/in/%ED%95%98%EB%A6%BC-%EC%A1%B0-572866258/",
    gradient: "from-[#027DFD]/10 to-[#54C5F8]/6",
    iconColor: "text-[#039BE5] bg-[#039BE5]/10",
  },
];

export function Contact() {
  const { t } = useTranslation();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("메시지가 전송되었습니다!");
  };

  return (
    <section className="container mx-auto px-4 py-24 max-w-6xl">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-4">
          Get in Touch
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          {t("nav.contact")}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Left: Contact Links */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          {contactLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative bg-gradient-to-br ${link.gradient} rounded-2xl p-5 border border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`flex items-center justify-center w-11 h-11 rounded-xl ${link.iconColor} transition-transform duration-300 group-hover:scale-110`}
                >
                  {link.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-foreground leading-tight">
                    {link.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-0.5 truncate">
                    {link.value}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Right: Contact Form */}
        <div className="lg:col-span-3">
          <div className="rounded-2xl border border-border/50 bg-gradient-to-br from-[#027DFD]/4 to-[#54C5F8]/2 p-6 md:p-8">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-foreground">
                메시지 보내기
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                아래 양식을 작성해주시면 빠르게 답변드리겠습니다.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">
                    이름
                  </Label>
                  <Input
                    id="name"
                    placeholder="홍길동"
                    required
                    className="rounded-lg bg-background/60 border-border/40"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    이메일
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="rounded-lg bg-background/60 border-border/40"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-sm font-medium">
                  제목
                </Label>
                <Input
                  id="subject"
                  placeholder="프로젝트 문의"
                  required
                  className="rounded-lg bg-background/60 border-border/40"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium">
                  메시지
                </Label>
                <Textarea
                  id="message"
                  placeholder="메시지를 입력해주세요..."
                  className="min-h-[130px] rounded-lg bg-background/60 border-border/40"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full rounded-xl h-11 font-semibold"
              >
                <Send className="mr-2 h-4 w-4" />
                전송하기
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
