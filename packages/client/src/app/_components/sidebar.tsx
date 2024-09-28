import Link from "next/link";
import type { FC } from "react";
import { SidebarLink } from "./sidebar-link";

export const Sidebar: FC = () => {
  return (
    <>
      <>
        {/* ========== MAIN SIDEBAR ========== */}
        <aside
          id="hs-pro-sidebar"
          className="hs-overlay [--auto-close:lg]
  hs-overlay-open:translate-x-0
  -translate-x-full transition-all duration-300 transform
  w-[260px] h-full
  hidden
  fixed inset-y-0 start-0 z-[60]
  bg-white border-e border-gray-200
  lg:block lg:translate-x-0 lg:end-auto lg:bottom-0
  dark:bg-neutral-800 dark:border-neutral-700"
          tabIndex={-1}
          aria-label="Sidebar"
        >
          <div className="relative flex flex-col h-full max-h-full pt-3">
            <header className="h-[46px] px-8">
              {/* Logo */}
              <div className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80">
                Client Query
              </div>
              {/* End Logo */}
            </header>
            {/* Content */}
            <div className="mt-1.5 h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
              {/* Nav */}
              <nav
                className="hs-accordion-group pb-3  w-full flex flex-col flex-wrap"
                data-hs-accordion-always-open=""
              >
                <ul className="flex flex-col gap-y-1">
                  <SidebarLink href="/" label="ホーム" active={true} />
                </ul>
              </nav>
              {/* End Nav */}
            </div>
            {/* End Content */}
          </div>
        </aside>
        {/* ========== END MAIN SIDEBAR ========== */}
      </>
    </>
  );
};
