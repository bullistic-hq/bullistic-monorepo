-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- CREATE OR REPLACE FUNCTION public.top_creator_stats_fn(aftertime timestamp with time zone)
--  RETURNS SETOF top_creator_stats
--  LANGUAGE sql
--  STABLE
-- AS $function$
--   SELECT "creatorId",
--     SUM(price)::bigint AS "totalSales",
--     COUNT(DISTINCT "toUserId") AS "collectorCount",
--     COUNT(DISTINCT mint) AS "nftCount"
--   FROM "NftTransaction"
--   WHERE type IN ('Sold', 'SoldAcceptedOffer', 'SoldEditionPrimary', 'SoldInstantSale')  AND
--     "timeCreated" >= afterTime AND
--     "source" IS NULL
--   GROUP BY "creatorId"
--   ORDER BY "totalSales"
-- $function$;
