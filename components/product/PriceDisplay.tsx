import { SKU } from "../../lib/models/product";

type Props = {
  sku?: SKU;
};

export default function PriceDisplay({ sku }: Props) {
  if (!sku) return null;

  return (
    <div className="text-2xl font-bold text-primary">
      ${sku.price.toLocaleString()}
    </div>
  );
}
