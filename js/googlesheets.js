const SHEET_ID = "10aYp2i52Ys9HgAKU2BJtbiJbTLx3bX1kolqOXIFUk30";
const SHEET_NAME = "Produtos";

async function carregarProdutos() {

    const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${SHEET_NAME}&tqx=out:json`;

    const response = await fetch(url);
    const text = await response.text();

    const json = JSON.parse(text.substring(47).slice(0, -2));

    const rows = json.table.rows;

    return rows.map(r => ({

        sku: r.c[0]?.v || "",

        produto: r.c[1]?.v || "",

        categoria: r.c[2]?.v || "",

        preco: Number(r.c[3]?.v || 0),

        estoque: Number(r.c[4]?.v || 0),

        descricao: r.c[5]?.v || "",

        foto: r.c[6]?.v || "",

        destaque: r.c[7]?.v || "Não",

        promocao: r.c[8]?.v || "Não",

        precoPromo: Number(r.c[9]?.v || 0),

        ativo: r.c[10]?.v || "Sim",

        ordem: Number(r.c[11]?.v || 0),

        material: r.c[12]?.v || ""

    }));

}