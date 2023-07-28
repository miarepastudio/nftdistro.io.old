import Hero from '../components/Hero'
import Hero5050 from '../components/Hero5050'
import FeatureCards from '../components/FeatureCards'
import FeatureUsers from '../components/FeatureUsers'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import Email from '../components/Email'

export function sectionRenderer(section: any, index: number) {
  switch (section.__component) {
    case 'sections.hero':
      return <Hero key={index} data={section} />
    case 'sections.50-50':
      return <Hero5050 key={index} data={section} />
    case 'sections.feature-card-group':
      return <FeatureCards key={index} data={section} />
    case 'sections.feature-user':
      return <FeatureUsers key={index} data={section} />
    case 'sections.features':
      return <Features key={index} data={section} />
    case 'sections.testimonials-group':
      return <Testimonials key={index} data={section} />
    case 'sections.pricing':
      return <Pricing key={index} data={section} />
    case 'sections.lead-form':
      return <Email key={index} data={section} />
    default:
      return null
  }
}
