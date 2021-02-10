const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/playground')
  .then(() => console.log('connect to the mongodb'))
  .catch(() => console.log('could not connect to the mongodb'));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
  const course = new Course({
    name: 'Angular js course',
    author: 'pasindu',
    tags: ['Angular', 'backend'],
    isPublished: true,
  });

  const result = await course.save();
  console.log(result);
}

createCourse();
