/// <reference types="node" />
/// <reference types="node" />
import type { ReadableStream } from "stream/web";
import type { _AbortHandler, _Method, _Request, _Response, _Service, _Transport } from "@cerbos/core";
export declare class Transport implements _Transport {
    private readonly baseUrl;
    private readonly userAgent;
    constructor(baseUrl: string, userAgent: string);
    unary<Service extends _Service, Method extends _Method<Service, "unary">>(service: Service, method: Method, request: _Request<Service, "unary", Method>, headers: Headers, abortHandler: _AbortHandler): Promise<_Response<Service, "unary", Method>>;
    serverStream<Service extends _Service, Method extends _Method<Service, "serverStream">>(service: Service, method: Method, request: _Request<Service, "serverStream", Method>, headers: Headers, abortHandler: _AbortHandler): AsyncGenerator<_Response<Service, "serverStream", Method>, void, undefined>;
    private fetch;
}
export declare function eachLine(stream: ReadableStream<Uint8Array>): AsyncGenerator<string, void, undefined>;
//# sourceMappingURL=transport.d.ts.map