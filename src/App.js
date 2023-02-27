import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import LandingPage from "./Pages/LandingPage";
import ProductsDisplay from "./Pages/ProductsDisplay";
import WishlistPage from "./Pages/WishlistPage";
import CartPage from "./Pages/CartPage";
import { DataProvider } from "./Context/DataContext";
import { CartProvider } from "./Context/CartContext";
import { WishlistProvider } from "./Context/WishlistContext";
import { FeedbackProvider } from "./Context/FeedbackContext";
import Feedback from "./Components/Feedback";
import { FilterProvider } from "./Context/FilterContext";
// RUM can be initialized here if leveraging NPM

import { datadogRum } from "@datadog/browser-rum";

datadogRum.init({
  applicationId: "f57d6f13-7edc-4dd6-995d-4e503fbde005",
  clientToken: "pub9d28ba030c147baa9b64c82052d9311d",
  site: "datadoghq.com",
  service: "browser-rum-npm-mein",
  env: "prod",
  // Specify a version number to identify the deployed version of your application in Datadog
  // version: '1.0.0',
  sessionSampleRate: 100,
  sessionReplaySampleRate: 100,
  trackUserInteractions: true,
  trackResources: true,
  trackLongTasks: true,
  defaultPrivacyLevel: "allow"
});

datadogRum.startSessionReplayRecording();

export default function App() {
  return (
    <div className="App">
      <DataProvider>
        <Navbar />
        <Banner />
        <CartProvider>
          <WishlistProvider>
            <FeedbackProvider>
              <FilterProvider>
                <Feedback />
                <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route
                    path="/products/:category"
                    element={<ProductsDisplay />}
                  />
                  <Route path="wishlist" element={<WishlistPage />} />
                  <Route path="cart" element={<CartPage />} />
                </Routes>
              </FilterProvider>
            </FeedbackProvider>
          </WishlistProvider>
        </CartProvider>
      </DataProvider>
    </div>
  );
}
