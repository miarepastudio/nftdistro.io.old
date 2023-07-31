import FeatureCard from '../FeatureCard'

// interface NFT {
//   attributes: {
//     heading: string
//     date?: string
//     description: string
//     bid: number
//   }
// }

export default function SingleNFT({
  data: nfts,
  children,
}: {
  data: any[]
  children?: React.ReactNode
}) {
  return (
    <ul className="grid grid-cols-1 gap-6 pt-12 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4">
      {nfts.map((nft, index) => (
        <FeatureCard key={index} {...nft} />
      ))}
      {children && children}
    </ul>
  )
}
