// Type definitions for tunnel 0.0
// Project: https://github.com/koichik/node-tunnel/
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import { Agent } from 'http';
import { Agent as HttpsAgent } from 'https';

export function httpOverHttp(options?: HttpOptions): Agent;
export function httpsOverHttp(options?: HttpsOverHttpOptions): Agent;
export function httpOverHttps(options?: HttpOverHttpsOptions): httpsAgent;
export function httpsOverHttps(options?: HttpsOverHttpsOptions): httpsAgent;

export interface HttpOptions {
    maxSockets?: number;
    proxy?: ProxyOptions;
}

export interface HttpsOverHttpOptions extends HttpOptions {
    ca?: Buffer[];
    key?: Buffer;
    cert?: Buffer;
}

export interface HttpOverHttpsOptions extends HttpOptions {
    proxy?: HttpsProxyOptions;
}

export interface HttpsOverHttpsOptions extends HttpsOverHttpOptions {
    proxy?: HttpsProxyOptions;
}

export interface ProxyOptions {
    host: string;
    port: number;
    localAddress?: string;
    proxyAuth?: string;
    headers?: { [key: string]: any };
}

export interface HttpsProxyOptions extends ProxyOptions {
    ca?: Buffer[];
    servername?: string;
    key?: Buffer;
    cert?: Buffer;
}
