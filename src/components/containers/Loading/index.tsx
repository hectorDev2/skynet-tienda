import { useEffect } from 'react'
import { Container } from '../../style'
import { Logo } from '@/components/shared/Logo'

export function Loading() {
  useEffect(() => {
    window.document.body.style.overflow = 'hidden'
    setTimeout(() => {
      window.document.body.style.overflow = 'auto'
    }, 2000)
  }, [])

  return (
    <Container>
      <Logo />
    </Container>
  )
}
