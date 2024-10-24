import {createFileRoute, redirect} from '@tanstack/react-router'
import {IP} from "../IP.tsx";

export const Route = createFileRoute('/ip')({
  component: IP,
  loader: async ({ context }) => {
    console.log('Context value: ', context.value);
    const response = await fetch('https://api.ipify.org?format=json')
    return response.json() as Promise<{ ip: string }>
  },
  beforeLoad: ({ context }) => {
    // if(context.value < 100) {
    //   throw redirect({
    //     to: '/',
    //   });
    // }
  },
})
