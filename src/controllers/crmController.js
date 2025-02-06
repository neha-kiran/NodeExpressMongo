import mongoose from "mongoose";
import { contactSchema } from "../models/crmModel";

const Contact = mongoose.model("Contact", contactSchema);

export const addNewContact = async (req, res) => {
	try {
		const newContact = new Contact(req.body);
		const contact = await newContact.save(); // Use await here
		res.status(200).json(contact); // Send the successful response
	} catch (err) {
		res.status(500).send(err); // Important: Set an appropriate status code for errors
	}
};

export const getContacts = async (req, res) => {
	try {
		const contacts = await Contact.find();
		res.status(200).json(contacts);
	} catch (err) {
		res.status(500).send(err);
	}
};

export const getContact = async (req, res) => {
	try {
		console.log(req);
		const contacts = await Contact.findById(req.params.contactId);
		res.status(200).json(contacts);
	} catch (err) {
		res.status(500).send(err);
	}
};

export const updateContact = async (req, res) => {
	try {
		console.log(req);

		//findByIdAndUpdate SEARCHES ON THE BASIS OF ID
		//findOneAndUpdate SEARCHES ON THE BASIS OF THE PARAM SPECIFIED IN THE PARAMETERS
		// const contacts = await Contact.findByIdAndUpdate(req.params.contactId);

		const contacts = await Contact.findOneAndUpdate(
			{ _id: req.params.contactId },
			// req.params.contactId, //WHEN findByIdAndUpdate IS USED
			req.body,
			{ new: true }
		);
		res.status(200).json(contacts);
	} catch (err) {
		res.status(500).send(err);
	}
};

export const deleteContact = async (req, res) => {
	try {
		// const contacts = await Contact.remove(req.params.contactId); //DEPRECATED it can accidently delete all records if params are not passed

		const contacts = await Contact.findByIdAndDelete(req.params.contactId);
		res.status(200).json(contacts);
	} catch (err) {
		res.status(500).send(err);
	}
};
