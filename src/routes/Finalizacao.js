import React from "react";
import imagemCompra from '../images/purchase.png';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Compra() {
  return (
    <div className="bg-gray-200">
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white w-[20rem] h-[25rem] rounded-lg flex flex-col justify-center items-center space-y-9">
          <div className="text-center">
            <h1 className="font-medium text-slate-600 text-[2rem]">John Doe,</h1>
            <h2 className="font-bold text-sm text-slate-500">Sua compra no valor (valor)</h2>
            <h2 className="font-bold text-sm text-slate-500">foi finalizada com sucesso</h2>
          </div>
          <img className="w-[9rem] align-middle" src={imagemCompra} alt="teste" />
          <Link to="/">
            <Button variant="contained"
              style={{
                backgroundColor: "#ff9800",
                marginTop: "2rem",
                alignItems: "center",
              }}
            > Iniciar nova compra</Button>
          </Link>

        </div>
      </div>
    </div>

  );
}
