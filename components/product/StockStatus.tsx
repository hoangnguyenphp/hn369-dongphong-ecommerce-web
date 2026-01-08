import { SKU } from "../../lib/models/product";

type Props = {
  sku?: SKU;
};

export default function StockStatus({ sku }: Props) {
  if (!sku) return null;

  if (sku.stock === 0) {
    return (
      <span className="text-sm font-medium text-red-500">
        Out of stock
      </span>
    );
  }

  if (sku.stock < 5) {
    return (
      <span className="text-sm font-medium text-yellow-500">
        Only {sku.stock} left
      </span>
    );
  }

  return (
    <span className="text-sm font-medium text-green-600">
      In stock
    </span>
  );
}
