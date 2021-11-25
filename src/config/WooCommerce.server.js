import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api'
const WooCommerce = new WooCommerceRestApi({
  url: "https://vedicelements.co.in",
  consumerKey: "ck_e7b20a0526e7d4c96a5077b323d6c5631876540f",
  consumerSecret: "cs_67998a703aa346d8110a9da1c7e244dffdf6c476",
  version: "wc/v3",
});
export default WooCommerce;
