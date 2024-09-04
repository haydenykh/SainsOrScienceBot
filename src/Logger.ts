import { pino } from "pino";
import { PinoPretty as pretty } from "pino-pretty";
const logger = pino(
    pretty({
        colorize: true,
    })
);

export default logger;
