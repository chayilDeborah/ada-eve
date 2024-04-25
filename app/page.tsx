
import About from './components/About'
import Homepage from './components/Homepage'
import How from './components/How'
import Introductn from './components/Introductn'

export default function Home() {
  return (
    <main className='flex justify-center  '>
      <div className='w-full'>
        <Homepage />
        <section className='lg:max-w-[90rem] w-[95%] mx-auto lg:w-full' >
          <About />
          <How />
        </section>
      </div>
    </main>
  )
}
