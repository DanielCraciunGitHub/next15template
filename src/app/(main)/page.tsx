import { db } from "@/db";

import { Button } from "@/components/ui/button";

export default async function Home() {
  const q = await db.query.user.findMany();
  console.log(q);
  return (
    <div>
      <h1>new</h1>
      <Button>Click me</Button>
    </div>
  );
}
