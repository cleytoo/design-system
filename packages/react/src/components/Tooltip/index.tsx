// import * as TooltipT from '@radix-ui/react-tooltip'
import { ComponentProps, ReactElement } from 'react'
import { Text } from '../Text'
import * as S from './styles'

export interface TooltipsProps
  extends ComponentProps<typeof S.TooltipContainer> {
  children: ReactElement
  label: string
}

export const Tooltip = ({ children, label, ...rest }: TooltipsProps) => {
  return (
    <S.TooltipProvider delayDuration={300} disableHoverableContent>
      <S.TooltipContainer {...rest}>
        <S.TooltipTrigger asChild>{children}</S.TooltipTrigger>
        <S.TooltipPortal>
          <S.TooltipContent sideOffset={5}>
            <Text size="sm">{label}</Text>
            <S.TooltipArrow />
          </S.TooltipContent>
        </S.TooltipPortal>
      </S.TooltipContainer>
    </S.TooltipProvider>
  )
}

Tooltip.displayName = 'Tooltip'
