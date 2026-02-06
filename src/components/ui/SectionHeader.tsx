interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      <span className="text-[#00E5FF] text-sm font-medium tracking-widest uppercase mb-4 block font-body">
        {eyebrow}
      </span>
      <h2
        className={`text-2xl lg:text-3xl font-bold text-white mb-6 font-heading ${
          centered ? "max-w-4xl mx-auto" : "max-w-4xl"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base text-gray-400 font-body ${
            centered ? "max-w-2xl mx-auto" : "max-w-2xl"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
