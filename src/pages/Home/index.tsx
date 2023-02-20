import { PageContainer } from '../../styles/page';

export function Home() {
    return (
        <PageContainer className="wrapper">
            <h1>Como usar o sistema</h1>
            <hr />
            <h3>Minha lista</h3>
            <ul>
                <li>No menu <b>Minha lista</b> você encontrará todas as listar criadas</li>
                <li>Para cadastrar uma nova lista preencha o campo de texto acima da listagem e clicar no botão criar.</li>
                <li>No lado esquerdo da listagem você terá botões com setas para reordenar as listas de tarefas. Quando as setas tiverem uma cor opaca é porque você não pode alterar a posição dela.</li>
                <li>No lado direito da listagem você terá botões para executar ações referente ao item da listagem, as ações são editar, excluir e compartilhar</li>
                <li>Para excluir a lista clique no botão com o icone lixo (vermelho), uma mensagem de confirmação aparecerá e logo após confirmação a lista será excluida</li>
                <li>Para compartilhar a lista clique no botão com com o icone de compartilhar (roxo), o link irá para sua aréa de transferência</li>
                <li>Para Editar a lista clique no botão com com o icone de lápis (cinza), outra página irá abrir, no campo de texto edite o nome e clique no botão alterar</li>
            </ul>
            <hr />
            <h3>Editar lista</h3>
            <ul>
                <li>Ao clicar no botão com o icone de lápis, você entrará na edição da lista, onde poderá alterar a lista, criar, alterar, excluir, reordenar os itens e subitens</li>
                <li>No lado esquerdo da listagem você terá botões com setas para reordenar os itens e subitens. Quando as setas tiverem uma cor opaca é porque você não pode alterar a posição dela.</li>
                <li>No lado direito da listagem você terá botões para executar ações referente aos itens e subitems, as ações são editar, excluir e no caso do item cadastrar subitens.</li>
                <li>Para cadastrar um item clique no botão criar item (roxo), um modal irá abrir para você preencher os dados e criar o item.</li>
                <li>Para cadastrar um subitem clique no botão com o icone de mais junto ao item que deseja cadastrar, um modal irá abrir para você preencher os dados e criar o subitem</li>
                <li>Para excluir o item clique no botão com o icone lixo (vermelho) junto ao item, uma mensagem de confirmação aparecerá e logo após confirmação o item e os subitens deste item serão excluidos</li>
                <li>Para excluir o subitem clique no botão com o icone lixo (vermelho) junto ao subitem, uma mensagem de confirmação aparecerá e logo após confirmação o subitem será excluido</li>              
                <li>Para Editar um item clique no botão com com o icone de lápis (cinza) junto ao item, um modal irá abrir e no campo de texto edite o nome e clique em alterar</li>
                <li>Para Editar um subitem clique no botão com com o icone de lápis (cinza) junto ao subitem, um modal irá abrir e no campo de texto edite o nome e clique em alterar</li>
               
            </ul>
            <br />
            <br />
            <p><b>Observações:</b> ainda não é possível um subitem virar item, essa função ficará para a próxima versão do projeto.</p>
            <br />
            <br />
        </PageContainer>

    )
}