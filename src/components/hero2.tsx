

const Hero2 = () => {
  return (
    <div className="relative w-screen
        h-screen bg-gradient-to-b from-blue-50
        to-blue-100">
            <header className="fixed top-0 
            left-0 w-full h-16 flex items-center
            justify-between px-12 bg-white 
            shadow-md border-b border-gray-200
            z-10">
                <div className="bg-rose-600 
                w-10 h-10 rounded-full" />{" "}
                <nav className="flex items-center
                space-x-8">
                    <a
                        className="text-gray-800
                        text-lg font-semibold
                        hover:text-rose-600 
                        transition-colors"
                        href="#"
                    >
                        Home
                    </a>
                    <a
                        className="text-gray-800
                        text-lg font-semibold 
                        hover:text-rose-600 
                        transition-colors"
                        href="#"
                    >
                        Offers
                    </a>
                    <a
                        className="text-gray-800 
                        text-lg font-semibold 
                        hover:text-rose-600 
                        transition-colors"
                        href="#"
                    >
                        Contact
                    </a>
                    <a
                        className="text-gray-800
                        text-lg font-semibold 
                        hover:text-rose-600 
                        transition-colors"
                        href="#"
                    >
                        Services
                    </a>
                    <a
                        className="text-gray-800 
                        text-lg font-semibold 
                        hover:text-rose-600 
                        transition-colors"
                        href="#"
                    >
                        Menu
                    </a>
                </nav>
            </header>

            <main className="flex flex-col 
            items-center justify-center 
            pt-20 px-6 lg:flex-row 
            lg:items-center lg:justify-between
            lg:space-x-12">
                <div className="lg:max-w-xl
                lg:flex-1">
                    <h1 className="text-black 
                    text-4xl font-extrabold 
                    text-center lg:text-left
                    leading-tight mb-6">
                        Embark on a Culinary Journey
                        <br />
                        Where Every Bite is a Masterpiece
                        <br />
                        <span className="
                        text-rose-600">Flavorful 
                        Excellence</span>
                    </h1>
                    <p className="text-gray-700 
                    text-lg font-medium text-center
                    lg:text-left leading-relaxed mb-6">
                        Where Each Plate Weaves a
                        Story of Culinary Mastery and 
                        Passionate
                        Craftsmanship
                    </p>
                    <button className="bg-rose-600 
                    text-white text-lg font-semibold 
                    py-3 px-6 rounded-full shadow-md
                    hover:bg-rose-700 transition-colors">
                        Order Now
                    </button>
                </div>

                <div className="relative w-full max-w-sm
                lg:w-1/2 lg:max-w-md lg:h-96 mt-8 lg:mt-0">
                    <div className="absolute inset-0 
                    bg-red-600 rounded-full"></div>
                    <img
                        className="relative w-full h-full 
                        object-cover rounded-full border-4
                        border-white" src="
                   https://media.geeksforgeeks.org/wp-content/
                   uploads/20240910124734/restaurant-app-imag.jpeg"
                        alt="Placeholder"
                    />
                </div>
                <div className="relative w-full max-w-sm
                lg:w-1/2 lg:max-w-md lg:h-96 mt-8 lg:mt-0">
                    <div className="absolute inset-0 
                    bg-red-600 rounded-full"></div>
                    <img
                        className="relative w-full h-full 
                        object-cover rounded-full border-4
                        border-white" src="
                   
                        https://cdn.pixabay.com/photo/2024/12/03/08/08/ai-generated-9241538_640.jpg"
                        alt="Placeholder"
                    />
                </div>
            </main>
        </div>
  )
}

export default Hero;
