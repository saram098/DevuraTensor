import { users, emailSignups, type User, type InsertUser, type EmailSignup, type InsertEmailSignup } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createEmailSignup(signup: InsertEmailSignup): Promise<EmailSignup>;
  getEmailSignups(): Promise<EmailSignup[]>;
  getEmailSignupByEmail(email: string): Promise<EmailSignup | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private emailSignups: Map<number, EmailSignup>;
  private currentUserId: number;
  private currentSignupId: number;

  constructor() {
    this.users = new Map();
    this.emailSignups = new Map();
    this.currentUserId = 1;
    this.currentSignupId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createEmailSignup(insertSignup: InsertEmailSignup): Promise<EmailSignup> {
    const id = this.currentSignupId++;
    const signup: EmailSignup = {
      ...insertSignup,
      id,
      subscribedAt: new Date(),
      isActive: true,
    };
    this.emailSignups.set(id, signup);
    return signup;
  }

  async getEmailSignups(): Promise<EmailSignup[]> {
    return Array.from(this.emailSignups.values());
  }

  async getEmailSignupByEmail(email: string): Promise<EmailSignup | undefined> {
    return Array.from(this.emailSignups.values()).find(
      (signup) => signup.email === email,
    );
  }
}

export const storage = new MemStorage();
