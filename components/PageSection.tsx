export default function PageSection({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className={`mx-auto flex max-w-[1440px] flex-col gap-16 px-4 py-12 md:px-14 md:py-14 lg:px-20 lg:py-20 ${className}`}
    >
      {children}
    </section>
  );
}
