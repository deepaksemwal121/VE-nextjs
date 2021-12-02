import { SHOPIFY_STOREFRONT_ACCESSTOKEN, SHOPIFY_STORE_DOMAIN } from "./config";

async function ShopifyData({ query, variable }) {
  const URL = `https://${SHOPIFY_STORE_DOMAIN}/api/2021-07/graphql.json`;

  const options = {
    endpoint: URL,
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token": SHOPIFY_STOREFRONT_ACCESSTOKEN,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  };

  try {
    const data = await fetch(URL, options).then((response) => {
      return response.json();
    });

    return data;
  } catch (error) {
    throw new Error("Products not fetched");
  }
}
// function ShopifyData(query) {
//   //   console.log(storefrontAccessToken);
// }

export async function getAllProducts() {
  const query = `
  {
  products(first: 25) {
    edges {
      node {
        id
        title
        handle
        priceRange {
          minVariantPrice {
            amount
          }
        }
        variants(first:5) {
            edges {
              node {
                id
                title
                price
                compareAtPrice
              }
            }
          }
        images(first: 10) {
          edges {
            node {
              originalSrc
              altText
            }
          }
        }
      }
    }
  }
}
`;

  const response = await ShopifyData(query);

  const allProducts = response.data.products.edges
    ? response.data.products.edges
    : [];

  return allProducts;
}
