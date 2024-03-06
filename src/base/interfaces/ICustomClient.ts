import { Collection } from "discord.js";
import { IConfig } from "./IConfig";
import SubCommand from "../classes/SubCommand";
import Command from "../classes/Command";

export default interface ICustomClient {
    config: IConfig;
    commands: Collection<string, Command>;
    subCommands: Collection<string, SubCommand>;
    cooldowns: Collection<string, Collection<string, number>>;
    
    Init(): void;
    LoadHandlers(): void;
}