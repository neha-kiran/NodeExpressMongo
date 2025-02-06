import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const contactSchema = new Schema({
	firstName: {
		type: String,
		required: "Enter a first name",
	},
	lastName: {
		type: String,
		required: "Enter a last name",
	},
	email: {
		type: String,
	},
	phone: {
		type: Number,
	},
	company: {
		type: String,
	},
	created_at: {
		type: Date,
		default: Date.now,
	},
});
