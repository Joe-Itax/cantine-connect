"use client";

import Image from "next/image";
import Header from "./components/header/header";
// import Vector1 from "/public/vector-1.svg";

export default function Home() {
  return (
    <>
      {/* Header */}
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-secondary text-white pt-36 pb-24 relative">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold max-w-xl mb-8">
              We deliver your food all over the city within 30 minutes
            </h1>
          </div>

          {/* Decorative elements */}
          <div className="absolute bottom-0 right-0 w-72">
            <Image
              src={`/vector-1.svg`}
              alt="alt"
              width={200}
              height={200}
              className="w-full"
            />
          </div>
          <div className="absolute top-0 left-0 w-72">
            <Image
              src={`/vector-2.svg`}
              alt="alt"
              width={200}
              height={200}
              className="w-full"
            />
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-10 bg-gray-50">
          <div className="container mx-auto px-4 flex justify-between flex-wrap">
            <div className="text-center px-4">
              <h3 className="text-3xl font-bold">350+</h3>
              <p className="text-gray-600">Restaurants</p>
            </div>
            <div className="text-center px-4">
              <h3 className="text-3xl font-bold">10k+</h3>
              <p className="text-gray-600">Clients satisfaits</p>
            </div>
            <div className="text-center px-4">
              <h3 className="text-3xl font-bold">10+</h3>
              <p className="text-gray-600">Années d&apos;expérience</p>
            </div>
            <div className="text-center px-4">
              <h3 className="text-3xl font-bold">99.9%</h3>
              <p className="text-gray-600">Livraisons réussies</p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-amber-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-amber-100 p-6 rounded-lg">
                <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center mb-4">
                  <span className="text-amber-800 text-xl">📍</span>
                </div>
                <h3 className="font-bold text-lg mb-2">
                  Choisissez votre localisation
                </h3>
                <p className="text-gray-700">
                  Entrez votre adresse et nous vous livrerons rapidement
                </p>
              </div>

              <div className="bg-amber-100 p-6 rounded-lg">
                <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center mb-4">
                  <span className="text-amber-800 text-xl">🍽️</span>
                </div>
                <h3 className="font-bold text-lg mb-2">
                  Choisissez votre repas
                </h3>
                <p className="text-gray-700">
                  Parcourez notre large sélection de plats délicieux
                </p>
              </div>

              <div className="bg-amber-100 p-6 rounded-lg">
                <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center mb-4">
                  <span className="text-amber-800 text-xl">💳</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Payez votre repas</h3>
                <p className="text-gray-700">
                  Paiement rapide et sécurisé pour votre commande
                </p>
              </div>

              <div className="bg-amber-100 p-6 rounded-lg">
                <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center mb-4">
                  <span className="text-amber-800 text-xl">🚚</span>
                </div>
                <h3 className="font-bold text-lg mb-2">
                  Livré en un rien de temps
                </h3>
                <p className="text-gray-700">
                  Recevez votre repas en moins de 30 minutes
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Restaurant Chain Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="relative h-80 w-full">
                {/* Placeholder for chef image */}
                <div className="bg-green-100 h-full w-full rounded-lg flex items-center justify-center">
                  <span className="text-6xl">👨‍🍳</span>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-4">
                We have the Largest Restaurant Chain
              </h2>
              <p className="text-gray-600 mb-6">
                Notre réseau de restaurants partenaires s&apos;étend dans toute
                la ville, vous garantissant un large choix de cuisines et des
                délais de livraison courts.
              </p>
              <button className="bg-orange-500 text-white px-6 py-3 rounded-md font-medium">
                En savoir plus
              </button>
            </div>
          </div>
        </section>

        {/* Popular Dishes Section */}
        <section className="py-16 bg-green-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-2">
              Popular dishes with delivery
            </h2>
            <p className="text-gray-600 text-center mb-10">
              Découvrez nos plats les plus populaires, livrés directement chez
              vous
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Dish 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="h-40 bg-gray-200 relative">
                  {/* Placeholder for food image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl">🥗</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-1">Salade César</h3>
                  <div className="flex justify-between items-center">
                    <span className="font-bold">$5.99</span>
                    <button className="bg-orange-500 text-white w-8 h-8 rounded-md flex items-center justify-center">
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Dish 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="h-40 bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl">🍲</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-1">Pâtes aux légumes</h3>
                  <div className="flex justify-between items-center">
                    <span className="font-bold">$7.99</span>
                    <button className="bg-orange-500 text-white w-8 h-8 rounded-md flex items-center justify-center">
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Dish 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="h-40 bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl">🍛</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-1">Curry végétarien</h3>
                  <div className="flex justify-between items-center">
                    <span className="font-bold">$8.49</span>
                    <button className="bg-orange-500 text-white w-8 h-8 rounded-md flex items-center justify-center">
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Dish 4 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="h-40 bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl">🥘</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-1">Risotto aux champignons</h3>
                  <div className="flex justify-between items-center">
                    <span className="font-bold">$9.99</span>
                    <button className="bg-orange-500 text-white w-8 h-8 rounded-md flex items-center justify-center">
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-10">
              <button className="bg-orange-500 text-white px-6 py-3 rounded-md font-medium">
                Voir plus
              </button>
            </div>
          </div>
        </section>

        {/* Healthy Food Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">
                Delicious and healthy food for your body
              </h2>
              <p className="text-gray-600 mb-6">
                Nous proposons une large sélection de plats sains et délicieux,
                préparés avec des ingrédients frais et de qualité. Votre santé
                est notre priorité.
              </p>

              <div className="flex space-x-4 mb-6">
                <a
                  href="#"
                  className="bg-black text-white px-4 py-2 rounded-md flex items-center"
                >
                  <span className="mr-2">🍎</span> App Store
                </a>
                <a
                  href="#"
                  className="bg-black text-white px-4 py-2 rounded-md flex items-center"
                >
                  <span className="mr-2">🤖</span> Google Play
                </a>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="relative h-80 w-full">
                {/* Placeholder for delivery person image */}
                <div className="bg-blue-100 h-full w-full rounded-lg flex items-center justify-center">
                  <span className="text-6xl">🛵</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              What our Clients Say
            </h2>

            <div className="max-w-2xl mx-auto text-center">
              <div className="text-yellow-500 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-600 italic mb-6">
                &quot;Le service de livraison est rapide et les plats sont
                toujours délicieux. Je recommande vivement CantineConnect pour
                tous vos repas !&quot;
              </p>

              <div className="flex justify-center space-x-2 mt-8">
                <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                <div className="w-8 h-8 rounded-full bg-gray-300"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-purple-600 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-purple-600 font-bold">
                    FC
                  </div>
                  <span className="font-medium">Food Delivery</span>
                </div>
                <p className="mb-4">
                  Service de livraison de repas rapide et fiable dans toute la
                  ville.
                </p>
                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center"
                  >
                    f
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center"
                  >
                    t
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center"
                  >
                    in
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-bold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">All Products</a>
                  </li>
                  <li>
                    <a href="#">Locations</a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-4">Services</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#">Order tracking</a>
                  </li>
                  <li>
                    <a href="#">Wish List</a>
                  </li>
                  <li>
                    <a href="#">My account</a>
                  </li>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-4">Get in Touch</h3>
                <p className="mb-2">Subscribe to our newsletter</p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Email"
                    className="px-3 py-2 rounded-l-md text-gray-800 w-full"
                  />
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-r-md">
                    →
                  </button>
                </div>
              </div>
            </div>

            <div className="border-t border-purple-500 mt-8 pt-8 text-center">
              <p>Copyright © 2023 - CantineConnect. All Rights Reserved</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
