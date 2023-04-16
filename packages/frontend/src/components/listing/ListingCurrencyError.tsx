import useListingContext from "hooks/useListingContext";
import { Maybe } from "bullistic-shared/dist/types/UtilityTypes";
import CurrencyError from "components/currency/CurrencyError";

export default function ListingCurrencyError(): Maybe<JSX.Element> {
  const { showCurrencyError } = useListingContext();

  return <CurrencyError showCurrencyError={showCurrencyError} />;
}
