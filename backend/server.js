const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json()); // to parse JSON body

// MongoDB connection string
const uri = "mongodb+srv://aliabbas7213:kQk6YhAemBiqACpF@reviews-db.zvtu6.mongodb.net/?retryWrites=true&w=majority";

// MongoDB connection
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Successfully connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define Review schema
const reviewSchema = new mongoose.Schema({
  rating: Number,
  comment: String,
  name: String,
  email: String,
}, { timestamps: true });

const Review = mongoose.model('Review', reviewSchema);

// GET endpoint to fetch reviews
app.get('/reviews', async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching reviews', error: err });
  }
});

// POST endpoint to add a new review
app.post('/reviews', async (req, res) => {
  const { rating, comment, name, email } = req.body;

  const newReview = new Review({
    rating,
    comment,
    name,
    email
  });

  try {
    await newReview.save();
    res.status(201).json({ message: 'Review added successfully', review: newReview });
  } catch (err) {
    res.status(400).json({ message: 'Error adding review', error: err });
  }
});

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
