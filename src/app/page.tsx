import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="bg-secondary p-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="text-lg font-semibold">
            Talent Match
          </Link>
          <nav>
            <Link href="/login" className="mr-4">
              Login
            </Link>
            <Link href="/challenges" className="mr-4">
              Explore
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-primary mb-4">
            Unlock Your Potential with Talent Match
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Discover challenges, showcase your skills, and get matched with top companies.
          </p>
          <div>
            <Button size="lg" className="mr-4" asChild>
              <Link href="/challenges">
                Explore Challenges <Icons.arrowRight className="ml-2" />
              </Link>
            </Button>
            <Button variant="secondary" size="lg">
              Join Now
            </Button>
          </div>
          <div className="mt-8">
            <img
              src="https://picsum.photos/1200/400"
              alt="Visual Banner"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-center p-4">
        <div className="container mx-auto">
          <nav>
            <Link href="/about" className="mr-4">
              About
            </Link>
            <Link href="/privacy" className="mr-4">
              Privacy
            </Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <p className="text-sm text-muted-foreground mt-2">
            &copy; {new Date().getFullYear()} Talent Match. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
