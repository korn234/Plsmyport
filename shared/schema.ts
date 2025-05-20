import { z } from "zod";

// User schema
export const insertUserSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export type InsertUser = z.infer<typeof insertUserSchema>;

export type User = {
  id: number;
  username: string;
  password: string;
  createdAt: string;
};

// Contact submission schema
export const contactSubmissionSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  company: z.string(),
  service: z.string(),
  message: z.string(),
});

export type InsertContactSubmission = z.infer<typeof contactSubmissionSchema>;

export type ContactSubmission = {
  id: number;
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
  createdAt: string;
};
