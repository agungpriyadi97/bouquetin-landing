// components/Section.tsx
export default function Section({
    id,
    title,
    children,
}: {
    id: string;
    title: string;
    children: React.ReactNode;
}) {
    return (
        <section id={id} className="py-14">
            <div className="mx-auto max-w-5xl px-4">
                <h2 className="text-2xl font-bold">{title}</h2>
                <div className="mt-6">{children}</div>
            </div>
        </section>
    );
}