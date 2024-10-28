export default function Loading() {
  return (
    <div className="grid place-items-center h-screen bg-white z-50">
      <div className="flex gap-4 items-center">
        <p className="text-primary text-xl"> Wait...</p>
        <div className="w-10 h-10 border-4 border-primary rounded-full animate-spin border-t-transparent"></div>
      </div>
    </div>
  );
}
