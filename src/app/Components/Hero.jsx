import React from "react";

export function Hero() {
  return (
    <section>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl mb-2">
          Vadum
        </h1>
        <p className="text-lg text-gray-500">
          El primer quiosco autogestionable del país.
        </p>
      </div>
      <div className="flex flex-col items-center space-y-6 mt-8 md:flex-row md:justify-center md:space-y-0 md:space-x-6">
        {/* iOS */}
        <div className="flex flex-col items-center space-x-3">
          <span className="text-black font-semibold mb-2 text-lg">
            Disponible en iOS
          </span>
          <div className="hidden md:block">
            <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center transition duration-300 hover:opacity-80">
              <img src="/iosQR.png" alt="QR iOS" className="bg-black" />
            </div>
          </div>
          <div className="md:hidden">
            <a
              href="https://apps.apple.com/es/app/kuario/id1276585367"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-48 h-14 bg-black text-white rounded-xl flex items-center justify-center transition duration-300 hover:opacity-80">
                <div className="mr-3">
                  <img
                    src="/kuario.png"
                    width={40}
                    height={20}
                    alt="imagen de kuario"
                  />
                </div>
                <div>
                  <div className="text-xs">Descarga en</div>
                  <div className="text-2xl font-semibold font-sans -mt-1">
                    App Store
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Android */}
        <div className="flex flex-col items-center space-x-3">
          <span className="text-black font-semibold mb-2 text-lg">
            Disponible en Android
          </span>
          <div className="hidden md:block">
            <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center transition duration-300 hover:opacity-80">
              <img src="/androidQR.png" alt="QR Android" />
            </div>
          </div>
          <div className="md:hidden">
            <a
              href="https://play.google.com/store/apps/details?id=com.skuario.app&hl=es_AR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-48 h-14 bg-black text-white rounded-xl flex items-center justify-center transition duration-300 hover:opacity-80">
                <div className="mr-3">
                  <img
                    src="/kuario.png"
                    width={40}
                    height={20}
                    alt="imagen de kuario"
                  />
                </div>
                <div>
                  <div className="text-xs">Descarga en</div>
                  <div className="text-2xl font-semibold font-sans -mt-1">
                    Play Store
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <section className="mx-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 m-8 max-w-screen-xl mx-auto">
          <div className="p-3 bg-white shadow-md rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:border-blue-500 hover:shadow-lg hover:-translate-y-1 border border-[#eaeaea]">
            <div className="px-5 py-2">
              <div className="font-bold text-2xl mb-2 text-[#21293d]">
                ¿Cómo cargo saldo?
              </div>
              <p className="text-gray-700 text-base">
                Aprende a cargar saldo en tu cuenta de <b>KUARIO</b> para poder
                disfrutar de nuestros servicios.
              </p>
            </div>
            <div className="px-4 py-2">
              <button className="w-full bg-[#21293d] hover:bg-black hover:ease-in-out hover:text-white duration-300 text-white font-bold py-1 px-2 rounded border border-[#eaeaea]">
                Ver video
              </button>
            </div>
          </div>

          <div className="p-3 bg-white shadow-md rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:border-blue-500 hover:shadow-lg hover:-translate-y-1 border border-[#eaeaea]">
            <div className="px-4 py-2">
              <div className="font-bold text-2xl mb-2 text-[#21293d]">
                ¿Cómo imprimo?
              </div>
              <p className="text-gray-700 text-base">
                Aprende a imprimir en nuestros quioscos Vadum con tu cuenta de{" "}
                <b>KUARIO</b> y disfruta de la mejor calidad.
              </p>
            </div>
            <div className="px-4 py-2">
              <button className="w-full bg-[#21293d] hover:bg-black hover:ease-in-out hover:text-white duration-300 text-white font-bold py-1 px-2 rounded border border-[#eaeaea]">
                Ver video
              </button>
            </div>
          </div>

          <div className="p-3 bg-white shadow-md rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:border-blue-500 hover:shadow-lg hover:-translate-y-1 border border-[#eaeaea]">
            <div className="px-4 py-2">
              <div className="font-bold text-2xl mb-2 text-[#21293d]">
                ¿Cómo copio?
              </div>
              <p className="text-gray-700 text-base">
                Aprende a copiar en nuestros quioscos Vadum con tu cuenta de{" "}
                <b>KUARIO</b> y disfruta de la mejor calidad.
              </p>
            </div>
            <div className="px-4 py-2">
              <button className="w-full bg-[#21293d] hover:bg-black hover:ease-in-out hover:text-white duration-300 text-white font-bold py-1 px-2 rounded border border-[#eaeaea]">
                Ver video
              </button>
            </div>
          </div>

          <div className="p-3 bg-white shadow-md rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:border-blue-500 hover:shadow-lg hover:-translate-y-1 border border-[#eaeaea]">
            <div className="px-4 py-2">
              <div className="font-bold text-2xl mb-2 text-[#21293d]">
                ¿Cómo escaneo?
              </div>
              <p className="text-gray-700 text-base">
                Aprende a escanear en nuestros quioscos Vadum con tu cuenta de{" "}
                <b>KUARIO</b> y disfruta de la mejor calidad.
              </p>
            </div>
            <div className="px-4 py-2">
              <button className="w-full bg-[#21293d] hover:bg-black hover:ease-in-out hover:text-white duration-300 text-white font-bold py-1 px-2 rounded border border-[#eaeaea]">
                Ver video
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
