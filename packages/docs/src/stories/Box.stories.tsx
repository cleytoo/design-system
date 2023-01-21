import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@cvrc-ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Testando o elementoBox</Text>,
  },
  argTypes: {
    children: {
      type: 'symbol',
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
