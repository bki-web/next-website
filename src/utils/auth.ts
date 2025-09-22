// src/lib/auth.ts

import crypto from 'node:crypto';
import { z } from 'zod';

const jwtSecret = process.env.JWT_SECRET || "c2012621-8b9f-4f04-acdd-ddab2fdb12e8-b7b55320-fdb7-4d67-aadf-5492e9bd2f0e";
if (!jwtSecret) {
  throw new Error('JWT_SECRET environment variable is not set!');
}
const secretBuffer = Buffer.from(jwtSecret, 'utf-8');

// Define the shape of the JWT payload for type safety
export const jwtPayloadSchema = z.object({
  sub: z.string(), // Subject (usually the user ID)
  email: z.string().email(),
  iat: z.number(), // Issued At
  exp: z.number(), // Expiration Time
});

export type JwtPayload = z.infer<typeof jwtPayloadSchema>;

/**
 * Encodes data in Base64URL format.
 */
function base64UrlEncode(data: string | Buffer): string {
  return Buffer.from(data).toString('base64url');
}

/**
 * Signs a JWT payload using native Node.js crypto (HMAC-SHA256).
 */
export function signJwt(payload: Omit<JwtPayload, 'iat' | 'exp'>): string {
  const header = { alg: 'HS256', typ: 'JWT' };
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + 60 * 15; // 15-minute expiration

  const fullPayload: JwtPayload = { ...payload, iat, exp };

  const encodedHeader = base64UrlEncode(JSON.stringify(header));
  const encodedPayload = base64UrlEncode(JSON.stringify(fullPayload));

  const signatureInput = `${encodedHeader}.${encodedPayload}`;

  const signature = crypto
    .createHmac('sha256', secretBuffer)
    .update(signatureInput)
    .digest('base64url');

  return `${signatureInput}.${signature}`;
}

/**
 * Verifies a JWT and returns its payload if valid.
 */
export function verifyJwt(token: string): JwtPayload | null {
  try {
    const [encodedHeader, encodedPayload, signature] = token.split('.');
    
    const signatureInput = `${encodedHeader}.${encodedPayload}`;

    // Recalculate the signature using the same secret
    const expectedSignature = crypto
      .createHmac('sha256', secretBuffer)
      .update(signatureInput)
      .digest('base64url');
    
    // Use timingSafeEqual to prevent timing attacks
    const isSignatureValid = crypto.timingSafeEqual(
        Buffer.from(signature), 
        Buffer.from(expectedSignature)
    );

    if (!isSignatureValid) {
      return null;
    }

    const payload = JSON.parse(Buffer.from(encodedPayload, 'base64url').toString());
    
    // Check expiration
    if (payload.exp < Math.floor(Date.now() / 1000)) {
        console.warn('JWT has expired');
        return null;
    }

    // Validate payload shape
    const validatedPayload = jwtPayloadSchema.safeParse(payload);
    if (!validatedPayload.success) {
      return null;
    }

    return validatedPayload.data;
  } catch (error) {
    console.error('JWT verification failed:', error);
    return null;
  }
}