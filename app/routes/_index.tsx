import type { MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from x"~/components/ui/resizable"

export const loader = async () => {
  const res = await fetch("http://localhost:3000/restaurants/all"); // Adjust API URL
  const data = await res.json();
  return json(data);
};

export const meta: MetaFunction = () => {
  return [
    { title: "ThuisbeZ" },
    { name: "order food without throwing money away at commissions!", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const restaurants = useLoaderData<typeof loader>();

  return (
      <div>
        <h1>Restaurants</h1>
        <ul>
          {restaurants.map((restaurant: any) => (
              <li key={restaurant.id}>{restaurant.name}</li>
          ))}
        </ul>
      </div>
  );
}