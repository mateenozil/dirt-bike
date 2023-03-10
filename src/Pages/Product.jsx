import Card from "../Components/Card/Card";
import CardPanel from "../Components/CardPanel/CardPanel";
import ProductData from "../Data/product.json"

function Product(){
    return(
        <div className="p-6 space-y-4 mx-auto text-center">
            <p className="text-3xl text-center font-bold">
                All Items
            </p>
            <CardPanel>
                {ProductData.map(
                    part =>
                    <Card
                    key={part.id}
                    image={part.image}
                    name={part.name}
                    price={part.price}
                />
                )}
            </CardPanel>
        </div>
    )
}

export default Product