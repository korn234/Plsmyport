import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import nodemailer from "nodemailer";
import { contactSubmissionSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission route
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body against schema
      const formData = contactSubmissionSchema.parse(req.body);
      
      // In a production environment, you would use a real email service
      // Here we're just returning a success response
      
      // Example of how we would send the email in production:
      /*
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: Number(process.env.EMAIL_PORT) || 587,
        secure: process.env.EMAIL_SECURE === 'true',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: 'info@techcorp.com',
        subject: `New contact form submission from ${formData.name}`,
        text: `
          Name: ${formData.name}
          Email: ${formData.email}
          Company: ${formData.company}
          Service: ${formData.service}
          Message: ${formData.message}
        `,
        html: `
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Company:</strong> ${formData.company}</p>
          <p><strong>Service:</strong> ${formData.service}</p>
          <p><strong>Message:</strong> ${formData.message}</p>
        `,
      });
      */

      // Store the contact submission in the database
      await storage.createContactSubmission(formData);
      
      res.status(200).json({ success: true, message: "Contact form submitted successfully" });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ success: false, message: "Validation error", errors: error.errors });
      } else {
        console.error("Error processing contact form:", error);
        res.status(500).json({ success: false, message: "An error occurred while processing your request" });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
