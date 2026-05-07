interface ProductPageProps {
  params: { id: string };
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold text-slate-950">Product Details</h1>
      <p className="text-slate-600">Details for product ID: {params.id}</p>
    </div>
  );
}
