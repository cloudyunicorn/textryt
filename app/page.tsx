import FancyTextGenerator from "@/components/FancyTextGenerator";
import { Toaster } from "@/components/ui/sonner";

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Textryt',
    applicationCategory: 'UtilityApplication',
    description: 'Free fancy text generator with 60+ stylish fonts and decorative text styles for social media',
    url: 'https://textryt.vercel.app',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: [
      'Fancy text generator',
      'Stylish fonts',
      'Decorative text',
      'Instagram fonts',
      'Unicode text converter',
      '60+ text styles',
      'Copy and paste fonts',
      'No login required',
    ],
    browserRequirements: 'Requires JavaScript. Requires HTML5.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-background text-foreground flex flex-col items-center py-10 px-4 md:py-20 selection:bg-primary/20">
        <div className="w-full max-w-4xl space-y-10">
          <header className="text-center space-y-2">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight lg:text-6xl bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent pb-2">
              Textryt
            </h1>
            <p className="text-muted-foreground text-lg font-medium">
              Free Fancy Text Generator - 60+ Stylish Fonts
            </p>
          </header>

          <FancyTextGenerator />

          <footer className="pt-10 text-center text-sm text-muted-foreground/60 space-y-2">
            <p>Click any card to copy • No login required • Free forever</p>
            <p className="text-xs">
              Generate fancy text, stylish fonts, and decorative symbols for Instagram, Twitter, Facebook, TikTok, and more
            </p>
          </footer>
        </div>
        <Toaster position="bottom-center" />
      </main>
    </>
  );
}
