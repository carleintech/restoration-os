import { AppShell } from "@/components/AppShell";
import { Card } from "@/components/ui/Card";

export default function OfflinePage() {
  return (
    <AppShell>
      <Card className="space-y-2">
        <h1 className="text-xl font-semibold">You're Offline</h1>
        <p className="text-secondary">
          Some features may not load right now. If you visited pages earlier, you'll still see the last saved version.
        </p>
      </Card>
    </AppShell>
  );
}
