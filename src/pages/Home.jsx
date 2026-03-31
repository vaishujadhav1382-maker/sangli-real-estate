import Header  from '../components/Header'
import Hero     from '../components/Hero'
import FeaturedProperties from '../components/FeaturedProperties'
import Services from '../components/Services'
import About    from '../components/About'
import Contact  from '../components/Contact'
import Footer   from '../components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedProperties />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
