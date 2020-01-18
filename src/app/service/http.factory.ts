import {XHRBackend, Http, RequestOptions} from "@angular/http";
import {InterceptorService} from "./interceptor.service";


export function httpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions): Http {
    return new InterceptorService(xhrBackend, requestOptions);
}