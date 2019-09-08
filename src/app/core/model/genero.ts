import { Copy } from './../util/copy.util';
import { EntidadeAuditada } from 'mdias-componentes';

export class Genero extends EntidadeAuditada {
    public id: number;
    public name: string;

    constructor(init: Partial<Genero> = null) {
        super();
        if (init) {
            Copy.deep(this, init);
        }
    }
}
