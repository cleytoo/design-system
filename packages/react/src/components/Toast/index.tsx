import { ComponentProps } from 'react'
import { ToastProvider } from '@radix-ui/react-toast'
import * as S from './styles'
import { Text } from '../Text'
import { X } from 'phosphor-react'

export interface ToastProps extends ComponentProps<typeof S.ToastContainer> {
  title: string
  description: string
}

export const Toast = ({ description, title, ...rest }: ToastProps) => {
  return (
    <ToastProvider>
      <S.ToastContainer duration={2000} {...rest}>
        <S.ToastTitle asChild>
          <Text as="strong" size="lg">
            {title}
          </Text>
        </S.ToastTitle>
        <S.ToastDescription asChild>
          <Text size="sm" css={{ color: '$gray200' }}>
            {description}
          </Text>
        </S.ToastDescription>
        <S.ToastAction asChild altText="Close Toast">
          <X />
        </S.ToastAction>
      </S.ToastContainer>
      <S.ToastViewport />
    </ToastProvider>
  )
}

Toast.displayName = 'Toast'
