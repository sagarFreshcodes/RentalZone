import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import "./i18n";
import reportWebVitals from "./reportWebVitals";
import "./../node_modules/rsuite/dist/rsuite.min.css";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import store from "./Redux_Store/store";
import { Provider } from "react-redux";
import { UpdateSEO } from "./Components/Common/Component/helperFunction";
const demoSchema = JSON.stringify([
  {
    "@context": "https://schema.org/",
    "@type": "WebPage",
    name: "asd",
    description: (
      <p>
        RentalZone.in : Providing Laptop on Rent, Computer on Rent, Server on
        Rent, Car On Rent, Ac on Rental-Hire in Mumbai at low price. Find Top
        Rental Company online at Rentalzone.in
      </p>
    ),
    subjectOf: {
      "@type": "Product",
      name: "fas",
    },
  },
  {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    name: "",
    url: "https://rentalzone-1d306.web.app/home",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://rentalzone-1d306.web.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  },
  {
    "@context": "http://schema.org",
    "@type": "Product",
    name: "SEO Audit",
    url: "https://rentalzone-1d306.web.app/computer-rental-mumbai",
    image: "https://seosmoothie.com/image.jpg",
    description: (
      <p>
        RentalZone.in : Providing Laptop on Rent, Computer on Rent, Server on
        Rent, Car On Rent, Ac on Rental-Hire in Mumbai at low price. Find Top
        Rental Company online at Rentalzone.in
      </p>
    ),
    brand: {
      "@type": "Brand",
      name: "SEO Smoothie",
    },
  },
  {
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    name: "RentalZone",
    url: "https://rentalzone-1d306.web.app/home",
    image: "https://seosmoothie.com/image.jpg",
    description: (
      <p>
        RentalZone.in : Providing Laptop on Rent, Computer on Rent, Server on
        Rent, Car On Rent, Ac on Rental-Hire in Mumbai at low price. Find Top
        Rental Company online at Rentalzone.in
      </p>
    ),
    address: {
      "@type": "PostalAddress",
      streetAddress: "Mumbai Maharashtra",
      addressLocality: "Mumbai Maharashtra",
      addressRegion: "Mumbai",
      postalCode: "400028",
      addressCountry: "India",
    },
  },
]);

UpdateSEO({
  schemaData: {
    scriptData: demoSchema,
    scriptType: "application/ld+json",
  },
});
const Root = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <App />
      </Provider>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);

// ReactDOM.createRoot(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
