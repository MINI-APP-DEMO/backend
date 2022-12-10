import bcrypt from 'bcrypt'
import { ENVIRONMENT } from '../constantes';

export const Bcrypt = {
 encriptar: (password:string) => {
  const saltos = ENVIRONMENT.bcrypt.salto||10;
  const key = ENVIRONMENT.bcrypt.secretKey || "myKey";
  const salt = bcrypt.genSaltSync(saltos);
  const hash = bcrypt.hashSync(password, salt);
  return hash
 },
 comparar: (password: string, hash: string) => {
  return bcrypt.compareSync(password, hash); 
 }
}