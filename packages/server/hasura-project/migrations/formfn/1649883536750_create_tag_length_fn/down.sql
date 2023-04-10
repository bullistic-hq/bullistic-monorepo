-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- CREATE OR REPLACE FUNCTION public.tag_length_fn(tag_row "Tag")
--  RETURNS int
--  LANGUAGE sql
--  STABLE
-- AS $function$
--   SELECT LENGTH(value)
--   FROM "Tag"
--   WHERE id = tag_row.id
-- $function$;
