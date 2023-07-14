export const Input = ({ formData, classNames, register, errors }) => {
  return (
    <>
      <div className={`${classNames}`}>
        {
          formData.formLabel.length !== 0 &&
          <label htmlFor={formData?.formName} className="block text-xs text-[var(--fourth)] mb-1">
            {formData?.formLabel}
            <span className={`${formData.isRequired && 'ml-0.5 text-red-500'}`}>
              &#42;
            </span>
          </label>
        }
        <input {...register(formData?.formName)} type="text" name={formData?.formName} id={formData?.formName} placeholder={formData.placeholder} className="bg-[var(--secondary)] p-4 w-full rounded-sm" />
        <p className="text-xs text-red-400">{errors[formData?.formName]?.message}</p>
      </div>
    </>
  );
}

export const EmailInput = ({ formData, classNames, register, errors }) => {
  return (
    <>
      <div className={classNames}>
        {
          formData.formLabel.length !== 0 &&
          <label htmlFor={formData?.formName} className="block text-xs text-[var(--fourth)] mb-1">
            {formData?.formLabel}
            <span className={`${formData.isRequired && 'ml-0.5 text-red-500'}`}>
              &#42;
            </span>
          </label>
        }
        <input {...register(formData?.formName)} type="email" name={formData?.formName} id={formData?.formName} placeholder={formData.placeholder} className="bg-[var(--secondary)] p-4 w-full rounded-sm" />
        <p className="text-xs text-red-400">{errors[formData?.formName]?.message}</p>
      </div>
    </>
  );
}

export const RadioInput = ({ formData, classNames, register, errors }) => {
  return (
    <>
      <div className={classNames}>
        {
          formData.formLabel.length !== 0 &&
          <label htmlFor={formData?.formName} className="block text-xs text-[var(--fourth)] mb-1">
            {formData?.formLabel}
            <span className={`${formData.isRequired && 'ml-0.5 text-red-500'}`}>
              &#42;
            </span>
          </label>
        }
        {
          formData.options.length !== 0 &&
          <div className="flex gap-4">
            {
              formData.options.map(option => {
                return (
                  <div key={option.value}>
                    <input {...register(formData?.formName)} value={option.value} type="radio" id={option.value} className="appearance-none w-3 h-3 bg-[var(--secondary)] me-1 p-1 rounded-full border-4 border-[var(--secondary)] checked:border-4 checked:border-[var(--primary-color)]" />
                    <label htmlFor={option.value} className="text-xs text-[var(--fourth)]">{option.title}</label>
                  </div>
                )
              })
            }
          </div>
        }
        <p className="text-xs text-red-400">{errors[formData?.formName]?.message}</p>
      </div>
    </>
  );
}

export const SelectBoxInput = ({ formData, classNames, dataOptions = [], register, errors }) => {
  return (
    <>
      <div className={`${classNames} relative`}>
        {
          formData.formLabel.length !== 0 &&
          <label htmlFor={formData?.formName} className="block text-xs text-[var(--fourth)] mb-1">
            {formData?.formLabel}
            <span className={`${formData.isRequired && 'ml-0.5 text-red-500'}`}>
              &#42;
            </span>
          </label>
        }
        <select name={formData?.formName} id={formData?.formName} {...register(formData?.formName)}
          className="appearance-none bg-[var(--secondary)] text-[var(--fourth)] p-4 w-full rounded-sm">
          {
            formData.options.length !== 0 &&
            <>
              {
                formData.options.map(option => {
                  return (
                    <option key={option.value} value={option.value} className="text-[var(--fourth)]">{option.title}</option>
                  )
                })
              }
            </>
          }

          {
            dataOptions.length !== 0 &&
            <>
              {
                dataOptions.map((option, index) => {
                  return (
                    <option key={index} value={option.eng} className="text-[var(--fourth)]">{option.eng}</option>
                  )
                })
              }
            </>
          }
        </select>
        <div className="absolute top-[54%] right-0 px-4 pointer-events-none">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="#BBBBBB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="text-xs text-red-400">{errors[formData?.formName]?.message}</p>
      </div>
    </>
  );
}

export const Textarea = ({ formData, classNames, register, errors, helperText }) => {
  return (
    <>
      <div className={classNames}>
        {
          formData.formLabel.length !== 0 &&
          <label htmlFor={formData?.formName} className="block text-xs text-[var(--fourth)] mb-1">
            {formData?.formLabel}
            <span className={`${formData.isRequired && 'ml-0.5 text-red-500'}`}>
              &#42;
            </span>
          </label>
        }
        <textarea {...register(formData.formName)} name={formData?.formName} id={formData?.formName} cols={30} rows={10} className="bg-[var(--secondary)] p-4 w-full rounded-sm"></textarea>
        <p className="text-xs text-red-400">{errors[formData?.formName]?.message}</p>
        <p className="text-xs text-[var(--fourth)]">{helperText}</p>
      </div>
    </>
  );
}