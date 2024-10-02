import { z } from "zod";


export type CreateDoctorFormState = {
    errors?: {
        firstName?: string[];
        lastName?: string[];
        hpr?: string[];
        citizenId?: string[];
        dateOfBirth?: string[];
        gender?: string[];
        mobile?: string[];
        email?: string[];
        speciality?: string[];
        sessions?: string[];
        education?: string[];
        status?: string[];
        address?: string[];
        city?: string[];
        country?: string[];
        postcode?: string[];
        relativeName?: string[];
        relativeNumber?: string[];
        description?: string[];
    };
    message?: string | null;
};


export const CreateDoctorFormSchema = z.object({
    //id: z.string(),
    firstName: z
        .string({ required_error: "First name is required" })
        .min(1, "First name is required"),
    lastName: z
        .string()
        .min(1, "Last name is required"),
    hpr: z
        .string({ required_error: "HPR ID is required" })
        .min(1, "HPR ID is required"),
    citizenId: z
        .string({ required_error: "Citizen ID is required" })
        .min(1, "Citizen ID is required"),
    dateOfBirth: z
        .string({ required_error: "Date of birth is required" })
        .min(1, "Date of birth is required"), // You could also use z.date() for strict date validation
    gender: z
        .enum(['Male', 'Female'], { required_error: "Gender is required" }),
    mobile: z
        .string({ required_error: "Mobile number is required" })
        .min(1, "Mobile number is required"),
    email: z
        .string({ required_error: "Email is required" })
        .email("Invalid email address"),

    speciality: z
        .string({ required_error: "Speciality is required" })
        .min(1, "Speciality is required"),
    sessions: z
        .string()
        .optional(),
    education: z
        .string()
        .optional(),
    status: z
        .string({ required_error: "Status is required" })
        .min(1, "STatus"), //TODO: .enum(["active", "inactive"], { required_error: "Status is required" }),

    address: z
        .string({ required_error: "Address is required" })
        .min(1, "Address is required"),
    city: z
        .string()
        .optional(),
    country: z
        .string()
        .optional(),
    postcode: z
        .string({ required_error: "Postal code is required" })
        .min(1, "Postal code is required"),
    relativeName: z
        .string()
        .optional(),
    relativeNumber: z
        .string()
        .optional(),
    description: z
        .string()
        .optional(),
});
