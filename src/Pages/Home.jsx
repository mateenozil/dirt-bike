import { useNavigate } from "react-router-dom"
import BikesData from '../Data/bikes.json'
import DealerData from '../Data/dealers.json'
import Card from "../Components/Card/Card"
import Card2 from "../Components/Card/Card2"
import CardPanel from "../Components/CardPanel/CardPanel"

function Home(){
    return(
        <div>
            {/*hero*/}
            <Hero/>
            {/*promo*/}
            <Promo/>
            {/*authorize dealer*/}
            <Dealer/>
			{/*about*/}
			<About/>
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

function Promo(){
	const data = BikesData
    return(
        <div className='py-8 space-y-8 mx-auto text-center'>
            <p className="text-3xl text-gray-600 font-bold">Top Seller</p>
			<CardPanel>
				{data.map(
					product =>
					<Card
					key={product.id}
					image={product.image}
					name={product.name}
					description={product.description}
					price={product.price}
				/>
				)}
			</CardPanel>
        </div>
    )
}

function Dealer(){
	const data = DealerData
    return(
        <div className='py-8 space-y-8 mx-auto text-center bg-light-200'>
            <div className="text-3xl text-gray-600 font-bold">
				Authorized Dealer
			</div>
			<CardPanel>
				{data.map(
					dealer =>
					<Card2
					key={dealer.id}
					logo={dealer.logo}
					loc={dealer.address+", "+dealer.city+", "+dealer.state}
					name={dealer.name}
					phone={dealer.phone}
					email={dealer.email}
				/>
				)}
			</CardPanel>
        </div>
    )
}

function About(){
	return(
		<div className="py-8 text-center text-light-200 bg-dark-200">
			<div className='space-y-8 px-8 max-w-screen-lg mx-auto'>
				<div className="text-3xl">
					About Us
				</div>
				<div className="text-xl text-justify">
					Dirt Bikes USA is a leading manufacturer of high-performance dirt bikes in the United States. The company was founded in 1994 by two passionate bikers, Carl Schmidt and Steven McFadden, who recognized the increasing popularity of dirt bikes in the country for both sports and racing. With their engineering backgrounds, they designed frames that were well-suited for off-road handling and used these to build their own customized dirt bike models using engines manufactured by Honda and Rotax Motors of Austria.
				</div>
			</div>
		</div>
	)
}

export default Home