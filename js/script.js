async function iniciarCatalogo() {

    const produtos = await carregarProdutos();

    const container = document.querySelector(".produtos");

    container.innerHTML = "";

    produtos
        .sort((a, b) => a.ordem - b.ordem)
        .forEach(produto => {

            const preco =
                produto.promocao.toLowerCase() === "sim"
                    ? produto.precoPromo
                    : produto.preco;

            const card = document.createElement("div");

            card.className = "card";

            card.innerHTML = `

                <img src="${produto.foto}" alt="${produto.produto}">

                <div class="info">

                    <span>${produto.categoria}</span>

                    <h3>${produto.produto}</h3>

                    <h2>R$ ${preco.toFixed(2).replace(".", ",")}</h2>

                    <p>Material: ${produto.material}</p>

                    <p>Estoque: ${produto.estoque}</p>

                    <a
                        href="https://wa.me/5511970712851?text=${encodeURIComponent(
                            `Olá! Tenho interesse em "${produto.produto}".`
                        )}"
                        target="_blank">

                        Comprar pelo WhatsApp

                    </a>

                </div>

            `;

            container.appendChild(card);

        });

}

iniciarCatalogo();