import ProductsContainer from "@/components/products/ProductsContainer";

async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ layout?: string; search?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const layout = resolvedSearchParams.layout || "grid";
  const search = resolvedSearchParams.search || "";

  return <ProductsContainer layout={layout} search={search} />;
}

export default ProductsPage;
