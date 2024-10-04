import mongoose from "mongoose";

const portSchema = new mongoose.Schema({
    number: { type: String, required: true },
    category: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    photo: { type: String, required: true },
    stack: { type: String, required: true },
    name: { type: String },
    email: { type: String },
});

// Export the portfolio model
const Portfolio = mongoose.models.portfolio || mongoose.model('portfolio', portSchema);
export default Portfolio;
