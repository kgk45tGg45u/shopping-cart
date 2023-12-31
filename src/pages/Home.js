import { ProductCard } from "../components"
import { useTitle } from "../hooks/useTitle"

export const Home = () => {

  useTitle("Home of Headphones")

  const products = [
    {"id": 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "/assets/images/headphone-1.jpeg"},
    {"id": 2, "name": "boAt Rockerz 450", "price": 49, "image": "/assets/images/headphone-2.jpeg"},
    {"id": 3, "name": "JBL Tune 760NC", "price": 179, "image": "/assets/images/headphone-3.jpeg"},
    {"id": 4, "name": "Logitech H111 Wired", "price": 39, "image": "/assets/images/headphone-4.jpeg"},
    {"id": 5, "name": "APPLE Airpods Max Bluetooth Headset", "price": 199, "image": "/assets/images/headphone-5.jpeg"},
    {"id": 6, "name": "ZEBRONICS Zeb-Thunder Wired", "price": 29, "image": "/assets/images/headphone-6.jpeg"}
  ]


  return (
    <main>
      <section className="products">
        { products.map((product) => (
          <ProductCard key={product.id} product = {product} />
        ))}
      </section>
    </main>
  )
}
