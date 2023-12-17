import { Trash2 } from "lucide-react";

export default function DeleteProduct () {
    return (
        <button type="button" className="p-3 transition ease-in delay-250 hover:bg-red-500 rounded">
            <Trash2 />
        </button>
    )
}

// os botões de editar e deletar podem ser feitas por um único componente