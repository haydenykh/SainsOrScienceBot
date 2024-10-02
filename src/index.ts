import "dotenv/config";
import ExtendedClient from "./Base/Classes/ExtendedClient.js";
import express from "express"

new ExtendedClient().Init();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req: express.Request, res: express.Response) => {
	res.send('Bot is running!');	
});

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});