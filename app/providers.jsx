// app/providers.tsx
'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'

export function Providers({
    children
}) {
    return (
        <CacheProvider>
            <ColorModeScript initialColorMode={"dark"} />
            <ChakraProvider>
                {children}
            </ChakraProvider>
        </CacheProvider>
    )
}