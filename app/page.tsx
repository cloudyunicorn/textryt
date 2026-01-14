import FancyTextGenerator from "@/components/FancyTextGenerator";
import { Toaster } from "@/components/ui/sonner";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center py-10 px-4 md:py-20 selection:bg-primary/20">
      <div className="w-full max-w-4xl space-y-10">
        <header className="text-center space-y-2">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight lg:text-6xl bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent pb-2">
            Textryt
          </h1>
          <p className="text-muted-foreground text-lg font-medium">
            Minimalist Fancy Text Generator
          </p>
        </header>

        <FancyTextGenerator />

        <footer className="pt-10 text-center text-sm text-muted-foreground/60">
          <p>Click any card to copy</p>
        </footer>
      </div>
      <Toaster position="bottom-center" />
    </main>
  );
}
