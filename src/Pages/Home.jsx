import { useNavigate } from "react-router-dom"

function Home(){
    return(
        <div>
            {/*hero*/}
            <Hero/>
            {/*promo*/}
            {/*authorize dealer*/}
        </div>
    )
}

function Hero() {
    let navigate = useNavigate()
    return (
      <section className="relative bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={'hero.jpg'}
            alt="Background"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="relative z-10">
          <div className="container mx-auto px-4 py-32">
            <h1 className="text-5xl font-bold text-white mb-6">
              Dirt Bikes <br /> For Thrill-Seekers
            </h1>
            <p className="text-2xl text-gray-200 mb-8">
              The best selection of dirt bikes and parts
            </p>
            <button onClick={(e)=>{ navigate('product') }} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full">
              Shop Now
            </button>
          </div>
        </div>
      </section>
    );
  }


export default Home