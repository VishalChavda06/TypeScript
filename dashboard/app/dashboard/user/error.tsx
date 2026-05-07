"use client";

export default function Error({
  error,
}: {
  error: Error;
}) {
  return (
    <div className="bg-red-100 text-red-700 p-6 rounded-xl">
      <h2 className="text-2xl font-bold mb-2">
        Something went wrong 😢
      </h2>

      <p>{error.message}</p>
    </div>
  );
}