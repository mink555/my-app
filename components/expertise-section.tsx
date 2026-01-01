import { CheckCircle2 } from "lucide-react"

const expertise = [
  "자연어 처리 (NLP) 및 대화형 AI",
  "컴퓨터 비전 및 이미지 인식",
  "예측 분석 및 수요 예측",
  "추천 시스템 및 개인화",
  "이상 탐지 및 리스크 관리",
  "프로세스 자동화 및 최적화",
]

export function ExpertiseSection() {
  return (
    <section className="bg-muted/50 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">핵심 역량</h2>
            <p className="mb-8 text-pretty text-lg leading-relaxed text-muted-foreground">
              다년간의 AI 프로젝트 경험을 바탕으로 다양한 산업 분야에서 검증된 전문성을 보유하고 있습니다. 최신 기술
              트렌드를 지속적으로 연구하며, 실전에서 바로 적용 가능한 솔루션을 제공합니다.
            </p>
            <div className="space-y-4">
              {expertise.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-base text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5">
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
                alt="AI Technology Neural Network"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
