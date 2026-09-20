import MaskText from "./MaskText";

type Props = { index: string; title: string; sub?: string };

export default function SectionHead({ index, title, sub }: Props) {
  return (
    <header className="border-t border-line pt-5">
      <p className="label">{index}</p>
      <MaskText className="heading-xl mt-6">{title}</MaskText>
      {sub && <p className="mt-6 max-w-[36rem] text-lg leading-relaxed text-mute">{sub}</p>}
    </header>
  );
}
