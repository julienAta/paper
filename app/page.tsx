import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Users,
  TrendingUp,
  Coins,
  Twitter,
  MessageCircle,
  Globe,
} from "lucide-react";
import Image from "next/image";

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-yellow-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-yellow-400 rounded transform rotate-12"></div>
            <span className="text-xl font-bold text-gray-800">$PAPER</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#story"
              className="text-gray-600 hover:text-yellow-600 transition-colors"
            >
              Story
            </a>
            <a
              href="#tokenomics"
              className="text-gray-600 hover:text-yellow-600 transition-colors"
            >
              Tokenomics
            </a>
            <a
              href="#community"
              className="text-gray-600 hover:text-yellow-600 transition-colors"
            >
              Community
            </a>
            <a
              href="#roadmap"
              className="text-gray-600 hover:text-yellow-600 transition-colors"
            >
              Roadmap
            </a>
          </nav>
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">
            Buy $POSTIT
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-yellow-100 text-yellow-800 border-yellow-300">
            The $500M Post-it Revolution
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            This Piece of Paper Could Be Worth{" "}
            <span className="text-yellow-600">500 Million Dollars</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            If we all agreed on it. Now, a memecoin community is making this
            vision reality.
          </p>

          {/* The Original Post-it */}
          <div className="relative max-w-md mx-auto mb-12">
            <div className="bg-yellow-300 p-8 shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500">
              <div className="text-black text-lg font-handwriting leading-relaxed">
                <div className="text-2xl font-bold mb-4">500,000,000 $</div>
                <p className="mb-4">
                  This piece of paper could be worth 500 million dollars if we
                  all agreed on it
                </p>
                <div className="text-sm">@SIRAKAMIES</div>
                <div className="text-2xl font-bold mt-4">$ 500,000,000</div>
              </div>
            </div>
            {/* Tape effect */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-20 h-8 bg-gray-200 opacity-70 rounded-sm shadow-sm"></div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-8"
            >
              Join the Movement <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-yellow-400 text-yellow-700 hover:bg-yellow-50"
            >
              View Original Art
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600">$2.3M</div>
              <div className="text-gray-600">Market Cap</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600">15,420</div>
              <div className="text-gray-600">Holders</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600">24/7</div>
              <div className="text-gray-600">Community Active</div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              The Story Behind the Post-it
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/images/post-it-original.png"
                  alt="Original Post-it Note by SIRAKAMIES"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800">
                  Meet SIRAKAMIES
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  An visionary artist who challenged our perception of value
                  with a simple yellow post-it note. The message was profound:{" "}
                  <em>
                    "This piece of paper could be worth 500 million dollars if
                    we all agreed on it."
                  </em>
                </p>
                <p className="text-gray-600 leading-relaxed">
                  What started as street art became a philosophical statement
                  about collective belief, consensus, and the nature of value
                  itself. The post-it was placed in public spaces, sparking
                  conversations about how society assigns worth to objects,
                  ideas, and currencies.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Now, a passionate memecoin community has embraced this vision,
                  creating $POSTIT to prove that collective agreement can indeed
                  create real value. We're not just building a token—we're
                  making the artist's message a reality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-yellow-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
            Making the Vision Real
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            The $POSTIT community is proving that collective belief can create
            tangible value. We're turning a philosophical art piece into a
            movement that demonstrates the power of consensus.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-yellow-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Community Driven</h3>
                <p className="text-gray-600">
                  Built by believers who understand that value comes from
                  collective agreement
                </p>
              </CardContent>
            </Card>

            <Card className="border-yellow-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Proving the Point</h3>
                <p className="text-gray-600">
                  Every holder validates the artist's message about
                  consensus-based value
                </p>
              </CardContent>
            </Card>

            <Card className="border-yellow-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Coins className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Real Impact</h3>
                <p className="text-gray-600">
                  Supporting the original artist while building something
                  meaningful
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tokenomics */}
      <section id="tokenomics" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Tokenomics
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-yellow-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-yellow-600">
                    Token Details
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Supply:</span>
                      <span className="font-bold">500,000,000 $POSTIT</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Decimals:</span>
                      <span className="font-bold">9</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Network:</span>
                      <span className="font-bold">Solana</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax:</span>
                      <span className="font-bold text-green-600">0%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-yellow-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-yellow-600">
                    Distribution
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Liquidity Pool:</span>
                      <span className="font-bold">85%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Artist Support:</span>
                      <span className="font-bold">5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Marketing:</span>
                      <span className="font-bold">5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Community:</span>
                      <span className="font-bold">5%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Community */}
      <section id="community" className="py-20 bg-yellow-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
            Join the Community
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Be part of the movement that's proving collective belief creates
            real value
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white"
            >
              <Twitter className="mr-2 h-4 w-4" />
              Follow on Twitter
            </Button>
            <Button
              size="lg"
              className="bg-purple-500 hover:bg-purple-600 text-white"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Join Telegram
            </Button>
            <Button
              size="lg"
              className="bg-indigo-500 hover:bg-indigo-600 text-white"
            >
              <Globe className="mr-2 h-4 w-4" />
              Visit Website
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-orange-400">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
            Ready to Make History?
          </h2>
          <p className="text-xl mb-8 text-black/80 max-w-2xl mx-auto">
            Join thousands of believers who are proving that a simple post-it
            note can indeed be worth millions
          </p>
          <Button
            size="lg"
            className="bg-black hover:bg-gray-800 text-white px-8"
          >
            Buy $POSTIT Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-yellow-400 rounded transform rotate-12"></div>
                <span className="text-lg font-bold">$POSTIT</span>
              </div>
              <p className="text-gray-400">
                Making collective belief a reality, one holder at a time.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Community</h4>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Telegram
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Discord
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Whitepaper
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Audit
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Contract
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Artist</h4>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  @SIRAKAMIES
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Original Art
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Support Fund
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; 2024 $POSTIT Community. This is not financial advice. DYOR.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
