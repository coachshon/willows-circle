// Dynamically import SignIn component and disable SSR
import dynamic from "next/dynamic";
const WillowsCircleLanding = dynamic(
  () => import("@/components/willows-circle-landing"),
  {
    ssr: false,
  }
);
export default function Page() {
  return <WillowsCircleLanding />;
}
