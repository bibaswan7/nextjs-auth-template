import { auth } from "@/auth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default async function Home() {
  const session = await auth();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Card className="max-w-sm">
        <CardHeader>
          <Image
            className="rounded-lg"
            src="https://www.grandmotorstoyota.com.au/media-files/page-builder/content-pieces/da2af810-ba27-45b0-97a8-3157712863be/image.jpg"
            alt="img"
            width={500}
            height={500}
            priority
          />
        </CardHeader>
        <CardContent>
          <CardTitle className="mb-2 text-2xl font-bold">
            Welcome, { session?.user?.name }!
          </CardTitle>
          <p className="text-muted-foreground">
            You are now logged in to your account.
          </p>
        </CardContent>
      </Card>
    </main>
  );
}