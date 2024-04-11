export class TarefaModel {
    id: number = 0;
    titulo: string = "";
    data: Date = new Date();
    ativo: boolean = true;
    concluida?: boolean = false;
}