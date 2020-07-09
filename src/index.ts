import { doPost } from "./main";

declare const global: {
  [x: string]: any;
};

global.doPost = () => doPost();
