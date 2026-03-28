import "dotenv/config";
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import { handleDemo } from "./routes/demo";

export function createServer() {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/health", (_req, res) => {
    res.status(200).json({ status: "ok" });
  });

  app.get("/api/demo", handleDemo);

  app.post("/api/contact", async (req, res) => {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: "Name, email and message are required." });
    }

    const { MAIL_USER, MAIL_PASS, MAIL_TO } = process.env;

    if (!MAIL_USER || !MAIL_PASS || !MAIL_TO) {
      console.error("Missing MAIL_USER, MAIL_PASS or MAIL_TO in environment variables.");
      return res.status(500).json({ success: false, message: "Email service is not configured." });
    }

    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: MAIL_USER,
          pass: MAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: MAIL_USER,
        replyTo: email,
        to: MAIL_TO,
        subject: "New Contact Query - Celebso",
        html: `
          <h3>New Query</h3>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Phone:</b> ${phone || "N/A"}</p>
          <p><b>Message:</b><br/>${message}</p>
        `,
      });

      return res.json({ success: true });
    } catch (error) {
      console.error("Contact form email error:", error);
      return res.status(500).json({ success: false, message: "Failed to send query." });
    }
  });

  return app;
}
