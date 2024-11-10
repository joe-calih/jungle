import { Heart, Star, Diamond } from "lucide-react"

export default function Component() {
  return (
    <section className="w-full bg-background py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4 text-center">
        <h2 className="mx-auto max-w-[800px] text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Award-winning tools trusted by the world's leading companies
        </h2>
        
        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {/* Marketing Professionals Stat */}
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <span className="text-6xl font-bold md:text-7xl">10M</span>
              <Heart className="absolute -right-6 -top-2 h-8 w-8 fill-pink-400 stroke-pink-400" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">marketing professionals</h3>
              <p className="text-muted-foreground">have already used Semrush</p>
            </div>
          </div>

          {/* International Awards Stat */}
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <span className="text-6xl font-bold md:text-7xl">21</span>
              <Star className="absolute -right-6 -top-2 h-8 w-8 fill-yellow-400 stroke-yellow-400" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">international awards</h3>
              <p className="text-muted-foreground">as best SEO software suite</p>
            </div>
          </div>

          {/* Fortune 500 Stat */}
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <span className="text-7xl font-bold md:text-7xl">30%</span>
              <Diamond className="absolute -right-6 -top-2 h-8 w-8 fill-lime-400 stroke-lime-400" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Fortune 500</h3>
              <p className="text-muted-foreground">Semrush as marketing tool</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}