import {
	addNewContact,
	getContacts,
	getContact,
	updateContact,
	deleteContact,
} from "../controllers/crmController";

const routes = (app) => {
	app
		.route("/contact")
		//get all contacts
		.get(
			(req, res, next) => {
				console.log(`req url ${req.originalUrl}`);
				console.log(`req mthod ${req.method}`);
				next();
			},
			//get a specific contact
			getContacts
		)
		.post(addNewContact);
	app
		.route("/contact/:contactId")
		.get(getContact)
		.put(updateContact)
		.delete(deleteContact);
};

export default routes;
