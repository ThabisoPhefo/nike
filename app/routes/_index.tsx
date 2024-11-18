import type { MetaFunction } from "@remix-run/node";
import { Hero } from '~/components/hero/hero';

export const meta: MetaFunction = () => {
  return [
    { title: "Nike" },
    { name: "description", content: "Nike" },
  ];
};

export default function Index() {
  return (
    <main>
      <Hero />
      {/* Other content */}
    </main>
  );
}
