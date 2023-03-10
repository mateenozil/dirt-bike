import { useNavigate } from "react-router-dom"
import BikesData from '../Data/bikes.json'
import Card from "../Components/Card/Card"
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
			<CardPanel num={4}>
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
    return(
        <div>
            Dealer
        </div>
    )
}

export default Home