import { FormikProps } from 'formik';
import type { FormValues } from '@/types/FormValues';

const StepThree = ({ formik }: { formik: FormikProps<FormValues> }) => {
  const { values, errors, touched, handleChange, handleBlur } = formik;

  return (
    <div className="space-y-8 md:space-y-12">
      <header>
        <h2 className="text-white text-2xl md:text-4xl font-light tracking-tighter uppercase">Vision & Budget</h2>
        <p className="text-zinc-500 text-xs md:text-sm mt-1.5 md:mt-2 tracking-widest">The aesthetic and financial foundation of the project.</p>
      </header>

      <div className="flex flex-col gap-8 md:gap-12">
        
        <div className="relative group">
          <div className="relative">
            <select
              name="style"
              suppressHydrationWarning
              value={values.style || ""}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full bg-transparent border-b border-zinc-800 py-3 md:py-4 outline-none focus:border-white transition-all text-white text-base md:text-xl uppercase tracking-[0.15em] appearance-none cursor-pointer relative z-10"
            >
              <option value="" disabled className="bg-black text-zinc-700">PREFERRED ARCHITECTURAL STYLE</option>
              <option value="Modern" className="bg-black text-white">Modern</option>
              <option value="Minimalist" className="bg-black text-white">Minimalist</option>
              <option value="Classic" className="bg-black text-white">Classic</option>
              <option value="Industrial" className="bg-black text-white">Industrial</option>
              <option value="Other" className="bg-black text-white">Other (Discuss later)</option>
            </select>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="#3f3f46" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          {errors.style && touched.style && (
            <span className="text-red-500 text-[9px] md:text-[10px] uppercase tracking-widest mt-1.5 absolute left-0 top-full">
              {errors.style}
            </span>
          )}
        </div>

        <div className="relative group">
          <div className="relative">
            <select
              name="budget"
              suppressHydrationWarning
              value={values.budget || ""}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full bg-transparent border-b border-zinc-800 py-3 md:py-4 outline-none focus:border-white transition-all text-white text-base md:text-xl uppercase tracking-[0.15em] appearance-none cursor-pointer relative z-10"
            >
              <option value="" disabled className="bg-black text-zinc-700">EXPECTED BUDGET RANGE</option>
              <option value="Economy" className="bg-black text-white">Economy Range</option>
              <option value="Standard" className="bg-black text-white">Standard Range</option>
              <option value="Premium" className="bg-black text-white">Premium / Luxury</option>
            </select>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="#3f3f46" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          {errors.budget && touched.budget && (
            <span className="text-red-500 text-[9px] md:text-[10px] uppercase tracking-widest mt-1.5 absolute left-0 top-full">
              {errors.budget}
            </span>
          )}
        </div>

        <div className="relative group">
          <textarea
            name="description"
            rows={2}
            placeholder="TELL US ABOUT YOUR VISION..."
            suppressHydrationWarning
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full bg-transparent border-b border-zinc-800 py-3 md:py-4 outline-none focus:border-white transition-all placeholder:text-zinc-700 text-white text-base md:text-lg uppercase tracking-widest shrink-0 resize-none"
          />
          {errors.description && touched.description && (
            <span className="text-red-500 text-[9px] md:text-[10px] uppercase tracking-widest mt-1.5 absolute left-0 top-full">
              {errors.description}
            </span>
          )}
        </div>

      </div>
    </div>
  );
};

export default StepThree;