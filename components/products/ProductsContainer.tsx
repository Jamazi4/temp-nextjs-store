import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { LuLayoutGrid, LuList } from "react-icons/lu";
import { Button } from "../ui/button";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { fetchAllProducts } from "@/utils/actions";
import Link from "next/link";

const ProductsContainer = async ({
  layout,
  search,
}: {
  layout: string;
  search: string;
}) => {
  const products = await fetchAllProducts({ search });
  const totalProducts = products.length;
  const searchTerm = search ? `&search=${search}` : "";
  return (
    <>
      {/* HEADER */}
      <section>
        <div className="flex justify-between items-center">
          <h4 className="font-medium text-lg">
            {totalProducts} product{totalProducts > 1 ? "s" : ""}
          </h4>
          <div className="flex gap-x-4">
            <Button
              variant={layout === "grid" ? "default" : "ghost"}
              size="icon"
              asChild
            >
              <Link href={`/products?layout=grid${searchTerm}`}>
                <LuLayoutGrid />
              </Link>
            </Button>
            <Button
              variant={layout === "list" ? "default" : "ghost"}
              size="icon"
              asChild
            >
              <Link href={`/products?layout=list${searchTerm}`}>
                <LuList />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <Separator className="mt-4" />
      {/* PRODUCTS */}
      <div>
        {totalProducts === 0 ? (
          <h5 className="text-2xl mt-16">
            Sorry, no products matched yout search...
          </h5>
        ) : layout === "grid" ? (
          <ProductsGrid products={products} />
        ) : (
          <ProductsList products={products} />
        )}
      </div>
    </>
  );
};
export default ProductsContainer;
