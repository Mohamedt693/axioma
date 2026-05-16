import { FormikProps } from 'formik';
import type { FormValues } from '@/types/FormValues';

const StepTwo = ({ formik }: { formik: FormikProps<FormValues> }) => {
  const { values, errors, touched, handleChange, handleBlur } = formik;

  return (
    <div className="space-y-8 md:space-y-12">
      <header>
        <h2 className="text-white text-2xl md:text-4xl font-light tracking-tighter uppercase">Project Scope</h2>
        <p className="text-zinc-500 text-xs md:text-sm mt-1.5 md:mt-2 tracking-widest">Help us understand the scale of your vision.</p>
      </header>

      <div className="flex flex-col gap-8 md:gap-12"> 
        
        <div className="relative group">
          <div className="relative">
            <select
              name="projectType"
              suppressHydrationWarning
              value={values.projectType || ""}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full bg-transparent border-b border-zinc-800 py-3 md:py-4 outline-none focus:border-white transition-all text-white text-base md:text-xl uppercase tracking-[0.15em] appearance-none cursor-pointer relative z-10"
            >
              <option value="" disabled className="bg-black text-zinc-700">SELECT PROJECT TYPE</option>
              <option value="Residential" className="bg-black text-white">Residential</option>
              <option value="Commercial" className="bg-black text-white">Commercial</option>
              <option value="Administrative" className="bg-black text-white">Administrative</option>
              <option value="Landscape" className="bg-black text-white">Landscape</option>
            </select>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="#3f3f46" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {errors.projectType && touched.projectType && (
            <span className="text-red-500 text-[9px] md:text-[10px] uppercase tracking-widest mt-1.5 absolute left-0 top-full">
              {errors.projectType}
            </span>
          )}
        </div>

        <div className="relative group">
          <input
            type="number"
            name="area"
            placeholder="AREA (SQM)"
            suppressHydrationWarning
            value={values.area}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full bg-transparent border-b border-zinc-800 py-3 md:py-4 outline-none focus:border-white transition-all placeholder:text-zinc-700 text-white text-base md:text-xl uppercase tracking-widest"
          />
          {errors.area && touched.area && (
            <span className="text-red-500 text-[9px] md:text-[10px] uppercase tracking-widest mt-1.5 absolute left-0 top-full">
              {errors.area}
            </span>
          )}
        </div>

        <div className="relative group">
          <input
            type="text"
            name="location"
            placeholder="PROJECT LOCATION"
            suppressHydrationWarning
            value={values.location}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full bg-transparent border-b border-zinc-800 py-3 md:py-4 outline-none focus:border-white transition-all placeholder:text-zinc-700 text-white text-base md:text-xl uppercase tracking-widest"
          />
          {errors.location && touched.location && (
            <span className="text-red-500 text-[9px] md:text-[10px] uppercase tracking-widest mt-1.5 absolute left-0 top-full">
              {errors.location}
            </span>
          )}
        </div>

      </div>
    </div>
  );
};

export default StepTwo;