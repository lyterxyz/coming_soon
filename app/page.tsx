export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Coming Soon</h1>
          
          <p className="text-lg text-muted-foreground mb-12">
            Revolutionary Prediction Markets with Automated Market Making
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">What We're Building</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Automated Market Making with AI-powered liquidity provision</li>
                <li>• Decentralized prediction markets on blockchain</li>
                <li>• Instant settlement with minimal gas fees</li>
                <li>• Trade on any future event - sports, politics, crypto prices</li>
                <li>• Community-driven governance and market creation</li>
                <li>• Advanced analytics and market insights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Earn as a Liquidity Provider</h2>
              <p className="text-muted-foreground mb-4">
                Provide liquidity to prediction markets and earn rewards while supporting the ecosystem.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Trading Fees - 1%</h3>
                  <p className="text-sm text-muted-foreground">
                    Earn a share of all trading fees from markets you provide liquidity to
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Incentive Rewards - 5-15%</h3>
                  <p className="text-sm text-muted-foreground">
                    Additional rewards for early liquidity providers and long-term commitments
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Governance Rights</h3>
                  <p className="text-sm text-muted-foreground">
                    Participate in protocol governance and influence future developments
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Market Creation Bonus</h3>
                  <p className="text-sm text-muted-foreground">
                    Earn bonuses for creating popular markets that attract high volume
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">1. Deposit Liquidity</h3>
                  <p className="text-muted-foreground">
                    Add USDC to liquidity pools for specific markets or categories
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">2. Automated Trading</h3>
                  <p className="text-muted-foreground">
                    Our AI automatically provides liquidity and adjusts prices based on demand
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">3. Earn Rewards</h3>
                  <p className="text-muted-foreground">
                    Receive trading fees, incentives, and governance tokens for your participation
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
