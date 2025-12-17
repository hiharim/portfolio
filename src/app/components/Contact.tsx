import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, Github, Linkedin } from "lucide-react";

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    alert("메시지가 전송되었습니다!");
  };

  return (
    <section className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="text-center mb-12">
        <h2 className="mb-4">연락하기</h2>
        <p className="text-muted-foreground">
          프로젝트 문의나 협업 제안을 환영합니다.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="pb-4">
  <CardHeader className="text-center">
    <div className="mx-auto mb-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
      <Mail className="h-6 w-6 text-primary" />
    </div>
    <CardTitle className="text-base">Email</CardTitle>
    <CardDescription>hastein96@gmail.com</CardDescription>
  </CardHeader>
</Card>

        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto mb-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Github className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-base">GitHub</CardTitle>
            <CardDescription>@hiharim</CardDescription>
          </CardHeader>
        </Card>
        
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto mb-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Linkedin className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-base">LinkedIn</CardTitle>
            <CardDescription>linkedin.com/in/you</CardDescription>
          </CardHeader>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>메시지 보내기</CardTitle>
          <CardDescription>
            아래 양식을 작성해주시면 빠르게 답변드리겠습니다.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">이름</Label>
                <Input id="name" placeholder="홍길동" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">이메일</Label>
                <Input id="email" type="email" placeholder="your@email.com" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">제목</Label>
              <Input id="subject" placeholder="프로젝트 문의" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">메시지</Label>
              <Textarea
                id="message"
                placeholder="메시지를 입력해주세요..."
                className="min-h-[150px]"
                required
              />
            </div>
            <Button type="submit" className="w-full">전송하기</Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
