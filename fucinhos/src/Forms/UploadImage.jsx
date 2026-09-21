import React from 'react'

export const UploadImage = ({foto, onChange}) => {
  return (
    <div className="flex flex-col gap-2">
        <label className='font-fredoka my-2 font-semibold'>
            Foto do pet (opcional)
        </label>

        <label htmlFor='foto'>
        {foto ? (
                    <img
                    src={URL.createObjectURL(foto)}
                    alt='Pet'
                    className='w-40 h-40 rounded-2xl object-cover'
                    />
                ): (
                    <span>Clique para selecionar uma foto</span>
                )}
        </label>

        <input type="file" id='foto' accept='image/*' onChange={onChange} />
    </div>
  )
}
