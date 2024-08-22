import IConfig from "./IConfig.js";

export default interface IExtendedClient {
    config: IConfig;

    Init(): void;
    LoadHandlers(): void;
}
