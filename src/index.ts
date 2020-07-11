import { doPost } from "./main";

declare const global: {
  [x: string]: unknown;
};

global.doPost = () => doPost();
