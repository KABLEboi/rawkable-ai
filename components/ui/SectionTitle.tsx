type SectionTitleProps = {
  title: string;
  subtitle: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <h2 className="text-4xl font-bold md:text-5xl">
        {title}
      </h2>

      <p className="mt-4 text-lg text-gray-400">
        {subtitle}
      </p>
    </div>
  );
}