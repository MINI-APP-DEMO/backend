import {load} from "node-yaml-config";

export const ENVIRONMENT= load(__dirname + '/../environment.yml')