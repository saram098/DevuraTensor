import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertEmailSignupSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Email signup endpoint
  app.post("/api/signup", async (req, res) => {
    try {
      const { email } = insertEmailSignupSchema.parse(req.body);
      
      // Check if email already exists
      const existingSignup = await storage.getEmailSignupByEmail(email);
      if (existingSignup) {
        return res.status(400).json({ 
          message: "Email already subscribed to our newsletter" 
        });
      }

      const signup = await storage.createEmailSignup({ email });
      res.status(201).json({ 
        message: "Successfully subscribed to newsletter",
        email: signup.email 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Invalid email format",
          errors: error.errors 
        });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Get all signups (admin endpoint)
  app.get("/api/signups", async (req, res) => {
    try {
      const signups = await storage.getEmailSignups();
      res.json({ signups });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
