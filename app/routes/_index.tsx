import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "ThuisbeZ" },
    { name: "order food without throwing money away at commissions!`", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return <h1>Welcome to ThuisbeZ!</h1>;
}