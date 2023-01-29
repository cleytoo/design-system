import type { StoryObj, Meta, ComponentStory } from "@storybook/react";
import { Toast, ToastProps, Box, Button } from "@cvrc-ignite-ui/react";
import { useState } from "react";

export default {
  title: "Overlay/Toast",
  component: Toast,
  args: {},
  argTypes: {
    children: {
      type: "symbol",
    },
  },
  decorators: [
    (Story) => (
      <Box
        css={{
          width: "400px",
          height: "400px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {Story()}
      </Box>
    ),
  ],
} as Meta<ToastProps>;

export const Primary: ComponentStory<typeof Toast> = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Hit me!</Button>
      <Toast
        title="Agendamento realizado"
        description="Quarta-feira, 23 de Outubro às 16h"
        open={open}
        onOpenChange={setOpen}
      />
    </>
  );
};
