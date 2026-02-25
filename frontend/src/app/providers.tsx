"use client"

import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { ThemeProvider } from "next-themes"
import { useEffect, useState } from "react"
import { ApiError, OpenAPI } from "@/client"
import { Toaster } from "@/components/ui/sonner"

const handleApiError = (error: Error) => {
  if (error instanceof ApiError && [401, 403].includes(error.status)) {
    if (typeof window !== "undefined") {
      localStorage.removeItem("access_token")
      window.location.href = "/login"
    }
  }
}

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        queryCache: new QueryCache({
          onError: handleApiError,
        }),
        mutationCache: new MutationCache({
          onError: handleApiError,
        }),
      }),
  )

  useEffect(() => {
    OpenAPI.BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000"
    OpenAPI.TOKEN = async () => {
      return localStorage.getItem("access_token") || ""
    }
  }, [])

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      storageKey="ui-theme"
      disableTransitionOnChange
    >
      <QueryClientProvider client={queryClient}>
        {children}
        <Toaster richColors closeButton />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  )
}
