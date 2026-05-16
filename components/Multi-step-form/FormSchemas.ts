import * as Yup from 'yup';

export const AxiomaSchema = [
    // --- Step 1: Personal Information ---
    Yup.object().shape({
        fullName: Yup.string()
            .min(5, "Full name must be at least 5 characters")
            .required("Full name is required to schedule a consultation"),
        email: Yup.string()
            .email("Please enter a valid email address")
            .required("Email address is required"),
        phone: Yup.string()
            .min(10, "Phone number is incomplete")
            .required("Phone number is required for follow-up"),
    }),

    // --- Step 2: Project Details ---
    Yup.object().shape({
        projectType: Yup.string()
            .oneOf(['Residential', 'Commercial', 'Administrative', 'Landscape'], "Please select a valid project type")
            .required("Project type is required"),
        area: Yup.number()
            .typeError("Area must be a numeric value")
            .positive("Area must be a positive number")
            .required("Project area is required"),
        location: Yup.string()
            .min(5, "Please provide a more specific location")
            .required("Project location is required"),
    }),

    // --- Step 3: Vision & Budget ---
    Yup.object().shape({
        style: Yup.string()
            .required("Please select your preferred architectural style"),
        budget: Yup.string()
            .required("Budget range is required to provide the best solution"),
        description: Yup.string()
            .min(20, "Please provide more details (at least 20 characters)")
            .required("Project description is essential for our team"),
    })
];