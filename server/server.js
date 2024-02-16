import express from "express"
import cors from "cors"
import { MercadoPagoConfig, Preference } from 'mercadopago';

const client = new MercadoPagoConfig({
	accessToken: 'APP_USR-91283949935542-020817-a256159441a7037bc823b38b8e9a75cb-333065088'
});

const app = express();
const port = 3000;

app.use(cors({
	origin: 'https://main--damiannahueljordan.netlify.app',
	credentials: true,
}));
app.use(express.json());


app.get("/", (req, res) => {
	res.send("el servidor de mercadopago funciona");
})


app.post("/create_preference", async (req, res) => {
	try {
		const body = {
			items: [
				{
					title: req.body.title,
					quantity: Number(req.body.quantity),
					unit_price: Number(req.body.price),
					currency_id: "ARS"
				},
			],
			back_urls: {
				success:"https://main--damiannahueljordan.netlify.app/",
				failure: "https://main--damiannahueljordan.netlify.app/",
				pending: "https://main--damiannahueljordan.netlify.app/"
			},
			auto_return: "approved"
		};
		const preference = new Preference(client);
		const result = await preference.create({body});
		res.json({
			id: result.id,
		});
	}catch (error) {
		console.log(error);
		res.status(500).json({
			error: "error al crear la preferencia"
		})
	}
});

app.listen(port, () => {
	console.log(`la app esta corriendo en el port ${port}`)
})