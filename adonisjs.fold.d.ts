declare module "@adonisjs/fold" {
  const ServiceProvider: any;
  const ioc: any;
  const registrar: any;
  const resolver: any;
  export {ServiceProvider, ioc, resolver, registrar}
}

declare interface IoCServiceProvicer {

}

declare interface Redis extends IoCServiceProvicer {
  publish(channelName: string, data: string): null
}


declare function use(namespace: string): IoCServiceProvicer

declare interface Request {
  plainCookie(cookieName: string): string
}
