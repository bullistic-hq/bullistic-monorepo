-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- CREATE OR REPLACE FUNCTION public.is_collector_fn(user_row "User")
--  RETURNS boolean
--  LANGUAGE sql
--  STABLE
-- AS $function$
--   SELECT COUNT(*) > 0
--   FROM "NftTransaction"
--   WHERE type = 'Sold'
--     AND "toUserId" = user_row.id
-- $function$;
