// lib/prisma.ts

import {PrismaClient} from '@prisma/client'

// Add prisma to the global type definition
declare global {
    var prisma: PrismaClient | undefined
}

let prisma: PrismaClient

if (process.env.NODE_ENV === 'production') {
    // In production, create a new instance and use it
    prisma = new PrismaClient()
} else {
    // In development, store the instance on the global object
    // This prevents creating a new instance on every hot reload
    if (!global.prisma) {
        global.prisma = new PrismaClient()
    }
    prisma = global.prisma
}

export default prisma