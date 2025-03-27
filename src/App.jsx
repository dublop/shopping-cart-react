import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import { ProductsProvider } from "./context/ProductsProvider"
import { Provider } from "react-redux"
import { store } from "./app/store"

function App() {
  return (
    <ProductsProvider>
      <Provider store={store}>
        <Navbar />
        <div className="grid place-content-center">
          <Outlet />
        </div>
      </Provider>
    </ProductsProvider>
  )
}

export default App
