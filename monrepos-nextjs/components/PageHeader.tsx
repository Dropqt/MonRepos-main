import Hawk from "@/components/brand/Hawk";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export default function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <section className="border-b border-line bg-sand">
      <div className="mx-auto max-w-5xl px-5 py-16 text-center md:py-20">
        <Hawk className="mx-auto h-6 w-12 text-sage" />
        {eyebrow && <p className="eyebrow mt-4">{eyebrow}</p>}
        <h1 className="text-5xl">{title}</h1>
        {subtitle && <p className="lead mx-auto mt-3 max-w-xl">{subtitle}</p>}
      </div>
    </section>
  );
}
