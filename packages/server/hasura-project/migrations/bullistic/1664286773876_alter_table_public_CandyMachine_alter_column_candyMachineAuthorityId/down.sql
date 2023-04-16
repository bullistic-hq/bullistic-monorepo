alter table "public"."CandyMachine" rename column "bullisticAuthorityId" to "candyMachineAuthorityId";
comment on column "public"."CandyMachine"."candyMachineAuthorityId" is E'Current authority of the onchain Candy Machine';
