import type { StoryObj, Meta } from "@storybook/react";
import {
  Tooltip,
  TooltipsProps,
  Text,
  Button,
  Box,
} from "@cvrc-ignite-ui/react";

export default {
  title: "Overlay/Tooltip",
  component: Tooltip,
  args: {
    children: <Button>Testando Tooltip</Button>,
    label: "21 de Outubro - Indisponível",
  },
  argTypes: {
    children: {
      type: "symbol",
    },
  },
  decorators: [(Story) => <Box css={{ width: '400px', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{Story()}</Box>],
} as Meta<TooltipsProps>;

export const Primary: StoryObj<TooltipsProps> = {};
