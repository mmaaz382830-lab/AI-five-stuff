type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-bold text-white">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-gray-300">{description}</p>
      ) : null}
    </div>
  );
}
