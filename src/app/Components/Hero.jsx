"use client";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ComputerIcon, SmartphoneNfcIcon } from "lucide-react";

export function Hero() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogMode, setDialogMode] = useState(null);

  const handleOpenDialog = (mode) => {
    setIsDialogOpen(true);
    setDialogMode(mode);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setDialogMode(null);
  };

  return (
    <section>
      <div className="text-center">
  <img
    src="/vadum-logo2.png"
    alt="Vadum Logo"
    className="mx-auto h-16 md:h-24 lg:h-32"
  />
<br></br>
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
              className="w-48 h-14 bg-black text-white rounded-xl items-center justify-center transition duration-300 hover:opacity-80 cursor-pointer flex "
            >
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
              className="w-48 h-14 bg-black text-white rounded-xl  items-center justify-center transition duration-300 hover:opacity-80 cursor-pointer flex "
            >
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
            </a>
          </div>
        </div>
      </div>

      <section className="mx-3">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 m-8 max-w-screen-xl mx-auto">
    <div className="p-4 rounded-lg flex flex-col items-center">
      <a href="/como_cargo.mp4" target="_blank" rel="noopener noreferrer" className="w-28 h-28">
        <img
          src="/comoCargo.png"
          alt="Cargá archivos"
          className="w-28 h-28"
        />
      </a>
      <span className="font-bold text-xl text-center">Cómo cargo saldo</span>
    </div>

          <div className="p-4 rounded-lg flex flex-col items-center">
            <button
              onClick={() => handleOpenDialog("charge")}
              className="cursor-pointer"
            >
              <img
                src="/comoImprimo.png"
                alt="Cargá archivos"
                className="w-28 h-28"
              />
            </button>
            <span className="font-bold text-xl text-center">
              Cómo imprimo
            </span>
          </div>

          <div className="p-4 rounded-lg flex flex-col items-center">
            <a href="/como_copio.mp4" className="w-28 h-28">
              <img
                src="/comoCopio.png"
                alt="Cargá archivos"
                className="w-28 h-28"
              />
            </a>
            <span className="font-bold text-xl text-center">Cómo copio</span>
          </div>

          <div className="p-4 rounded-lg flex flex-col items-center">
            <a href="como_escaneo.mp4" className="w-28 h-28">
              <img
                src="/comoEscaneo.png"
                alt="Cargá archivos"
                className="w-28 h-28"
              />
            </a>
            <span className="font-bold text-xl text-center">Cómo escaneo</span>
          </div>
        </div>
      </section>

      <Dialog open={isDialogOpen} onOpenChange={handleCloseDialog}>
        <DialogContent>
          <DialogHeader className="flex justify-center items-center">
            
          </DialogHeader>
          <div className="space-y-4 m-auto">
            {dialogMode === "charge" && (
              <RadioGroup defaultValue="pc" className="grid grid-cols-2 gap-4">
                <div>
                  <RadioGroupItem
                    value="app"
                    id="app"
                    className="peer sr-only"
                  />
                  <a
                    href="/como_imprimo_cel.mp4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center text-center rounded-md border-2 border-muted bg-popover p-4 cursor-pointer hover:bg-accent hover:text-accent-foreground hover:shadow-md"
                  >
                    <SmartphoneNfcIcon className="mb-3 h-8 w-8 text-primary" />
                    Celular
                  </a>
                </div>
                <div>
                  <RadioGroupItem value="pc" id="pc" className="peer sr-only" />
                  <Label
                    htmlFor="pc"
                    className="flex flex-col items-center justify-center text-center rounded-md border-2 border-muted bg-popover p-5 px-10 cursor-pointer hover:bg-accent hover:text-accent-foreground hover:shadow-md"
                    onClick={() => setDialogMode("pc")}
                  >
                    <ComputerIcon className="mb-3 h-8 w-8 text-primary" />
                    Computadora
                  </Label>
                </div>
              </RadioGroup>
            )}

            {dialogMode === "pc" && (
              <RadioGroup className="grid grid-cols-2 gap-4">
                <div>
  <RadioGroupItem
    value="driver"
    id="driver"
    className="peer sr-only"
  />
  <a
    href="/como_instalo.mp4"
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center justify-center text-center rounded-md border-2 border-muted bg-popover p-4 cursor-pointer hover:bg-accent hover:text-accent-foreground"
  >
    Instalá la impresora Kuario
  </a>
</div>
                <div>
  <RadioGroupItem
    value="portal"
    id="portal"
    className="peer sr-only"
  />
  <a
    href="/como_imprimo_pc.mp4"
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center justify-center text-center rounded-md border-2 border-muted bg-popover p-4 cursor-pointer hover:bg-accent hover:text-accent-foreground"
  >
    Imprimí ahora!
  </a>
</div>

              </RadioGroup>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
