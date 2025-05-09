import { useState } from "react";

export default function ImportarImagem() {
  const [imagem, setImagem] = useState("");
  const [imagemPreview, setImagemPreview] = useState(null);

  const handleImageChange = (e) => {
    const arquivo = e.target.files[0];
    setImagem(arquivo);

    const url = URL.createObjectURL(arquivo);
    setImagemPreview(url);
  };

  return (
    <>
      <div className="relative h-40 w-40 rounded-full bg-white border border-black overflow-hidden">
        {/* input oculto */}
        <input
          type="file"
          id="foto"
          className="hidden"
          onChange={handleImageChange}
          accept="image/*"
        />

        {/* imagem preview no centro e dentro do círculo */}
        {imagemPreview && (
          <img
            src={imagemPreview}
            alt="Preview"
            className="absolute inset-0 w-full h-full object-cover rounded-full"
          />
        )}

        {/* botão de upload (ícone) */}
        <label
          htmlFor="foto"
          className="absolute z-10 bottom-1 right-2 bg-[#FFDC6B] text-[#D97C2B] p-1 rounded-full hover:scale-110 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </label>
      </div>
    </>
  );
}
