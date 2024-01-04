import express from "express"
import cors from "cors"
import { MercadoPagoConfig, Preference } from 'mercadopago';

const client = new MercadoPagoConfig({
	accessToken: 'APP_USR-5591212641233345-010316-b8bd8c871502ce34a37bcaf90e355794-1620391569'
});

const app = express();
const port = 3000;

app.use(cors());
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