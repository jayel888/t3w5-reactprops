import FoodCard from "./FoodCard";

let foods = [
    'Udon',
    'Sushi',
    'Pizza',
    'Char Kway Teow',
    'Fries',
    'Lasagna',
    'Dumplings'
]

export default function FoodList() {
    return (
        <section>
                {
                    foods.map((food, index) => {
                        return <p><FoodCard key={index}foodName = {food}/></p>
                    })
                }  
        </section>
    )
}
