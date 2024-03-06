import { CacheType, ChatInputCommandInteraction, PermissionsBitField } from "discord.js";
import Command from "../base/classes/Command";
import CustomClient from "../base/classes/CustomClient";
import Category from "../base/enums/Category";

export default class Test extends Command {
    constructor(client: CustomClient) {
        super(client, {
             name: "test",
             description: "test cmd",
             category: Category.Utilities,
             default_member_permissions: PermissionsBitField.Flags.UseApplicationCommands,
             dm_permisiion: true,
             cooldown: 3,
             options: []
        });
    }
    Execute(interaction: ChatInputCommandInteraction) {
        interaction.reply({ content: "Test cmd", ephemeral:true });
        
    }
}