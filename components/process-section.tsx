import { Card, CardContent } from "@/components/ui/card"

const steps = [
  {
    number: "01",
    title: "현황 분석",
    description: "현재 비즈니스 프로세스와 데이터 현황을 면밀히 분석합니다.",
  },
  {
    number: "02",
    title: "전략 수립",
    description: "AI 도입 목표를 설정하고 단계별 실행 계획을 수립합니다.",
  },
  {
    number: "03",
    title: "개발 및 구현",
    description: "최적화된 AI 솔루션을 개발하고 시스템에 통합합니다.",
  },
  {
    number: "04",
    title: "운영 및 고도화",
    description: "지속적인 모니터링과 개선을 통해 성과를 극대화합니다.",
  },
]

export function ProcessSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            프로젝트 프로세스
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            체계적이고 검증된 방법론으로 프로젝트를 진행합니다
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Card key={index} className="relative overflow-hidden border-border">
              <CardContent className="pt-6">
                <div className="mb-4 text-6xl font-bold text-primary/20">{step.number}</div>
                <h3 className="mb-3 text-xl font-bold">{step.title}</h3>
                <p className="text-base leading-relaxed text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
