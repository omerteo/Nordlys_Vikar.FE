import Pagination from "@/components/Shared/Pagination";
import Table from "@/components/Tables/Doctors.main"
import { Skeleton } from "@/components/Shared/Skeleton";
import { Suspense } from "react";
import { serialize } from "@/lib/utils";

export const revalidate = 0 // no cache
async function getDoctors(searchParams: Record<string, string>) {
	const response = await fetch(`http:localhost:3000/api/doctor/?${serialize(searchParams)}`, {
		cache: "no-store",
		next: { tags: ["assetType"] },
		headers: {
			"Content-Type": "application/json",
		},
	})
	const data = await response.json()

	return data
}


export default async function DoctorsPage({
	searchParams
}: { searchParams: Record<string, string> }) {
	const find = searchParams?.find || '';
	const page = Number(searchParams?.page) || 1;

	const data = await getDoctors(searchParams);

	return (
		<>
			<Suspense key={find + String(page)} fallback={<Skeleton />}>
				<Table items={data.items} />
			</Suspense>

			<Pagination totalPages={data.totalPages} />
		</>
	)
}
