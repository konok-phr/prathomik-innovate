import { Skeleton } from "@/components/ui/skeleton";

const SectionSkeleton = () => (
  <div className="py-20 sm:py-32">
    <div className="container px-4 sm:px-6">
      <div className="text-center mb-16 space-y-4">
        <Skeleton className="h-8 w-32 mx-auto rounded-full" />
        <Skeleton className="h-12 w-80 mx-auto" />
        <Skeleton className="h-5 w-64 mx-auto" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="glass-card p-6 space-y-4">
            <Skeleton className="h-10 w-10 rounded-lg" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default SectionSkeleton;
