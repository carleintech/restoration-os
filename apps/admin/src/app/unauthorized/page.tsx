export default function Unauthorized() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-md rounded-2xl border p-6">
        <h1 className="text-xl font-semibold">Unauthorized</h1>
        <p className="text-sm text-muted-foreground">
          You do not have permission to access the admin console.
        </p>
      </div>
    </div>
  );
}
