import { Doctor } from "@/prisma/generated/zod/";
import {Head} from "./components/Head";

const HeadConfig = [
  { key: 'firstName', label: 'Name' },
  { key: 'speciality', label: 'Speciality' },
  { key: 'email', label: 'Email' },
  { key: 'mobile', label: 'Mobile' },
  { key: 'status', label: 'Status' },
  { key: 'city', label: 'City' },
  { key: 'sessions', label: 'Sessions' },
]

export default async function Table({
  items
}: {
  items: Doctor[]
}) {
  return (
    <>

      <div className="mt-6 flow-root">
        <div className="inline-block min-w-full align-middle">
          <div className="rounded-lg bg-gray-50 p-2 md:pt-0">

            <table className="hidden min-w-full text-gray-900 md:table">
              <thead className="rounded-lg text-left text-sm font-normal">
                <tr>
                  <Head config={HeadConfig} />
                </tr>
              </thead>
              <tbody className="bg-white">
                {items.map((r: Doctor) => (
                  <tr
                    key={r.id}
                    className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                  >
                    <td className="whitespace-nowrap">
                      {r.firstName} {r.lastName}
                    </td>
                    <td className="whitespace-nowrap">{r.speciality}</td>
                    <td className="whitespace-nowrap">{r.email}</td>
                    <td className="whitespace-nowrap">{r.mobile}</td>
                    <td className="whitespace-nowrap">{r.status}</td>
                    <td className="whitespace-nowrap">{r.city || 'N/A'}</td>
                    <td className="whitespace-nowrap">{r.sessions || 'N/A'}</td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </>
  );
}