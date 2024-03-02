"use client";

import { useShopContext } from "@/contexts/shop-context";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  shopNavigationItems,
  websiteNavigationItems,
} from "../../data/navigation-items";
import { Flyout } from "../flyout";
import { ShoppingCart } from "../shopping-cart";
import { NavigationAccordion } from "./navigation-accordion";

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { cart, isShowCart, setIsShowCart } = useShopContext();

  const pathname = usePathname();

  const isShopPage = pathname.includes("/shop");
  const navigationItems = isShopPage
    ? shopNavigationItems
    : websiteNavigationItems;

  return (
    <>
      <nav
        className="flex items-center justify-between py-6"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Wehrli Licht GmbH</span>
            <Image
              src="/logos/wehrli_licht_logo.svg"
              alt="Wehrli Licht Logo"
              width={200}
              height={60}
              sizes="(min-width: 1024px) 200px, 100vw"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-lg p-2.5 text-gray-400"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <span className="sr-only">Menu öffnen</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigationItems.map((item) => {
            return "items" in item ? (
              <div key={item.title} className="relative font-semibold">
                <Flyout
                  key={item.title}
                  title={item.title}
                  items={item.items}
                />
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-white"
              >
                {item.name}
              </Link>
            );
          })}
          {isShopPage && (
            <button
              className="text-sm font-semibold leading-6 text-white"
              onClick={() => setIsShowCart(true)}
            >
              Warenkorb{" "}
              {cart?.item_quantity && cart.item_quantity > 0
                ? `(${cart.item_quantity})`
                : ""}
            </button>
          )}
        </div>
      </nav>
      <Dialog as="div" open={isMobileMenuOpen} onClose={setIsMobileMenuOpen}>
        <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-wehrli px-6 py-6 lg:hidden">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Wehrli Licht GmbH</span>
              <Image
                src="/logos/wehrli_licht_logo.svg"
                alt="Wehrli Licht Logo"
                width={200}
                height={60}
                sizes="(min-width: 1024px) 200px, 100vw"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-lg p-2.5 text-gray-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="sr-only">Menu schliessen</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/25">
              <div className="space-y-2 py-6">
                {navigationItems.map((item) => {
                  return "items" in item ? (
                    <NavigationAccordion
                      key={item.title}
                      title={item.title}
                      items={item.items}
                    />
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-400/10"
                    >
                      {item.name}
                    </Link>
                  );
                })}
                {isShopPage && (
                  <button
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-400/10"
                    onClick={() => setIsShowCart(true)}
                  >
                    Warenkorb{" "}
                    {cart?.item_quantity && cart.item_quantity > 0
                      ? `(${cart.item_quantity})`
                      : ""}
                  </button>
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
      <ShoppingCart open={isShowCart} setOpen={setIsShowCart} />
    </>
  );
};
