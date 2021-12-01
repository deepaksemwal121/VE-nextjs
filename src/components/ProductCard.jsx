import Link from "next/link";
import Image from "next/image";
import { formatter } from "../../utils/helpers";
import ShopVariants from "./header/ShopVariants";

const ProductCard = ({ product }) => {
  const { handle, title } = product.node;

  const originalSrc = product.node.images.edges[0].node.originalSrc;
  const price = product.node.priceRange.minVariantPrice.amount;

  return (
    <div>
      <Link href={`/${handle}`}>
        <a className="group">
          <div className="w-full bg-gray-200 rounded-3xl overflow-hidden">
            <div className="relative group-hover:opacity-75 h-72">
              <Image src={originalSrc} alt="" layout="fill" objectFit="cover" />
            </div>
          </div>
          <h3 className="mt-4 text-lg font-medium text-gray-900">{title}</h3>
          <p className="mt-1 text-sm text-gray-700">
            {formatter.format(price)}
          </p>
          <div className="">{product.node.variants.edges[0].node.title}</div>
        </a>
      </Link>
      <button className="bg-black rounded-md px-5 py-2 w-full text-white my-4">
        Add To Cart
      </button>
      <ShopVariants variant={product.variants.edges} />
    </div>
  );
};

export default ProductCard;
