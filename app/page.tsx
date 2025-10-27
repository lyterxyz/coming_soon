export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Coming Soon</h1>
          
          <p className="text-lg text-muted-foreground mb-12">
            Auto-Stabilized Prediction Markets with Bounded-Risk LMSR
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">What We're Building</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Fully non-custodial prediction markets with bounded LP risk</li>
                <li>• Logarithmic Market Scoring Rule (LMSR) with auto-stabilization</li>
                <li>• Adaptive liquidity scaling based on √V model</li>
                <li>• Dynamic certainty-based fees protecting liquidity providers</li>
                <li>• Transparent treasury accounting with automated settlement</li>
                <li>• Binary and multi-outcome markets with continuous pricing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Earn as a Liquidity Provider</h2>
              <p className="text-muted-foreground mb-4">
                Provide liquidity with mathematically bounded risk and earn yield proportional to market activity.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Bounded Risk - Max 68.2% Loss</h3>
                  <p className="text-sm text-muted-foreground">
                    Your maximum theoretical loss is capped at 0.682 × L for binary markets
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Base Trading Fees - 30-50%</h3>
                  <p className="text-sm text-muted-foreground">
                    Earn 30-50% of the 1% base trading fee from all trades
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Certainty Fees - 100% to LPs</h3>
                  <p className="text-sm text-muted-foreground">
                    All certainty fees (0.25% to 3%) go directly to liquidity providers
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Residual Loser Funds</h3>
                  <p className="text-sm text-muted-foreground">
                    Keep remaining treasury funds when crowd predictions are wrong
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Auto-Stabilization System</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">1. Volume-Based Scaling</h3>
                  <p className="text-muted-foreground">
                    Liquidity depth L(V) = k × √V automatically adjusts to market activity
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">2. Dynamic Fee Protection</h3>
                  <p className="text-muted-foreground">
                    Certainty fees rise from 0.25% to 3% as prices approach 0.95-0.99
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">3. Break-Even Economics</h3>
                  <p className="text-muted-foreground">
                    LPs break even around 0.8-1M volume, earn 20-60% ROI on high-volume markets
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Market Performance Examples</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-muted-foreground">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2">Volume</th>
                      <th className="text-left py-2">Liquidity</th>
                      <th className="text-left py-2">Max LP Loss</th>
                      <th className="text-left py-2">Fee Income</th>
                      <th className="text-left py-2">LP Net</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/50">
                      <td className="py-2">100k</td>
                      <td className="py-2">1,265</td>
                      <td className="py-2">862</td>
                      <td className="py-2">300</td>
                      <td className="py-2 text-red-400">-562</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2">1M</td>
                      <td className="py-2">4,000</td>
                      <td className="py-2">2,728</td>
                      <td className="py-2">3,000</td>
                      <td className="py-2 text-green-400">+272</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2">5M</td>
                      <td className="py-2">8,944</td>
                      <td className="py-2">6,099</td>
                      <td className="py-2">15,000</td>
                      <td className="py-2 text-green-400">+8,901</td>
                    </tr>
                    <tr>
                      <td className="py-2">10M</td>
                      <td className="py-2">12,649</td>
                      <td className="py-2">8,623</td>
                      <td className="py-2">30,000</td>
                      <td className="py-2 text-green-400">+21,377</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Key Advantages</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Non-Custodial Design</h3>
                  <p className="text-sm text-muted-foreground">
                    Fully decentralized with user-controlled funds and transparent accounting
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Mathematically Fair</h3>
                  <p className="text-sm text-muted-foreground">
                    LMSR ensures continuous pricing and bounded loss for all participants
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Capital Efficient</h3>
                  <p className="text-sm text-muted-foreground">
                    √V scaling matches liquidity to demand, maximizing capital utilization
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Self-Balancing</h3>
                  <p className="text-sm text-muted-foreground">
                    System automatically adjusts to maintain fair odds and LP profitability
                  </p>
                </div>
              </div>
            </section>

          </div>
        </div>
        
        {/* Footer with X link */}
        <div className="text-center mt-16 pt-8 border-t border-border">
          <a 
            href="https://x.com/LYTERXYZ" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-foreground hover:text-primary transition-colors"
          >
            <svg 
              className="w-8 h-8" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}