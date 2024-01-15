<template>
    <v-data-table>
        <thead>
            <tr>
                <th class="columTitle">
                    Título
                </th>
                <th class="columTitle">
                    Descrição
                </th>
                <th class="columTitle">
                    Status
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="task in filteredTasks" :key="task.id">
                <td class="tasksvalues">{{ task.title }}</td>
                <td class="tasksvalues">{{ task.description }}</td>
                <td class="tasksvalues">{{ task.status }}</td>
            </tr>
        </tbody>
    </v-data-table>
</template>
  
<script setup lang="ts">
import { ref, computed } from 'vue';

interface Task {
    id: number;
    title: string;
    description: string;
    status: 'concluída' | 'pendente';
}

const filterStatus = ref<string>('');

const tasks = ref<Task[]>([
    { id: 1, title: 'Desenvolver página de perfil do usuário', description: 'Criar uma página de perfil do usuário com informações pessoais e histórico de atividades.', status: 'pendente' },
    { id: 2, title: 'Implementar sistema de autenticação', description: 'Adicionar autenticação de usuário usando JWT para proteger rotas sensíveis.', status: 'pendente' },
    { id: 3, title: 'Criar API para obter dados do usuário', description: 'Desenvolver uma API em Node.js com TypeScript para fornecer dados do usuário para a aplicação frontend.', status: 'pendente' },
    { id: 4, title: 'Estilizar componentes com Vuetify', description: 'Aplicar estilos consistentes aos componentes usando Vuetify para melhorar a aparência geral da aplicação.', status: 'pendente' },
    { id: 5, title: 'Integrar gráficos e visualizações', description: 'Utilizar bibliotecas de gráficos (por exemplo, Chart.js) para exibir visualizações de dados na aplicação.', status: 'pendente' },
    { id: 6, title: 'Configurar banco de dados MongoDB', description: 'Criar um banco de dados MongoDB para armazenar dados da aplicação.', status: 'pendente' },
    { id: 7, title: 'Implementar funcionalidade de busca', description: 'Adicionar uma funcionalidade de busca para permitir que os usuários encontrem informações específicas na aplicação.', status: 'pendente' },
    { id: 8, title: 'Otimizar desempenho da aplicação', description: 'Identificar e corrigir pontos de gargalo para melhorar o desempenho geral da aplicação.', status: 'pendente' },
    { id: 9, title: 'Configurar ambiente de produção', description: 'Preparar a aplicação para implantação em um ambiente de produção, configurando variáveis de ambiente e otimizando para produção.', status: 'pendente' },
    { id: 10, title: 'Adicionar suporte a internacionalização', description: 'Permitir que os usuários escolham entre diferentes idiomas na aplicação.', status: 'pendente' },
    { id: 11, title: 'Implementar upload de arquivos', description: 'Adicionar a capacidade de fazer upload de arquivos na aplicação, como imagens de perfil.', status: 'pendente' },
    { id: 12, title: 'Integrar serviço de e-mail para notificações', description: 'Configurar um serviço de e-mail para enviar notificações e e-mails aos usuários.', status: 'pendente' },
    { id: 13, title: 'Adicionar autenticação social', description: 'Permitir que os usuários façam login usando contas de mídias sociais, como Google ou Facebook.', status: 'pendente' },
    { id: 14, title: 'Implementar sistema de comentários', description: 'Adicionar a capacidade de os usuários deixarem comentários em determinadas seções da aplicação.', status: 'pendente' },
    { id: 15, title: 'Configurar CI/CD', description: 'Implementar integração contínua e implantação contínua para facilitar o desenvolvimento e a implantação.', status: 'pendente' },
    { id: 16, title: 'Adicionar funcionalidade de favoritos', description: 'Permitir que os usuários marquem itens como favoritos para acesso rápido.', status: 'pendente' },
    { id: 17, title: 'Criar painel administrativo', description: 'Desenvolver um painel administrativo para gerenciar usuários, conteúdo e configurações.', status: 'pendente' },
    { id: 18, title: 'Integrar sistema de pagamentos', description: 'Adicionar a capacidade de os usuários realizarem pagamentos na aplicação.', status: 'pendente' },
    { id: 19, title: 'Melhorar experiência do usuário', description: 'Realizar melhorias na interface do usuário para proporcionar uma experiência mais intuitiva.', status: 'pendente' },
    { id: 20, title: 'Implementar sistema de notificações em tempo real', description: 'Adicionar notificações em tempo real para manter os usuários informados sobre eventos importantes.', status: 'pendente' },
    { id: 21, title: 'Configurar logging e monitoramento', description: 'Implementar logging e monitoramento para rastrear erros e métricas de desempenho.', status: 'pendente' },
    { id: 22, title: 'Criar documentação do projeto', description: 'Documentar o código-fonte, APIs e processos para facilitar o entendimento e a manutenção.', status: 'pendente' },
    { id: 23, title: 'Realizar testes de unidade e integração', description: 'Desenvolver e executar testes para garantir a qualidade do código e a integridade das funcionalidades.', status: 'pendente' },
    { id: 24, title: 'Implementar controle de acesso', description: 'Adicionar controle de acesso para garantir que apenas usuários autorizados possam acessar determinadas áreas ou funcionalidades.', status: 'pendente' },
    { id: 25, title: 'Preparar para escalabilidade', description: 'Avaliar e ajustar a aplicação para lidar com um aumento significativo no número de usuários e dados.', status: 'pendente' },
    // Adicione mais tarefas conforme necessário
]);

//const filterOptions = ref(['Todos', 'Pendente', 'Concluída']);

const filteredTasks = computed(() => {
    if (!filterStatus.value || filterStatus.value === 'Todos') {
        return tasks.value;
    } else {
        return tasks.value.filter(task => task.status.toLowerCase() === filterStatus.value.toLowerCase());
    }
});
</script>
  
<style scoped>
.columTitle {
    min-width: 100px;
    background-color: rgba(255, 0, 200, 0.39);
    font-size: larger;
    line-height: 1.5;
    color: white;
    text-shadow: 1px 2px 1px rgb(87, 87, 87);
    border-radius: 0.25rem;
    border: 1px solid rgba(0, 0, 0, 0.363);
}

.tasksvalues {
    background-color: rgba(255, 0, 200, 0.11);
    line-height: 1.5;
    padding: 2px;
    transition: 0.4s;
    text-align: center;
}
.tasksvalues:hover {
    background-color: rgb(255, 0, 200);
    transition: 0.4s;
}
</style>

  