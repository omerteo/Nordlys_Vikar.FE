import { NextRequest, NextResponse } from "next/server"
import prisma from "@/prisma/prisma"
import { ZodError } from "zod"
import { Doctor } from "@/prisma/generated/zod"
import { NextURL } from "next/dist/server/web/next-url"
import { RequestBuilder } from "../common"

// export async function POST(req: Request) {
// 	try {
// 		const { name} = DoctorSchema.parse(await req.json())

// 		const asset = await prisma.doctor.create({
// 			data: {
// 				name,

// 			},
// 		})

// 		return NextResponse.json({
// 			asset: {
// 				name: asset.name,
// 				typeId: asset.typeId,
// 			},
// 		})
// 	} catch (error: any) {
// 		if (error instanceof ZodError) {
// 			return NextResponse.json(
// 				{
// 					status: "error",
// 					message: "Validation failed",
// 					errors: error.errors,
// 				},
// 				{ status: 400 }
// 			)
// 		}

// 		if (error.code === "P2002") {
// 			return NextResponse.json(
// 				{
// 					status: "fail",
// 					message: "asset already exists",
// 				},
// 				{ status: 409 }
// 			)
// 		}

// 		return NextResponse.json(
// 			{
// 				status: "error",
// 				message: error.message || "Internal Server Error",
// 			},
// 			{ status: 500 }
// 		)
// 	}
// }

export async function GET(req: NextRequest) {
	try {
		const query = RequestBuilder(req);
		const items = await prisma.doctor.findMany(query)
		const count = await prisma.doctor.count({ where: query.where })
		const totalPages = Math.ceil(count / Number(query.take))

		return NextResponse.json({ items, count, totalPages })
	} catch (error: any) {
		if (error.code === "P2001") {
			return NextResponse.json(
				{
					status: "fail",
					message: "error",
				},
				{ status: 409 }
			)
		}
		return NextResponse.json(
			{
				status: "error",
				message: error.message || "Internal Server Error",
			},
			{ status: 500 }
		)
	}
}
