/**
 * QuDAG Native NAPI Bindings - TypeScript Definitions
 */

export interface KeyPair {
  public_key: Buffer;
  secret_key: Buffer;
}

export interface EncapsulatedSecret {
  ciphertext: Buffer;
  shared_secret: Buffer;
}

export interface ModuleInfo {
  name: string;
  version: string;
  description: string;
  features: string[];
}

export function init(): string;
export function version(): string;
export function getModuleInfo(): ModuleInfo;

export class MlKem768 {
  generateKeypair(): KeyPair;
  encapsulate(publicKey: Buffer): EncapsulatedSecret;
  decapsulate(ciphertext: Buffer, secretKey: Buffer): Buffer;
}

export class MlDsa {
  sign(message: Buffer, secretKey: Buffer): Buffer;
  verify(message: Buffer, signature: Buffer, publicKey: Buffer): boolean;
}

export function blake3Hash(data: Buffer): Buffer;
export function blake3HashHex(data: Buffer): string;
export function quantumFingerprint(data: Buffer): string;
