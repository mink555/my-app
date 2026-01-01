import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, LineChart, Cpu, Database } from "lucide-react"

const services = [
  {
    icon: Brain,
    title: "AI 전략 컨설팅",
    description: "기업의 비즈니스 목표에 맞는 AI 도입 전략을 수립하고 실행 로드맵을 제시합니다.",
  },
  {
    icon: LineChart,
    title: "데이터 분석 및 인사이트",
    description: "축적된 데이터를 분석하여 비즈니스 의사결정에 필요한 핵심 인사이트를 도출합니다.",
  },
  {
    icon: Cpu,
    title: "AI 모델 개발",
    description: "최신 머신러닝 기술을 활용하여 귀사만의 맞춤형 AI 모델을 개발하고 구현합니다.",
  },
  {
    icon: Database,
    title: "데이터 인프라 구축",
    description: "AI 도입을 위한 데이터 파이프라인과 인프라를 설계하고 구축합니다.",
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">전문 서비스</h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            AI 기술의 모든 단계에서 최적의 솔루션을 제공합니다
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="border-border transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
