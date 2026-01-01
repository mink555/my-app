"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ConsultationDialog } from "@/components/consultation-dialog"

export function HeroSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32 lg:py-40">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            AI 기술 혁신 파트너
          </div>
          <h1 className="mb-6 text-balance text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            데이터로 시작하는
            <br />
            <span className="text-primary">지능형 비즈니스</span>
          </h1>
          <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl lg:text-2xl">
            AI와 데이터 분석 기술로 귀사의 비즈니스를 혁신하고,
            <br />
            경쟁력 있는 미래를 설계합니다
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="gap-2 text-base" onClick={() => setIsDialogOpen(true)}>
              무료 상담 시작하기
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-base bg-transparent">
              서비스 둘러보기
            </Button>
          </div>
        </div>
      </div>
      <ConsultationDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </section>
  )
}
