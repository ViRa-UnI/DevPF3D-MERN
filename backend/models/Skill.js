```javascript
const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  proficiency: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Skill = mongoose.model('skill', SkillSchema);
```