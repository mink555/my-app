"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ConsultationDialog } from "@/components/consultation-dialog"

export function CTASection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 md:px-12 md:py-20 lg:px-16">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] opacity-20" />
          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl lg:text-5xl">
              AI로 비즈니스의 새로운 가능성을 발견하세요
            </h2>
            <p className="mb-8 text-pretty text-lg text-primary-foreground/90 md:text-xl">
              지금 바로 무료 상담을 신청하고, 귀사에 최적화된 AI 전략을 확인해보세요
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="gap-2 bg-background text-base text-foreground hover:bg-background/90"
                onClick={() => setIsDialogOpen(true)}
              >
                상담 신청하기
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-primary-foreground/20 text-base text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                포트폴리오 보기
              </Button>
            </div>
          </div>
        </div>
      </div>
      <ConsultationDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </section>
  )
}
