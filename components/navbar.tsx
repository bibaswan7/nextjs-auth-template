import Link from "next/link";
import { Button } from "@/components/ui/button";
import { auth } from "@/auth";
import { handleSignOut } from "@/app/actions/authActions";

export default async function Navbar() { 
    const session = await auth();
    console.log({ session });
    return (
        <nav className="flex justify-between items-center py-3 px-4 bg-white shadow-md">
            <Link href="/" className="text-2xl font-bold  font-geist-sans">
                NextAuth
            </Link>
            {!session ? (
                <div className="flex gap-4">

                <Link href="/auth/signup">
                    <Button variant="default">Sign Up</Button>
                </Link>
                <Link href="/auth/signin">
                    <Button variant="default">Sign In</Button>
                </Link>
                </div>
            ) : (
                <form action={handleSignOut}>
                    <Button variant="default" type="submit">
                        Sign Out
                    </Button>
                </form>
            )}
        </nav>
    );
}
