import { Events } from "discord.js";
import ExtendedClient from "../Classes/ExtendedClient.js";

export default interface IEvent {
    client: ExtendedClient;
    name: Events;
    description?: string;
    once?: boolean;
}
