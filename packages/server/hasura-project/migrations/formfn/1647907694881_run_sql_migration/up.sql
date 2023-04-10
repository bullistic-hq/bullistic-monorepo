CREATE OR REPLACE FUNCTION public.top_collector_stats_fn(aftertime timestamp with time zone)
 RETURNS SETOF top_collector_stats
 LANGUAGE sql
 STABLE
AS $function$
  SELECT "toUserId" AS "collectorId", 
    SUM(price)::bigint AS "totalPaid", 
    COUNT(DISTINCT "fromUserId") AS "creatorsSupportedCount", 
    COUNT(DISTINCT mint) AS "nftCount"
  FROM "NftTransaction"
  WHERE type = 'Sold' AND 
    "timeCreated" >= afterTime AND 
    "source" IS NULL
  GROUP BY "toUserId"
  ORDER BY "totalPaid" DESC
$function$;
