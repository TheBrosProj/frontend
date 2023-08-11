// app/providers.tsx
'use client'

import { AuthProvider } from '@/components/AuthContext'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'

export function Providers({
    children
}) {
    return (
        <AuthProvider>
            <CacheProvider>
                <ColorModeScript initialColorMode={"dark"} />
                <ChakraProvider>
                    {children}
                </ChakraProvider>
            </CacheProvider>
        </AuthProvider>
    )
}