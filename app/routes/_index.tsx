import type { MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "~/components/ui/card"


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
      <div className="m-5">
          <h1 className="m-5">ThuisbeZ</h1>
          <div className="grid grid-cols-4 gap-4">
          {restaurants.map((restaurant: any) => (
              <Card>
                  <CardHeader>
                      <CardTitle>{restaurant.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                      {restaurant.cuisine}
                  </CardContent>
              </Card>
          ))}
          </div>
      </div>
  );
}