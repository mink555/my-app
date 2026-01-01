import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-lg font-bold text-primary-foreground">AI</span>
            </div>
            <span className="text-lg font-bold">AI Consulting</span>
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            <a
              href="#services"
              className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
            >
              서비스
            </a>
            <a
              href="#expertise"
              className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
            >
              전문 분야
            </a>
            <a
              href="#process"
              className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
            >
              프로세스
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
            >
              문의
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="hidden md:inline-flex">
            로그인
          </Button>
          <Button size="sm" className="hidden md:inline-flex">
            무료 상담
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
