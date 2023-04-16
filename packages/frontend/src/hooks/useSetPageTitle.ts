import { useEffect } from "react";

export default function useSetPageTitle(title: string) {
  useEffect(() => {
    document.title = `Bullistic | ${title}`;

    return () => {
      document.title = "Bullistic";
    };
  }, [title]);
}
