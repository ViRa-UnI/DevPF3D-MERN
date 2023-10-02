```javascript
const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/projects', require('./routes/api/projects'));
app.use('/api/blogs', require('./routes/api/blogs'));
app.use('/api/skills', require('./routes/api/skills'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
```