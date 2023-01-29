var a=Object.defineProperty;var o=(t,n)=>a(t,"name",{value:n,configurable:!0});import{d as r,B as s,a as i}from"./index-6edf6c17.js";import{r as p}from"./index-42521bac.js";import{j as e,a as c,F as l}from"./jsx-runtime-c2142c84.js";import"./index-4bd83974.js";import"./es.object.get-own-property-descriptor-64192e07.js";const h={parameters:{storySource:{source:`import type { StoryObj, Meta, ComponentStory } from "@storybook/react";
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
`,locationsMap:{primary:{startLoc:{col:53,line:31},endLoc:{col:1,line:45},startBody:{col:53,line:31},endBody:{col:1,line:45}}}}},title:"Overlay/Toast",component:r,args:{},argTypes:{children:{type:"symbol"}},decorators:[t=>e(s,{css:{width:"400px",height:"400px",display:"flex",alignItems:"center",justifyContent:"center"},children:t()})]},g=o(()=>{const[t,n]=p.useState(!1);return c(l,{children:[e(i,{onClick:()=>n(!0),children:"Hit me!"}),e(r,{title:"Agendamento realizado",description:"Quarta-feira, 23 de Outubro às 16h",open:t,onOpenChange:n})]})},"Primary"),O=["Primary"];export{g as Primary,O as __namedExportsOrder,h as default};
//# sourceMappingURL=Toast.stories-f2c2f648.js.map
