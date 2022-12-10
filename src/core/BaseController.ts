export class BaseController{
      routeApiController:string
    constructor(route?:string) {
        this.routeApiController=route||''
        console.log('base controller ',this.routeApiController)
    }
}