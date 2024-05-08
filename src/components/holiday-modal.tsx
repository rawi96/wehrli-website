"use client";

import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";
import { Button } from "./button";

export const HolidayModal = () => {
  const [open, setOpen] = useState(true);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div>
                  <Image
                    className="rounded"
                    height={1000}
                    width={1000}
                    src="/images/vacation/fruehling.jpeg"
                    alt="Ferien"
                  />
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="leading- text-xl font-semibold"
                    >
                      Auffahrt
                    </Dialog.Title>
                    <div className="mt-4">
                      <div className="text-sm">
                        <div className="text-md">
                          <div className="mt-4">
                            Das Ladengeschäft und das Büro bleiben über Auffahrt
                            geschlossen. (ab Mittwoch Mittag, 08.05. bis
                            Sonntag, 12.05.)
                          </div>
                          <div className="mt-4">
                            Gerne sind wir wieder ab Montag, 13.05. zu den
                            gewohnten Öffnungszeiten für Sie da.
                          </div>
                          <div className="mt-4">
                            Wir danken für Ihr Verständnis und wünschen schöne
                            Auffahrtstage.🌸
                          </div>
                          <div className="mt-4">Ihr Wehrli Licht Team</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Button
                    text="Schliessen"
                    type="primary"
                    onClick={() => setOpen(false)}
                    fullWidth
                  />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
