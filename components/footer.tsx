export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">AI</span>
              </div>
              <span className="text-lg font-bold">AI Consulting</span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              AI 기술로 기업의 혁신을 이끄는
              <br />
              전문 컨설팅 파트너
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">서비스</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  AI 전략 컨설팅
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  데이터 분석
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  AI 모델 개발
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  인프라 구축
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">회사</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  회사 소개
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  팀 소개
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  채용
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  블로그
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">문의</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>contact@aiconsulting.kr</li>
              <li>02-1234-5678</li>
              <li>서울시 강남구 테헤란로 123</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2026 AI Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
