interface IControllerApiParams{
   route?:string
}

export function ControllerApi(params?:IControllerApiParams|string) {
    console.log('DECORADOR CONTROLLER API ::')
    let routeControllerApi=''
    if(params){
        if(typeof params=='string')routeControllerApi=params
        if(typeof params=='object'){
            if(params.route)routeControllerApi=params.route
        }
    }
    console.log('Controller Api route ::',routeControllerApi)
	return function <T extends { new(...args: any[]): {} }>(constructor: T) {
		return class extends constructor {
            routeApiController = routeControllerApi;
		}
    }
}

interface IGETParams{
    route?:string

}
export function GET(params?:IGETParams|string) {
    console.log('INIT GET DECORATOR: ');
    console.log('params',params)
    return function (target: any, propertyKey: string, descriptor: any){
        console.log('Clase: ', target.constructor.prototype);
        console.log('Clase: ', target.apiroute);
        console.log('Método: ', propertyKey);
        console.log('Property Descriptor: ', descriptor);
        descriptor.value = function (...args: any[]) {
            console.log('Argumentos de la funcion', args);
        }
        console.log('FIN GET DECORATOR: ');
    }

}
