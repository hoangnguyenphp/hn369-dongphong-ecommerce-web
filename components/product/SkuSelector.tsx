import { SKU } from "../../lib/models/product";

export default function SkuSelector({
  skus,
  selectedSku,
  onChange,
}: {
  skus: SKU[];
  selectedSku: SKU;
  onChange: (sku: SKU) => void;
}) {
  return (
    <div className="mt-6 flex gap-2 flex-wrap">
      {skus.map((sku) => (
        <button
          key={sku.skuId}
          onClick={() => onChange(sku)}
          disabled={sku.stock === 0}
          className={`px-3 py-1 border rounded-lg text-sm
            ${
              selectedSku.skuId === sku.skuId
                ? "border-primary bg-primary/10"
                : "border-border"
            }
          `}
        >
          {Object.values(sku.attributes).join(" / ")}
        </button>
      ))}
    </div>
  );
}
