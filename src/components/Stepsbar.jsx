import { useLocation } from "react-router-dom";
import steps from "../db/steps.json";
import CheckRightIcon from "../icons/CheckRightIcon.svg";

const Stepsbar = () => {

  let location = useLocation();

  return (
    <>
      <ul className="flex gap-4 mb-12">
        {
          steps.map(step => {
            return (
              <li key={step.id} className="flex items-center gap-2 after:block after:w-16 after:h-1 after:bg-[var(--tertiary)] last:after:w-0">
                {
                  localStorage.getItem(`step${step.id}IsFinished`) && location.pathname !== step.path_name ?
                    <p className="bg-[var(--primary-color)] border-[var(--primary-color)] font-bold border-4 rounded-full w-14 h-14 flex justify-center items-center">
                      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30 9L13.5 25.5L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </p>
                    :
                    <p className={`${location.pathname == step.path_name ? 'text-[var(--primary-color)] border-[var(--primary-color)]' : 'text-[var(--tertiary)] border-[var(--tertiary)]'} font-bold border-4 rounded-full w-14 h-14 text-center leading-[3rem]`}>
                      {step.id}
                    </p>
                }
                <div>
                  <p className={`${location.pathname == step.path_name && 'text-[var(--primary-color)]'} font-bold`}>{step.step}</p>
                  <p className="text-xs">{step.step_title}</p>
                </div>
              </li>
            )
          })
        }
      </ul>
    </>
  );
}

export default Stepsbar;