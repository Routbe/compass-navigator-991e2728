import { createFileRoute } from "@tanstack/react-router";
import { DocPage } from "@/components/mdx/DocPage";
import { docHead } from "@/lib/docs-catalog";
export const Route = createFileRoute("/about/rout-card")({ head: () => docHead("/about/rout-card"), component: Page });
function Page() { return <DocPage path="/about/rout-card" />; }
