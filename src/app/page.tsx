// import Card from '@/components/card/page'
import Navbar from './components/Navbar/page';
import TopBar from './components/TopBar/page';
import Hero from './components/Hero/hero'
import Features from'./components/Features/page'
import NewCaramics from './components/NewCaramics/page'
import OurProducts from './components/OurProducts/page'
import Container from './components/Container/page'
import Global from './components/Global/page'
import Footer from './components/Footer/page'




const page = () => {
  return (
    <div>

<Hero />
<Features />
<NewCaramics />
<OurProducts />
<Container />
<Global />


    {/* <Card />   */}
    </div>
  )
}

export default page


