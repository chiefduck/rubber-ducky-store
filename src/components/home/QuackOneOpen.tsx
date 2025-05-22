const QuackOneOpen = () => {
    return (
      <section className="bg-ducky-yellow py-20">
        <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
              QUACK ONE OPEN AND LET THE GOOD TIMES POUR
            </h2>
            <p className="text-lg mb-6">
              Delicious zero-proof drinks made with real ingredients—crafted for good vibes, better taste, and sunny moments anytime, anywhere.
            </p>
            <a
              href="/Store-Locator"
              className="inline-block bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-900 transition"
            >
              Find in Stores
            </a>
          </div>
          <div className="flex justify-center">
            <img
              src="/images/products/yellow-can-dual.png"
              alt="Rubber Ducky Yellow Can"
              className="w-full max-w-[600px]"

            />
          </div>
        </div>
      </section>
    );
  };
  
  export default QuackOneOpen;
  