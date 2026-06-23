import { getTags } from "@/config/contentful/client";
import FilterBar from "@/components/Blog/FilterBar";
import PageSection from "@/components/PageSection";
import PageSectionTitle from "@/components/ui/PageSectionTitle";
export default async function BlogLayout({ children }) {
  const tags = await getTags();
  return (
    <PageSection>
      <div className="flex flex-col items-center gap-3">
        <PageSectionTitle title="Your Journey in Puglia" />
        <p className="font-dm-sans text-terracotta text-center text-sm uppercase italic lg:max-w-3/4 lg:text-lg">
          Explore a collection of stories, tips, and insights capturing the
          essence of Puglia. Dive in and let each post bring you closer to this
          remarkable region.
        </p>
      </div>

      <section className="flex flex-col gap-15">
        <FilterBar tags={tags} />
        {children}
      </section>
    </PageSection>
  );
}
