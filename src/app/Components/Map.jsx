"use client";
import React, { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";

const L = typeof window !== "undefined" ? require("leaflet") : null;

export function Map() {
  const mapRef = useRef(null);
  const [isClient, setIsClient] = useState(false);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !L || !mapRef.current) return;
    if (mapRef.current._leaflet_id) return;

    const map = L.map(mapRef.current, {
      zoomControl: false,
    }).setView([0, 0], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    L.control.zoom({ position: "topleft" }).addTo(map);

    const userIcon = L.icon({
      iconUrl: "/ubicacionn.png",
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40],
    });

    const quioscoIcon = L.icon({
      iconUrl: "/logos_mapa_vadum.png",
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40],
    });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation([latitude, longitude]);
          map.setView([latitude, longitude], 15);
          L.marker([latitude, longitude], { icon: userIcon })
            .addTo(map)
            .bindPopup("Tu ubicación")
            .openPopup();
        },
        (error) => console.error("Error obteniendo la ubicación:", error)
      );
    }

    L.marker([-32.95645, -60.64805], { icon: quioscoIcon })
      .addTo(map)
      .bindPopup("Técnica Integral - Centro de copiado");

    L.marker([-32.956458933618286, -60.64407609621731], { icon: quioscoIcon })
      .addTo(map)
      .bindPopup("<div style='background-color: #b0daed; padding: 5px; border-radius: 5px;'>Bar de UCEL - Universidad del Centro Educativo Latinoamericano</div>");

    mapRef.current = map;
  }, [isClient]);

  const goToUserLocation = () => {
    if (mapRef.current && userLocation) {
      mapRef.current.setView(userLocation, 15);
    }
  };

  if (!isClient) return <div>Cargando mapa...</div>;

  return (
    <div className="relative flex flex-col items-center justify-center w-full bg-gray-900 p-8 text-white">
      <h1 className="mb-4 text-3xl font-bold text-center sm:text-4xl md:text-5xl">
        ¡Encontrá tu quiosco Vadum más cercano!
      </h1>
      <div className="relative flex flex-col md:flex-row w-full">
        <div className="w-full md:w-1/4 bg-white text-black p-3 rounded-lg shadow-md overflow-auto max-h-60 md:max-h-none">
          <h2 className="text-sm font-bold mb-2">Referencia de Iconos</h2>
          <table className="text-xs w-full">
            <tbody>
              <tr className="flex items-center gap-2 cursor-pointer" onClick={goToUserLocation}>
                <td><img src="/ubicacionn.png" alt="Ubicación Usuario" width="24" height="24" /></td>
                <td>Tu ubicación</td>
              </tr>
              <tr className="flex items-center gap-2">
                <td><img src="/logos_mapa_vadum.png" alt="Quiosco y Punto de Recarga" width="24" height="24" /></td>
                <td>Quiosco y punto de recarga</td>
              </tr>
              <tr className="flex items-center gap-2">
                <td><img src="/logo_mapa_azul.png" alt="Quiosco" width="24" height="24" /></td>
                <td>Quiosco</td>
              </tr>
              <tr className="flex items-center gap-2">
                <td><img src="/logo_mapa_blanco.png" alt="Punto de Recarga" width="24" height="24" /></td>
                <td>Punto de recarga</td>
              </tr>
            </tbody>
          </table>
          <h2 className="text-sm font-bold mt-4 mb-2">Referencia de Color de Fondo del Texto</h2>
          <table className="text-xs w-full">
            <tbody>
              <tr className="flex items-center gap-2">
                <td><img src="/circulo_celeste.png" alt="Referencia de color" width="24" height="24" /></td>
                <td>El acceso a este destino puede estar limitado por las normas de la institución</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-full md:w-3/4 h-96 md:h-128 lg:h-144" ref={mapRef} id="map"></div>
      </div>
    </div>
  );
}
