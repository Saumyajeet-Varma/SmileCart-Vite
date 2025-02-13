import Carousel from "./components/Carousel"

import { IMAGE_URLS } from "./constants";

function App() {
  return (
    <div>
      <Carousel title="Infinix Inbook" imageUrls={IMAGE_URLS} />
    </div>
  )
}

export default App
