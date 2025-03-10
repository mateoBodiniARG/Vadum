"use client";
import React, { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export function Map() {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;
    if (mapRef.current._leaflet_id) return;

    // Crear el mapa
    const map = L.map(mapRef.current, {
      zoomControl: false // Desactivar los botones de zoom predeterminados
    }).setView([0, 0], 13);

    // Agregar capa base de OpenStreetMap
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    // Agregar controles de zoom solo a la izquierda
    L.control.zoom({ position: "topleft" }).addTo(map);

    // Definir iconos personalizados
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

    // Obtener la ubicación del usuario
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          map.setView([latitude, longitude], 15);

          // Agregar el marcador del usuario con su icono
          L.marker([latitude, longitude], { icon: userIcon })
            .addTo(map)
            .bindPopup("Tu ubicación")
            .openPopup();
        },
        (error) => console.error("Error obteniendo la ubicación:", error)
      );
    }

    // Agregar un marcador en la ubicación especificada con su icono personalizado
    L.marker([-32.95645, -60.64805], { icon: quioscoIcon })
      .addTo(map)
      .bindPopup("Técnica Integral - Centro de copiado")
      .openPopup();

    // Agregar otro marcador con la misma imagen pero en una nueva ubicación
    L.marker([-32.956458933618286, -60.64407609621731], { icon: quioscoIcon })
      .addTo(map)
      .bindPopup("<div style='background-color: #b0daed; padding: 5px; border-radius: 5px;'>Bar de UCEL - Universidad del Centro Educativo Latinoamericano</div>")
      .openPopup();

    // Crear un control personalizado para la tabla de referencia
    const legend = L.control({ position: "topright" });

    legend.onAdd = function () {
      const div = L.DomUtil.create("div", "leaflet-bar leaflet-control leaflet-control-custom p-3 bg-white text-black rounded-lg shadow-md");
      div.innerHTML = `
        <h2 class="text-sm font-bold mb-2">Referencia de Iconos</h2>
        <table class="text-xs">
          <tbody>
            <tr>
              <td><img src="/ubicacionn.png" alt="Ubicación Usuario" class="w-6 h-6" /></td>
              <td class="pl-2">Tu ubicación</td>
            </tr>
            <tr>
              <td><img src="/logos_mapa_vadum.png" alt="Quiosco y Punto de Recarga" class="w-6 h-6" /></td>
              <td class="pl-2">Quiosco y punto de recarga</td>
            </tr>
            <tr>
              <td><img src="/logo_mapa_azul.png" alt="Quiosco" class="w-6 h-6" /></td>
              <td class="pl-2">Quiosco</td>
            </tr>
            <tr>
              <td><img src="/logo_mapa_blanco.png" alt="Punto de Recarga" class="w-6 h-6" /></td>
              <td class="pl-2">Punto de recarga</td>
            </tr>
          </tbody>
        </table>
        
        <h2 class="text-sm font-bold mt-4 mb-2">Referencia de Color de Fondo del Texto</h2>
        <table class="text-xs">
          <tbody>
            <tr>
              <td><img src="/circulo_celeste.png" alt="Referencia de color" class="w-6 h-6" /></td>
              <td class="pl-2">El acceso a este destino puede estar limitado <br>
              por las normas de la institución.</td>
            </tr>
          </tbody>
        </table>
      `;
      return div;
    };

    legend.addTo(map); // Agregar la tabla al mapa
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center w-full bg-gray-900 p-8 text-white md:p-12 lg:p-16 xl:p-20">
      <h1 className="mb-4 text-3xl font-bold text-center sm:text-4xl md:text-5xl">
        ¡Encontrá tu quiosco Vadum más cercano!
      </h1>
      <div className="relative w-full h-96 md:h-128 lg:h-144">
        <div ref={mapRef} id="map" className="w-full h-full"></div>
      </div>
    </div>
  );
}
