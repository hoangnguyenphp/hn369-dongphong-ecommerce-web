import { SKU } from "../../lib/models/product";
import { formatPrice } from "../../utils/formatPrice"

type Props = {
  sku?: SKU;
};

export default function PriceDisplay({ sku }: Props) {
  if (!sku) return null;

  return (
    <div className="text-2xl font-bold text-primary">
      ${formatPrice(sku.price)}
    </div>
  );
}
