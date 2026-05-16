import dynamic from 'next/dynamic';
const PhoneInput = dynamic(() => import('react-phone-input-2'), { 
  ssr: false 
});
import 'react-phone-input-2/lib/style.css';
import { FormikProps } from 'formik';
import type { FormValues } from '@/types/FormValues';

const StepOne = ({ formik }: { formik: FormikProps<FormValues> }) => {
  const { values, errors, touched, handleChange, handleBlur, setFieldValue, setFieldTouched } = formik;

  return (
    <div className="space-y-8 md:space-y-12">
      <header>
        <h2 className="text-white text-2xl md:text-4xl font-light tracking-tighter uppercase">Identity</h2>
        <p className="text-zinc-500 text-xs md:text-sm mt-1.5 md:mt-2 tracking-widest">Please provide your contact details.</p>
      </header>

      <div className="flex flex-col gap-8 md:gap-12">
        
        <div className="relative group">
          <input
            type="text"
            name="fullName"
            placeholder="FULL NAME"
            suppressHydrationWarning
            value={values.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full bg-transparent border-b border-zinc-800 py-3 md:py-4 outline-none focus:border-white transition-all placeholder:text-zinc-700 text-white text-base md:text-xl uppercase tracking-widest"
          />
          {errors.fullName && touched.fullName && (
            <span className="text-red-500 text-[9px] md:text-[10px] uppercase tracking-widest mt-1.5 absolute left-0 top-full">
              {errors.fullName}
            </span>
          )}
        </div>

        <div className="relative group">
          <input
            type="email"
            name="email"
            placeholder="EMAIL ADDRESS"
            suppressHydrationWarning
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full bg-transparent border-b border-zinc-800 py-3 md:py-4 outline-none focus:border-white transition-all placeholder:text-zinc-700 text-white text-base md:text-xl uppercase tracking-widest"
          />
          {errors.email && touched.email && (
            <span className="text-red-500 text-[9px] md:text-[10px] uppercase tracking-widest mt-1.5 absolute left-0 top-full">
              {errors.email}
            </span>
          )}
        </div>

        <div className="relative group">
          <div className="axioma-phone-input relative border-b border-zinc-800 focus-within:border-white transition-all">
            <PhoneInput
              country={'eg'}
              value={values.phone}
              onChange={(val) => setFieldValue('phone', val)}
              onBlur={() => setFieldTouched('phone', true)}
              placeholder="PHONE NUMBER"
              inputClass="!w-full !bg-transparent !border-none !py-3 md:!py-4 !h-auto !text-white !text-base !text-xl !uppercase !tracking-widest !outline-none !placeholder-zinc-700"
              buttonClass="!bg-transparent !border-none !hover:bg-transparent"
              containerClass="!bg-transparent"
              inputProps={{
                suppressHydrationWarning: true,
                name: 'phone',
              }}
            />
          </div>
          {errors.phone && touched.phone && (
            <span className="text-red-500 text-[9px] md:text-[10px] uppercase tracking-widest mt-1.5 absolute left-0 top-full">
              {errors.phone}
            </span>
          )}
        </div>

      </div>
    </div>
  );
};

export default StepOne;