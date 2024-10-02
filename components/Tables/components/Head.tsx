'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

type Config = { 'key': string, label: string }

export const Head = ({ config }: { config: Config[] }) => {
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const pathname = usePathname();

    const handleSort = (field: string) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', '1');

        if (field) {
            params.set('sort', field);
        } else {
            params.delete('sort');
        }
        replace(`${pathname}?${params.toString()}`);
    }
    return (
        <>
            {config.map((item, index) => (
                <>
                    {item.key ? (
                        <th key={index} scope="col" onClick={() => handleSort(item.key)} className="cursor-pointer">
                            {item.label}
                        </th>
                    ) : (
                        <th key={index} scope="col">
                            item.label
                        </th>
                    )}
                </>
            ))}
        </>
    );
}