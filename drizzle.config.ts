import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/db/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    // Pasting the URL directly bypasses the .env file completely
    url: "postgresql://postgres:YourPassword@aws-0-ap-south-1.pooler.supabase.com:6543/postgres",
  },
});