import { BaseController } from "../core/BaseController";
import {GET,ControllerApi} from "../decorators/router.decorator";

@ControllerApi('api/usuario')
export  class  UsuarioController extends BaseController{
    private title='mi titulo'
    constructor(){super()}

    @GET('listar')
    listarTodo(){
        console.log('listar todo ',this.routeApiController)
        return 'hello world'
    }
}