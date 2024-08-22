import { Collection } from "discord.js";
import IConfig from "./IConfig.js";
import Command from "../Classes/Command.js";
import SubCommand from "../Classes/SubCommand.js";

export default interface IExtendedClient {
    config: IConfig;
    commands: Collection<string, Command>;
    subCommands: Collection<string, SubCommand>;
    cooldowns: Collection<string, Collection<string, number>>;

    Init(): void;
    LoadHandlers(): void;
}
