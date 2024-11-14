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
            <ul>
                {
                    foods.map(food => {
                        return <li>{food}</li>
                    })
                }
            </ul>
        </section>
    )
}
