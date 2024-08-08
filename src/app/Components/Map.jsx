import React from "react";

export function Map() {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-gray-900 p-8 text-white md:p-12 lg:p-16 xl:p-20 gradient-background">
      <h1 className="mb-4 text-3xl font-bold text-center sm:text-4xl md:text-5xl">
        ¡Encontrá tu quiosco Vadum más cercano!
      </h1>
      <div className="w-full flex justify-center">
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1FD21xO7muYH4Dk7R75PU5tBqkkD2MQM&ehbc=2E312F&noprof=1"
          className="w-full h-96 md:h-128 lg:h-144"
          style={{ border: 0 }}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
