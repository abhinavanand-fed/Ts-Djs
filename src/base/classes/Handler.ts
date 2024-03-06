import IHandler from "../interfaces/IHandler";
import path from "path";
import { glob } from "glob";
import CustomClient from "./CustomClient";
import Event from "./Event";

export default class Handler implements IHandler {
    client: CustomClient;
    constructor(client: CustomClient) {
        this.client = client;
    }
    void: any;

    async LoadEvents() {
        const files = (await glob(`build/event/**/*.js`)).map(filePath => path.resolve(filePath));

        files.map(async (file: string) => {
            const event: Event =new(await import(file)).default(this.client);

            if(!event.name)
                return delete require.cache[require.resolve(file)] && console.log(`${file.split("/").pop()} does not have a name.`);

            const execute = (...args: any) => event.Execute(...args);

            //@ts-ignore
            if(event.once) this.client.once(event.name, execute);
            //@ts-ignore
            else this.client.on(event.name, execute);

            return delete require.cache[require.resolve(file)];

        });
    }
}
