import { Events } from "discord.js";
import IEvent from "../Interfaces/IEvent.js";
import ExtendedClient from "./ExtendedClient.js";
import IEventOptions from "../Interfaces/IEventOptions.js";

export default class Event implements IEvent {
    client: ExtendedClient;
    name: Events;
    description?: string | undefined;
    once?: boolean | undefined;

    constructor(client: ExtendedClient, options: IEventOptions) {
        this.client = client;
        this.name = options.name;
        this.description = options.description;
        this.once = options.once;
    }

    Execute(...args: unknown[]): void {}
}
