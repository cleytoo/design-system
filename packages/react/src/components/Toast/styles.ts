import * as Toast from '@radix-ui/react-toast'
import { styled } from '../../styles'

export const ToastContainer = styled(Toast.Root, {
  width: '360px',
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
  padding: '$3 $5',
  backgroundColor: '$gray800',
  borderRadius: '$sm',
  border: '1px solid $gray500',

  position: 'relative',
})
export const ToastTitle = styled(Toast.Title, {})
export const ToastDescription = styled(Toast.Description, {})
export const ToastAction = styled(Toast.Action, {
  position: 'absolute',
  top: '$3',
  right: '$3',
  padding: '$1',

  color: '$gray200',
  width: '$5',
  height: '$5',
  cursor: 'pointer',

  '&:hover': {
    color: '$gray400',
  },
})

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: '25px',
  gap: '10px',
  width: '390px',
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 9999,
  outline: 'none',
})
