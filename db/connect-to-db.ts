import { ConnectionStates, connect } from "mongoose";

interface DatabaseProps {
	isConnected?: ConnectionStates;
}

let database: DatabaseProps = {};

export const connectToDB = async () => {
	if (database.isConnected) return;

	try {
		const db = await connect(process.env["DB_URI"] ?? "");

		database.isConnected = db.connections[0].readyState;

		console.log("Connected!!")
	} catch (error) {
		console.log(error);
	}
};
