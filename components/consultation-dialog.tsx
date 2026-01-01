"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CheckCircle2 } from "lucide-react"

interface ConsultationDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ConsultationDialog({
  open,
  onOpenChange,
}: ConsultationDialogProps) {
  const [step, setStep] = React.useState<"form" | "success">("form")
  const [isLoading, setIsLoading] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsLoading(false)
    setStep("success")
  }

  const handleClose = () => {
    onOpenChange(false)
    // Reset state after animation
    setTimeout(() => setStep("form"), 300)
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        {step === "form" ? (
          <>
            <DialogHeader>
              <DialogTitle>무료 상담 신청</DialogTitle>
              <DialogDescription>
                전문가와 상담하여 귀사의 비즈니스에 최적화된 AI 전략을 세워보세요.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="grid gap-6 py-4">
              <div className="grid gap-2">
                <Label htmlFor="phone">전화번호</Label>
                <Input
                  id="phone"
                  placeholder="010-0000-0000"
                  required
                  type="tel"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="service">원하는 전문 서비스</Label>
                <Select required>
                  <SelectTrigger id="service">
                    <SelectValue placeholder="서비스를 선택해주세요" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="consulting">AI 전략 컨설팅</SelectItem>
                    <SelectItem value="analysis">데이터 분석 및 인사이트</SelectItem>
                    <SelectItem value="model">AI 모델 개발</SelectItem>
                    <SelectItem value="infra">데이터 인프라 구축</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label>원하는 서비스 형태</Label>
                <RadioGroup defaultValue="phone" className="grid grid-cols-3 gap-4 pt-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="chatbot" id="chatbot" />
                    <Label htmlFor="chatbot" className="font-normal cursor-pointer">챗봇</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="kakao" id="kakao" />
                    <Label htmlFor="kakao" className="font-normal cursor-pointer">카톡</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="phone" id="phone-radio" />
                    <Label htmlFor="phone-radio" className="font-normal cursor-pointer">전화</Label>
                  </div>
                </RadioGroup>
              </div>
              <DialogFooter>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "처리 중..." : "상담 신청하기"}
                </Button>
              </DialogFooter>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <CheckCircle2 className="mb-4 h-16 w-16 text-primary" />
            <h3 className="mb-2 text-2xl font-bold">신청이 완료되었습니다!</h3>
            <p className="mb-8 text-muted-foreground">
              전문가가 검토 후 빠른 시일 내에 연락드리겠습니다.
            </p>
            <Button onClick={handleClose} className="w-full">
              닫기
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}



