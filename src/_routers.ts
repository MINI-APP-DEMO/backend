import {AppHandler} from "./handlers/App.handler";
import {PersonaHandler} from "./handlers/persona.handler";
import {UsuarioHandler} from "./handlers/Usuario.handler";

export default [
    AppHandler.getInstance.router,
    PersonaHandler.getInstance.router,
    UsuarioHandler.getInstance.router,
]