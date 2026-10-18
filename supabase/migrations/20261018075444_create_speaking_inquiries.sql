/*
# Create speaking_inquiries table

1. Purpose
- Stores booking inquiries submitted from the public "Book Loren to Speak" contact form.
- This is a no-auth, public-facing site. Anyone visiting the site may submit an inquiry.
- Loren's team reads submissions through the Supabase dashboard, not through the site.

2. New Tables
- `speaking_inquiries`
  - `id` (uuid, primary key)
  - `full_name` (text, not null)
  - `organization` (text, not null)
  - `email` (text, not null)
  - `event_type` (text, not null)
  - `event_date` (text, nullable — may be tentative)
  - `location` (text, nullable)
  - `audience_size` (text, nullable)
  - `message` (text, not null)
  - `created_at` (timestamptz, default now())

3. Security
- Enable RLS on `speaking_inquiries`.
- INSERT: allow anon + authenticated so the public form can submit without signing in.
- SELECT / UPDATE / DELETE: restricted to `authenticated` only via a default-deny policy
  (no policy = no access for anon). Authenticated dashboard users can read/manage inquiries.
  There is intentionally no `auth.uid()` ownership check because inquiries are not owned by
  the submitter; they are managed by Loren's team via the Supabase dashboard.
*/

CREATE TABLE IF NOT EXISTS speaking_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  organization text NOT NULL,
  email text NOT NULL,
  event_type text NOT NULL,
  event_date text,
  location text,
  audience_size text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE speaking_inquiries ENABLE ROW LEVEL SECURITY;

-- Public insert (the contact form)
DROP POLICY IF EXISTS "public_insert_inquiries" ON speaking_inquiries;
CREATE POLICY "public_insert_inquiries"
ON speaking_inquiries FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Team read access (dashboard users who are signed in)
DROP POLICY IF EXISTS "team_read_inquiries" ON speaking_inquiries;
CREATE POLICY "team_read_inquiries"
ON speaking_inquiries FOR SELECT
TO authenticated
USING (true);

-- Team manage access
DROP POLICY IF EXISTS "team_update_inquiries" ON speaking_inquiries;
CREATE POLICY "team_update_inquiries"
ON speaking_inquiries FOR UPDATE
TO authenticated
USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "team_delete_inquiries" ON speaking_inquiries;
CREATE POLICY "team_delete_inquiries"
ON speaking_inquiries FOR DELETE
TO authenticated
USING (true);

-- Index for sorting newest-first in the dashboard
CREATE INDEX IF NOT EXISTS speaking_inquiries_created_at_idx
ON speaking_inquiries (created_at DESC);
