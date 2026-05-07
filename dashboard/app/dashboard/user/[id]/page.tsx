interface UserPageProps {
  params: { id: string };
}

export default function UserDetailPage({ params }: UserPageProps) {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold text-slate-950">User Details</h1>
      <p className="text-slate-600">Details for user ID: {params.id}</p>
    </div>
  );
}
