"use client";

import { useState } from "react";
import emailjs from '@emailjs/browser';
import { Formik, Form } from "formik";
import { AxiomaSchema } from "@/components/Multi-step-form/FormSchemas";
import StepOne from "@/components/Multi-step-form/steps/StepOne";
import StepTwo from "@/components/Multi-step-form/steps/StepTwo";
import StepThree from "@/components/Multi-step-form/steps/StepThree";
import ConsultationLayout from "@/components/Multi-step-form/ConsultationLayout";

export default function ConsultingClient() {
    const [currentStep, setCurrentStep] = useState(0);
    const isLastStep = currentStep === 2;

    const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;

    const initialValues = {
        fullName: "",
        email: "",
        phone: "",
        projectType: "",
        area: "",
        location: "",
        style: "",
        budget: "",
        description: "",
    };

    return (
        <div className="w-full h-full bg-black flex items-center justify-center p-4 sm:p-6 rounded-4xl">
            <div className="w-full max-w-5xl">
                <Formik
                    initialValues={initialValues}
                    validationSchema={AxiomaSchema[currentStep]}
                    onSubmit={(values, actions) => {
                        if (isLastStep) {
                            actions.setSubmitting(true);

                            emailjs.send(
                                SERVICE_ID!,
                                TEMPLATE_ID!, 
                                values,            
                                PUBLIC_KEY! 
                            )
                            .then(() => {
                                alert("Success! Your architectural vision has been received.");
                                actions.resetForm();
                                setCurrentStep(0);
                            })
                            .catch((err) => {
                                console.error("EmailJS Error:", err);
                                alert("Something went wrong. Please try again.");
                            })
                            .finally(() => {
                                actions.setSubmitting(false);
                            });
                        } else {
                            setCurrentStep((prev) => prev + 1);
                            actions.setTouched({});
                        }
                    }}
                >
                    {(formikProps) => (
                        <Form>
                            <ConsultationLayout step={currentStep}>

                                <div className="min-h-auto md:min-h-87.5 flex flex-col justify-center">
                                    {currentStep === 0 && <StepOne formik={formikProps} />}
                                    {currentStep === 1 && <StepTwo formik={formikProps} />}
                                    {currentStep === 2 && <StepThree formik={formikProps} />}
                                </div>
                            
                                <div className="mt-12 md:mt-16 flex justify-between items-center pt-2">
                                    {currentStep > 0 && (
                                        <button 
                                            type="button" 
                                            onClick={() => setCurrentStep((s) => s - 1)} 
                                            className="text-zinc-500 uppercase text-[9px] md:text-[10px] tracking-[0.3em] hover:text-white transition-colors py-2"
                                        >
                                            Back
                                        </button>
                                    )}

                                    <button 
                                        type="submit" 
                                        suppressHydrationWarning={true}
                                        className="ml-auto bg-white text-black px-8 md:px-12 py-3.5 md:py-4 uppercase text-[9px] md:text-[10px] rounded-full 
                                        tracking-[0.4em] font-bold hover:bg-zinc-200 transition-all active:scale-95"
                                    >
                                        {isLastStep ? "Send Inquiry" : "Next Step"}
                                    </button>
                                </div>

                            </ConsultationLayout>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}