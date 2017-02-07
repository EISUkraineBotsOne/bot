import {bot} from "./LuisBot"
//import {bot} from "./ChoiceBot"
import {CollisionEvent} from "./DataTypes"

const consoleAddress = {
    "channelId": "console",
    "user": {"id": "user", "name": "User1"},
    "bot": {"id": "bot", "name": "Bot"},
    "conversation": {"id": "Convo1"}
}

export function startCollisionDialog(event: CollisionEvent): void {
    bot.beginDialog(JSON.parse(process.env.BOT_ADDRESS), '/startCollisionDialog', {event: event})
    //bot.beginDialog(consoleAddress, '/startCollisionDialog', {event: event})
}