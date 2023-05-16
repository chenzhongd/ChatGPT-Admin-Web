"use client";

import React, { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useUserStore } from "@/store";
import { GeistProvider, CssBaseline, Page } from "@geist-ui/core";
import Menu from "@/components/layout/menu/menu";
import { showToast } from "@/components/ui-lib";
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <GeistProvider>
      <CssBaseline />
      {children}
    </GeistProvider>
  );
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const [sessionToken, validateSessionToken] = useUserStore((state) => [
    state.sessionToken,
    state.validateSessionToken,
  ]);

  useEffect(() => {
    if (!sessionToken || !validateSessionToken()) {
      if (pathname !== "/login") return router.push("/login");
    } else {
      if (pathname == "/login") return router.replace("/");
    }
  }, [router, pathname, sessionToken, validateSessionToken]);

  showToast(pathname);
  return (
    <>
      {
      // /* {pathname.startsWith("/login") ? (
      //   <>{children}</>
      // ) :  */}
      (
        <Page>
          <Page.Header>
            <Menu />
          </Page.Header>
          <Page.Content>{children}</Page.Content>
          <Page.Footer></Page.Footer>
        </Page>
      )}
    </>
  );
}
