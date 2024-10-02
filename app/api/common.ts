import { ITEMS_PER_TABLE } from "@/lib/constants";
import { NextRequest } from "next/server";
type Search = {
    skip: number;
    take?: number;
    // include: {
    //     employees: {
    //         include: {
    //             employee: boolean;
    //         };
    //     };
    // };
    where?: {
        firstName: {
            contains: string;
            mode?: string; // SQL server is case-insensitive by default
        };
    };
    orderBy?: {};
}
export function RequestBuilder(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams
    
    let search: Search = {
        skip: 0, //This will be overwritten from page params
    }

    if (searchParams.has("sort")) {
        const sort: string | null= searchParams.get("sort");
        if (sort) {
            search.orderBy = {
                [sort]: 'asc'
            }
        }        
    }

    const page = Number(searchParams?.get("page"));
    if (page) {
        search["skip"] = (page - 1) * ITEMS_PER_TABLE;
    }
    search["take"] = Number(searchParams?.get("limit")) || ITEMS_PER_TABLE;
    const find = searchParams?.get("find");

    if (find) {
        search["where"] = {
            firstName: {
                contains: find
            },            
        };
    }

    return search;
}