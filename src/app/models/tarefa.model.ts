export class TarefaModel {
    titulo: string = "";
    data: Date = new Date();
    ativo: boolean = true;
    concluida?: boolean = false;
}