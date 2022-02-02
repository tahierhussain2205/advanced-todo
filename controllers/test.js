// Test API
exports.testAPI = (req, res) => {
  res.status(200).json({ msg: "Hello World" });
};
