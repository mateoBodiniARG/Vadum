import "@fortawesome/fontawesome-free/css/all.css";
import React from "react";

export function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center h-20 bg-gray-950 text-white border-t-2 border-gray-700">
            <p className="text-lg mb-2">Nuestras redes:</p>
            <div className="flex space-x-4 text-lg">
                <a href="https://www.instagram.com/vadum.arg?igsh=amY0OTdmdTM3dWMz" className="hover:text-[#ca8ff1] text-[#b861f1]">
                    <i className="fab fa-instagram fa-xl"></i>
                </a>
                <a href="#" className="text-[#488de7] hover:text-[#699fe6]">
                    <i className="fab fa-facebook fa-xl"></i>
                </a>
                <a href="https://wa.me/543416252829" className="text-[#25D366] hover:text-[#8bf3b1]">
                    <i className="fab fa-whatsapp fa-xl"></i>
                </a>
            </div>
        </footer>
    );
}
