import Banner from "components/banner/Banner";
import TextButton from "components/buttons/TextButton";
import BackgroundColorClass from "types/enums/BackgroundColorClass";
import ColorClass from "types/enums/ColorClass";
import FontClass from "types/enums/FontClass";

export default function ShutdownBanner() {
  return (
    <Banner backgroundColorClass={BackgroundColorClass.LightPurpleGradient}>
      <TextButton
        buttonThemeOrColorClass={ColorClass.DarkPurple}
        fontClass={FontClass.Body2}
        type="link_external"
        href="https://www.blog.bullistic.xyz/blog/message-from-bullistic"
      >
        Bullistic will be shutting down on March 29. Click to see our
        announcement.
      </TextButton>
    </Banner>
  );
}
