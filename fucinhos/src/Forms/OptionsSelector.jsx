import React from 'react'

export const OptionsSelector = ({label, options, value, onChange, erro, tipoPlano}) => {
  return (
    <div className="flex flex-col gap-2 text-sm md:text-base">
      <label className="font-fredoka">{label}</label>
      <div className="flex  flex-wrap md:flex-nowrap gap-3 md:gap-5">
        {options?.map((option) => (
          <button
            type="button"
            key={option.value}
            onClick={() => onChange(option.value)}
            className={` ${value === option.value ? "bg-roxo/35 border border-roxo text-roxo-escuro/90" : "bg-white text-black border"} flex items-center font-nunito px-4 py-2 rounded-4xl gap-3 md:gap-6 ${erro ? "border-red-400" : "border-gray-300"}`}
          >
            {option.icon && option.icon}
            {option.value}
            {option.mensal && (
              <span>
                {tipoPlano === "mensal"
                  ? `R$ ${option.mensal.toFixed(2)}`
                  : `R$ ${option.anual.toFixed(2)}`}
              </span>
            )}
          </button>
        ))}
      </div>
      {erro && (
        <span className="text-red-500 text-sm font-nunito font-semibold">
          Selecione um campo
        </span>
      )}
    </div>
  );
}
