import BodyText from "components/text/BodyText";
import FontClass from "types/enums/FontClass";
import type { Props } from "components/text/BodyText";

export default function NavLink(props: Omit<Props, "fontClass">) {
  return <BodyText {...props} fontClass={FontClass.NavLink} />;
}
