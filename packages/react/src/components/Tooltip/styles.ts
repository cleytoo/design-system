import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipProvider = styled(Tooltip.Provider, {})
export const TooltipContainer = styled(Tooltip.Root, {})
export const TooltipPortal = styled(Tooltip.Portal, {})
export const TooltipTrigger = styled(Tooltip.Trigger, {})
export const TooltipContent = styled(Tooltip.Content, {
  background: '$gray900',
  borderRadius: '5px',
  padding: '$3 $4',
  color: '$gray100',
  textAlign: 'center',
})
export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
