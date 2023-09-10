export default (req, res) => {
  if (req.method === 'POST') {
    res.status(200).json({ message: "Hello, World!" });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
};
